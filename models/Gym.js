module.exports = (model, Schema) => {
    const Gym = new Schema({
        type: String,
        quantity: Number,
        weight: Number,
        member: { type: Schema.Types.ObjectId, ref: User },
        comment: String
    })
    return model('Gym', Gym)
}