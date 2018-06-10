const express = require('express');
require('./services/passport');

const app = express();
// returns a func -> accepts (app) as an argument; handles express GET requests to oauth
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);