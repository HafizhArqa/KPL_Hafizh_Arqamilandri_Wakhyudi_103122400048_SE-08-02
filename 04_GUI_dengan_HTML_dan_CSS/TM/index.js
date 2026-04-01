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

const buttonLightElement = document.getElementById("tombol-terang");
const buttonDarkElement = document.getElementById("tombol-gelap");
const buttonSepiaElement = document.getElementById("tombol-sepia");

buttonLightElement.addEventListener("click", () => {
    document.body.classList.remove("dark-mode", "sepia-mode");
});

buttonDarkElement.addEventListener("click", () => {
    document.body.classList.remove("sepia-mode");
    document.body.classList.add("dark-mode");
});

buttonSepiaElement.addEventListener("click", () => {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("sepia-mode");
});