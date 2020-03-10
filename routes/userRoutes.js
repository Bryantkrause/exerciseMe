const {User } = require('../models')

module.exports = app => {
    app.post('/users', (req, res) =>{
        User.create(req.body)
        .then(response => res.json(response))
        .catch(e => console.error(e))
    })
    app.get('/users', (req, res) =>{
        User.find()
        .then(response => res.json(response))
        .catch(e => console.error(e))
    })
    app.delete('/users/:id', (req, res) =>{
        User.deleteOne({_id: req.params.id}) //get the row of the task of the ID
        .then( response => res.json(response))
        .catch(e => console.error(e))
    })
    app.put('/users/:id', (req, res) =>{
        User.updatedOne({_id: req.params.id}, {$set: req.body})
        .then(response => res.json(response))
        .catch(e => console.error(e))
    })
}