const { Exercise } = require('../models')

module.exports = app => {

    app.post('/exercise', (req, res) => {
        Exercise.create(req.body)
            .then(response => res.json(response))
            .catch(e => console.error(e))
    })

    app.get('/exercise', (req, res) => {
        Exercise.find()
            .then(response => res.json(response))
            .catch(e => console.error(e))
    })
    // // find an exercise by name
    app.get('/exercises/:name', (req, res) => {
        Exercise.findOne({ name: req.params.name })
            .then(response => res.json(response))
            .catch(e => console.error(e))
    })

        // find an exercise by ID
        app.get('/exercise/:id', (req, res) => {
            console.log(req.body)
            console.log(req.params.id)
            Exercise.findOne({ _id: req.params.id })
                .then(response => res.json(response))
                .catch(e => console.error(e))
        })

    app.delete('/exercise/:id', (req, res) => {
        Exercise.deleteOne({ _id: req.params.id }) //get the row of the task of the ID
            .then(response => res.json(response))
            .catch(e => console.error(e))
    })

    app.put('/exercise/:id', (req, res) => {
        console.log(req.body)
        Exercise.updateOne({ _id: req.params.id }, { $set: req.body })
            .then(response => res.json(response))
            .catch(e => console.error(e))
    })
}