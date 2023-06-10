// Fake Database
const Database = {
    todos: [
        {
            id: 0,
            content: "buy groceries"
        },
        {
            id: 1,
            content: "clean kitchen"
        },
        {
            id: 2,
            content: "pet your pet"
        }
    ],

    next_id: 3,

    add: function (todo) {
        this.todos.push({
            id: this.next_id++,
            content: todo
        });
    },

    get: function (id) {
        return this.todos.find(todo => todo.id == id);
    },

    delete: function (id) {
        this.todos = this.todos.filter(todo => todo.id != id);
    },

    update: function (id, content) {
        this.delete(id);
        this.todos.push({ id, content });
    }
}

export default Database;