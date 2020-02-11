let isHidingKoreanEnabled = false;

function sendKoreanToggleMessage() {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, tabs => {
        if (isHidingKoreanEnabled) {
            isHidingKoreanEnabled = false;
        } else {
            isHidingKoreanEnabled = true;
        }

        chrome.tabs.sendMessage(tabs[0].id, {
            work: 'loadCss',
            css: 'content-styles/webbook/style.css',
            load: isHidingKoreanEnabled
        });
    });
}

// default
sendKoreanToggleMessage();

chrome.browserAction.onClicked.addListener(tab => {
    console.log('clicked');

    sendKoreanToggleMessage();
});
