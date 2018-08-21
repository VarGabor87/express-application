const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// method override
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// handlebars settings
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main', layoutsDir: './app/views/layouts'}));
app.set('view engine', 'handlebars');
app.set('views', './app/views');

// category sidebar
const sidebar = require('./sidebar');
app.use(sidebar);

// bodyparser settings
const users = require('./app/controllers/users');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/users', users);

const searches = require('./app/controllers/searches');
app.use('/search', searches);

const api = require('./app/controllers/api');
app.use('/api', api);

const admin = require('./app/controllers/admin');
app.use('/admin', admin);

const categories = require('./app/controllers/categories');
app.use('/categories', categories);

const products = require('./app/controllers/products');
app.use('/products', products);

const comments = require('./app/controllers/comments');
app.use('/comments', comments);

const cart = require('./app/controllers/cart');
app.use('/cart', cart);

app.use(express.static('./public'));

app.listen(8080);
