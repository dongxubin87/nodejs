const express = require("express");
const router = express.Router();

const {
  getAllTaks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTaks).post(createTasks);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
