
// var menu = document.getElementById('menu');
// var menuJS = document.getElementById('menu-js');
// menuJS.onclick = function (){
//     console.log()
    // var isColosed = menu.clientLeft === 300;
    // if(isColosed){
    //     menu.style.left = 'auto'
    // }else{
    //     menu.style.left = '999px'
    // }
    var co = true 
    $('.icon-responsive').click(function(){
        if(co){
            $('.menu').css({
                'margin-left': '0px'
            })
            Co = false
        } else {
            $('.menu').css({
                'margin-left': '-1000px'
            })
            co = truse
        }
    })