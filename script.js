import { buttonAddTask } from "./button-add-task.js";
import { buttonDeleteTasks } from "./button-delete-tasks.js";

const buttonAdd = document.getElementById("Add");
buttonAdd.addEventListener("click", buttonAddTask);

const buttonDeleteAll = document.getElementById("deleteAll");
buttonDeleteAll.addEventListener("click", buttonDeleteTasks);
