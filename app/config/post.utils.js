class PostUtils {
    static sqlCreatePost(data) {
        return `INSERT INTO Posts (userId, eventId, pictureUrl, pictureRatio)
                Values ('${data.userId}', ${data.eventId}, "${data.pictureUrl}", ${data.pictureRatio})`
    }

    static sqlGetAllPost(eventId) {
        return `SELECT *
                FROM Posts
                         NATURAL JOIN Users
                WHERE eventId = ${eventId}
                ORDER BY publicationDate DESC`
    }


    static sqlReactPost(postId) {
        return `UPDATE Posts
                SET countReact = countReact + 1
                WHERE postId = ${postId}`
    }

    static sqlUnReactPost(postId) {
        return `UPDATE Posts
                SET countReact = countReact - 1
                WHERE postId = ${postId}`
    }

    static sqlSetPicture(data) {
        return `UPDATE Posts
                SET pictureUrl = "${data.pictureUrl}"
                WHERE postId = ${data.postId}`
    }

    static sqlDeletePost(postId) {
        return `DELETE
                FROM Posts
                WHERE postId = ${postId}`
    }
}

module.exports = PostUtils;