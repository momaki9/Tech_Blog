//setting up the dependencies for the app
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const routes = require('./controllers');
const helpers = require('./utils/helper');
const hbs = exphbs.create({ helpers });
const path = require('path');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// setting up the user session
const sess = {
    secret: 'Restricted Area',
    cookie: {
      maxAge: 300000,
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
};

app.use(session(sess));
//defining the handlebars as the engine for the app
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/homepage-routes'));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App is live on http://localhost:${PORT}`));
  });
  