class CommentUtils {
    static sqlCreateComment(data){
        return `INSERT INTO comments (pictureId, userId, comment) Values (${data.pictureId},'${data.userId}',"${data.comment}")`
    }

    static sqlGetCommentById(id){
        return `SELECT * FROM Comments NATURAL JOIN users WHERE commentId = ${id}`
    }

    static sqlGetCommentsByPictureId(id){
        return `SELECT * FROM Comments NATURAL JOIN users WHERE pictureId = ${id}`
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