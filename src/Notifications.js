import { Notify } from 'notiflix';

function endOfSearch() {
  Notify.info("We're sorry, but you've reached the end of search results.");
}
function onSearchError() {
  Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.'
  );
}
function onSearchSuccess(data) {
  Notify.success(`Hooray! We found ${data.totalHits} images.`);
}
export { endOfSearch, onSearchError, onSearchSuccess };