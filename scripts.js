let count = 0;
let width = 250;
let punchedView  = document.getElementById("punchedView")
punchedView.style.width = width+"px";
const punched =()=>{
    count++;
    console.log(width)
    if(count==5){
        width=width-50;
        punchedView.style.width =width+"px";
       let image = document.getElementById("image");
       image.src="images/broken.jpeg";
    }
    else{
        width=width-50;
        punchedView.style.width =width+"px";
    }
}
const replaced =()=>{
    console.log(width)
    let image = document.getElementById("image");
    image.src="images/normal.jpeg"
    count=0;
    width=250;
    punchedView.style.width = width+"px";
}
let punch = document.getElementById("punch")
punch.addEventListener("click",punched)

let replace = document.getElementById("replace")
replace.addEventListener("click",replaced)