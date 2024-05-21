let images =[
  {
    'alt':'img1',
    'src':'ork1.jpg'
  },
  {
    'alt':'img2',
    'src':'ork2.jpeg'
  },
  {
    'alt':'img3',
    'src':'ork3.jpeg'
  },
  {
    'alt':'img4',
    'src':'ork4.jpg'
  }
]
let imgBlock = document.querySelector(".img");
imgBlock.style.backgroundImage = 'url("'+ images[imgBlock.dataset.num].src +'")';
function prev(){
  let imgBlock = document.querySelector(".img");
  let prevNum = imgBlock.dataset.num - 1;
  if(prevNum<0){
    prevNum = images.length - 1;
  }
  imgBlock.dataset.num = prevNum;
  imgBlock.style.backgroundImage = 'url("'+ images[prevNum].src +'")';
  const li = document.querySelectorAll('li')
  for (var i = li.length - 1; i >= 0; i--) {
    li[i].classList.remove('active')
  }
  li[imgBlock.dataset.num].classList.add('active')
}
function next(){
  let imgBlock = document.querySelector(".img");
  let nextNum = Number(imgBlock.dataset.num) + 1;
  if(nextNum>(images.length - 1)){
    nextNum = Number(0);
  }
  imgBlock.dataset.num = nextNum;
  imgBlock.style.backgroundImage = 'url("'+ images[nextNum].src +'")';
  const li = document.querySelectorAll('li')
  for (var i = li.length - 1; i >= 0; i--) {
    li[i].classList.remove('active')
  }
  li[imgBlock.dataset.num].classList.add('active')
}
function link() {
  open(images[imgBlock.dataset.num].url);
}
function point(a) {
  imgBlock.style.backgroundImage = 'url("'+ images[a.getAttribute("data-num") -1].src +'")';
  const li = document.querySelectorAll('li')
  for (var i = li.length - 1; i >= 0; i--) {
    li[i].classList.remove('active')
  }
  li[a.getAttribute("data-num")-1].classList.add('active')
   imgBlock.dataset.num = a.getAttribute("data-num")-1;
}
setInterval(function() {
   next()
}, 10000)
