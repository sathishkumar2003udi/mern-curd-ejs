const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
    const users = await User.find();
    res.render('index', { users });
};

exports.showAddForm = (req, res) => {
    res.render('add');
};

exports.addUser = async (req, res) => {
    await User.create(req.body);
    res.redirect('/');
};

exports.showEditForm = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.render('edit', { user });
};

exports.updateUser = async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/');
};

exports.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.redirect('/');
};
