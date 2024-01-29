const list = document.querySelectorAll('.list');
function activeIcon(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) =>
item.addEventListener('click',activeIcon));

// Time Out


function navOpen(){
    document.querySelector('nav ul').classList.toggle('show');
}
