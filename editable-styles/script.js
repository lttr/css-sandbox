const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

function update() {
  preview.innerHTML = editor.value;
}

editor.addEventListener("input", update);
update();
