// próximo passo: começar a criar uma parada que ao clicar mostre um content na tela
// mostrando caracteristicas e valor do burger.

// Criando uma lista com os conteudos dos hamburguers 
const hamburguers = [
    {name:"Hambúrguer", price:"10", ingredients: "queijo, alface e tomate"},
    {name:"ChessBurger", price:"10", ingredients: "queijo, alface e tomate"},
    {name:"EggBurger", price:"10", ingredients: "queijo, alface e tomate"},
    {name:"EggChessBurger", price:"10", ingredients: "queijo, alface e tomate"},
    {name:"Completo", price:"10", ingredients: "queijo, alface e tomate"},
    {name:"BigSonia", price:"10", ingredients: "queijo, alface e tomate"},
    {name:"Duplo", price:"10", ingredients: "queijo, alface e tomate"},
    {name:"Triplo", price:"10", ingredients: "queijo, alface e tomate"},
];

const cards = document.querySelectorAll('.burger-card')
// e p querySelectorAll transforma em uma Nodelist!!!!!
console.log(cards)
// explicação rápida sobre o forEach! 
//o forEach é um método disponível em arrays e NodeLists 
//(como a que você obtém usando document.querySelectorAll)
//. Ele permite que você execute uma função para cada elemento da lista.
cards.forEach((card, index) => {
    card.addEventListener('click', clicar)
    function clicar() {
        let {name, price, ingredients} = hamburguers[index];
        //passando price para float 
        price = parseFloat(price);
        
        console.log(`"Nome:"; ${name}`);
        console.log(`Preço:"; ${price.toFixed(2)}`);
        console.log(`Ingredientes: ${ingredients}`);

        ShowBurger(name, price, ingredients); 


        function ShowBurger(name, price, ingredients) {
            const detailsContainer = document.querySelector('#detailsContainer');
            detailsContainer.innerHTML = `
                <h2>${name}</h2>
                <p>Preço: R$${price.toFixed(2)}</p>
                <p>Ingredientes: ${ingredients}</p>
                `;
                detailsContainer.style.display = 'block';
        }
    }
});