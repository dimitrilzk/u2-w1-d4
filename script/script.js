function getInputAndAddItem(event) {
  if (event.key !== "Enter") {
    return;
  }
  let input = document.getElementById("input-item");
  if (input.value !== "") {
    items.innerHTML += `<div class="item" onclick="selectItem(event)">${input.value}</div>`;
    input.value = "";
  } else {
    alert("Il campo di testo è vuoto!");
  }
}
