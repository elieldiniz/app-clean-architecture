import CasoDeUso from "../../shared/CasoDeUso";
import Curso from "../model/curso";
import RepositorioCursoMemoria from "./RepositorioCursoMemoria";

export default class ConsultarCursos implements CasoDeUso<void, Curso[]>{
    async executar(): Promise<Curso[]> {
        const repo =   new RepositorioCursoMemoria() 
        return await repo.buscarTodos()
    }
}