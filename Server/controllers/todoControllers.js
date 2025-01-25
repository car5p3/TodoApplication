const Todo = require("../models/todoModel");

// Create a new todo
exports.createTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        todo: newTodo,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Get all todos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({
      status: "success",
      results: todos.length,
      data: {
        todos,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Check a todo if done mark check and if not mark uncheck
exports.checkTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({
        status: "fail",
        message: "Todo not found",
      });
    }
    todo.done = !todo.done;
    await todo.save();
    res.status(200).json({
      status: "success",
      data: {
        todo,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Delete a todo
exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).json({
        status: "fail",
        message: "Todo not found",
      });
    }
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};