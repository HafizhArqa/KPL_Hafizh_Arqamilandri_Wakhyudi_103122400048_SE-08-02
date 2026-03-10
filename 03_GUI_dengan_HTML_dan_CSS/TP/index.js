const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");

editorElement.addEventListener("input", (event) => {
    const textLength = event.target.value.length;
    charCountElement.textContent = textLength;
});

document.getElementById("huruf-besar").addEventListener("click", () => {
    editorElement.value = editorElement.value.toUpperCase();
});

document.getElementById("huruf-kecil").addEventListener("click", () => {
    editorElement.value = editorElement.value.toLowerCase();
});

document.getElementById("huruf-paragraf").addEventListener("click", () => {
    let teks = editorElement.value.toLowerCase();
    editorElement.value = teks.charAt(0).toUpperCase() + teks.slice(1);
});