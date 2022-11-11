class UserUtils {
    static sqlCreateUser(data){
        return `INSERT INTO users (userid, email, userName, photoUrl, emailVerified) Values ('${data.userId}','${data.email}','${data.userName}','${data.photoUrl}',${data.emailVerified})`
    }
}

module.exports = UserUtils;