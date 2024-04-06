export function requestLog(req, res, next) {
  console.log(req.method, req.url, req.query)
  next()
}
