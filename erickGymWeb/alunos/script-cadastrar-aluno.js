

const tabelaAlunos = document.getElementById('tabela-alunos')
const cx_nome = document.getElementById('aluno-nome')
const cx_foto = document.getElementById('aluno-foto')
const cx_sexo = document.getElementById('aluno-sexo')
const cx_data_nascimento = document.getElementById('aluno-data-nascimento')
const cx_telefone = document.getElementById('aluno-telefone')
const cx_cpf = document.getElementById('aluno-cpf')
const btnCadastroAluno = document.getElementById('btn-cadastro-aluno')
const API_URL_aluno = 'https://erickgym.onrender.com/aluno/api'
let id


function main(){
    const params = new URL(document.location).searchParams;
    id = params.get("id");
    if (id){
        mostrarAlunoModificado(id)
        btnCadastroAluno.setAttribute('value', 'Atualizar')
        console.log('id = ', id)
    }
    
    btnCadastroAluno.onclick = salvarAluno
    }




async function salvarAluno(e){
    e.preventDefault()
    const nome = cx_nome.value
    const foto = cx_foto.value
    const sexo = cx_sexo.value
    const data_nascimento = cx_data_nascimento.value
    const telefone = cx_telefone.value
    const cpf = cx_cpf.value
    
    const dados = {nome, foto, sexo, data_nascimento, telefone, cpf}

    const config = {
        method: id ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
      }
    
      const url = id ? `${API_URL_aluno}/modificar/${id}` : API_URL_aluno
    
    const response = await fetch(url, config)
    
    console.log(response.status)
    
    if (response.ok){
        alert('salvo')
        window.location = 'listagem-aluno.html'


    }
    else{
        alert(`${response.status} erro ao adicionar`)
    }
}

function adicionarAlunoTabela(aluno){
    const row = document.createElement('tr')
    const nome = document.createElement('td')
    const foto = document.createElement('td')
    const sexo = document.createElement('td')
    const data_nascimento = document.createElement('td')
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
    data_nascimento.innerText = `${aluno.data_nascimento}`
    telefone.innerText = `${aluno.telefone}`
    cpf.innerText = `${aluno.cpf}`
    modificar.innerHTML = `<button class="btn btn-warning" onclick="iniciarModificarAluno(${aluno.id})"><i class="fa-solid fa-pen-to-square"></i></button>`
    deletar.innerHTML = `<button class="btn btn-danger" onclick="apagarAluno(${aluno.id})"><i class="fa-solid fa-trash"></i></button>`


    row.appendChild(nome)
    row.appendChild(foto)
    row.appendChild(sexo)
    row.appendChild(data_nascimento)
    row.appendChild(telefone)
    row.appendChild(cpf)
    row.appendChild(modificar)
    row.appendChild(deletar)

    tabelaAlunos.appendChild(row)
}

async function mostrarAlunoModificado(id){
    response = await fetch(`${API_URL_aluno}/obter/${id}`)

    console.log(response.status)
    
    if (response.status === 200){
        const aluno = await response.json()
        
        
        const nome = aluno.nome
        const foto = aluno.foto
        const sexo = aluno.sexo
        const data_nascimento = new Date(aluno.data_nascimento)
        const telefone = aluno.telefone
        const cpf = aluno.cpf
        
        
        console.log(aluno)


        cx_nome.value = nome
        cx_foto.value = foto
        cx_sexo.value = sexo
        cx_data_nascimento.value = data_nascimento
        cx_telefone.value = telefone
        cx_cpf.value = cpf
        
        btnCadastroAluno.innerText = 'Atualizar'
        
    }
    else{
        alert('erro')
    }
}


async function modificarAluno(id){
    const nome = cx_nome.value
    const sexo = cx_sexo.value
    const data_nascimento = cx_data_nascimento.value
    const telefone = cx_telefone.value
    const cpf = cx_cpf.value

    const dados = {nome:nome, sexo:sexo, data_nascimento:data_nascimento, telefone:telefone, cpf:cpf}

    const config = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    }
    
    const response = await fetch(`${API_URL_aluno}/modificar/${id}`, config)


        if (response.status >= 200 && response.status < 300){
            alert('modificado com sucesso')
            window.location = 'index.html'
        }
        else{
            alert(`${response.status} erro ao modificar`)
            console.log(`${response.status} erro ao modificar`)
        }
    
}


main()