const {model, Schema } = require('mongoose')

module.exports = {
    Gym: require('./Gym.js')(model, Schema),
    Exercise: require('./Exercise.js')(model, Schema),
    User: require('./User.js')(model, Schema)
}