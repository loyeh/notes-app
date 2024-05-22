const addBtn = document.querySelector(".button");
const main = document.querySelector(".main");
const deActive = document.querySelector(".fa-copy");
const trash = document.querySelector(".fa-trash");
let i = 0;

// addBtn.addEventListener("click", addNote);
// deActive.addEventListener("click", deActiveNote);
// trash.addEventListener("click", deleteNote);

window.addEventListener("load", () => {
  if (localStorage.getItem("myHtml")) {
    main.innerHTML = localStorage.getItem("myHtml");
    // localStorage.removeItem("myHtml");
  }
});

function addNote() {
  i++;
  const container = document.createElement("div");
  container.className = "container active";
  container.innerHTML = ` <div class="top">
  <div class="icons">
    <i class="fas fa-copy" id="${i}" onclick="deActiveNote(this)"></i>
    <i class="fas fa-trash" onclick="deleteNote(this)"></i>
  </div>
</div>
<div class="bottom">
  <textarea class="myText" id="myText${i}" autofocus></textarea>
  <div class="myText${i} deActive"></div>
</div>`;
  main.appendChild(container);
  console.log("12");
  localStorage.removeItem("myHtml");
  localStorage.setItem("myHtml", main.innerHTML);
}

function deActiveNote(elem) {
  const container = elem.parentNode.parentNode.parentNode;
  container.classList.toggle("active");
  const text = document.getElementById("myText" + elem.id);
  const textDiv = container.querySelector(`.myText${elem.id}`);
  textDiv.textContent = text.value;
  text.classList.toggle("deActive");
  textDiv.classList.toggle("deActive");
  localStorage.setItem(`text${elem.id}`, textDiv.textContent);
  if (localStorage.getItem(`text${elem.id}`)) {
    text.textContent = localStorage.getItem(`text${elem.id}`);
  }
  text.focus();
  localStorage.setItem("myHtml", main.innerHTML);
}

function deleteNote(elem) {
  i--;
  const container = elem.parentNode.parentNode.parentNode;
  container.remove();
  localStorage.setItem("myHtml", main.innerHTML);
}
