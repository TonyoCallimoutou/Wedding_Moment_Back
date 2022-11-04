class UserUtils {
    static sqlCreateUser(data){
        return `INSERT INTO users (email, firstName, lastName, password, picture) Values ('${data.email}','${data.firstName}','${data.lastName}','${data.password}','${data.picture}')`
    }
}

module.exports = UserUtils;