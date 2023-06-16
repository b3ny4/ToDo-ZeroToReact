
import Database from '../database/todos.js';

export const getList = (req, res) => {
    res.send({ todos: Database.todos });
};

export const addTodo = (req, res) => {
    const { todo } = req.body;
    Database.add(todo);
    res.send({ status: 'ok' });
};

export const deleteTodo = (req, res) => {
    const { id } = req.params;
    Database.delete(id);
    res.send({ status: 'ok' });
};

export const updateTodo = (req, res) => {
    const { id } = req.params;
    const { todo } = req.body;
    Database.update(id, todo);
    res.send({ status: 'ok' });
};

export const getTodo = (req, res) => {
    const { id } = req.params;
    res.send(Database.get(id));
};

export default {
    getList,
    addTodo,
    deleteTodo,
    updateTodo,
    getTodo
}