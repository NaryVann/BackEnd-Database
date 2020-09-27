const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get Tasks
router.get('/', async (req, res) => {
    const tasklist = await loadTasksCollection();
    res.send(await tasklist.find({}).toArray());
})

//Add Task
router.post('/', async(req, res) => {
    const tasklist = await loadTasksCollection();

    console.log(req.body.task);
    await tasklist.insertOne({
        task: req.body.task,
        dateCreated: new Date(),
    });

    res.status(201).send();
})

// Delete Task
router.delete('/:id', async(req, res) => {
    const tasklist = await loadTasksCollection();
    await tasklist.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
})

async function loadTasksCollection(){
    const client = await mongodb.MongoClient.connect('mongo "mongodb+srv://naryclouddb.9huek.mongodb.net/mytaskList" --username nary', {useNewUrlParser: true});
    return client.db('my_tasklist').collection("mytasks");
}


module.exports = router;