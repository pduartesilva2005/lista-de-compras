const item = document.querySelector("#item");
const list = document.querySelector("ul");
const form = document.querySelector("form");
const articleAlert = document.querySelector("article");

form.onsubmit = (event) => {
  event.preventDefault();

  if (item.value === "") {
    alert("Por favor! Digite um item válido!");
  } else {
    list.innerHTML += `
      <li>
        <div class="checkbox-wrapper">
          <div class="checkbox-image"></div>
          <input type="checkbox" name="tasked" id="tasked" />

          <span>${item.value}</span>
        </div>

        <i class="hgi hgi-stroke hgi-delete-03 close"></i>
      </li>
    `;

    item.value = "";

    removeItem();
    checkItem();
  }
};

function removeItem() {
  const close = document.querySelectorAll(".close");
  const closeAlert = document.querySelector(".close-alert");

  for (let item = 0; item < close.length; item++) {
    close[item].addEventListener("click", () => {
      close[item].parentElement.remove();
      articleAlert.classList.add("show-alert");
      closeAlert.addEventListener("click", () => {
        articleAlert.classList.remove("show-alert");
      });
    });
  }
}

function checkItem() {
  list.addEventListener("click", (event) => {
    event.target.parentElement
      .querySelector("span")
      .classList.toggle("checked-item");
  });
}
