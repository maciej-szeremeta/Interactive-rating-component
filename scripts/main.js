const labels = document.querySelectorAll(".rating-form__label");
const btnSubmit = document.querySelector(".button");

let checkLabel = false;

for (let label of labels) {
  label.addEventListener("click", (e) => {
    for (const label of labels) {
      label.firstElementChild.checked = false;
      label.lastElementChild.classList.remove("active");
    }
    label.firstElementChild.checked = true;
    label.lastElementChild.classList.add("active");
    checkLabel = true;
  });
}

btnSubmit.addEventListener("click", (e) => {
  if (!checkLabel) {
    e.preventDefault();
    console.log("check rating");
  }
});
