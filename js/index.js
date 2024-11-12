
const areAzureAssets = true;

const BASE_URL =
areAzureAssets
  ? 'https://sabackupseastus.blob.core.windows.net/ecommerce/'
  : './public/images/';

const sylvanianImages = [
  {
    id: 1,
    name: 'Bakery',
    fileName: 'bakery.jpeg'
  },{
    id: 2,
    name: 'Milo',
    fileName: 'milo.jpeg'
  },{
    id: 3,
    name: 'Banda de Guerra',
    fileName: 'bandadeguerra.jpeg'
  },{
    id: 4,
    name: 'Bug Buddies',
    fileName: 'bugbuddies.jpeg'
  },{
    id: 5,
    name: 'Chefs',
    fileName: 'cheefs.jpeg'
  },{
    id: 6,
    name: 'Cuddle Bear Family',
    fileName: 'cuddlebearfamily.jpeg'
  },{
    id: 7,
    name: 'Familia Pinguinos',
    fileName: 'familiapinguinos.jpeg'
  },{
    id: 8,
    name: 'Little Bear',
    fileName: 'littlebear.jpeg'
  },{
    id: 9,
    name: 'Little Sheep',
    fileName: 'littlesheep.jpeg'
  },{
    id: 10,
    name: 'Party',
    fileName: 'party.jpeg'
  },{
    id: 11,
    name: 'Preescolar',
    fileName: 'preescolar.jpeg'
  },{
    id: 12,
    name: 'Toy Poddle Family',
    fileName: 'toypoddlefamily.jpeg'
  }
]


sylvanianImages.forEach(image => {

  const gridItem = document.createElement('div');
  const gridItemImg = document.createElement('img');
  const gridItemSpan = document.createElement('span');

  gridItem.classList.add('gallery__grid__item');
  
  console.log(BASE_URL + image.fileName)
  gridItemImg.classList.add('gallery__grid__item__img');
  gridItemImg.src = BASE_URL + image.fileName;


  gridItemSpan.classList.add('gallery__grid__item__span');
  gridItemSpan.innerHTML = image.name


  gridItem.appendChild(gridItemImg);
  gridItem.appendChild(gridItemSpan);  

  document.querySelector('.gallery__grid').appendChild(gridItem);

});