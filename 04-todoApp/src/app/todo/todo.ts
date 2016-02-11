export class Todo {
    task: String
    createdDate: Date

    constructor(newTask: String){
        this.task = newTask;
        this.createdDate = new Date();
    }
}
