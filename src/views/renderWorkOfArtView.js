export const renderPhoto = function (data) {
  return data
    .map(({ webformatURL, largeImageURL }) => {
      return `<li class="item">
     <a href='${largeImageURL}'><img class="img" src="${webformatURL}" alt="Photo" /></a>
              </li>`;
    })
    .join('');
};
