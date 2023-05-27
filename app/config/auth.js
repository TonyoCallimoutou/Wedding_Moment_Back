// const argon = require('argon2');
// const jwt = require("jsonwebtoken");
const admin = require("firebase-admin");
const {getAuth} = require("firebase-admin/auth");

require('dotenv').config();

admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_JSON_KEY)),
});

exports.checkAuth = (req, res, next) => {
    if (req.headers.authorization) {
        let token = req.headers.authorization.split(' ')[1];
        token = token.slice(1, -1);
        getAuth()
          .verifyIdToken(token)
          .then((decodedToken) => {
              if (decodedToken.email_verified) {
                next();
              }
              else {
                console.log("Unauthorized, email not verified")
                res.status(403).send('Unauthorized')
              }
          })
          .catch((error) => {
              console.log(error)
              res.status(403).send('Unauthorized')
          });
    } else {
        res.status(403).send('Unauthorized')
    }
}

exports.checkAuthAndAdmin = (req, res, next) => {
    if (req.headers.authorization) {
        let token = req.headers.authorization.split(' ')[1];
        token = token.slice(1, -1);
        getAuth()
          .verifyIdToken(token)
          .then((decodedToken) => {
              if (decodedToken.uid === req.body.userId || decodedToken.uid === req.params.id) {
                if (decodedToken.email_verified) {
                  next();
                }
                else {
                  console.log("Unauthorized, email not verified")
                  res.status(403).send('Unauthorized')
                }
              }
              else {
                  console.log("Unauthorized, not admin")
                  res.status(403).send('Unauthorized')
              }
          })
          .catch((error) => {
              console.log(error)
              res.status(403).send('Unauthorized')
          });
    } else {
        res.status(403).send('Unauthorized')
    }
}