class UserUtils {
    static sqlCreateUser(data){
        return `INSERT INTO users (userid, roleId,email, userName, photoUrl, emailVerified) Values ('${data.userId}','${data.roleId}','${data.email}','${data.userName}','${data.photoUrl}',${data.emailVerified})`
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

    static sqlGetLikesPosts(id) {
        return `SELECT postId FROM UsersLikesPosts WHERE userId = "${id}"`
    }

    static sqlAddLikesPost(userId, postId) {
        return `INSERT INTO UsersLikesPosts (userId, postId) Values ('${userId}','${postId}')`
    }

    static sqlDislikesPost(userId, postId) {
        return `DELETE FROM UsersLikesPosts WHERE userId = '${userId}' AND postId = '${postId}'`
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