const createCoin = require('./createCoin');
const updateCoin = require('./updateCoin');
const deleteCoin = require('./deleteCoin');
const { createUser, updateUser, deleteUser } = require('./user')

module.exports = {
  createCoin,
  updateCoin,
  deleteCoin,
  createUser,
  updateUser,
  deleteUser
}