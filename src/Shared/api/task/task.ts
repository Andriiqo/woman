
import axios from 'axios';
import { mock } from '../axios';
import {tasks} from './taskDB';

mock.onGet('/tasks').reply(200, {
  data: {'tasks': tasks, 'length': tasks.length},
});

mock.onGet('/task/:id').reply(200, {
  data: {'tasks': tasks, 'length': tasks.length},
});

export async function getTasks() {
  const response = await axios.get('/tasks');
  return response;
}

export async function getTaskById(taskId: string) {
  const response = await axios.get(`/task/${taskId}`);
  return response;
}