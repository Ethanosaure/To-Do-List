import { buttonDeleteTask } from "./button-delete-task.js";

export function buttonDeleteTasks() {
  const taskList = document.querySelectorAll("li");
  if (!taskList.length) {
    alert("no task to delete");
    return;
  }
  taskList.forEach((task) => buttonDeleteTask(task));
  console.log(`deleting all tasks`);
}
