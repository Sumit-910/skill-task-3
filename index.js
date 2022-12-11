const count = document.getElementById("count");
let colour = document.getElementById('mainB');
const plus = document.getElementById("pl");
const minus = document.getElementById("mi");
count.value = 0;
const changeColor = () =>{
    if(count.value%2!==0){colour.style.backgroundColor = "green";}
    else{colour.style.backgroundColor = "red";}
    console.log(count.value, colour.style.backgroundColor);
}
plus.addEventListener("click",() =>{
    count.value+=1;
    count.innerHTML = count.value;
    changeColor();
})
minus.addEventListener("click",() =>{
    count.value-=1;
    count.innerHTML = count.value;
    changeColor();
})