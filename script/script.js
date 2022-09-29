const items = document.getElementById("items");
function getInputAndAddItem(event) {
  if (event.key !== "Enter") {
    return;
  }
  let input = document.getElementById("input-item");
  if (input.value !== "") {
    items.innerHTML += `<div class="item">${input.value}</div>`;
    input.value = "";
  } else {
    alert("Il campo di testo è vuoto!");
  }
}

function invio() {
  let input = document.getElementById("input-item");
  if (input.value !== "") {
    items.innerHTML += `<div class="item">${input.value}</div>`;
    input.value = "";
  } else {
    alert("Il campo di testo è vuoto!");
  }
}

function maiuscolo() {
  let up = document.getElementById("input-item");
  let input = document.getElementById("input-item");
  if (up.value !== "") {
    items.innerHTML += `<div class="item upper">${input.value}</div>`;
    input.value = "";
  } else {
    alert("Il campo di testo è vuoto!");
  }
}

function grassetto() {
  let up = document.getElementById("input-item");
  let input = document.getElementById("input-item");
  if (up.value !== "") {
    items.innerHTML += `<div class="item bold">${input.value}</div>`;
    input.value = "";
  } else {
    alert("Il campo di testo è vuoto!");
  }
}

function sottolinea() {
  let up = document.getElementById("input-item");
  let input = document.getElementById("input-item");
  if (up.value !== "") {
    items.innerHTML += `<div class="item underline">${input.value}</div>`;
    input.value = "";
  } else {
    alert("Il campo di testo è vuoto!");
  }
}
