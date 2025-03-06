document.addEventListener("DOMContentLoaded", () => {
    const badgeContainer = document.querySelector(".badge-container");
    const toggleButton = document.getElementById("toggleBadges");

    toggleButton.addEventListener("click", () => {
        badgeContainer.style.display = 
            badgeContainer.style.display === "none" ? "flex" : "none";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const badges = document.querySelectorAll(".badge");

    badges.forEach((badge, index) => {
        setTimeout(() => {
            badge.style.opacity = "1";
            badge.style.transform = "translateY(0)";
        }, index * 200);
    });
});
