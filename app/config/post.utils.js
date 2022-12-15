class PostUtils {
    static sqlCreatePost(data){
        return `INSERT INTO posts (userId, categorieId, pictureUrl) Values ('${data.userId}','${data.categorieId}','${data.pictureUrl}')`
    }

    static sqlGetPostById(id){
        return `SELECT * FROM posts NATURAL JOIN users WHERE postId = ${id}`
    }

    static sqlGetAll(){
        return `SELECT * FROM posts NATURAL JOIN users`
    }

    static sqlCommentPost(postId) {
        return `UPDATE posts SET countComment = countComment + 1 WHERE postId =  ${postId}`
    }

    static sqlDeleteCommentPost(postId) {
        return `UPDATE posts SET countComment = countComment - 1 WHERE postId =  ${postId}`
    }
    
    static sqlLikePost(postId) {
        return `UPDATE posts SET countLike = countLike + 1 WHERE postId =  ${postId}`
    }

    static sqlDislikePost(postId) {
        return `UPDATE posts SET countLike = countLike - 1 WHERE postId =  ${postId}`
    }

    static sqlDelete(id) {
        return `DELETE FROM posts WHERE postId = ${id}`
    }
}

module.exports = PostUtils;