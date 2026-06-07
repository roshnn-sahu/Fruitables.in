//active button function -------
let filterBtn = document.querySelectorAll(".cetogery button");
let cards = document.querySelectorAll(".fruit-list");
console.log(filterBtn)
console.log(cards)

let filterCards= event =>{
    document.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");
    console.log(event.target)

    cards.forEach(fruitcards=>{
        fruitcards.classList.add("hide")

        if(fruitcards.dataset.name===event.target.dataset.name||event.target.dataset.name==="all"){
            fruitcards.classList.remove("hide");
        }
    })


}

 filterBtn.forEach(button => button.addEventListener("click",filterCards));
