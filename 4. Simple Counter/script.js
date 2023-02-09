
let timer = 0;
var number = 0;


function baslat(){


        timer = setInterval(function() {
            number++;
            document.getElementById("number").innerText = number;
        },1000);


}

function sifirla(){
    
    clearInterval(timer);
    number = 0;
    document.getElementById("number").innerText = number;

}

