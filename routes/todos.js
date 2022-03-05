const router = require("express").Router();
const { v4 } = require('uuid');
const checkAuth = require("../middleware/checkAuth");

let todos = [];

router.get('', checkAuth, (req, res) => {
    return res.json(todos);
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const todo = todos.find(todo => todo.id === id);
    return res.json(todo);
})

router.post('', (req, res) => {
    // const { title  } = req.body;
    const todo = {
        id: v4(),
        title: req.body.title,
        completed: false
    };
    todos.push(todo);
    return res.json(todo);
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex(todo => todo.id === id)
    console.log(index);
    todos[index].completed = !todos[index].completed;
    return res.json(todos[index]);
})

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    todos = todos.filter((todo) => todo.id !== id);
    return res.json(todos);
})

module.exports = router;
