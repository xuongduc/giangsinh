const button = document.querySelector('.button');

let pushed = false;

button.addEventListener('click', () =>
    {
    let leftSpool = document.querySelector('.spool.left');
    let rightSpool = document.querySelector('.spool.right');
    let chuc = document.getElementById('chuc')
    document.getElementById('click').play();
    button.classList.add('active');

    if (pushed) {
        leftSpool.classList.remove('animation-left');
        rightSpool.classList.remove('animation-right');
        chuc.loop = false;
        chuc.pause()
        pushed = !pushed;
    } else {
        leftSpool.classList.add('animation-left');
        rightSpool.classList.add('animation-right');
        chuc.loop = true;
        chuc.play();
        pushed = !pushed;
    }



    }
);