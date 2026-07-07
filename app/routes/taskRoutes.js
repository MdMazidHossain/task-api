const express = require('express');
const router = express.Router();
const {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
} = require('../controllers/taskController');

// 📌 GET /api/tasks - সব টাস্ক দেখায়
// 📌 POST /api/tasks - নতুন টাস্ক তৈরি করে
router.route('/')
    .get(getTasks)
    .post(createTask);

// 📌 GET /api/tasks/:id - একটি টাস্ক দেখায়
// 📌 PUT /api/tasks/:id - টাস্ক আপডেট করে
// 📌 DELETE /api/tasks/:id - টাস্ক ডিলিট করে
router.route('/:id')
    .get(getTask)
    .put(updateTask)
    .delete(deleteTask);

module.exports = router;
