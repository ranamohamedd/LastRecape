document.addEventListener("keydown", function(e) {
    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, and Ctrl+U
    if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || (e.ctrlKey && e.keyCode === 85)) {
        e.preventDefault();
        return false;
    }
});
