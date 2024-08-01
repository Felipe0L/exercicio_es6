const alunos = [{ nome: 'João', nota: 4},{nome: 'Rafael', nota: 7},{ nome: 'Manuela', nota: 9},{nome: 'Renata', nota: 5},{nome: 'Rodrigo', nota: 8}];

function filtraAlunosAprovados(aluno) {
    return aluno.nota >= 6;
}

const aprovados = alunos.filter(filtraAlunosAprovados)
console.log(aprovados)
