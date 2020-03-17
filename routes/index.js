module.exports = app => {
    require('./gymRoutes.js')(app)
    require('./userRoutes.js')(app)
    require('./exerciseRoutes.js')(app)
}