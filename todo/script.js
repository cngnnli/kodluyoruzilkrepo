let newItem = document.getElementById('list')
let addInput = document.getElementById('task')
let liItem = document.querySelectorAll(".nonClickeds");
let tickies = document.querySelectorAll(".tick")

function newElement(){
    if (addInput.value === "" || addInput.value === NaN || addInput.value === null || addInput.value[0].charCodeAt() == 32){
        alert("Boş ekleme yapamazsınız!")
    } else {
        let newItem = document.getElementById('list')
        var newEl = document.createElement('li')
        newEl.innerHTML = `${addInput.value}<span class="closebtn" onclick="this.parentNode.remove()">&times;</span>`
        newEl.classList.add("nonClickeds")
        newEl.setAttribute("onclick","change()");
        newItem.appendChild(newEl)
        liItem = document.querySelectorAll(".nonClickeds");
    
    }
}



// function newElement(){
//     let newItem = document.getElementById('list')
//     var newEl = document.createElement('li')
//     newEl.innerHTML = `${addInput.value}<span class="closebtn" onclick="this.parentNode.remove()">&times;</span>`
//     newEl.classList.add("nonClickeds")
//     newEl.setAttribute("onclick","change()");
//     newItem.appendChild(newEl)
//     liItem = document.querySelectorAll(".nonClickeds");
    
// }


function change(){
    liItem.forEach(items => {
        items.addEventListener("click", addClass)
    
        function addClass(){
            if (items.className.search("clicked")==-1){
                items.classList.add("clickeds")
            } else {
                items.classList.remove("clickeds")
            }
    
            
        }
    })

}




