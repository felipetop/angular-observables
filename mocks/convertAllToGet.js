module.exports = function(req, res, next) {
  if(req.method !== 'GET') {
    req.method = 'GET'
    req.query = req.body
  }
  next();
}