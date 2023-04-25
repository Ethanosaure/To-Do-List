export function addList() {
  const AddButton = document.getElementById("Add");
  // Add event listener to add task each time when click on Add
  AddButton.addEventListener("click", AddingTask);
  function AddingTask() {
    let Del = document.createElement("button");
    Del.setAttribute("class", "DelBtn");
    let li = document.createElement("li");
    let span = document.createElement("span");
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    const NewTask = document.getElementById("NewTask").value;
    const ul = document.getElementById("added-ul");

    // Create an Id for each li item
    const ListItems = document.querySelectorAll("li");
    ListItems.forEach((items, index) => {
      items.setAttribute("id", `Task${index}`);
    });

    // Create an Id for each Delete Button
    const ListBtn = document.querySelectorAll("button");
    ListBtn.forEach((item, index) => {
      item.setAttribute("id", `DelBtn${index}`);
    });

    // Write an alert message if there's nothing inside the input
    if (NewTask === "") {
      alert("write something");

      // Create the Task with his buttons and checkboxes
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
