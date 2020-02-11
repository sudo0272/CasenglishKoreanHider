console.log('CasenglishKoreanHider loaded');

chrome.runtime.onMessage.addListener(message => {
    switch(message.work) {
        case "loadCss":
            message.load ? loadCss(message.css) : unloadCss(message.css);

            break;
    }
});
