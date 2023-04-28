export function Check(checkboxId, checkbox, li, Del) {
  // giving tasks a class name when checked
  checkbox.classList.toggle(checkboxId);
  const Done = document.getElementById("Done-ul");
  const ToDo = document.getElementById("added-ul");

  //   if no class, append in to do tasks
  if (checkbox.classList == 0) {
    ToDo.appendChild(li);
    Del.style.display = "none";

    return;
  }
  // if class, append in done tasks
  Done.appendChild(li);
  Del.style.display = "inline";
}
