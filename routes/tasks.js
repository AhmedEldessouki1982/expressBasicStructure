import express from 'express';
import {getAllTasks, createTask, getTask, updateTask, deleteTask} from '../controllers/tasks.js';

export const userRoute = express.Router();
userRoute.route('/').get(getAllTasks).post(createTask);
userRoute.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

//note:
/*
put and patch both are for updating operation, however
put update with replace; and patch partioal update
 */