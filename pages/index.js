menu.onclick = function myFunc(){
    var x = document.getElementById('nava');
    

    if(x.className === 'ul') {
        x.className += ' display-none';
    }else{
        x.className = 'ul';
    }
};