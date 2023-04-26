import { buttonDeleteTask } from "./button-delete-task.js";

export function buttonAddTask() {
  // Write an alert message if there's nothing inside the input
  const NewTask = document.getElementById("NewTask").value;
  if (!NewTask) {
    alert("write something");
    return;
  }

  // Get index of task
  const ListItems = document.querySelectorAll("li");
  const index = ListItems.length ? ListItems.length : 0;

  // Setup li (task)
  const taskId = `task_${index}`;
  let li = document.createElement("li");
  li.setAttribute("id", taskId);

  // Creating Every Elements
  // Setup Delete Button
  let Del = document.createElement("button");
  Del.setAttribute("class", "DelBtn");
  Del.setAttribute("type", "button");
  Del.setAttribute("id", `DelBtn${index}`);
  Del.addEventListener("click", () => buttonDeleteTask(li));

  let span = document.createElement("span");

  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  const ul = document.getElementById("added-ul");

  // Super stuff
  span.innerText = NewTask;
  Del.innerText = "X";
  span.appendChild(checkbox);
  li.appendChild(Del);
  li.appendChild(span);
  ul.appendChild(li);
}
