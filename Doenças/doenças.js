const burger = document.getElementById('burger')
burger.addEventListener("click" ,  function()
{
    if(document.querySelector('.navMobile').style.transform == "translateX(0px) scale(1)"){
    document.querySelector('.navMobile').style.transform = "translateX(100%) scale(0)"
}
    else{
        document.querySelector('.navMobile').style.display = "inline"
        document.querySelector('.navMobile').style.transform = "translateX(0) scale(1)"
    }
})