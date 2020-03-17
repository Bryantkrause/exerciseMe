module.exports = (model, Schema) => {
    const Gym = new Schema({
        type: { type: Schema.Types.ObjectId, ref: 'Exercise' },
        quantity: Number,
        weight: Number,
        member: { type: Schema.Types.ObjectId, ref: 'User' },
        comment: String
    })
    return model('Gym', Gym)
}