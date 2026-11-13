window.onload = function() {
    ScrollReveal().reveal('.content', { delay: 500 });

}
// Add event listener for theme toggle
document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");

    themeToggle.addEventListener("change", function() {
        document.body.classList.toggle("dark-mode", themeToggle.checked);
    });
});

