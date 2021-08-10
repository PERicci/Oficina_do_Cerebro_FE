let showVideo = (e) => {
  const button = e;
  const embedVideo = document.getElementById(button.dataset.target);
  const videoContainer = button.parentElement;
  const section = videoContainer.parentElement;


  button.classList.toggle('isDisplayNone');
  embedVideo.classList.toggle('isDisplayNone');
  videoContainer.classList.toggle('videoContainerSize');

  setTimeout(() => {
    section.scrollIntoView({behavior: "smooth", block: "center"});
  }, 500);
}