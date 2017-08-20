export default class TodoModel {
  public completed: boolean;
  public shown: boolean;
  
  constructor(public id: number, public name: string) {
  }
}