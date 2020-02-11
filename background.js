let isKoreanEnabled = false;

chrome.browserAction.onClicked.addListener(tab => {
    console.log('clicked');

    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, tabs => {
        if (isKoreanEnabled) {
            isKoreanEnabled = false;
        } else {
            isKoreanEnabled = true;
        }

        chrome.tabs.sendMessage(tabs[0].id, {
            work: 'loadCss',
            css: 'content-styles/webbook/style.css',
            load: isKoreanEnabled
        });
    });
});
