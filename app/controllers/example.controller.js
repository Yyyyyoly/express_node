const HttpSend = require('../utils/http.util');
const constants = require('../../config/constants');
const logger = require('../utils/log.util').getLogger(constants.LOGGER_LEVEL);
const Model = require('../models/index');

exports.helloWorld = (req, res) => {
  const resUtil = new HttpSend(req, res);
  resUtil.sendJson(constants.HTTP_SUCCESS, 'HELLO WORLD');
};

// 数据库操作示例
exports.qryAll = async (req, res) => {
  const resUtil = new HttpSend(req, res);
  const adviceList = await Model.Advice.findAll();
  if (!adviceList || !adviceList.dataValues) {
    logger.info('find err');
  } else {
    resUtil.render('error', adviceList);
  }
};

