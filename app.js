const taskButton = document.getElementById("addTaskButton");
const taskInput = document.getElementById("taskInput");
const categoryInput = document.getElementById("categoryInput");
const deadlineInput = document.getElementById("deadlineInput");
const statusInput = document.getElementById("statusInput");
const list = document.getElementById('taskList');
const filterButton = document.getElementById('filterTasksButton');
const resetButton = document.getElementById('resetFilterButton');
const filterChoice = document.getElementById('filterSelect');
const filterSearch = document.getElementById('filterSearch');

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
    const task = {
        name: taskInput.value,
        category: categoryInput.value,
        deadline: deadlineInput.value,
        status:statusInput.value, 
        startTime: Date.now()
    };
    taskList.push(task);
    displayList(taskList);
    emptyInputFields(inputFields);
});

let filterList=[];
function filterForStatus(search, taskList){
    filterList = [];
    for (let task of taskList) {
        if (task['status'] === search){
            filterList.push(task);
        }
    }
    displayList(filterList)
}

function filterForCategory(search, taskList){
    filterList = [];
    for (let task of taskList) {
        if (task['category'] === search){
            filterList.push(task);
        }
    }
    displayList(filterList)
}

// assumes the task list has list-items
filterButton.addEventListener("click", () => {
    const search = filterSearch.value
    switch (filterChoice.value){
        case "status":
            console.log('Filter for status');
            filterForStatus(search, taskList);
            break;
        case "category":
            console.log('Filter for category');
            filterForCategory(search, taskList);
            break;
        }    
});

resetButton.addEventListener("click", () =>{
    displayList(taskList);
})

function displayList(taskList) {
    list.textContent = "";
    let taskCount = 0;
    for(let task of taskList){
       
        // create list-item and the done button
        const listItem = document.createElement("li");
        const updateStatusButton = document.createElement("button");
        updateStatusButton.textContent = 'done';
       
        // create task status
        const spanStatus = document.createElement("span");
        spanStatus.textContent = task['status'];
        const elapsedTime = Date.now() - task['startTime'];
        const deadlineMs = task['deadline'] * 1000;
       
        // color the task red if overdue
        if (elapsedTime > deadlineMs && task['status'] === 'in progress'
             || task['status'] === 'OverDue') {
            task['status'] = 'OverDue';
            spanStatus.textContent = task['status'];
            spanStatus.style = 'color: red;';
        } else if (task['status'] !== 'OverDue') {
            spanStatus.style = task['status'] !== "done" ? 'color: black;': 'color: green';
        }
        listItem.textContent = `Task${++taskCount}: `+ task['name'] + ' ' + 
        task['category'] + ' ' + task['deadline']+'sec' + ' ';
       
        // add task components to the task and add the task to list
        listItem.appendChild(spanStatus);
        listItem.appendChild(updateStatusButton);
        list.appendChild(listItem);
       
        // sets the task's status to done and refresh the list
        updateStatusButton.addEventListener('click', function(){
            task['status'] = 'done';
            displayList(taskList);
        })
    }
}


