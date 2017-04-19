var elem = document.querySelector('.StillListeningBody');
var firstElem = elem.querySelector('.Button');

var clickLink = function() {
  firstElem.click();
}

setInterval(clickLink(), 500);
