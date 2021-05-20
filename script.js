angular.module("desafio", []).controller("CursoController", function () {
  const cursoController = this;
  cursoController.cursos = JSON.parse(localStorage.getItem("cursos")) || [];

  cursoController.addCurso = function () {
    cursoController.cursos.push({
      nome: cursoController.nome,
      dataInicio: cursoController.dataInicio,
      dataFim: cursoController.dataFim,
      duracao: cursoController.duracao,
      descricaoCurso: cursoController.descricaoCurso,
    });
    localStorage.setItem("cursos", JSON.stringify(cursoController.cursos));
    console.log(cursoController);

    cursoController.nome = "";
    cursoController.dataInicio = null;
    cursoController.dataFim = null;
    cursoController.duracao = null;
    cursoController.descricaoCurso = "";
  };
});
