const tabelaExercicios = document.getElementById('tabela-exercicios')
const API_URL_exercicios = 'https://erickgym.onrender.com/exercicios'

function main(){
    console.log('main')
    carregarExercicios()
}

async function carregarExercicios(){
    const response = await fetch(API_URL_exercicios)
    if (response.ok){
        const exercicios = await response.json()
        for (let exercicio of exercicios){
            adicionarExercicioTabela(exercicio)
        }
    }
}


async function apagarExercicio(id){
    const config = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'applications/json'
        }
    }
    const response = await fetch(`${API_URL_exercicios}/${id}`, config)
    if (response.ok){
        alert('Deletado com sucesso')
        window.location.href = 'listagem-exercicio.html'
    }
    else{
        alert(`${response.status} erro ao deletar`)
    }
}

async function clicarModificarExercicio(id){
    window.location = `cadastro-exercicio.html?id=${id}`
}


function adicionarExercicioTabela(exercicio){
    const row = document.createElement('tr')
    const nome = document.createElement('td')
    const descricao = document.createElement('td')
    const ativo = document.createElement('td')
    const em_aparelho = document.createElement('td')
    const idade_minima = document.createElement('td')
    const modificar = document.createElement('td')
    const deletar = document.createElement('td')

    nome.innerText = `${exercicio.nome}`
    descricao.innerText = `${exercicio.descricao}`
    ativo.innerText = `${exercicio.ativo}`
    em_aparelho.innerText = `${exercicio.em_aparelho}`
    idade_minima.innerText = `${exercicio.idade_minima}`
    modificar.innerHTML = `<button class="btn btn-warning" onclick="clicarModificarExercicio(${exercicio.id})"><i class="fa-solid fa-pen-to-square"></i></button>`
    deletar.innerHTML = `<button class="btn btn-danger" onclick="apagarExercicio(${exercicio.id})"><i class="fa-solid fa-trash"></i></button>`

    row.appendChild(nome)
    row.appendChild(descricao)
    row.appendChild(ativo)
    row.appendChild(em_aparelho)
    row.appendChild(idade_minima)
    row.appendChild(modificar)
    row.appendChild(deletar)

    tabelaExercicios.appendChild(row)
}

main()