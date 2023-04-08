document.getElementById('yandex_rtb_R-A-1620808-1').remove();
document.getElementsByClassName('docs_panel_wrap')[0].remove();

let img = document.getElementById('screenshot-image');
img.remove();
let imgSrc = img.getAttribute('src');

let newImg = document.createElement('img');
newImg.src = imgSrc;

let imgDiv = document.getElementById('img-container');
imgDiv.appendChild(newImg);

// imgClass.removeAttribute('onclick');
// imgClass.removeAttribute('class');
// imgClass.removeAttribute('style');
// console.log(imgClass.classList);
// imgClass.classList.remove("can_zoom");
// console.log(imgClass.classList);
// imgClass.classList.toggle("can4567_zoom");
