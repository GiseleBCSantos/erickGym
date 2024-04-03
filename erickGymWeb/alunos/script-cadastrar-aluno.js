const tabelaAlunos = document.getElementById('tabela-alunos')
const cx_nome = document.getElementById('aluno-nome')
const cx_foto = document.getElementById('aluno-foto')
const cx_sexo = document.getElementById('aluno-sexo')
const cx_data_nascimento = document.getElementById('aluno-data-nascimento')
const cx_telefone = document.getElementById('aluno-telefone')
const cx_cpf = document.getElementById('aluno-cpf')
const btnCadastroAluno = document.getElementById('btn-cadastro-aluno')
const API_URL_aluno = 'https://erickgym.onrender.com/alunos'
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
    
      const url = id ? `${API_URL_aluno}/${id}` : API_URL_aluno
    
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


async function mostrarAlunoModificado(id){
    response = await fetch(`${API_URL_aluno}/${id}`)

    console.log(response.status)
    
    if (response.status === 200){
        const aluno = await response.json()
        
        
        const nome = aluno.nome
        const foto = aluno.foto
        const sexo = aluno.sexo
        const data_nascimento = aluno.data_nascimento
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


main()