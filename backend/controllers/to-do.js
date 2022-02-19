const mongoose = require('mongoose');
const toDoModel = require('../models/to-do');

module.exports.getToDoList = (req, res) => {
    toDoModel.find({})
    .then(toDo => res.send({ data: toDo }))
    .catch(err => res.status(500).send({ message: `message: 'Произошла ошибка!'` }));
}

module.exports.createToDo = (req, res) => {
    // const { ToDo } = req.body;
    // console.log(req.body);
    const toDo = req.body.toDo;
    const data = req.body;
    // console.log(toDo);
    // console.log(req.body);
    // ToDo.create({ ToDo })
    toDoModel.create({toDo: data.toDo, creator: data.creator})
        .then((card) => {
            res.send(card);
    })
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
        });
}

module.exports.findToDo = (req, res) => {
    toDoModel.findById(req.params.id)
    .then(ToDo => res.send({ data: ToDo }))
    .catch(err => res.status(500).send({ message: `message: 'Произошла ошибка!'` }));
}

module.exports.patchToDo = (req, res) => {
    toDoModel.findByIdAndUpdate(req.params.id, req.body.toDo, {
        new: true,
        runValidators: true,
        upsert: false,
    })
    .then(ToDo => res.send({ data: ToDo }))
    .catch(err => res.status(500).send({ message: `message: 'Произошла ошибка'` }));
}

module.exports.completeToDo = (req, res) => {
    toDoModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        upsert: false,
    })
    .then(ToDo => res.send({ data: ToDo }))
    .catch(err => res.status(500).send({ message: `message: 'Произошла ошибка'` }));
}

module.exports.deleteToDo = (req, res) => {
    toDoModel.findByIdAndDelete(req.params.id)
    .then(ToDo => res.send({ data: ToDo }))
    .catch(err => res.status(500).send(err));
}