const Task = require('../model/taskSchema');
const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', async(req, res)=>{
    console.log('***** Get All Tasks *****');
    let collection = await db.conn.collection('tasks');
    let result = await collection.find({});

    res.send(result).status(200);
});

router.post('/newtask', (req, res)=>{
    console.log('***** Add new Tasks *****');
    const task = new Task({
        task_name: req.body.task_name,
        task_description: req.body.task_description,
        task_status: req.body.task_status
    });

    task.save()
        .then(() => res.json(task))
        .catch(err => res.status(500).json({error: err.message}));
})