function header() {
  const nav = document.querySelector('.nav');
  const modal = document.querySelector('.modal');
  const btn = document.querySelector('.mobile-icon');

  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
    modal.classList.toggle('open');
    document.body.classList.toggle('open');
  });
}
export { header };
