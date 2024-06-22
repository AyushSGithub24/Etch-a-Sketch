const container = document.querySelector(".container");
let n = 16, count = 0;
let colour = "black";
const boxSize = document.querySelector("#BoxSize");
const clourPicker = document.querySelector("#clourPicker");
const clear=document.getElementById("CLEAR");
const random=document.getElementById("random");

function createGrid() {
    for (let index = 0; index < n; index++) {
        let divRow = document.createElement("div")
        divRow.className = "row";
        container.appendChild(divRow)
        for (let i = 0; i < n; i++) {
            let divCol = document.createElement("div");
            divCol.id = count++
            divCol.className = "coloums"
            divCol.addEventListener("mouseenter", () => {
                divCol.style.backgroundColor = colour;
            })
            divRow.appendChild(divCol)
        }
    }
}
function deletegrid() {
    while (container.childElementCount != 0) {
        container.removeChild(container.lastElementChild);
    }
}
 
  

// start
clear.addEventListener("click",()=>{
    location.reload();
})
createGrid();
clourPicker.addEventListener("change", () => {
    colour = clourPicker.value;
    for (let i = 0; i < count; i++) {
        let k = document.getElementById(i);
        k.addEventListener("mouseenter", () => {
            k.style.backgroundColor = colour;
        })
    }

})
boxSize.addEventListener("change", () => {
    n = boxSize.value
    if(n>150){
        alert("Invalid Box Size")
    }else{
    deletegrid();
    createGrid();
    }

})
random.addEventListener("click",()=>{
    for (let i = 0; i < count; i++) {
        let k = document.getElementById(i);
        k.addEventListener("mouseenter", () => {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            k.style.backgroundColor =`rgb(${r}, ${g}, ${b})`;
        })
    }

})





