
const tapsBox = document.querySelector('.tab-box')
const arrowIcon = document.querySelectorAll('.icon i');
const tapsAll = document.querySelectorAll('.tap');

console.log(tapsAll);


let isDragin = false;

arrowIcon.forEach(icon => {
    icon.addEventListener('click', () => {
        const { id } = icon

        tapsBox.scrollLeft += id === 'left' ? - 350 : 350;
        handelIcon();
    });
});
// console.log(tabsAll);
tapsAll.forEach(tap => {
    tap.addEventListener('click', () => {
        tapsBox.querySelector('.active').classList.remove('active');
        tap.classList.add('active')
    });
});

const handelIcon = () => {
    let scrollval = Math.round(tapsBox.scrollLeft);
    let maxScrolebleWith = tapsBox.scrollWidth - tapsBox.clientWidth;

    arrowIcon[0].parentElement.style.transform = scrollval > 0 ? 'scale(1)' : 'scale(0)';
    arrowIcon[1].parentElement.style.transform = maxScrolebleWith > scrollval ? 'scale(1)' : 'scale(0)';

    setTimeout(() => handelIcon(), 50);
};

const draggrin = ({ movementX }) => {
    if (!isDragin) return

    tapsBox.classList.add('draggin');
    tapsBox.scrollLeft -= movementX

    handelIcon();
};

const dragStop = () => {
    isDragin = false
    tapsBox.classList.remove('draggin')
};

tapsBox.addEventListener('mousedown', () => isDragin = true);
tapsBox.addEventListener('mousemove', draggrin);

document.addEventListener('mouseup', dragStop);