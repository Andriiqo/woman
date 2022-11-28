import { v4 as uuid } from 'uuid';
import { Files } from '../../Entities/types/task.type';

export const mappingArrayToHash = (array: []): Files => {
  const files: Files = {};

  for (const file of array) {
    const fileId = uuid();
    files[fileId] = {
      id: fileId,
      file: URL.createObjectURL(file),
    };
  }
  
  return files;
};