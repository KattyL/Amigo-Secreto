let amigos = []

let exibirAmigos = document.querySelector('.name-list');
let sortear = document.querySelector('.button-draw')



function criarLista(){
    exibirAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++){
        let item = document.createElement('li')
        item.textContent = amigos[i]
        exibirAmigos.appendChild(item);
    }
}
function adicionarAmigo(){
    let nome = document.querySelector('.input-name').value;
    if (nome !== '') {
        amigos.push(nome);
        console.log(amigos);
        document.querySelector('.input-name').value = '';
        criarLista()
        verificarLista()
        
      } else {
        alert('Por favor, insira um nome válido!');
      }
    } 

function verificarLista(){

    if (amigos.length >= 2){
        sortear.disabled = false;
    } else {
        sortear.disabled = true;
    }
}

function sortearAmigo(){
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    exibirAmigos.innerHTML = 'Vamos lá!🤫 Seu amigo secreto é...'
    campo = document.getElementById('resultado')
    campo.innerHTML = `${sorteado}`

    revelarDiv.classList.add('aposSortear');
}


let revelarDiv = document.querySelector('.revelar-container button');

revelarDiv.addEventListener('click', function() {
    revelarDiv.classList.add('hide');
});

function alterarImagem() {

    const imagem = document.getElementById('imgAmigo');
    

    if (imagem.src.includes('amigo-secreto.png')) {
        imagem.src = 'assets/halloween.png';
    } else if (imagem.src.includes('assets/halloween.png')) {
        imagem.src = 'assets/natal.png'; 
    } else {
        imagem.src = 'assets/amigo-secreto.png'; 
    }
}
