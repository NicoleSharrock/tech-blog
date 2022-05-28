require('dotenv').config();
const express = require('express');
const routes = require('./controllers');
const squelize = require('./config/connections');
const path = require('path');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connections');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;


const sess = {
    secret: 'bigbluedog',
    cookie: {
        // Session will automatically expire in 10 minutes
        expires: 10 * 60 * 1000
    },
    resave: true,
    rolling: true,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    }),
};


app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine());
app.set('view engine', 'handlebars');

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
});


