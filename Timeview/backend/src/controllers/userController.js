
const getAllUsers = (req, res) => {
    res.send('All users sent.');
};

const createUser = (req, res) => {
    res.send('User created.');
};

const getUserById = (req, res) => {
    res.send('User details by ID.');
};

const updateUser = (req, res) => {
    res.send('User updated.');
};

const deleteUser = (req, res) => {
    res.send('User deleted.');
};

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
};
