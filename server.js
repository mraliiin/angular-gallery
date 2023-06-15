(function() {
  const express = require('express');
  const app = express();
  const path = require('path');

  // Run the app by serving the static files
  app.use(express.static(__dirname + '/dist'));
  app.get('/*', function(req, res) {
      res.sendFile(path.join(__dirname + '/dist/index.html'));
  });

  app.listen(process.env.PORT || 8080);
})();
