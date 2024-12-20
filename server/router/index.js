const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const router = new Router();
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');
const contestService = require('../service/contest-service');

router.post(
	'/registration',
	body('email').isEmail(),
	body('password').isLength({ min: 5, max: 32 }),
	userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);
router.get('/contests', userController.getContests)
router.get('/users', authMiddleware, userController.getUsers);

module.exports = router;
