// Full Working Code for a To-Do List with Local Storage in JavaScript
// This code is designed to run in a browser environment with an HTML interface

// Function to add a task
function addTask(task) {
    if (!task) {
        alert("Task cannot be empty!");
        return;
    }

    let tasks = getTasks(); // Retrieve current tasks from local storage
    tasks.push(task); // Add the new task to the list
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save updated tasks back to local storage
    displayTasks(); // Refresh the task list display
}

// Function to retrieve tasks from local storage
function getTasks() {
    let tasks = localStorage.getItem("tasks"); // Get tasks as a JSON string
    return tasks ? JSON.parse(tasks) : []; // Parse tasks into an array or return an empty array if no tasks
}

// Function to remove a task
function removeTask(index) {
    let tasks = getTasks(); // Retrieve current tasks
    tasks.splice(index, 1); // Remove the task at the specified index
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save updated tasks
    displayTasks(); // Refresh the task list display
}

// Function to display tasks in the UI
function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear the current task list

    let tasks = getTasks(); // Retrieve tasks from local storage

    tasks.forEach((task, index) => {
        const li = document.createElement("li"); // Create a list item for each task
        li.textContent = task;

        // Create a delete button for the task
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => removeTask(index); // Set the click event to remove the task

        li.appendChild(deleteButton); // Add the delete button to the list item
        taskList.appendChild(li); // Add the list item to the task list
    });
}

// Attach event listener to the add task button
const addTaskButton = document.getElementById("addTaskButton");
addTaskButton.onclick = () => {
    const taskInput = document.getElementById("taskInput");
    addTask(taskInput.value); // Add the task entered in the input field
    taskInput.value = ""; // Clear the input field
};

// Display tasks on page load
window.onload = displayTasks;
