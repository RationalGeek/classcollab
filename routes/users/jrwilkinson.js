module.exports = function (router, username) {
  router.get('/' + username, function (req, res, next) {
    res.render(
      username + '/base',
      {
        title: username + '\'s Main Page',
        username: username
      });
  });

  // Set up additional routes here
  router.get('/jrwilkinson/pgpg', function (req, res, next) {
    res.render(
      username + '/pgpg',
      {
        title: username + '\'s Page',
        username: username
      });
  });
};