/*Modelagen de dominio */

import Entidades from "../../shared/Entidade";
import NomeSimples from "../../shared/NomeSimples";


export interface CursoProps {
    nome ?: string
    id?:string

}

export default class Curso extends Entidades {
    readonly nome: NomeSimples

    constructor(props: CursoProps){
        super(props.id!)
        this.nome = new NomeSimples(props.nome!)
         
    }
}
