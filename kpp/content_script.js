setInterval(function(){
  if (document.querySelector('.Modal__container') !== null) {
    var elem = document.querySelector('.Modal__container');
    var firstElem = elem.querySelector('.Button');
    firstElem.click();
    console.log('clicked button!');
  }
}, 3000);
