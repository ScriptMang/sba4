let taskButton = document.getElementById("addTaskButton");
let taskInput = document.getElementById("taskInput");
let categoryInput = document.getElementById("categoryInput");
let deadlineInput = document.getElementById("deadlineInput");
let initialStatusInput = document.getElementById("initialStatusInput");

taskButton.addEventListener("click", function(){
    let inputFields = [taskInput, categoryInput, deadlineInput, initialStatusInput];
    for (let inputField of inputFields) {
        if (inputField.value === "") {
            alert("No input field can be empty");
            return;
        }
    }
});