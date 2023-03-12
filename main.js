//Local de reviews data
const reviews = [{
    id: 1,
    name: "Ana Claudia",
    job: 'Empresária',
    img: 'https://etalent.com.br/wp-content/uploads/2017/03/Mulheres-de-sucesso-dia-internacional-mulher-Ana-Claudia-Venturini-180x300.jpg',
    text: 'OI Eu estou fazendo um teste para ver se esta funcionando'
},
{
    id: 2,
    name: "Paulo Hernane",
    job: 'Programador',
    img: 'https://etalent.com.br/wp-content/uploads/2017/03/Mulheres-de-sucesso-dia-internacional-mulher-Mirna-Schleder-180x300.jpg',
    text: 'OI Eu estou fazendo um teste para ver se esta funcionando'
},
{
    id: 3,
    name: "João Pedro",
    job: 'Estudante',
    img: 'https://i.pinimg.com/564x/83/80/21/838021fee71490b45080944d6f1575e2.jpg',
    text: 'OI Eu estou fazendo um teste para ver se esta funcionando.....'  
}]

//selecionar os itens

const img = document.getElementById('person-img');
const author= document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//definir item inicial
let currentItem = 0;

// carregamento do item inicial
window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem);
});

// show person based on item

function showPerson(person){
    const item = reviews[currentItem]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}

// show next person
nextBtn.addEventListener('click', function () {
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0
    }
    showPerson(currentItem)
})

//show prev person
prevBtn.addEventListener('click', function () {
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem)
})

//show random btn

randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson(currentItem)

})

