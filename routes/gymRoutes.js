const { Gym, Exercise, User } = require('../models')

module.exports = app => {

    app.post('/gym', (req, res) => {
        Gym.create(req.body)
            .then(response => res.json(response))
            .catch(e => console.error(e))
    })

    app.post('/gyms', (req, res) => {
        Gym.create(req.body)
        .then(({_id})=> {
            Exercise.updatedOne({_id: req.body.})
        })
            .then(response => res.json(response))
            .catch(e => console.error(e))
    })

    app.get('/gyms', (req, res) => {
        Gym.find()
            .then(response => res.json(response))
            .catch(e => console.error(e))
    })
    // find an exercise by name
    app.get('/gyms/:name', (req, res) => {
        Gym.findOne({ name: req.params.name })
        .populate('users')
        .populate('exercises')
            .then(response => res.json(response))
            .catch(e => console.error(e))
    })

    app.delete('/gyms/:id', (req, res) => {
        Gym.deleteOne({ _id: req.params.id }) //get the row of the task of the ID
            .then(response => res.json(response))
            .catch(e => console.error(e))
    })

    app.put('/gyms/:id', (req, res) => {
        Gym.updatedOne({ _id: req.params.id }, { $set: req.body })
            .then(response => res.json(response))
            .catch(e => console.error(e))
    })
}