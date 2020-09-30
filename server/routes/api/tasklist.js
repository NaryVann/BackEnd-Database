const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()

//Get Tasks
router.get('/', async (req, res) => {
    const tasklist = await loadTasksCollection()
    res.send(await tasklist.find({}).toArray())
})

//Add Task
router.post('/', async(req, res) => {
    const tasklist = await loadTasksCollection()
    console.log(req.body.task)
    await tasklist.insertOne({
        task: req.body.task,
        dateCreated: new Date()
    })
    res.status(201).send()
})

// Delete Task
router.delete('/:id', async(req, res) => {
    const tasklist = await loadTasksCollection()
    await tasklist.deleteOne({_id: new mongodb.ObjectID(req.params.id)})
    res.status(200).send({})
})

async function loadTasksCollection(){
    const client = await mongodb.MongoClient.connect("mongodb+srv://nary:naryvann123@naryclouddb.9huek.mongodb.net/List?retryWrites=true&w=majority", {useNewUrlParser: true})
    return client.db('List').collection("tasks")
}

module.exports = router