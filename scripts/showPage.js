window.onload = function() {
  setTimeout(() => {
    document.body.classList.toggle('isHidden')
  }, 200)  
}

var video

function onYouTubePlayerAPIReady() {
  video = new YT.Player('video');
}