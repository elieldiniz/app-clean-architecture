export default class NomeSimples {
    constructor(readonly completo:string,
                readonly min:number  = 3,
                readonly max: number = 120  ) {

                if(min > max) throw new Error('O valor mínimo não pode ser maior que o máximo')
                if(!completo) throw new Error('nome e obrigatorio')
                if(completo.length < min) throw new Error(`nome deve ter no minimo ${min} caracteres`)
                if(completo.length > max) throw new Error(`nome deve ter no maximo${max}`)
                if (!completo.match(/^[a-zA-z\U00C0-\u00FF ]+$/)){
                    throw new Error('O nome deve conter apenas letras e espaços, permitindo acentos.')
                }               
            }

    parcial(qtde: number): string{
        return this.completo?.substring(0,qtde) ?? ""
    }

    
}
    

/*Objeto de Valor*/