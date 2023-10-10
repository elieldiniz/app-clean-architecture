/*Modelagen de dominio */

import Duracao from "../../shared/Duracao";
import Entidades from "../../shared/Entidade";
import NomeSimples from "../../shared/NomeSimples";


export interface CursoProps {
    nome ?: string
    id?:string
    duracao?: number
}

export default class Curso extends Entidades {
    readonly nome: NomeSimples
    readonly duracao: Duracao

    constructor(props: CursoProps){
        super(props.id!)
        this.nome = new NomeSimples(props.nome!, 4, 115)
        this.duracao = new Duracao(props.duracao!)
         
    }
}
