export function localstorage(task_array) {
  localStorage.setItem("task", JSON.stringify(task_array));
}
