import axios from 'axios';
import { mock } from '../axios';
import {tasks} from './taskDB';

mock.onGet('/tasks').reply(200, {
  data: {'tasks': tasks, 'length': tasks.length},
});

export async function getTasks() {
  const response = await axios.get('/tasks');
  return response;
};
