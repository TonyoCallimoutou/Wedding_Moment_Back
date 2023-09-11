class PostUtils {
    static sqlCreatePost(data) {
        return `INSERT INTO Posts (userId, eventId, pictureUrl, pictureRatio)
                Values ('${data.userId}', ${data.eventId}, "${data.pictureUrl}", ${data.pictureRatio})`
    }

    static sqlGetAllPost(eventId, dateLastPost) {
        return `SELECT *
                FROM Posts
                    NATURAL JOIN Users
                WHERE eventId = ${eventId}
                AND isReported = 0
                AND pictureUrl <> ''
                AND publicationDate < IF("${dateLastPost}" <> '', "${dateLastPost}", NOW())
                ORDER BY publicationDate DESC
                LIMIT 10`
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

    static sqlReportedPost(data) {
        return `INSERT INTO Report (postId, userId, type, reason)
                Values (${data.postId}, "${data.userId}", "${data.type}", "${data.reason}")`
    }

    static sqlDeletePost(postId) {
        return `DELETE
                FROM Posts
                WHERE postId = ${postId}`
    }
}

module.exports = PostUtils;