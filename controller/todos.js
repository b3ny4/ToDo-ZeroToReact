
import Database from '../database/todos.js';

export const renderList = (req, res) => {
    res.render('list', { todos: Database.todos });
};

export const addTodo = (req, res) => {
    const { todo } = req.body;
    Database.add(todo);
    res.redirect('/');
};

export const renderNew = (req, res) => {
    res.render('new');
};

export const deleteTodo = (req, res) => {
    const { id } = req.params;
    Database.delete(id);
    res.redirect('/');
};

export const updateTodo = (req, res) => {
    const { id } = req.params;
    const { todo } = req.body;
    Database.update(id, todo);
    res.redirect('/');
};

export const renderEdit = (req, res) => {
    const { id } = req.params;
    res.render('edit.ejs', { todo: Database.get(id) });
};

export default {
    renderList,
    addTodo,
    renderNew,
    deleteTodo,
    updateTodo,
    renderEdit
}