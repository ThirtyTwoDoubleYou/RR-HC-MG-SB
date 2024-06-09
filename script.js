// Preload images
const preloadImages = () => {
    for (let i = 0; i < 11; i++) {
        const img = new Image();
        img.src = `images/${i}.png`;
    }
};

preloadImages();

// Function to determine the icon based on score progress
function getIconForScore(score) {
    const checkpoint = Math.ceil(score / 10.0);
    return `images/${checkpoint}.png`;
}

// Function to update scores and icons dynamically
function updateScores() {
    // Fetch new scores from a server or update manually
    const scores = {
        player1: 40,
        player2: 10,
        player3: 20,
        player4: 20,
        player5: 0
    };

    // Convert scores object to an array and sort by score descending
    const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);

    // Get the players container
    const container = document.querySelector('.players');

    // Clear the container
    container.innerHTML = '';

    sortedScores.forEach(([player, score]) => {
        // Select the existing player element
        const playerElement = document.getElementById(player);

        // Update the bar width
        const bar = playerElement.querySelector('.bar');
        bar.style.width = `${score}%`;

        // Update the icon source
        const icon = playerElement.querySelector('.icon img');
        icon.src = getIconForScore(score);

        // Append the player element to the container
        container.appendChild(playerElement);
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    updateScores();
});

// Call the updateScores function periodically (for demonstration purposes)
// setInterval(updateScores, 5000); // Update every 5 seconds
