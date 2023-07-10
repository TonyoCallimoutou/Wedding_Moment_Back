// const argon = require('argon2');
// const jwt = require("jsonwebtoken");
const admin = require("firebase-admin");
const {getAuth} = require("firebase-admin/auth");
const {getEventById} = require("../model/events.model.js");

require('dotenv').config();

admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_JSON_KEY)),
});

exports.getUserId = (req, res) => {
  return new Promise((resolve, reject) => {
    if (req.headers.authorization) {
      let token = req.headers.authorization.split(' ')[1];
      getAuth()
        .verifyIdToken(token)
        .then((decodedToken) => {
          req.body.userId = decodedToken.uid;
          resolve();
        })
        .catch((error) => {
          req.body.userId = null;
          resolve();
        });
    } else {
      req.body.userId = null;
      resolve();
    }
  });
}

exports.checkAuth = (req, res, next) => {
  if (req.headers.authorization) {
    let token = req.headers.authorization.split(' ')[1];
    getAuth()
      .verifyIdToken(token)
      .then((decodedToken) => {
        if (decodedToken.email_verified) {
          next();
        }
        else {
          console.log("Unauthorized, email not verified : " + decodedToken.uid)
          res.status(403).send('Unauthorized, email not verified')
        }
      })
      .catch((error) => {
        console.log(error)
        res.status(403).send(error)
      });
  } else {
    res.status(403).send('Unauthorized')
  }
}

exports.checkAuthAndAdmin = (req, res, next) => {
  if (req.headers.authorization) {
    let token = req.headers.authorization.split(' ')[1];
    getAuth()
      .verifyIdToken(token)
      .then((decodedToken) => {
        if (decodedToken.uid === req.body.userId || decodedToken.uid === req.params.id) {
          if (decodedToken.email_verified) {
            next();
          }
          else {
            console.log("Unauthorized, email not verified : "+ decodedToken.uid)
            res.status(403).send('Unauthorized, email not verified')
          }
        }
        else {
          console.log("Unauthorized, not admin : "+ decodedToken.uid)
          res.status(403).send('Unauthorized, not admin')
        }
      })
      .catch((error) => {
        console.log(error)
        res.status(403).send(error)
      });
  } else {
    res.status(403).send('Unauthorized')
  }
}

exports.checkAuthAndAdminOfEvent = (req, res, next) => {
  if (req.headers.authorization) {
    let token = req.headers.authorization.split(' ')[1];
    getAuth()
      .verifyIdToken(token)
      .then((decodedToken) => {

        let eventId = req.params.id;
        const userId = decodedToken.uid;

        if(eventId) {
          getEventById(eventId, userId, (err, data) => {
            if (data) {
              if (data.userId === userId) {
                next();
              } else {
                console.log("Unauthorized, not admin of Event, User : " + decodedToken.uid + " Event : " + eventId)
                res.status(403).send('Unauthorized, not admin of Event')
              }
            }
          });
        }
        else {
          console.log("Unauthorized, no EventId found")
          res.status(403).send('Unauthorized, no id of Event')
        }
      });
  } else {
    res.status(403).send('Unauthorized')
  }
}