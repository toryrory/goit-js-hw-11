import { getImages } from "./getImages";
import { createMarkup } from "./createMarkup";
import { endOfSearch, onSearchError, onSearchSuccess } from "./Notifications"
import { onScrollBtnUp, btnUpToTop } from "./scrollBtnToTop"
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let query = '';
let page = 1;
let perPage = 40;
let simplelightbox = new SimpleLightbox('.gallery a')

const gallery = document.querySelector('.gallery');
const searchForm = document.querySelector('.search-form');
const loadMoreBtn = document.querySelector('.load-more');

searchForm.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', addImages);
// window.addEventListener('scroll', infiniteScroll);
onScrollBtnUp();
btnUpToTop();

function onSearch(evt) {
  evt.preventDefault();
  gallery.innerHTML = '';
  page = 1;
  query = evt.currentTarget.elements.searchQuery.value.trim();
  
  getImages(query, page, perPage).then(({ data }) => {

    if (!query || !data.totalHits) {
      loadMoreBtn.classList.add('hidden');
      onSearchError();
      return
    } else {
      onSearchSuccess(data);
      createMarkup(data.hits);
      loadMoreBtn.classList.remove('hidden');
      simplelightbox.refresh();
    }
  }).catch(error => console.log(error))
}

function addImages() {
    page += 1;
    getImages(query, page, perPage)
      .then(({ data }) => {
        createMarkup(data.hits);
        simplelightbox.refresh();
        const totalPages = Math.ceil(data.totalHits / perPage);
        console.log(page)
        if (page >= totalPages) {
          loadMoreBtn.classList.add('hidden');
          endOfSearch();
        }
      })
      .catch(error => console.log(error));
  }







// function infiniteScroll() {
//   console.log(document.documentElement.scrollTop); //scrolled from top
//   console.log(window.innerHeight); //visible part of screen
//   if (
//     window.scrollY + window.innerHeight >=
//     document.documentElement.scrollHeight
//   ) {
//     addImages();
//   }
// }


// const btnUp = {
//   el: document.querySelector('.btn-up'),
//   show() {
//     // удалим у кнопки класс btn-up_hide
//     this.el.classList.remove('btn-up_hide');
//   },
//   hide() {
//     // добавим к кнопке класс btn-up_hide
//     this.el.classList.add('btn-up_hide');
//   },
//   addEventListener() {
//     // при прокрутке содержимого страницы
//     window.addEventListener('scroll', () => {
//       // определяем величину прокрутки
//       const scrollY = window.scrollY;
//       // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
//       scrollY > 656 ? this.show() : this.hide();
//     });
//     // при нажатии на кнопку .btn-up
//     document.querySelector('.btn-up').onclick = () => {
//       // переместим в начало страницы
//       window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: 'smooth',
//       });
//     };
//   },
// };

// btnUp.addEventListener();