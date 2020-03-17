module.exports = (model, Schema) => {
    const Exercise = new Schema({
        name: String,
        comment: String
    })
    return model('Exercise', Exercise)
}