function reset() {
    var ele = document.getElementsByClassName("cards");
    for(var i = 0; i < ele.length; i++){
        ele[i].src = "./Images/back.png";
    }
}

var temp = [];
var count =  0;
function handleImage(e) {
    if(count < 2){
    count++;
    temp.push(e.id);
    if(e.src.indexOf("back")=== -1){
        e.src="./Images/back.png";
    }
    else {
        e.src="./Images/" + e.id + ".png";
    }
    setTimeout(()=>{
        if(temp[0].indexOf(temp[1]) !== -1 || temp[1].indexOf(temp[0]) !== -1){
            document.getElementById(temp[0]).style.display="none";
            document.getElementById(temp[1]).style.display="none";
        }
        temp.length = 0;
        this.reset();
        count = 0;
    },1500);
    }
}

function shuffle(arr) {
    arr.sort(()=>Math.random()-0.5);
}

function doShuffle() {
    var arr = [1, 2, 3, 11, 22, 33];
    var trEl = document.getElementById("elements");
    trEl.innerHTML="";
    shuffle(arr);
    for(var i = 0; i < arr.length; i++){
        trEl.innerHTML += '<td width="14%"><img id="'+arr[i]+'" class="cards" width="100%" src="./Images/back.png" onclick="javascript: handleImage(this)"/></td>'
    }
}

