// ==UserScript==
// @name            Change player.twitch.tv Title
// @description     Changes tabs title on load with channels username on player.twitch.tv pages.
// @version         1.2
// @author          yungsamd17
// @namespace       https://github.com/yungsamd17/UserScripts
// @license         MIT License
// @downloadURL     https://github.com/yungsamd17/Twitch-Addons/raw/main/userscripts/ChangePlayerTwitchTitle.user.js
// @updateURL       https://github.com/yungsamd17/Twitch-Addons/raw/main/userscripts/ChangePlayerTwitchTitle.user.js
// @icon            https://raw.githubusercontent.com/yungsamd17/Twitch-Addons/main/chrome/src/icons/favicon.ico
// @match           https://player.twitch.tv/*
// @grant           none
// @run-at          document-end
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
        console.log("%cChange player.twitch.tv Title:", "color: #9147ff", "Title Updated.");
}})();