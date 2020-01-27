const express = require('express');

const app = express();

app.get('/teste3', (req, res) => {
  return res.json({ hello: 'World 3' });
});

app.listen(3333);