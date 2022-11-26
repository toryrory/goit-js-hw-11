const gallery = document.querySelector('.gallery');

function createMarkup(arr) {
  const markup = arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<a class="card-link" href="${largeImageURL}">
        <div class="photo-card">
  <img class="small-img"src="${webformatURL}" alt="${tags}" loading="lazy" width=320 height=250/>
  <div class="info">
    <p class="info-item">
      <b>Likes</b>${likes}
    </p>
    <p class="info-item">
      <b>Views</b>${views}
    </p>
    <p class="info-item">
      <b>Comments</b>${comments}
    </p>
    <p class="info-item">
      <b>Downloads</b>${downloads}
    </p>
  </div>
</div>
</a>`
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}
export { createMarkup };