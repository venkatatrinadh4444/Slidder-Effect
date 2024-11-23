let cards=document.querySelectorAll('.card')

for(let card of cards) {
    card.addEventListener('click',()=> {
        resizeFlex()
        card.classList.add('active')
    })
}

let resizeFlex=()=> {
    for(let card of cards){
        card.classList.remove('active')
    }   
}