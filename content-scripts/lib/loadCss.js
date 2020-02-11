function loadCss(fileName) {
    let link = document.createElement('link');

    link.href = chrome.extension.getURL(fileName);
    link.id = fileName;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
}
