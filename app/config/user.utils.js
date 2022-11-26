class UserUtils {
    static sqlCreateUser(data){
        return `INSERT INTO users (userid, email, userName, photoUrl, emailVerified) Values ('${data.userId}','${data.email}','${data.userName}','${data.photoUrl}',${data.emailVerified})`
    }

    static sqlSetPhotoUrl(userId, photoUrl){
        return `UPDATE users set photoUrl = '${photoUrl}' WHERE userId ='${userId}'`
    }

    static sqlGetUserById(id) {
        return `SELECT * FROM users WHERE userId = '${id}'`
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

    static sqlGetLikesComments(id) {
        return `SELECT commentId FROM UsersLikesComments WHERE userId = "${id}"`
    }
    
    static sqlAddLikesComment(userId, commentId) {
        return `INSERT INTO UsersLikesComments (userId, commentId) Values ('${userId}','${commentId}')`
    }

    static sqlDislikesComment(userId, commentId) {
        return `DELETE FROM UsersLikesComments WHERE userId = '${userId}' AND commentId = '${commentId}'`
    }

    static sqlDelete(id) {
        return `DELETE FROM users WHERE userId = '${id}'`
    }
}

module.exports = UserUtils;