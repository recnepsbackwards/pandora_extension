function handleChanges() {
  var elem = document.querySelector('.Modal__container');
  var firstElem = elem.querySelector('.Button');
  firstElem.click();
};

var observer = new MutationSummary({
  callback: handleChanges, // required
  queries: [{
    element: ".Modal__container"
  }]
});
