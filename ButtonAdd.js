export function addList() {
  const AddButton = document.getElementById("Add");

  AddButton.addEventListener("click", AddingTask);
  function AddingTask() {
    let Del = document.createElement("button");
    Del.setAttribute("id", "DelBtn");
    let li = document.createElement("li");
    li.setAttribute("id", "added-list");
    let span = document.createElement("span");
    const NewTask = document.getElementById("NewTask").value;
    const ul = document.getElementById("added-ul");
    if (NewTask === "") {
      alert("write something");
    } else {
      span.innerText = NewTask;
      span.appendChild(Del);
      li.appendChild(span);
      ul.appendChild(li);
    }
  }
}
