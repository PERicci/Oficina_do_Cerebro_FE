let showVideo = (e) => {
  const button = e;
  const embedVideo = document.getElementById(button.dataset.target);
  const parent = button.parentElement;
  const section = parent.parentElement;


  button.classList.toggle('isDisplayNone');
  embedVideo.classList.toggle('isDisplayNone');
  parent.classList.toggle('videoContainerSize');

  setTimeout(() => {
    section.scrollIntoView({behavior: "smooth", block: "center"});
  }, 500);
}