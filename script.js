var randomBox;
var toplamPuan=0;
var boxCount=12;
function start(){

    for(let i=1;i<=boxCount;i++){
        var div=document.createElement("div");
        div.setAttribute("class","box");
        div.setAttribute("id","box"+i);
        div.boxNumber=i;
        div.onclick=function () {
            boxClick(this.boxNumber);
        };
      document.getElementById("box-container").appendChild(div);
    }
    startTimer();
    setNewColor();
}

function setNewColor() {

    do {
       var randomColor1 = getRandomColor();
       var randomColor2 = getRandomColor();
    }while(randomColor1===randomColor2);

    let i=1;
    while(i<=12){
        boxColor(i,randomColor1);
        i++;
    }
    randomBox = randomInt(1,12);
    boxColor(randomBox,randomColor2);
    textColor(randomColor2);

}

function boxColor(boxID,colorId){
    document.getElementById("box"+boxID).style.background=colorId;
}

function getRandomColor() {
    var hex = '0123456789ABCDEF';
    var color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function boxClick(boxId) {
    if(boxId===randomBox) {
        $.notify("Dogru! +20 Puan",
            {
              className: "success",
              autoHideDelay:1000
            });
        $("#timer").notify(
                "+1",
                { position:"left",
                    className:"success",
                    autoHideDelay:1000
                }
            );
        counter++;
        puanHesaplama(+20);
        setNewColor();
    }
    else{
        $.notify("Yanlis!! -30 Puan",
            {
                className: "error",
                autoHideDelay:1000
            });
        $("#timer").notify(
            "-5",
            { position:"left",
                className:"error",
                autoHideDelay:1000,
            }
        );
        counter-=5;
        puanHesaplama(-30);
        setNewColor();
    }
}

function puanHesaplama(puan){
   if(toplamPuan+puan<0) {
       toplamPuan =0;
       document.getElementById("puan").innerHTML = "Toplam Puaniniz = " + toplamPuan;
   }
   else
   {
       toplamPuan += puan;
       document.getElementById("puan").innerHTML = "Toplam Puaniniz = " + toplamPuan;
   }
}
//change score textcolor
function textColor(colorId){
    document.getElementById("puan").style.color=colorId;
}

//timer function
var counter =30;
function startTimer() {
    document.getElementById("timer").innerHTML=counter;
    setInterval(timeIt, 750);

    function timeIt() {
        counter--;
        if (counter <= 0) {
            swal({
                title: "Oyun Bitti!",
                text: "Toplam Puan= "+toplamPuan ,
                icon: "error",
                button: "Yeni Oyun!",
                closeOnClickOutside: false,
            }).then((yeniOyun)=>{
                    if(yeniOyun){
                        location.reload();
                    }
                });
        }
        else {
            document.getElementById("timer").innerHTML = counter;
        }
    }
}
