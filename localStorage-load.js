export function localstorage_load() {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks) {
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      const li = document.createElement("li");
      li.setAttribute("id", task.id);
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("id", `checkbox_${i}`);
      checkbox.checked = task.checked;
      checkbox.addEventListener("click", () =>
        Check(checkbox.id, checkbox, li)
      );
      const span = document.createElement("span");
      span.innerText = task.text;
      const Del = document.createElement("button");
      Del.setAttribute("class", "DelBtn");
      Del.setAttribute("type", "button");
      Del.setAttribute("id", `DelBtn${i}`);
      Del.innerText = "X";
      Del.addEventListener("click", () => buttonDeleteTask(li));
      const edit = document.createElement("button");
      edit.setAttribute("class", "edit");
      edit.setAttribute("type", "button");
      edit.setAttribute("id", `edit_${i}`);
      edit.innerText = "Edit";
      edit.addEventListener("click", () => Edit(span, edit.id));
      li.appendChild(edit);
      li.appendChild(checkbox);
      li.appendChild(Del);
      li.appendChild(span);
      document.getElementById("added-ul").appendChild(li);
    }
  }
}
