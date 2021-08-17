function openBurger(e) {
  const target = e.dataset.target;
  const $target = document.getElementById(target);

  e.classList.toggle('is-active');
  $target.classList.toggle('is-active');
  $target.classList.toggle('is-pulled-right')
}

