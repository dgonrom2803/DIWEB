let originalFont = true;

function toggleFont() {
    const body = document.querySelector('body');
    if (originalFont) {
        body.style.fontFamily = "'Jockey One', sans-serif";
    } else {
        body.style.fontFamily = "OpenDislexic, sans-serif";
    }
    originalFont = !originalFont;
}
