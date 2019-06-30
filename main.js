// Current Image Selector 
let currentImg = document.querySelector('#currentImg');

// All images Selector
let allImages = document.querySelectorAll('.img-fluid');

 allImages.forEach(image => image.addEventListener('click' , changeImage));

 function changeImage(e){
     allImages.forEach(image => image.style.opacity = 1 )
     e.preventDefault();
     currentImg.src = e.target.src;
     e.target.style.opacity = 0.3;
     setTimeout( () => e.target.style.opacity = 1 , 5000 );

 }

 // Simple image Slider
 let target = document.querySelector('#imageSlider');
 let arrayOfImages = ['images/img1.jpg' , 'images/img2.jpg' , 'images/img3.jpg' , 'images/img4.jpg' , 'images/img5.jpg' , 'images/img6.jpg'];
 let i = 0;
 function slideImages(){
     if (i < arrayOfImages.length ){
         target.src = arrayOfImages[i];
         i++;
     }else{
         i = 0;
     }
 }
document.onload = setInterval(slideImages, 3000);



// let imageSlider = document.querySelector('#imageSlider');
//  console.log(imageSlider);
//  imageSlider.src = 'images/img1.jpg';
//  let arrayOfImages = [];
//  let i = 0;
//  arrayOfImages.push('images/img1.jpg');
//  arrayOfImages.push('images/img2.jpg');
//  arrayOfImages.push('images/img3.jpg');
//  arrayOfImages.push('images/img4.jpg');

//  function slideImages(){
//      if(i < arrayOfImages.length - 1){
//          document..src = arrayOfImages[i];
//      }else{
//          i = 0;
//      }
//  }
//  slideImages();
