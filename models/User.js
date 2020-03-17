module.exports = (model, Schema) => {
    const User = new Schema({
        user: String,
        token: String,
        quantity: Number,
        weight: Number,
        comment: String
    })
    return model('User', User)
}