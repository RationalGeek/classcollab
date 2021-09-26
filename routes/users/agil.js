module.exports = function(router, username) {
  router.get('/' + username, function(req, res, next) {
    res.render(
      username + '/base', 
      {
         title: username + '\'s Special Page',
         username: username
      });
  });

  router.get('/' + username + '/aboutme', function(req, res, next) {
    res.render(username + '/aboutme', {
      
      username: username
   });
  });
};[]