function addTask() {
    var taskInput = document.getElementById("taskInput");
    var dueDate = document.getElementById("dueDate");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value;
    var date = dueDate.value;
    if (taskText.trim() !== "") {
        var li = document.createElement("li");
        li.innerHTML = `<span>${taskText}</span> <span>${date}</span> <button onclick="removeTask(this)">Remove</button> <button onclick="toggleCompleted(this)">Complete</button>`;
        taskList.appendChild(li);
        taskInput.value = "";
        dueDate.value = "";
    } else {
        alert("Please enter a task!");
    }
}

function removeTask(taskElement) {
    taskElement.parentNode.remove();
}

function toggleCompleted(button) {
    var task = button.parentNode.querySelector('span');
    task.classList.toggle('completed');
}
