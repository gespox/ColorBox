var randomBox;
var toplamPuan=0;
function start(){
   while(randomColor1==randomColor2) {
       var randomColor1 = randomInt(1, 4);
       var randomColor2 = randomInt(1, 4);
   }

    var i=1;
    while(i<=4){
        boxColor(i,randomColor1);
        i++;
    }
    window.randomBox = randomInt(1,4);
    boxColor(randomBox,randomColor2);
}

function boxColor(boxID,colorId){
    document.getElementById("box"+boxID).style.background=colors(colorId);
}
function colors(colorId){
    if (colorId==1)
        return "rgb(247, 61, 89)";
    else if(colorId==2)
        return "rgb(88, 67, 242)";
    else if(colorId==3)
        return "rgb(74, 234, 239)";
    else if(colorId==4)
        return "rgb(74, 239, 137)";
    else if(colorId==5)
        return "rgb(214, 239, 74)";
}
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function boxClick(boxId) {

    if(boxId==window.randomBox) {
        alert("Dogru kutu  +20 puan")
        puanHesaplama(+20)
        start();
    }
    else{
        alert("Yanlis kutuya tikladiniz -20 puan")
        puanHesaplama(-20);
        start();
    }
}
function puanHesaplama(puan){

    window.toplamPuan+=puan;
    document.getElementById("puan").innerHTML="Toplam Puaniniz = "+window.toplamPuan;

}