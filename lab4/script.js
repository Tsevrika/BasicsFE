const n = 1;

const elements = Array.from(document.body.children);

if (elements.length < 2) {
  console.warn("Недостаточно элементов на странице для задания.");
} else {

  let k = (n % 10);

  k = k % elements.length;

  const firstElement = elements[k];
  const secondElement = elements[(k + 1) % elements.length];

  if (!firstElement.id) firstElement.id = "lr4_byId";

  let state1 = false;
  document.getElementById(firstElement.id).addEventListener("click", function () {
    state1 = !state1;
    this.style.backgroundColor = state1 ? "#222" : "";
    this.style.color = state1 ? "#fff" : "";
  });

  const cls = "lr4_byQuery";
  if (!secondElement.classList.contains(cls)) secondElement.classList.add(cls);

  let state2 = false;
  document.querySelector("." + cls).addEventListener("click", function () {
    state2 = !state2;
    this.style.backgroundColor = state2 ? "#0044cc" : "";
    this.style.color = state2 ? "#fff" : "";
  });
}

let img;

function addImage() {
  if (!img) {
    img = document.createElement("img");
    img.src = "kyiv.jpg";
    img.width = 300;
    document.body.appendChild(img);
  }
}

function zoomIn() {
  if (img) img.width += 50;
}

function zoomOut() {
  if (img && img.width > 100) img.width -= 50;
}

function removeImage() {
  if (img) {
    img.remove();
    img = null;
  }
}
