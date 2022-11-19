class PictureUtils {
    static sqlCreatePicture(data){
        return `INSERT INTO pictures (userId, pictureUrl) Values (${data.userId},'${data.pictureUrl}')`
    }

    static sqlGetPictureById(id){
        return `SELECT * FROM pictures NATURAL JOIN users WHERE pictureId = ${id}`
    }

    static sqlGetAll(){
        return `SELECT * FROM pictures NATURAL JOIN users`
    }

    static sqlCommentPicture(pictureId) {
        return `UPDATE pictures SET countComment = countComment + 1 WHERE pictureId =  ${pictureId}`
    }

    static sqlDeleteCommentPicture(pictureId) {
        return `UPDATE pictures SET countComment = countComment - 1 WHERE pictureId =  ${pictureId}`
    }
    
    static sqlLikePicture(pictureId) {
        return `UPDATE pictures SET countLike = countLike + 1 WHERE pictureId =  ${pictureId}`
    }

    static sqlDislikePicture(pictureId) {
        return `UPDATE pictures SET countLike = countLike - 1 WHERE pictureId =  ${pictureId}`
    }

    static sqlDelete(id) {
        return `DELETE FROM pictures WHERE pictureId = ${id}`
    }
}

module.exports = PictureUtils;