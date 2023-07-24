// ==UserScript==
// @name            Change player.twitch.tv Title
// @description     Changes tabs title on load with channels username on player.twitch.tv pages.
// @downloadURL     https://github.com/yungsamd17/Twitch-Addons/raw/main/userscripts/ChangePlayerTwitchTitle.user.js
// @namespace       https://github.com/yungsamd17/Twitch-Addons
// @version         1.0
// @author          yungsamd17
// @homepageURL     https://github.com/yungsamd17/Twitch-Addons
// @icon            https://raw.githubusercontent.com/yungsamd17/Twitch-Addons/main/chrome/src/icons/favicon.ico
// @license         MIT
// @match           https://player.twitch.tv/*
// @grant           none
// @run-at          document-end
// @updateURL       https://github.com/yungsamd17/Twitch-Addons/raw/main/userscripts/ChangePlayerTwitchTitle.user.js
// ==/UserScript==

(function() {
    'use strict';

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

        // Second update title to get full case-censite channel username
        // Find the element and update the title
        function findElementAndUpdateTitle() {
            // Find the element with the specified attribute
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
}})();