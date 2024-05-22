const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const popularlist = $$('.popular-list');
const btns = $$('.chevron .control-btn'); // Đổi tên biến thành `btns` để rõ ràng hơn

console.log(' :', popularlist);
console.log(' :', btns);

btns.forEach((btn, index) => {
    const list=popularlist[index]
    btn.onclick =function(){
        popularlist.forEach(list=>list.classList.remove('active'))
        list.classList.add('active')
    }
});
