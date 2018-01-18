import SourceMapSupport from 'source-map-support';
SourceMapSupport.install();
import 'babel-polyfill';
import http from 'http';

let app = require('./server');
let expressServer = http.createServer(app);
expressServer.listen(3000, () => {
  console.log('Express server started on port 3000');
});

if (module.hot) {
  module.hot.accept('./server.js', () => {
    expressServer.removeListener('request', app);
    app = require('./server');
    expressServer.on('request', app);
  })
}
