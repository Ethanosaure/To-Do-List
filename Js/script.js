import { buttonAddTask } from "./button-add-task.js";
import { buttonDeleteTasks } from "./button-delete-tasks.js";
import { localstorage_load } from "./localStorage-load.js";
import { save_tasks } from "./localstorage-add.js";
import { localstorage_clear } from "./localstorage_clear.js";

// Add button
const buttonAdd = document.getElementById("Add");
buttonAdd.addEventListener("click", buttonAddTask);

// LocalStorage clear
const buttonLocalStorage = document.getElementById("LocalStorage");
buttonLocalStorage.addEventListener("click", localstorage_clear);

// LocalStorage Save
const buttonSave = document.getElementById("SaveTasks");
buttonSave.addEventListener("click", save_tasks);

// deleteAll button
const buttonDeleteAll = document.getElementById("deleteAll");
buttonDeleteAll.addEventListener("click", buttonDeleteTasks);

localstorage_load();
