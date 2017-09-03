export default class TodoModel {
  public completed: boolean;
  
  constructor(public id: number, public name: string, public shown: boolean = false) {
    this.completed = false;
  }
}