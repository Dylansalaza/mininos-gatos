const menu = document.querySelector(".menu");
const menui = document.querySelector(".menu-navegacion");

za//console.log(menui)
//console.log(menu)


menu.addEventListener("click", ()=>{
    menui.classList.toggle("spread")
})


window.addEventListener("click", e=>{
    if(menui.classList.contains("spread") && e.target != menui && e.target !=menu  ){

        menui.classList.toggle("spread")
    }

})

const 