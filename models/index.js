const {model, Schema } = require('mongoose')

module.exports = {
    Gym: require('./Gym.js')(model, Schema)
}