export class student {
    name : string;

    constructor() {
        this.name = 'hello world';        
    }

    public showMessage() : void{
        console.log(this.name);
    }
}