var hamb= document.querySelector(".hamburguer")         
var fecharMenu = document.querySelector(".fechar");
var menuFechar = document.querySelector(".menu-hamb");
var body = document.querySelector("body")
hamb.addEventListener("click", function(){
         menuFechar.classList.remove("classeadd")
          hamb.style.display="none"
          fecharMenu.style.display="block"
     })

    fecharMenu.addEventListener("click",function(){
        fecharMenu.style.display="none"  
        hamb.style.display="block"
        menuFechar.classList.add("classeadd")


    })
