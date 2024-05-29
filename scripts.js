document.addEventListener("DOMContentLoaded", function() {
    const sidebarToggle = document.getElementById("sidebar-toggle");
    const sidebar = document.getElementById("sidebar");
    const main = document.querySelector("main");

    sidebarToggle.addEventListener("click", function() {
        if (sidebar.style.left === "-220px") {
            sidebar.style.left = "0";
            main.style.marginLeft = "220px";
        } else {
            sidebar.style.left = "-220px";
            main.style.marginLeft = "0";
        }
    });
});
