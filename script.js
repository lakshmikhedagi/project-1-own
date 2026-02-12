let next = document.getElementById('next');

next.onclick = function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide')
        .appendChild(items[0]);
}