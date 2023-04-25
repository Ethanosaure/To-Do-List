export function DeleteBtn() {
  const listitems = document.querySelectorAll("li");

  listitems.forEach((element, index) => {
    const DeleteBtn = element.querySelector(`#DelBtn${index}`);

    DeleteBtn.addEventListener("click", () => {
      element.remove();
    });
  });
}
