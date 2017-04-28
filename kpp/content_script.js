setInterval(function(){
  var elem = document.querySelector('.Modal__container');
  var firstElem = elem.querySelector('.Button');
  firstElem.click();
  console.log('clicked button!');
}, 3000);
