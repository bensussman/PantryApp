const db = require("../db");

//retrieving all users
const getAllUsers = async () => await db.any(`SELECT id, email FROM users`);

//getting a user by id
const getUsersById = async (id) => {
  return await db.oneOrNone("SELECT id,email from users WHERE id = $1", [id]);
};

const getPantryByUserId = async (id) => await db.oneOrNone("SELECT pantry_id FROM users WHERE id = $1", [id]);

//adding a new user to app
const addNewUser = async (userObj) => await db.one(`
  INSERT INTO users (email, id, pantry_id) 
  VALUES($/email/,$/id/,$/pantryId/) 
  RETURNING pantry_id, email
`, userObj);

//retrieving users email id
const getUserByEmail = async (email) => {
  return await db.oneOrNone("SELECT * FROM users WHERE email = $1", [email]);
};

//updating user info
const updateUserInfo = async (userObj, id) => {
  return await db.oneOrNone(
    `UPDATE users 
    SET email = $1 
    WHERE id = $2
    RETURNING  id,email`,
    [userObj.email, id]
  );
};

const hardDeleteUSer = async (id) => {
  return await db.none("DELETE * FROM users WHERE id = $1"[id]);
};

module.exports = {
  getAllUsers,
  getPantryByUserId,
  getUsersById,
  addNewUser,
  getUserByEmail,
  updateUserInfo,
  hardDeleteUSer,
};
