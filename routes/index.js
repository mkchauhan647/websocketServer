const authRouter = require('./auth');




module.exports = (app)=> {
    // authRouter
    app.use('/auth', authRouter);
}