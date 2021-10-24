import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const imageMarkup = createImageMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', imageMarkup);

function createImageMarkup(items) {
return items
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
      <a
        class="gallery__link"
        href = '${original}';
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>
    `;
    })
    .join('');    
};

galleryContainer.addEventListener('click', onImageClick);

function onImageClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  };
    event.preventDefault();
    instance.element().querySelector('img').src = event.target.dataset.source;
    instance.show();
};

const instance = basicLightbox.create(`<img src="" />`, {
  onShow: () => {
    window.addEventListener('keydown', keydownEscape);
  },
  onClose: () => {
    window.removeEventListener('keydown', keydownEscape);
  },
});

function keydownEscape(event) {
  console.log(event);
  if (event.key === 'Escape') {
    instance.close();
    return;
  }
};