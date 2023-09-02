const sql = require("./db.js");
const userUtils = require("../config/user.utils.js");

// constructor
const User = function (user) {
    this.userId = user.userId;
    this.email = user.email;
    this.userName = user.userName;
    this.photoUrl = user.photoUrl;
    this.emailVerified = user.emailVerified;
};


// Create and Save a new User
User.createUser = (newUser, result) => {
    sql.query(userUtils.sqlCreateUser(newUser), (err, res) => {
        if (err) {
            console.log("error createUser: ", err);
            result(err, null);
            return;
        }

        result(null, {userId: res.insertId, ...newUser});
    });
};

User.setUserVerified = (userId, result) => {
    sql.query(userUtils.sqlSetUserVerified(userId), (err, res) => {
        if (err) {
            console.log("error setUserVerified: ", err);
            result(err, null);
            return;
        }

        result(null, {userId});
    });
}

// Set User
User.setPhotoUrl = (userId, photoUrl, result) => {
    sql.query(userUtils.sqlSetPhotoUrl(userId, photoUrl), (err, res) => {
        if (err) {
            console.log("error setPhotoUrl: ", err);
            result(err, null);
            return;
        }

        result(null, {userId});
    });
};

// Set User
User.setUserName = (data, result) => {
    sql.query(userUtils.sqlSetUserName(data), (err, res) => {
        if (err) {
            console.log("error setUserName: ", err);
            result(err, null);
            return;
        }

        result(null, data);
    });
};

// Retrieve user by id.
User.getUserById = (id, result) => {
    sql.query(userUtils.sqlGetUserById(id), (err, res) => {
        if (err) {
            console.log("error getUserById: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            result(null, res[0]);
            return;
        }
        result(null);
    });
};

// Retrieve listOfReactPost
User.getReactPosts = (id, result) => {
    sql.query(userUtils.sqlGetReactPosts(id), (err, res) => {
        if (err) {
            console.log("error getReactPosts: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            result(null, res);
            return;
        }

        result({kind: "not_found"}, null);
    });
};

// Add posts in listOfReactPost
User.addReactPost = (data, result) => {
    sql.query(userUtils.sqlAddReactPost(data), (err, res) => {
        if (err) {
            console.log("error addReactPost: ", err);
            result(err, null);
            return;
        }

        result(null, {id: res.insertId, ...data.postId});
    });
};

// Delete posts in listOfReactPost
User.unReactPost = (userId, postId, result) => {
    sql.query(userUtils.sqlUnReactPost(userId, postId), (err, res) => {
        if (err) {
            console.log("erreur: ", err);
            result(err, null);
            return;
        }

        result(null, {id: res.insertId, ...postId});
    });
};

// Retrieve Notification
User.getNotification = (id, result) => {
    sql.query(userUtils.sqlGetNotification(id), (err, res) => {
        if (err) {
            console.log("error getNotification: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            result(null, res);
            return;
        }

        result({kind: "not_found"}, null);
    });
};


// Delete User by Id
User.deleteUser = (id, result) => {
    sql.query(userUtils.sqlDeleteUser(id), (err, res) => {
        if (err) {
            console.log("error deleteUser: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({kind: "not_found"}, null);
            return;
        }

        result(null, res);
    });
};

module.exports = User;