const { getUsers } = require('./list');
const { getUserById } = require('./get');
const { createUser } = require('./create');
const { updateUserById } = require('./update');
const { deleteUserById } = require('./destroy');
const { resetPasswordByToken } = require('./reset-password');

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  resetPasswordByToken,
};