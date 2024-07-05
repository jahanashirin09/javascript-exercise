const btn=document.getElementById("root");

function greeting(){
    const name=prompt("what is your name");
    const whishing=document.querySelector("#greet");
    whishing.textContent=`hello${name} ,nice to meet you`;
}
btn.addEventListener("click",greeting);