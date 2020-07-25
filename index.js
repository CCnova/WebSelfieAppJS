const express = require('express');
const Datastore = require('nedb');

const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('database.db');
database.loadDatabase();
database.insert({name: 'Caio', status: 'true'});
database.insert({name: 'Caio', status: 'true2'});

app.post('/api', ( request, response ) => {
  console.log('Got a request!');
  const data = request.body;
  database.insert(data);
  console.log(database);
  response.json({
    status: 'success',
    latitude: request.body.lat,
    longitude: request.body.lon
  });
});