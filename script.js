document.addEventListener("DOMContentLoaded", function () {
    const heroCta = document.getElementById("hero-cta");

    heroCta.addEventListener("click", function () {
        heroCta.innerText = "Loading...";
        heroCta.style.backgroundColor = "#ff6600";

        setTimeout(() => {
            heroCta.innerText = "Welcome to the Fun!";
            alert("Welcome to MemeCoin! Explore the features.");
        }, 1500); // 1.5 seconds delay
    });
});
