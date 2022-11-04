class CommentUtils {
    static sqlCreateComment(data){
        return `INSERT INTO comments (pictureId, userId, comment) Values (${data.pictureId},${data.userId},'${data.comment}')`
    }
}

module.exports = CommentUtils;