const form = document.querySelector(".form");
const input = document.querySelector(".input");
const ul = document.querySelector(".list");

let saved = JSON.parse(localStorage.getItem("saved")) ;
if (saved){
    saved.forEach((task) => {
        toDo(task)
    })
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    toDo();
})



function toDo(task){
    newTask = input.value;
    if (task){
        newTask = task.name;
    }
    const li = document.createElement("li");
    if (task && task.checked){
        li.classList.add("checked");
    }
    ul.appendChild(li);
    li.innerText = newTask;
    input.value = "";

    const ok = document.createElement("div");
    ok.innerHTML = `<i class="fa-solid fa-square-check"></i>`;
    li.appendChild(ok);
    
    const trash = document.createElement("div");
    trash.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    li.appendChild(trash);

    ok.addEventListener("click", () => {
        li.classList.toggle("checked")
    lockS();

    })
    trash.addEventListener("click", () => {
        li.remove()
    lockS();

    })
    lockS();
}

function lockS(){
    let saved = [];
    const lis = document.querySelectorAll("li");
    lis.forEach((li) => {
        saved.push({
            name: li.innerText,
            checked: li.classList.contains("checked"),
        })
    })
    localStorage.setItem("saved", JSON.stringify(saved))
}  









































