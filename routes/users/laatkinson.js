module.exports = function(router, username) {
  router.get('/' + username, function(req, res, next) {
    res.render(
      username + '/base',
      {
         title: username + '\'s Special Page',
         username: username
      });
  });
  // Set up additional routes here
  router.get('/laatkinson/newPage', function(req, res, next) {
    res.render(
      username + '/newPage',
      {
         title: username + '\'s New Page',
         username: username
      });
  });
};
