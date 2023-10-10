export default class Duracao {
    constructor(
        readonly emSegundos: number
    ){
        if(!emSegundos) throw new Error("Duracao e obrigatoria")
        if (emSegundos <= 0) throw new Error("Duração negativa")
    }

    get emHorasEMinutos() :string {
        const horas = Math.floor(this.emSegundos / 3600)
        const minutos = Math.floor((this.emSegundos - (horas * 3600))/ 60)
        return `${horas}h ${minutos}m`
    }
}