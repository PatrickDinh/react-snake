export default class TodoModel {
  completed: boolean;
  shown: boolean;
  completedTime: Date;
  
  constructor(public id: number, public name: string) {
  }
}