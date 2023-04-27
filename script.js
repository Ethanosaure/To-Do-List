import { buttonAddTask } from "./button-add-task.js";
import { buttonDeleteTasks } from "./button-delete-tasks.js";

// Add button
const buttonAdd = document.getElementById("Add");
buttonAdd.addEventListener("click", buttonAddTask);
// buttonAdd.addEventListener("click", localstorage);

// deleteAll button
const buttonDeleteAll = document.getElementById("deleteAll");
buttonDeleteAll.addEventListener("click", buttonDeleteTasks);
