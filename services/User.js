const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');
const User = db.User;

module.exports = {
    authenticate,
    signup,
    allUsers
};

async function signup(userParam) {
    /* validating is username already present or not*/
    if (await User.findOne({ username: userParam.username }))
        throw 'Username ' + userParam.username + ' is already exist';

    const user = new User(userParam);

    /* hashing password for security */
    user.password = bcrypt.hashSync(userParam.password, 10);
    return await user.save();
}


async function authenticate({ username, password }) {
    const user = await User.findOne({ username });

    /* decrypting password and generating token of userId if user exist*/
    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ sub: user.id }, process.env.SCERET_KEY, { expiresIn: '7d' });
        return {
            ...user.toJSON(),
            token
        };
    }
}

async function allUsers() {
    return await User.find();
}

