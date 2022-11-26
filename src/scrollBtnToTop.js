const btnUp = document.querySelector('.btn-up');
btnUp.addEventListener('click', btnUpToTop);
window.addEventListener('scroll', onScrollBtnUp)
  
function onScrollBtnUp() {
  const scrollY = window.scrollY;
  scrollY > 700
    ? btnUp.classList.remove('btn-up_hide')
    : btnUp.classList.add('btn-up_hide');
}
function btnUpToTop() {
window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth',
});
}

export { onScrollBtnUp, btnUpToTop };