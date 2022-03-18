import { app, errorHandler } from 'mu';

app.get('/', function( req, res ) {
  res.send('Hello test service :)');
} );

app.use(errorHandler);