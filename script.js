const addBtn = document.querySelector(".button");
const main = document.querySelector(".main");
const deActive = document.querySelector(".fa-copy");
const trash = document.querySelector(".fa-trash");
let i = 1;

addBtn.addEventListener("click", addNote);
// deActive.addEventListener("click", deActiveNote);
// trash.addEventListener("click", deleteNote);

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
</div>`;
  main.appendChild(container);
}

function deActiveNote(elem) {
  const container = elem.parentNode.parentNode.parentNode;
  container.classList.toggle("active");
  const text = document.getElementById("myText" + elem.id);
  console.log(text);
  text.focus();
}

function deleteNote(elem) {
  i--;
  const container = elem.parentNode.parentNode.parentNode;
  container.remove();
}
