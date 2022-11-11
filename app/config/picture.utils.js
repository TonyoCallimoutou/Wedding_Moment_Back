class PictureUtils {
    static sqlCreatePicture(data){
        return `INSERT INTO pictures (userId, pictureUrl) Values (${data.userId},'${data.pictureUrl}')`
    }
}

module.exports = PictureUtils;