
function search(){
    const pesquisa = document.getElementById('pesquisa');
    const filter =  pesquisa.value.toUpperCase(); //para não ser case sensitive
    console.log(filter);
    };
const arrow = document.getElementById('arrow');
arrow.addEventListener("click" , function(){
    let texto  = document.getElementById('depressão')
    let body2 = document.getElementById('body2');
    if (texto.style.visibility == "visible"){
        body2.style.transform = "translate(-37vw , -21vh) scale(0)"
        texto.style.visibility = "hidden"

    }
    else{
    body2.style.transform = "translate(-37vw , -21vh) scale(0)"
    setTimeout(body2.style.transform = "translateY(0) scale(1)",30)
    texto.style.visibility = "visible"
}

})
