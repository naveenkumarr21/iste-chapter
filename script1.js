// Set the launch date
const launchDate = new Date("2025-03-01T00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = launchDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.querySelector(".day1").textContent = days;
    document.querySelector(".hour1").textContent = hours;
    document.querySelector(".minute1").textContent = minutes;
    document.querySelector(".second1").textContent = seconds;

    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".countdown-container h2").textContent = "We are live!";
        document.querySelector(".countdown").style.display = "none";
    }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
