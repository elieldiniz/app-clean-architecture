import Id from "./Id";

export default abstract class Entidades {
    readonly id : Id

    constructor(id?: string){
        this.id = new Id(id)
    }
}