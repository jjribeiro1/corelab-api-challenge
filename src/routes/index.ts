import { Router } from 'express';
import { makeTaskController } from '../factory/make-task-controller';

export const router = Router();
const { validateTaskDto, taskController } = makeTaskController();

router.post('/tasks', validateTaskDto.handler, taskController.create);
router.get('/tasks', taskController.findAll);
router.get('/tasks/:id', taskController.findById);
router.patch('/tasks/:id', validateTaskDto.handler, taskController.update);
router.delete('/tasks/:id', taskController.remove);
