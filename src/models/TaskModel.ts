import * as TaskStateModel from './TaskStateModel';

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number; 
  completeDate: number | null;
  interruptDate: number | null;
  type: keyof TaskStateModel.TaskStateModel['config'];
}