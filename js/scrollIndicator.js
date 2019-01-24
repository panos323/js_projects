// When the user scrolls the page, execute myFunction 
window.onscroll = function() {
    scrollIndiCator()
};//onscroll

function scrollIndiCator() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var heightScrolled = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / heightScrolled) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}