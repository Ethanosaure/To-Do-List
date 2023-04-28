export function save_tasks() {
  const taskList = document.querySelectorAll("li");
  const tasks = [];
  for (let i = 0; i < taskList.length; i++) {
    const task = {
      id: taskList[i].getAttribute("id"),
      text: taskList[i].querySelector("span").innerText,
      checked: taskList[i].querySelector("input").checked,
    };
    tasks.push(task);
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
