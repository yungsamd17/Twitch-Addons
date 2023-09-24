// =========================================================
// ============= TWITCH CLIP DOWNLOADER SCRIPT =============
// =========================================================

// create the button
function createClipDownloadButton() {
    const targetClass = '[class*="Layout-sc-1xcs6mc-0"][class*="player-controls__right-control-group"]';
    const targetElement = document.querySelector(targetClass);
    if (!targetElement) {
        // if target element is not found, remove any existing button
        removeClipDownloadButton();
        return;
    }
    
    // check if we are on a clip page
    const isClipPage = window.location.href.includes('/clip/') || window.location.href.includes('clips.twitch.tv');
    if (!isClipPage) {
        removeClipDownloadButton();
        return;
    }

    // check if the button already exists
    const existingButton = document.querySelector('.twitchdownload-button');
    if (existingButton) {
        return;
    }

    // button CSS style
    const customStyles = `
        .twitchdownload-button {
            background-color: #9147ff;
            border: none;
            border-radius: 0.4rem;
            margin-right: 6px;
            padding: 5px 2px 5px 2px;
            cursor: pointer;
            width: auto;
            height: 30px;
            display: inline-block;
            align-items: center;
        }
        .twitchdownload-button:hover {
            background-color: #772ce8;
        }
        .twitchdownload-button:active {
            background-color: #5c16c5;
        }
        .twitchdownload-button:focus {
            background-color: #5c16c5;
        }
        .button-text {
            color: white;
            margin: 0 6px 0 6px;
            font-weight: bold;
        }
    `;

    const styleElement = document.createElement('style');
    styleElement.textContent = customStyles;
    document.head.appendChild(styleElement);
    // create the button and insert it
    const divWrapper = document.createElement('div');
    divWrapper.className = 'twitch-clip-downloader-userscript';
    const button = document.createElement('button');
    const buttonText = document.createElement('span');
    buttonText.textContent = 'Download'; // button Text
    button.className = 'twitchdownload-button';
    // button click event listener
    button.addEventListener('click', downloadClip);
    buttonText.className = 'button-text';
    button.appendChild(buttonText);
    divWrapper.appendChild(button);
    // insert the div wrapper before the last child
    targetElement.insertBefore(divWrapper, targetElement.firstChild);
}

// function to remove the button
function removeClipDownloadButton() {
    const existingButton = document.querySelector('.twitchdownload-button');
    if (existingButton) {
        existingButton.remove();
    }
}

// function to download Twitch clip
function downloadClip() {
    const videoElement = document.querySelector('video');
    if (videoElement) {
        const videoURL = videoElement.src;
        const downloadLink = document.createElement('a');
        downloadLink.href = videoURL;
        downloadLink.click();
    }
}

// MutationObserver to watch for DOM changes
const observer = new MutationObserver(createClipDownloadButton);
const observerOptions = {
    childList: true,
    subtree: true,
};
observer.observe(document.body, observerOptions);

createClipDownloadButton();