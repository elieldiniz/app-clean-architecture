import Curso from "./rules/curso/model/curso";
import ConsultarCursos from "./rules/curso/service/ConsultarCursos";
import SalvarCurso from "./rules/curso/service/SalvarCurso";

const curso = new Curso({
    nome: 'curso 0020',
    duracao: 3600
});

const main = async () => {
    // Salvar o curso de forma assíncrona
    await new SalvarCurso().executar(curso);

    // Consultar cursos de forma assíncrona
    const cursos = await new ConsultarCursos().executar();
    console.log("Cursos Salvo",cursos);
};

// Chame a função principal assíncrona
main();
