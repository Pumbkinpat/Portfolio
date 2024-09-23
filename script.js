let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let mulText = document.querySelector('.multiple-text');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

let text = mulText.textContent;
let arr = text.split('');

mulText.textContent = '';
arr.forEach(char => {
    console.log(char);

    let span = `<span class="split-char" >${char}</span>`;
    mulText.insertAdjacentHTML('beforeend', span);
});