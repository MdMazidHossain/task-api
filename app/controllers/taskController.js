const Task = require('../models/Task');

// 📌 GET: সব টাস্ক দেখায়
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.json({ success: true, count: tasks.length, data: tasks });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// 📌 GET: একটি নির্দিষ্ট টাস্ক দেখায়
exports.getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ success: false, error: 'Task not found' });
        }
        res.json({ success: true, data: task });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// 📌 POST: নতুন টাস্ক তৈরি করে
exports.createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ success: true, data: task });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// 📌 PUT: টাস্ক আপডেট করে
exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!task) {
            return res.status(404).json({ success: false, error: 'Task not found' });
        }
        res.json({ success: true, data: task });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// 📌 DELETE: টাস্ক ডিলিট করে
exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ success: false, error: 'Task not found' });
        }
        res.json({ success: true, data: {} });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
