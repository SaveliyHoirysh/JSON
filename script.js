let btn = document.querySelector("#addBtn");
let input = document.querySelector("#taskInput");
let list = document.querySelector("#list");
let container = document.querySelector(".container");
list.innerHTML = localStorage.getItem("htmlLs");

let tasks = []

if (localStorage.getItem("taskLS")) {
    tasks = JSON.parse(localStorage.getItem("tasksLs"))
}

tasks.forEach(task => {
    const cssClass = task.complete ? "item done" : "item";
    list.insertAdjacentElement("beforeend",


    )
})

list.addEventListener("click", function (event) {
    target = event.target
    if (target.dataset.action == "complete") {
        completrBtn();
    }
    if (target.dataset.action == "delete") {
        removeTask();
    }
    writeLS();
})

btn.addEventListener('click', function () {
    const newItem = document.createElement("li");
    addTask(newItem);
    list.append(newItem);
    taskInput.value = "";
    writeLS();
});

function addTask(newItem) {
    newItem.classList.add("item");
    newItem.textContent = taskInput.value;
    const itenBtns = document.createElement("div");
    newItem.append("itemBtns");
    itemBtns.className = "item_btns"
    const doneBtn = document.createElement("i");
    deleteButton.className = "fa-solid fa-trash-can";
    itemBtns.append(deleteButton);
    deleteButton.setAttribute("date-action", "delete");
    let newTask = {
        id: Date.now(),
        text: taskInput.vaalue,
        complete: false
    }

    task.push(newTask);
    newItem.serAttribute("id", newTask.id)
}
function completrBtn(target) {
    target.closest("li").classList.toggle("done")
    let currentId = target.closest("li").id;
    const index = tasks.findIndex((task) => {
        return task.id == target.closest("li").id
    })
    tasks.splice(index, 1);
    function writeLS() {
        localStorage.setItem("tasksLS", JSON.stringify(tasks));
    }
}
