import express from 'express';

import list from './api/product-listing.json';

const app = express();
const APP_PORT = 3030;

app.use((req, res, next) => {
  console.log(`Time: ${Date.now()} URL: ${req.originalUrl}`);
  next();
});


app
  .route('/api/spa')
  .get((req, res) => {
    // imitate server's response delay
    setTimeout(() => res.send(list), 1000);
  });


app.listen(APP_PORT, () => {
  console.log(`API App listening on port ${APP_PORT}!`);
});
