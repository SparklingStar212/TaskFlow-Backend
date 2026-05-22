const Task = require('../models/model');

// Create a new task
const createTask = async (req, res) => {
  try {
    const task = new Task({
      ...req.body,
      userId: req.user.id
    });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: 'Could not create the task. Please check the entered details.' });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.id });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Could not load your tasks right now. Please try again.' });
  }
};

const getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, userId: req.user.id });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Could not load the task. Please try again.' });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate({ _id: req.params.id, userId: req.user.id }, req.body, {
      returnDocument: 'after'
    });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ message: 'Could not update the task. Please check the details and try again.' });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Could not delete the task. Please try again.' });
  }
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask
};