// Change tab's title temp.
// Check if the current URL matches
if (window.location.href.startsWith("https://player.twitch.tv/?channel=")) {
  // Extract the username from URL
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get("channel");

  // Update title
  document.title = `${username} - Twitch Player`;
}

window.onload = function() {
  console.log("|Sam's Twitch Addons|: Applying player script.");

  (function() {
      'use strict';
      Object.defineProperty(document, "hidden", { value : false});
  })();

  // Second tab change to get full case-censite channel's username
  // Function to find the element and update the title
  function findElementAndUpdateTitle() {
    // Find the element with the specified data-test-selector attribute
    const element = document.querySelector('[data-test-selector="stream-info-card-component__title-link"]');

    if (element) {
      // Extract the username from element's text
      const username = element.textContent.trim();

      // Update title
      document.title = `${username} - Twitch Player`;
    }
  }

  // Call the function to execute your code
  findElementAndUpdateTitle();
};
