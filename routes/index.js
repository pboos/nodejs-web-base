
/*
 * GET home page.
 */

exports.index = function (req, res, next) {
  res.render('index', { title: 'Express' })
};

exports.test = function (req, res, next) {
  res.render('test', {title: 'Test', data: req.param('data')});
};