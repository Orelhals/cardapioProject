// Criando uma lista com os conteúdos dos hambúrgueres 
const hamburguers = [
    { name: "Hambúrguer", price: "10", ingredients: "queijo, alface e tomate" },
    { name: "ChessBurger", price: "10", ingredients: "queijo, alface e tomate" },
    { name: "EggBurger", price: "10", ingredients: "queijo, alface e tomate" },
    { name: "EggChessBurger", price: "10", ingredients: "queijo, alface e tomate" },
    { name: "Completo", price: "10", ingredients: "queijo, alface e tomate" },
    { name: "BigSonia", price: "10", ingredients: "queijo, alface e tomate" },
    { name: "Duplo", price: "10", ingredients: "queijo, alface e tomate" },
    { name: "Triplo", price: "10", ingredients: "queijo, alface e tomate" },
];

const cards = document.querySelectorAll('.burger-card');
const modal = document.getElementById("myModal");
const closeModal = document.querySelector(".close");
const detailsContainer = document.getElementById("detailsContainer");

// Adicionando evento de clique para cada card
cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        let { name, price, ingredients } = hamburguers[index];
        price = parseFloat(price);
        showBurger(name, price, ingredients);
    });
});

// Função para mostrar as características do hambúrguer no modal
function showBurger(name, price, ingredients) {
    detailsContainer.innerHTML = `
        <h2>${name}</h2>
        <p>Preço: R$${price.toFixed(2)}</p>
        <p>Ingredientes: ${ingredients}</p>
    `;
    modal.style.display = 'block'; // Abre o modal
}

// Quando o usuário clica no <span> (x), fecha o modal
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clica em qualquer lugar fora do modal, fecha-o
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
