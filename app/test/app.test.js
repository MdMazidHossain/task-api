const request = require('supertest');
const express = require('express');

const app = express();
app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.post('/api/tasks', (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }
    res.status(201).json({ success: true, data: { id: 1, title } });
});

describe('📝 Task API Tests', () => {
    
    test('✅ GET /health returns 200', async () => {
        const response = await request(app).get('/health');
        expect(response.status).toBe(200);
        expect(response.body.status).toBe('ok');
    });

    test('✅ POST /api/tasks creates task', async () => {
        const response = await request(app)
            .post('/api/tasks')
            .send({ title: 'Test Task' });
        expect(response.status).toBe(201);
        expect(response.body.data.title).toBe('Test Task');
    });

    test('❌ POST /api/tasks without title returns 400', async () => {
        const response = await request(app)
            .post('/api/tasks')
            .send({});
        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Title is required');
    });
});
