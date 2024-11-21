let menu=document.querySelector('.profile-menu-wrap');

function toggleMenu(){
    menu.classList.toggle('open-menu');
}

let showMoreLink=document.getElementById('showMore-link');
let sidebarActivity=document.querySelector('.sidebar-activity');

showMoreLink.onclick=function(){
    sidebarActivity.classList.toggle('open-activity');

    if(sidebarActivity.classList.contains('open-activity')){
        showMoreLink.innerHTML='Show less<b>-</b>'
    }else{
        showMoreLink.innerHTML='Show more<b>+</b>'

    }
}
