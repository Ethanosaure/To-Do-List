export function addList() {
  const AddButton = document.getElementById("Add");
  AddButton.addEventListener("click", AddingTask);
  function AddingTask() {
    let Del = document.createElement("button");
    Del.setAttribute("id", "DelBtn");
    let li = document.createElement("li");
    let span = document.createElement("span");
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    const NewTask = document.getElementById("NewTask").value;
    const ul = document.getElementById("added-ul");
    if (NewTask === "") {
      alert("write something");
    } else {
      span.innerText = NewTask;
      Del.innerText = "X";
      span.appendChild(checkbox);
      li.appendChild(Del);
      span.appendChild(Del);
      li.appendChild(span);
      ul.appendChild(li);
    }
  }
}
