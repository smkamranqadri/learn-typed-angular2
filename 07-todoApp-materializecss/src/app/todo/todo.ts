export class Todo {
    id: number
    task: string
    createdDate: Date
    status: boolean

    constructor(id: number, newTask: string, newStatus: boolean){
        this.id = id;
        this.task = newTask;
        this.status = newStatus;
        this.createdDate = new Date();
    }
}
