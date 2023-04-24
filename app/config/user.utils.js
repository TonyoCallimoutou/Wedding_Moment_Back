class UserUtils {
    static sqlCreateUser(data) {
        return `INSERT INTO users (userId, email, userName, photoUrl, emailVerified)
                Values ('${data.userId}', '${data.email}', '${data.userName}', '${data.photoUrl}',
                        ${data.emailVerified})`
    }

    static sqlSetUserVerified(userId) {
        return `UPDATE users
                set emailVerified = true
                WHERE userId = '${userId}'`
    }

    static sqlSetPhotoUrl(userId, photoUrl) {
        return `UPDATE users
                set photoUrl = '${photoUrl}'
                WHERE userId = '${userId}'`
    }

    static sqlSetUserName(data) {
        return `UPDATE users
                set userName = "${data.userName}"
                WHERE userId = "${data.userId}"`
    }

    static sqlGetUserById(userId) {
        return `SELECT *
                FROM users
                WHERE userId = '${userId}'`
    }


    static sqlGetReactPosts(userId) {
        return `SELECT postId
                FROM UsersReactPosts
                WHERE userId = "${userId}"`
    }

    static sqlAddReactPost(data) {
        return `INSERT INTO UsersReactPosts (userId, postId, reaction)
                Values ('${data.userId}', ${data.postId}, "${data.reaction}")`
    }

    static sqlUnReactPost(userId, postId) {
        return `DELETE
                FROM UsersReactPosts
                WHERE userId = '${userId}'
                  AND postId = '${postId}'`
    }

    static sqlGetNotification(userId) {
        return `Select *
                from posts
                         join UsersReactPosts on posts.postId = UsersReactPosts.postId
                where posts.userId = '${userId}';`
    }

    static sqlDeleteUser(userId) {
        return `DELETE
                FROM users
                WHERE userId = '${userId}'`
    }
}

module.exports = UserUtils;