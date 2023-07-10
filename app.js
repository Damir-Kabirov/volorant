const cards =document.querySelector('.cards')
const allCart = cards.querySelectorAll('.card-hero')
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
    }
    
})