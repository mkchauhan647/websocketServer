const admin = require('firebase-admin');
class Middleware{
    async checkUser(req, res, next){
        const idToken = req.headers.authorization;
        try {
            const decodedToken = await admin.auth().verifyIdToken(idToken);
            const uid = decodedToken.uid;
            req.uid = uid;
            next();
        } catch (error) {
            res.status(401).json({message: "Unauthorized access"});
        }
    }
}


module.exports = new Middleware();