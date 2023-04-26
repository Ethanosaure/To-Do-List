export function Edit(span, editId, checkbox) {
  const edittext = document.createElement("input");
  edittext.setAttribute("type", "text");
  edittext.setAttribute("id", editId);
  edittext.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
      console.log(event);
      span.innerText = edittext.value;
      return;
    }
  });
  span.appendChild(edittext);
}
