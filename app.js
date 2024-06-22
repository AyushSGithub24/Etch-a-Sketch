const container = document.querySelector(".container");

let n = 64, count = 0;

for (let index = 0; index < n; index++) {
    let divRow = document.createElement("div")
    divRow.className = "row";
    container.appendChild(divRow)
    for (let i = 0; i < n; i++) {
        let divCol = document.createElement("div");
        divCol.id = count++
        divCol.className = "coloums"
        divCol.addEventListener("mouseenter",()=>{
            divCol.style.backgroundColor="black";
        })
        divRow.appendChild(divCol)
    }

}








