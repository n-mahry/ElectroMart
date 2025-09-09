// controllers/userController.js

// Fake users (static JSON for now)
const users = [
  { id: 1, name: "Alice", email: "alice@email.com" },
  { id: 2, name: "Bob", email: "bob@email.com" }
];

// @desc    Get all users
// @route   GET /api/users
const getUsers = (req, res) => {
  res.json(users);
};

// @desc    Get single user
// @route   GET /api/users/:id
const getUserById = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

module.exports = { getUsers, getUserById };
