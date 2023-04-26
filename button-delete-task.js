export function buttonDeleteTask(task) {
  task.remove();
  console.log(`deleting task: ${task.getAttribute("id")}`);
}
