const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ id: 1234 });
});

app.get('/cards', (req, res) => {
  res.json([{ id: 1234 }]);
});

app.post('/cards', (req, res) => {
  res.json({ id: 8888 });
});

app.get('/cards/999', (req, res) => {
  res.send(404, { message: 'could not find card' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
