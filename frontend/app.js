// import dependency modules
import express from 'express';
import ejsMate from 'ejs-mate';

// create app
const app = express();

// configure app
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');

// configure routes
app.route('/')
    .get((req, res) => (res.render('list')));

app.get('/new', (req, res) => (res.render('new')));

app.get('/:id/edit', (req, res) => (res.render('edit.ejs')));


// start server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

