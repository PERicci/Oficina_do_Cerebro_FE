let showVideo = (e) => {
  const target = e.dataset.target;
  const videoModal = document.getElementById(target);

  videoModal.classList.toggle("isDisplayNone");

  setTimeout(() => {
    video.playVideo();
  }, 500)
}

let hideVideo = (e) => {
  video.pauseVideo();

  setTimeout(() => {
    e.classList.toggle("isDisplayNone");
  }, 500)
}