const loadMore = document.getElementById('load-more');

let currentItems = 3;

loadMore.addEventListener('click', (e) => {
    const elemList = [...document.querySelectorAll('.card-elem')];

    for (let i = currentItems; i < currentItems + 3; i++) {
        if (elemList[i]) {
            console.log(elemList[i]);
            elemList[i].style.display = 'block';
        }
    }

    currentItems += 3;
})