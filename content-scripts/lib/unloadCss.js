function unloadCss(fileName) {
    let link = document.getElementById(fileName);

    link && link.parentNode.removeChild(link);
}
