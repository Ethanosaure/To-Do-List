export function addList() {
  const AddButton = document.getElementById("Add");
  // Add event listener to add task each time when click on Add
  AddButton.addEventListener("click", AddingTask);
  function AddingTask() {
    // Creating Every Elements
    let Del = document.createElement("button");
    Del.setAttribute("class", "DelBtn");
    Del.setAttribute("type", "button");
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
    const ListBtn = document.querySelectorAll("button[type='button'");
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
      li.appendChild(span);
      ul.appendChild(li);

      // Function that delete the li when the delete button is clicked
      // Del.addEventListener("click", () => {
      //   li.remove();
      // });
    }
  }
}
