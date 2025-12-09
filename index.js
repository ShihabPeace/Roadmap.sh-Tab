var indicator = document.getElementById('indicator');
var tab = document.getElementsByClassName('tab');
var tabContents = document.getElementsByClassName('tab-content');

indicator.style.width = tab[0].offsetWidth + 'px';
indicator.style.left = tab[0].offsetLeft + 'px';

for(let i=0; i<tab.length; i++){
    tab[i].addEventListener('click', function(e){
        indicator.style.width = e.target.offsetWidth + 'px';
        indicator.style.left = e.target.offsetLeft + 'px';

        for(let j=0; j<tabContents.length; j++){
            tabContents[j].classList.remove('active');
            tabContents[i].classList.add('active');
        }
        

    })}