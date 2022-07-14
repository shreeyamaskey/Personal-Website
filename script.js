const list = document.querySelectorAll('.list');
function activeIcon(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) =>
item.addEventListener('click',activeIcon));

// Time Out

var homePage = document.getElementById('link-1');

homePage.addEventListener('click', (e)=>{
    e.preventDefault();

    setTimeout(() =>{
        window.location.href = "/index.html";
    }, 1100);
});


var articlePage = document.getElementById('link-2');

articlePage.addEventListener('click', (e)=>{
    e.preventDefault();

    setTimeout(() =>{
        window.location.href = "/articles.html";
    }, 1100);
});


var projectPage = document.getElementById('link-3');

projectPage.addEventListener('click', (e)=>{
    e.preventDefault();

    setTimeout(() =>{
        window.location.href = "/project.html";
    }, 1100);
});

function navOpen(){
    document.querySelector('nav ul').classList.toggle('show');
}