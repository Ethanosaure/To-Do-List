export function DeleteBtn() {
  const Del = document.getElementById("DelBtn");

  Del.addEventListener("click", DeleteTask);
  function DeleteTask() {
    remove();
  }
}
