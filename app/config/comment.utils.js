class CommentUtils {
    static sqlCreateComment(data){
        return `INSERT INTO comments (pictureId, userId, comment) Values (${data.pictureId},'${data.userId}','${data.comment}')`
    }

    static sqlGetCommentById(id){
        return `SELECT * FROM Comments WHERE commentId = ${id}`
    }

    static sqlGetCommentsByUserId(id){
        return `SELECT * FROM Comments WHERE userId = ${id}`
    }
    
    static sqlGetAll(){
        return `SELECT * FROM Comments`
    }

    static sqlDelete(id){
        return `DELETE FROM Comments WHERE commentId = ${id}`
    }
}

module.exports = CommentUtils;