let isHidingKoreanEnabled = false;

chrome.browserAction.onClicked.addListener(tab => {
    console.log('clicked');

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
});
