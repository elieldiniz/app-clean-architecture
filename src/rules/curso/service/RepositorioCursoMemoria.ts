import Curso from "../model/curso";

export default class RepositorioCursoMemoria {

    constructor(private curso: Curso[] = []){

    }
    async salvar(curso: Curso){
        this.curso.push(curso)
    }

    async buscarTodos() {
        return this.curso
    }
}