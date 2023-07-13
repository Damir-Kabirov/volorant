const cards =document.querySelector('.cards')
const allCart = cards.querySelectorAll('.card-hero')
const items =  fetch('data.json').then(res=>res.json()).then((data)=>{return data.hero})
const skilsContainer = document.querySelector('.skils')
const burger = document.querySelector('.burder-menu')
const menu = document.querySelector('.nav')
skilsContainer.innerHTML =''

function renderSkill(heroes,id){
    heroes.forEach(hero=>{
        if(hero.name===id){
            getSkil(hero)
        }
    })
}

function getSkil(hero) {
    let html =''
    const skils = hero.skil
    skils.map(skil=> {
      html+=toCard(skil)
    } )
   skilsContainer.innerHTML=html
}
function toCard(skil){

    return `
    <div class="skil-cart">
    <div class="skil__info">
      <p class="skil__type">Skill</p>
      <h5 class="skil__name">${skil.name}</h5>
      <p class="skil__discription">${skil.disrtiption}</p>
    </div>
    <div class="skil__logo">
      ${skil.img}
    </div>
  </div>
    `
    
}

cards.addEventListener('click',(e)=>{
    const parent = e.target.closest('div')
    const cart = e.target.closest('.card-hero')
    if(parent.classList.contains('card-hero')||parent.classList.contains('card__text')){
        allCart.forEach(el => {
            const cartName = el.querySelector('.hero__name')
            cartName.classList.remove('hero__name--active')
            el.classList.remove('card-hero--active')
            if(el.id==cart.id){
                el.classList.add('card-hero--active')
                cartName.classList.add('hero__name--active')
            }
       });
       items.then(arr=>{
        console.log(cart.id)
        renderSkill(arr,cart.id)
    })

    }
    
})
burger.addEventListener('click',()=>{
  menu.classList.toggle('db')
})



