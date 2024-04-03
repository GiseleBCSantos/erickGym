const cx_nome = document.getElementById('exercicio-nome')
const cx_descricao = document.getElementById('exercicio-descricao')
const cx_ativo = document.getElementById('exercicio-ativo')
const cx_em_aparelho = document.getElementById('exercicio-em-aparelho')
const cx_idade_minima = document.getElementById('exercicio-idade-minima')
const btnCadastroExercicio = document.getElementById('btn-cadastro-exercicio')
const API_URL_exercicios = 'https://erickgym.onrender.com/exercicios'
let id


function main(){
    const params = new URL(document.location).searchParams;
    id = params.get("id");
    if (id){
        mostrarExercicioModificado(id)
        btnCadastroExercicio.setAttribute('value', 'Atualizar')
    }
    
    btnCadastroExercicio.onclick = salvarExercicio
    }




async function salvarExercicio(e){
    e.preventDefault()
    const nome = cx_nome.value
    const descricao = cx_descricao.value
    const ativo = cx_ativo.value
    const em_aparelho = cx_em_aparelho.value
    const idade_minima = cx_idade_minima.value
    
    const dados = {nome, descricao, ativo, em_aparelho, idade_minima}

    const config = {
        method: id ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
      }
    
    const url = id ? `${API_URL_exercicios}/${id}` : API_URL_exercicios   
    const response = await fetch(url, config)
    
    if (response.ok){
        alert('salvo')
        window.location = 'listagem-exercicio.html'
    }
    else{
        alert(`${response.status} erro ao adicionar`)
    }
}


async function mostrarExercicioModificado(id){
    response = await fetch(`${API_URL_exercicios}/${id}`)
    
    if (response.ok){
        const exercicio = await response.json()
        
        // const nome = exercicio.nome
        // const descricao = exercicio.descricao
        // const ativo = exercicio.ativo
        // const em_aparelho = exercicio.em_aparelho
        // const idade_minima = exercicio.idade_minima
        
        cx_nome.value = exercicio.nome
        cx_descricao.value = exercicio.descricao
        cx_ativo.value = exercicio.ativo
        cx_em_aparelho.value = exercicio.em_aparelho
        cx_idade_minima.value = exercicio.idade_minima
        
        btnCadastroExercicio.innerText = 'Atualizar'
        
    }
    else{
        alert('erro')
    }
}


main()