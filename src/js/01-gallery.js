import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector(".gallery");
gallery.style.listStyle = 'none';
const galleryMarkup = galleryItems
    .map((img) =>
            `<li class="gallery__item">
   <a class="gallery__link" href="${img.original}">
      <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
   </a>
    </li>`
    )
  .join("");
gallery.innerHTML = galleryMarkup;
new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250
});
console.log(galleryItems);
