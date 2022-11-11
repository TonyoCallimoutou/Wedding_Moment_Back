class UserUtils {
    static sqlCreateUser(data){
        return `INSERT INTO users (userid, email, userName, photoUrl, emailVerified) Values ('${data.userId}','${data.email}','${data.userName}','${data.photoUrl}',${data.emailVerified})`
    }

    static sqlGetUserById(id) {
        return `SELECT * FROM users WHERE userId = ${id}`
    }

    static sqlGetAll() {
        return `SELECT * FROM Users`
    }

    static sqlGetLikesPictures(id) {
        return `SELECT pictureId FROM UsersLikesPictures WHERE userId = "${id}"`
    }

    static sqlAddLikesPicture(userId, pictureId) {
        return `INSERT INTO UsersLikesPictures (userId, pictureId) Values ('${userId}','${pictureId}')`
    }

    static sqlDislikesPicture(userId, pictureId) {
        return `DELETE FROM UsersLikesPictures WHERE userId = '${userId}' AND pictureId = '${pictureId}'`
    }

    static sqlDelete(id) {
        return `DELETE FROM users WHERE userId = ${id}`
    }
}

module.exports = UserUtils;