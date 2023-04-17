require('dotenv').config();
const {PASSWORD} = process.env
const users = [{email: 'mail@gmail.com', password: PASSWORD}];

module.exports = users;