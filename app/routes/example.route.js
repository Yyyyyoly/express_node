const router = require('express').Router();
const controller = require('../controllers/example.controller');


const prefix = '/';
router.get('/hello', controller.helloWorld);
router.get('/getAll', /* middleware..., */controller.qryAll);

module.exports = function (app) {
  app.use(prefix, router);
};
