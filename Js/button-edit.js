export function Edit(span, editId) {
  const input = document.getElementsByClassName("editInput");
  console.log(input.length);
  if (!input.length) {
    const edittext = document.createElement("input");
    edittext.setAttribute("type", "text");
    edittext.setAttribute("id", editId);
    edittext.classList.add("editInput");
    edittext.addEventListener("keydown", (event) => {
      if (event.keyCode === 13 && !edittext.value) {
        span.innerText = span.innerText;
      } else if (event.keyCode === 13 && edittext.value) {
        span.innerText = edittext.value;
      }
    });
    span.appendChild(edittext);
  }
}
