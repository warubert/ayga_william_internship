const express = require('express');

const app = express();

app.listen(3003, () =>
  console.log('Example app listening on port 3003!'),
);

app.get('/vehicle', (req, res) => res.send('Hello World!'))

