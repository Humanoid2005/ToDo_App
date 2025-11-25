export default class Task{
    private id:string;
    private name:string;
    private description:string;
    private status:boolean;
    private deadline:Date;

    public constructor(id:string,name:string,status:boolean,deadline:Date,description:string){
        this.id = id;
        this.name = name;
        this.status = status;
        this.deadline = deadline;
        this.description = description;
    }

    public getId(){
        return this.id;
    }

    public setId(id:string){
        this.id = id;
    }

    public getName(){
        return this.name;
    }

    public setName(name:string){
        this.name = name;
    }

    public getStatus(){
        return this.status;
    }

    public toggleStatus(){
        this.status = !this.status;
    }

    public setStatus(status:boolean){
        this.status = status;
    }

    public getDeadline(){
        return this.deadline;
    }

    public setDeadline(deadline:Date){
        this.deadline = deadline;
    }

    public getDescription(){
        return this.description;
    }

    public setDescription(description:string){
        this.description = description;
    }
}