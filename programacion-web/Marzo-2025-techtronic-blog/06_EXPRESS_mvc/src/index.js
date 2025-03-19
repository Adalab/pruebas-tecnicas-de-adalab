const express = require('express');
const cors = require('cors');
const path = require('node:path');
const weatherController = require('./controller/weatherController');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server listening at <http://localhost:${PORT}/>`);
  });
}

app.use('/api/weather/', weatherController);

app.use(express.static(path.join(__dirname, 'public_frontend')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public_frontend', 'index.html'));
});

module.exports = app;
