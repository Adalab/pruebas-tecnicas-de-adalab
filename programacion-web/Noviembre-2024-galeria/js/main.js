'use strict';

const prevBtn = document.querySelector('.js__prevBtn');
const nextBtn = document.querySelector('.js__nextBtn');

const getPhotoItems = () => {
  return [ ...document.querySelectorAll('.js__photo') ];
};

const getSpotlightedPhotoIndex = (allPhotoItems) => {
  return allPhotoItems.findIndex((liElem) => liElem.classList.contains('spotlight'));
};






const handleClickPrevButton = (ev) => {
  ev.preventDefault();

  // Obtener todas las imágenes
  const allPhotoItems = getPhotoItems();
 
  // Averiguar qué imagen se está mostrando
  let spotlightedPhotoIndex = getSpotlightedPhotoIndex(allPhotoItems);

  if( spotlightedPhotoIndex > 0 ) {
    // Quitar la clase spotlight
    allPhotoItems[spotlightedPhotoIndex].classList.remove('spotlight');

    
    // Anterior poner la clase spotlight
    spotlightedPhotoIndex--;

    allPhotoItems[spotlightedPhotoIndex].classList.add('spotlight');

    activateButtons(spotlightedPhotoIndex, allPhotoItems.length);
  }

};

const activateButtons = (spotlightedPhotoIndex, length) => {
  prevBtn.disabled = ( spotlightedPhotoIndex === 0 );
  nextBtn.disabled = ( spotlightedPhotoIndex === length-1 );
}







const handleClickNextButton = (ev) => {
  ev.preventDefault();

  /*
    1. Obtener todas las imágenes -> Array
    2. Averiguar qué imagen se está mostrando
    3. Quitar la clase spotlight
    4. Siguiente poner la clase spotlight
  */

  const allPhotoItems = getPhotoItems();
  let spotlightedPhotoIndex = getSpotlightedPhotoIndex(allPhotoItems);

  if( spotlightedPhotoIndex < allPhotoItems.length-1 ) {
    allPhotoItems[spotlightedPhotoIndex].classList.remove('spotlight');

    spotlightedPhotoIndex++;
    allPhotoItems[spotlightedPhotoIndex].classList.add('spotlight');

    activateButtons(spotlightedPhotoIndex, allPhotoItems.length);
  }

};

prevBtn.addEventListener('click', handleClickPrevButton);
nextBtn.addEventListener('click', handleClickNextButton);