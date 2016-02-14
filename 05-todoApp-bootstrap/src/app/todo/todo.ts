export class Todo {
    id: Number
    task: String
    createdDate: Date
    status: Boolean

    constructor(newTask: String, newStatus: boolean){
        this.id = new Date().valueOf();
        this.task = newTask;
        this.status = newStatus;
        this.createdDate = new Date();
    }
}
