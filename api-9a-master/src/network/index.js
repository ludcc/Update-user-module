const { logger, success } = require('../utils/logs4js');

exports.success = function (req, res, message, status) {
    const IP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = req.originalUrl;
    const { method } = req;
    const message = ` ${new Date()} | ${IP} | Method: ${method} | ${status} | Path: ${path}`;
    success.info(message);
    res.status(status || 200).send(message);
}

exports.error = function (req, res, message, status) {
    const IP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = req.originalUrl;
    const { method } = req;
    const message = `[response error] | ${new Date()} | ${IP} | Method: ${method} | ${status} | Path: ${path}`;
    logger.info(message);
    res.status(status || 500).send(message);
}