module.exports = (model, Schema) => {
    const Gym = new Schema({
        type: String,
        quantity: Number,
        weight: Number,
        comment: String
    })
    return model('Gym', Gym)
}