const express = require("express");
const router = express.Router();

const Todo = require("../models/todoModel");
const { createTodo, getAllTodos, checkTodo, deleteTodo } = require("../controllers/todoControllers");

router.route("/").get(getAllTodos);

router.route("/add").post(createTodo);
router.route("/check/:id").put(checkTodo);
router.route("/delete/:id").delete(deleteTodo);

module.exports = router;
