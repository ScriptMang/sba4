let taskButton = document.getElementById("addTaskButton");
let taskInput = document.getElementById("taskInput");
let categoryInput = document.getElementById("categoryInput");
let deadlineInput = document.getElementById("deadlineInput");
let statusInput = document.getElementById("statusInput");

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
    console.log(task);
});