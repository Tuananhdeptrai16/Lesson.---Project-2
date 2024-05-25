const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// const popularlist = $$('.popular-list');
// const btns = $$('.chevron .control-btn'); // Đổi tên biến thành `btns` để rõ ràng hơn
// btns.forEach((btn, index) => {
//     const list=popularlist[index]
//     btn.onclick =function(){
//         popularlist.forEach(function (list) {
//             list.classList.remove('active')
//         })
//         list.classList.add('active')
//     }
// });


const btnRight = $('.chevron-right');
const btnLeft = $('.chevron-left');
const popularList = $('.popular-list');
const popularItems = $$('.popular-item');

let length = popularItems.length;
let current = 0;

btnRight.onclick = function () {
    if (current == length -3){
        current=0
    }else{
        current++
    }
    let width = popularItems[0].offsetWidth + 30;
    popularItems.forEach((item, index) => {
        item.style.transform=`translateX(${-width * current}px)`
    });
}
btnLeft.onclick = function () {
    if(current ==0){
        current=length-1
    }else{
        current--
    }
    let width = popularItems[0].offsetWidth + 30;
    popularItems.forEach((item, index) => {
        item.style.transform=`translateX(${-width * current}px)`
    });
 }
// btnRight.addEventListener('click', () => {
//     let width = popularItems[0].offsetWidth + 30; // 30 là khoảng cách giữa các item
//     if (current === length - 1) {
//         current = 0;
//         popularList.style.transform = 'translateX(0px)';
//     } else {
//         current++;
//         popularList.style.transform = `translateX(${-width * current}px)`;
//     }
// });

// btnLeft.addEventListener('click', () => {
//     let width = popularItems[0].offsetWidth + 30; // 30 là khoảng cách giữa các item
//     if (current === 0) {
//         current = length - 1;
//         popularList.style.transform = `translateX(${-width * current}px)`;
//     } else {
//         current--;
//         popularList.style.transform = `translateX(${-width * current}px)`;
//     }
// });
