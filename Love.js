let yes = document.getElementById("yes");
let no = document.getElementById("no");
let msg = document.getElementById("msg");

no.addEventListener("mouseover",()=>{
    no.style.position="absolute";
    no.style.top= Math.floor(Math.random()*40) + "vh";
    no.style.right= Math.floor(Math.random()*40) + "vw";
    

})

yes.addEventListener("click",()=>{
    msg.style.display="block";
})


msg.addEventListener("click",()=>{
     msg.style.display="none";
     no.style.display="none";
})