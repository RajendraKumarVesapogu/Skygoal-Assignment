const bcrypt = require("bcrypt");

const hashPassword = (password, callback) => {
    if (callback) {
        bcrypt
            .hash(password, 10)
            .then((hash) => callback(null, hash))
            .catch((err) => callback(err))
    } else {
        return new Promise((resolve, reject) => {
            bcrypt
                .hash(password, 10)
                .then((hash) => resolve(hash))
                .catch((err) => reject(err))
        })
    }
}

const validatePassword = ({ hashedPassword, password }, callback) => {
    if (callback) {
        bcrypt.compare(password, hashedPassword).then((err, res) => {
            return callback(err, res)
        })
    } else {
        return bcrypt.compare(password, hashedPassword)

    }
}

exports.hashPassword = hashPassword;
exports.validatePassword = validatePassword;