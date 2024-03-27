const tabelaAlunos = document.getElementById('tabela-alunos')
const cx_nome = document.getElementById('aluno-nome')
const cx_foto = document.getElementById('aluno-foto')
const cx_sexo = document.getElementById('aluno-sexo')
const cx_data_nascimento = document.getElementById('aluno-data-nascimento')
const cx_telefone = document.getElementById('aluno-telefone')
const cx_cpf = document.getElementById('aluno-cpf')
const btnCadastroAluno = document.getElementById('btn-cadastro-aluno')
const API_URL_aluno = 'https://erickgym.onrender.com/aluno'

function main(){
    console.log('main')
    carregarAlunos()
}

async function carregarAlunos(){
    const response = await fetch(API_URL_aluno)
    if (response.status === 200){
        const alunos = await response.json()
        console.log(alunos)
        for (let aluno of alunos){
            adicionarAlunoTabela(aluno)
        }
    }
}

async function salvarAluno(event){
    event.preventDefault()
    const nome = cx_nome.value
    const foto = cx_foto.value
    const sexo = cx_sexo.value
    const data_nascimento = cx_data_nascimento.value
    const telefone = cx_telefone.value
    const cpf = cx_cpf.value

    const dados = {nome, foto, sexo, data_nascimento, telefone, cpf}

    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    }

    const response = await fetch(API_URL_aluno, config)

    if (response.status === 201){
        const aluno = await response.json()
        adicionarAlunoTabela(aluno)
        alert('aluno cadastrado com sucesso')
    }
    else{
        alert(`${response.status} erro ao adicionar`)
    }
}

async function apagarAluno(id){
    const config = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'applications/json'
        }
    }

    await fetch(`${API_URL_aluno}/${id}`, config).then(response => {
        if (response.status >=200 && response.status <= 300){
            alert('Deletado com sucesso')
            window.location.href = 'listagem-aluno.html'
        }
        else{
            alert(`${response.status} erro ao deletar`)
        }
    })
}

async function clicarModificarAluno(id){
    window.location = `cadastro-aluno.html?id=${id}`
}


function adicionarAlunoTabela(aluno){
    const row = document.createElement('tr')
    const nome = document.createElement('td')
    const foto = document.createElement('td')
    const sexo = document.createElement('td')
    const data_nasc = document.createElement('td')
    const telefone = document.createElement('td')
    const cpf = document.createElement('td')
    const modificar = document.createElement('td')
    const deletar = document.createElement('td')

    nome.innerText = `${aluno.nome}`
    if (aluno.foto){
        foto.innerText = `${aluno.foto}`
    }
    else{
        foto.innerText = 'Sem foto'
    }
    sexo.innerText = `${aluno.sexo}`
    data_nasc.innerText = `${aluno.data_nascimento}`
    telefone.innerText = `${aluno.telefone}`
    cpf.innerText = `${aluno.cpf}`
    modificar.innerHTML = `<button class="btn btn-warning" onclick="clicarModificarAluno(${aluno.id})"><i class="fa-solid fa-pen-to-square"></i></button>`
    deletar.innerHTML = `<button class="btn btn-danger" onclick="apagarAluno(${aluno.id})"><i class="fa-solid fa-trash"></i></button>`


    row.appendChild(nome)
    row.appendChild(foto)
    row.appendChild(sexo)
    row.appendChild(data_nasc)
    row.appendChild(telefone)
    row.appendChild(cpf)
    row.appendChild(modificar)
    row.appendChild(deletar)

    tabelaAlunos.appendChild(row)
}

main()