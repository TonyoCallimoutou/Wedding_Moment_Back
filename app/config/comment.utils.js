class CommentUtils {
    static sqlCreateComment(data){
        return `INSERT INTO comments (postId, userId, comment) Values (${data.postId},'${data.userId}',"${data.comment}")`
    }

    static sqlGetCommentById(id){
        return `SELECT * FROM Comments NATURAL JOIN users WHERE commentId = ${id}`
    }

    static sqlGetCommentsByPostId(id){
        return `SELECT * FROM Comments NATURAL JOIN users WHERE postId = ${id}`
    }
    
    static sqlGetAll(){
        return `SELECT * FROM Comments`
    }

    static sqlLikeComment(commentId) {
        return `UPDATE comments SET countLikeComment = countLikeComment + 1 WHERE commentId =  ${commentId}`
    }

    static sqlDislikeComment(commentId) {
        return `UPDATE comments SET countLikeComment = countLikeComment - 1 WHERE commentId =  ${commentId}`
    }

    static sqlDelete(id){
        return `DELETE FROM Comments WHERE commentId = ${id}`
    }
}

module.exports = CommentUtils;