export default class TodoModel {
  completed: boolean;
  shown: boolean;
  completedTime: Date;
  createdTime: Date;

  constructor(public id: number, public name: string) {
  }
}