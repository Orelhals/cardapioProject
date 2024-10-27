const cards = document.querySelectorAll('.burger-card')
// e p querySelectorAll transforma em uma Nodelist!!!!!
console.log(cards)
cards.forEach(card => {
    card.addEventListener('click', clicar)
    function clicar() {
        console.log("clicou aqui!")
    }
});

// explicação rápida sobre o forEach! 
//o forEach é um método disponível em arrays e NodeLists 
//(como a que você obtém usando document.querySelectorAll)
//. Ele permite que você execute uma função para cada elemento da lista.

// próximo passo: começar a criar uma parada que ao clicar mostre um content na tela
// mostrando caracteristicas e valor do burger.