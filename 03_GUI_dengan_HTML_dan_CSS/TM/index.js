const editorElement = document.getElementById("editor-kecil");
const hurufKecilElement = document.getElementById("hk");
editorElement.addEventListener("input", (event) => {
    const text = event.target.value;
    
    let count = 0;
    for (let char of text) {
        if (char >= 'a' && char <= 'z') {
            count++;
        }
    }

    hurufKecilElement.textContent = count;
});

document.getElementById("huruf-besar").addEventListener("click", () => {
    editorElement.value = editorElement.value.toUpperCase();
});

document.getElementById("huruf-kecil").addEventListener("click", () => {
    editorElement.value = editorElement.value.toLowerCase();
});