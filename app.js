let taskButton = document.getElementById("addTaskButton");
let taskInput = document.getElementById("taskInput");
let categoryInput = document.getElementById("categoryInput");
let deadlineInput = document.getElementById("deadlineInput");
let statusInput = document.getElementById("statusInput");
let list = document.getElementById('taskList');


function emptyInputFields(fields) {
    for (let field of fields){
        field.value = "";
    }
}

const taskList = [];
taskButton.addEventListener("click", function(){
    let inputFields = [taskInput, categoryInput, deadlineInput, statusInput];
    for (let inputField of inputFields) {
        if (inputField.value === "") {
            alert("No input field can be empty");
            return;
        }
    }
    let task = {
        name: taskInput.value,
        category: categoryInput.value,
        deadline: deadlineInput.value,
        status:statusInput.value 
    };
    // console.log(task);
    taskList.push(task);
    // let taskCount = 0;
    // for (let task of taskList) {
    //     console.log(`task${++taskCount}: \n` + Object.values(task));
    // }
    displayList();
    emptyInputFields(inputFields);
});

function displayList() {
    list.textContent = "";
    let taskCount = 0;
    for(let task of taskList){
       
        let listItem = document.createElement("li");
        let updateStatusButton = document.createElement("button");
        updateStatusButton.textContent = 'done';
       
        let spanStatus = document.createElement("span");
        spanStatus.textContent = task['status'];
        spanStatus.style = task['status'] !== "done" ? 'color: red;': 'color: green';
       
        listItem.textContent = `Task${++taskCount}: `+ task['name'] + ' ' + 
        task['category'] + ' ' + task['deadline']+'sec' + ' ';
       
        listItem.appendChild(spanStatus);
        listItem.appendChild(updateStatusButton);
        list.appendChild(listItem);
       
        updateStatusButton.addEventListener('click', function(){
            task['status'] = 'done';
            displayList();
        })
    }
}