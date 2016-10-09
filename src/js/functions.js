// Props to John Ruane fpr this JS
function getTheStyle(tag){
  var elem = document.getElementById(tag).getElementsByTagName('figcaption')[0];
  var fontSize = window.getComputedStyle(elem,null).getPropertyValue("font-size");
  var unitlessFontSize = (fontSize.split('px')[0]);
  var convertedFontSize = (unitlessFontSize / 16) + "rem";
  var htag = document.getElementById(tag).getElementsByTagName(tag)[0];
  var lineHeight = window.getComputedStyle(htag,null).getPropertyValue("line-height");
  var unitlessLineHeight = (lineHeight.split('px')[0]);
  var convertedLineHeight = (unitlessLineHeight / unitlessFontSize);
  elem.innerHTML = convertedFontSize+"/"+convertedLineHeight;
 }

 var tags = ["h1","h2","h3","h4","h5","h6"];
 for(var i = 0; i < tags.length; i++){
  getTheStyle(tags[i])
 }
