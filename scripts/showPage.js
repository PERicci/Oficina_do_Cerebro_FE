window.onload = function() {
  document.body.classList.toggle('isHidden')
}

var video

function onYouTubePlayerAPIReady() {
  video = new YT.Player('video');
}