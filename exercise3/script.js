const btn=document.getElementById("root");
btn.addEventListener("click",whishing);
function whishing(){
    const greeting=document.querySelector("#greet");
    greeting.textContent="hiii guys";
}