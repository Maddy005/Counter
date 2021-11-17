var change = document.getElementById("input");
var btn1 =document.getElementById("a");
var btn2 =document.getElementById("b");
var incr= 0;

btn1.addEventListener('click',()=>{

incr++;
console.log(incr);
document.getElementById("input").innerHTML=incr;

if(btn1.style.color="red"){
    btn2.style.color="white";
    change.style.color="yellow";
}
});
btn2.addEventListener('click',()=>{
    
    incr--;
    console.log(incr);
    document.getElementById("input").innerHTML=incr;
    if(btn2.style.color="red"){
        btn1.style.color="black";
        change.style.color="red";
    }
});


    
