import Id from "./id";

export default abstract class Entidades {
    readonly id : Id

    constructor(id?: string){
        this.id = new Id(id)
    }
}