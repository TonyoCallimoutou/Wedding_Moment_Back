class PictureUtils {
    static sqlCreatePicture(data){
        return `INSERT INTO pictures (userId, picture) Values (${data.userId},'${data.picture}')`
    }
}

module.exports = PictureUtils;