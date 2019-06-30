// Varibales and Selectors
let mainImage = document.querySelector('#mainImage');
// All Images
let allImages = document.querySelectorAll('.img-fluid');
allImages.forEach(image => (image.addEventListener('click', changeImage)));
 function changeImage(e){
     e.preventDefault();
     allImages.forEach(image => image.style.opacity = 1);
     mainImage.src = e.target.src;
     e.target.style.opacity = 0.3;
     setInterval(()=>{
         e.target.style.opacity = 1;
     } , 3000)

 }

 // Image Slider
 let imgSlider = document.querySelector('#imgSlider');
 let arrayOfImages = ['images/img1.jpg' , 'images/img2.jpg' , 'images/img3.jpg' , 'images/img4.jpg' , 'images/img5.jpg' , 'images/img6.jpg'];
 let i = 0;

 function slideImages(){
     if (i < arrayOfImages.length){
         imgSlider.src = arrayOfImages[i];
         i++;
     }else{
         i = 0;
     }
 }

 document.onload = setInterval(slideImages , 3000);


 setTimeout(()=>{
     console.log('yes')
 } , 5000);

