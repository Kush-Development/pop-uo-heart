let showMoreButtonClicks = 0;

function showHeart() {
    const heartContainer = document.getElementById('heart-container');
    const heart = document.createElement('div');

    // Random color generation
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    heart.classList.add('heart');
    heart.style.backgroundColor = randomColor;

    const heartBefore = document.createElement('div');
    heartBefore.classList.add('heart-before');
    heartBefore.style.backgroundColor = randomColor;

    const heartAfter = document.createElement('div');
    heartAfter.classList.add('heart-after');
    heartAfter.style.backgroundColor = randomColor;

    heart.appendChild(heartBefore);
    heart.appendChild(heartAfter);

    heartContainer.innerHTML = '';
    heartContainer.appendChild(heart);

    heartContainer.style.display = 'block';

    // Increase button size and change color on each click
    const showMoreButton = document.getElementById('showMoreButton');
    showMoreButton.style.fontSize = `${16 + showMoreButtonClicks}px`; /* Increase font size on each click */
    showMoreButton.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`; /* Change color on each click */

    setTimeout(() => {
        heartContainer.style.display = 'none';
    }, 1500);

    showMoreButtonClicks++;
}
