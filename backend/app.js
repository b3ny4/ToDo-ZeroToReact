// import dependency modules
import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import cors from 'cors';
import todosController from './controller/todos.js';

// create app
const app = express();

// setup cors policy
const corsOptions = {
    origin: "http://localhost:3000"
}
app.use(cors(corsOptions));

// configure express middleware
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// configure routes
app.route('/')
    .get(todosController.getList)
    .post(todosController.addTodo);


app.route('/:id')
    .get(todosController.getTodo)
    .delete(todosController.deleteTodo)
    .put(todosController.updateTodo);


// start server
app.listen(3001, () => {
    console.log('Server listening on port 3001');
});
