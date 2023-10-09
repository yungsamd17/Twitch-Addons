// =========================================================
// ==================== UPDATE TITLE =======================
// =========================================================

// Temp title update.

// Check if the URL matches
if (window.location.href.startsWith("https://player.twitch.tv/?channel=")) {
    // Extract the username
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get("channel");

    // Update title
    document.title = `${username} - Twitch Player`;
}

window.onload = function() {

    // Final title update with case-sensitive channel username

    // Find the element and update the title
    function updatePlayerTitle() {
        const element = document.querySelector('[data-test-selector="stream-info-card-component__title-link"]');

        if (element) {
            // Extract the username
            const username = element.textContent.trim();

            // Update title
            document.title = `${username} - Twitch Player`;
        }
    }

    updatePlayerTitle();

    // =========================================================
    // ============ HIDE WATCH ON TWITCH BUTTON ================
    // =========================================================

    // Hide elements with the specified class directly in querySelectorAll
    document.querySelectorAll('[class*="ScCoreButton-sc-ocjdkq-0"][class*="ScCoreButtonText-sc-"]').forEach((element) => {
        element.style.display = "none";
    });

    console.log("%cSam's Twitch Addons:", "color: #9147ff", "Player script enabled.");
};