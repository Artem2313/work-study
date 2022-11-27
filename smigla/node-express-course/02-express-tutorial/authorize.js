const authorize = (req, res, next) => {
  const {user} = req.query;
  if(user === 'john') {
    console.log(user);
    req.user = {
      name: 'john',
      id: 3
    }
    next()
  }
  else {
    res.status(401).send('Unatohrized')
  }
}

module.exports = authorize
