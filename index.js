const express = require('express');
const app = express();
const HTTP_STATUS_ENUM = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  MOVED_PERMANENTLY: 301,
  FOUND: 302,
  SEE_OTHER: 303,
  NOT_MODIFIED: 304,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  INTERNAL_SERVER_ERROR: 500,
};
app.get('/:httpStatus', function(req, res) {
  const httpStatus = Number(req.params.httpStatus)
  const sleep = req.query.sleep ?? 6000
  setTimeout(()=> {
    if(!Object.values(HTTP_STATUS_ENUM).includes(httpStatus)) {
      return res.status(200).json({ message: `status code not exists` });
    }

    res.status(httpStatus).json({ message: `returned ${httpStatus}` });
  }, sleep)
});

app.get('/', function(req, res) {
  res.send('OK')
});

app.listen(3030, () => console.log('iha'))