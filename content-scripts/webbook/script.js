console.log('CasenglishKoreanHider loaded');

chrome.runtime.sendMessage({
    work: 'created'
});

chrome.runtime.onMessage.addListener(message => {
    switch(message.work) {
        case "loadCss":
            message.load ? loadCss(message.css) : unloadCss(message.css);

            break;
    }
});
