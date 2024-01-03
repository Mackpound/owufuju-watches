const plusAdd = document.querySelector(".plus-add");
const genderWrap = document.querySelector(".gender-page-category");

plusAdd.addEventListener("click", () => {
  genderWrap.classList.toggle("active")
  plusAdd.classList.toggle("active")
});