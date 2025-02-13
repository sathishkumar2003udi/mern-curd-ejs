const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.get('/add', userController.showAddForm);
router.post('/add', userController.addUser);
router.get('/edit/:id', userController.showEditForm);
router.post('/edit/:id', userController.updateUser);
router.get('/delete/:id', userController.deleteUser);

module.exports = router;
