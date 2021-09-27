module.exports = function(router, username) {
  router.get('/' + username, function(req, res, next) {
    res.render(
      username + '/base',
      {
         title: 'Hephzibah Rajan\'s Special Page',
         username: username
      });
  });

  // Set up additional routes here
  router.get('/' + username + '/background', function(req, res, next) {
    res.render(
      username + '/background',
      {
         title: 'My Background',
         username: username
      });
  });
};
