const h1 = document.querySelector("#heading1");
const h2 = document.querySelector("#heading2");
const lowerCount = document.querySelector("#btn1");
const addCount = document.querySelector("#btn2");

let count = 0;

lowerCount.addEventListener("click", () => {
  count--;
  h2.innerText = count;
  if (count < 0) {
    h2.style.color = "red";
  }
});

addCount.addEventListener("click", () => {
  count++;
  h2.innerText = count;
  if (count >= 0) {
    h2.style.color = "green";
  }
});
