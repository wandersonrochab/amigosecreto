//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    let input = document.getElementById('amigo'); // id amigo
    let listaAmigos = document.getElementById('listaAmigos'); // id listaAmigos
    let nome = input.value.trim();

    

    // fundamental verificar se é um nome válido, pois está dando erro
    if(nome && !amigos.includes(nome)){
        amigos.push(nome); 


        let li = document.createElement('li');
        li.textContent = nome;
        listaAmigos.appendChild(li);

        input.value = '';
        // verificar se o nome não está duplicado
    }else if(amigos.includes(nome)){
        alert('Esse nome já foi adicionado! Por favor diferencie do anterior');

    }else{
        alert('Digite um nome válido');
    }
}

function sortearAmigo(){
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if(amigos.length < 2){
        alert('Adicione mais amigos para sortear!!');
        return;
    }

    let sorteio = [...amigos];
    let pares = [];

    for(let i = sorteio.length - 1; i > 0; i--){
        let j = Math.floor(Math.random()*(i + 1));
        [sorteio[i], sorteio[j]] = [sorteio[j], sorteio[i]];
    }

    for( let i = 0; i< amigos.length; i++){
        let amigo = amigos[i];
        let sorteado = sorteio[i === amigos.length - 1 ? 0: i+1]
        pares.push(`${amigo} tirou ${sorteado}`)
    }
    pares.forEach(par => {
        let li = document.createElement('li');
        li.textContent = par;
        resultado.appendChild(li);
    });

}