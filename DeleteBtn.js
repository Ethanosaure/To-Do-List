export function DeleteBtn() {
  const Btndelete = document.querySelectorAll("button[type='button']");
  Btndelete.forEach((element) => {
    element.addEventListener("click", () => {
      element.parentNode.remove();
    });
  });
}
