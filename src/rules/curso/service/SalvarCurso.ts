import Curso from "../model/curso";
import CasoDeUso from "../../shared/CasoDeUso";
import RepositorioCursoMemoria from "./RepositorioCursoMemoria";

export default class SalvarCurso implements CasoDeUso<Curso ,void>{
    async executar(curso: Curso): Promise<void> {
        const repo = new RepositorioCursoMemoria()
        await repo.salvar(curso)
    }

}