class PostUtils {
    static sqlCreatePost(data){
        return `INSERT INTO posts (userId, eventId, pictureUrl) Values ('${data.userId}',${data.eventId},"${data.pictureUrl}")`
    }

    static sqlGetAllPost(eventId){
        return `SELECT * FROM posts NATURAL JOIN users WHERE eventId = ${eventId}`
    }

    
    static sqlReactPost(postId) {
        return `UPDATE posts SET countReact = countReact + 1 WHERE postId =  ${postId}`
    }

    static sqlUnReactPost(postId) {
        return `UPDATE posts SET countReact = countReact - 1 WHERE postId =  ${postId}`
    }

    static sqlSetPicture(data) {
        return `UPDATE posts SET pictureUrl = "${data.pictureUrl}" WHERE postId =  ${data.postId}`
    }

    static sqlDeletePost(postId) {
        return `DELETE FROM posts WHERE postId = ${postId}`
    }
}

module.exports = PostUtils;