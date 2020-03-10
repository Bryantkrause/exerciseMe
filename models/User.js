module.exports = (model, Schema) => {
    const Gym = new Schema({
        user: String,
        token: String,
        quantity: Number,
        weight: Number,
        comment: String
    })
    return model('Gym', Gym)
}