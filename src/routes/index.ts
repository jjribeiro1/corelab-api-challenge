import { Router } from 'express';
import { makeTaskController } from '../factory/make-task-controller';

export const router = Router();
const { validateTaskDto, taskController } = makeTaskController();

router.post('/tasks', validateTaskDto.handler, taskController.create.bind(taskController));
router.get('/tasks', taskController.findAll.bind(taskController));
