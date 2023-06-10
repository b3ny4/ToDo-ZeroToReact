// import dependency modules
import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import ejsMate from 'ejs-mate';
import todosController from './controller/todos.js';

// create app
const app = express();

// configure app
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');

// configure express middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// configure routes
app.route('/')
    .get(todosController.renderList)
    .post(todosController.addTodo);

app.get('/new', todosController.renderNew);


app.route('/:id')
    .delete(todosController.deleteTodo)
    .put(todosController.updateTodo);

app.get('/:id/edit', todosController.renderEdit);


// start server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

