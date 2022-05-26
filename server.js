require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./pubic'));

app.use(routes);

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));


