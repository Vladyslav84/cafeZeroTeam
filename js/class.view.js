import { cafe } from './class.cafe.js'
console.log('cafe :>> ', cafe);

class ClassView {
    viewMarkup(markup, container) {
        
    }
}

const getMenuItemMarkup =(id,title,price)=> ` <li id=${id}>
        <p>
            <span>${title}</span>
            <span>${price}</span>
        </p>
        <input type="number" value='1'/>
        <button type="button">Add</button>
    </li>`


const list = document.createElement('ul');

const showMenuList = (menu) => {
    document.body.insertAdjacentElement('afterbegin', list);
    menu.forEach(({ id, name, price }) => {
        const markup = getMenuItemMarkup(id,name, price);
        list.insertAdjacentHTML('beforeend', markup);
    })
}

showMenuList(cafe.menu)

const handlerOrder = (e) => {
    if (e.target.nodeName !== 'BUTTON') return;
    const tableNum = 1;
    // console.dir('e.target :>> ', e.target);
    // console.log('e.target. :>> ', e.target.closest('li'));

    const item = e.target.closest('li');
    const inputEl = item.querySelector('input');
    const id = item.id;
    const value = Number(inputEl.value);

    cafe.getOrder(tableNum, id, value);
    console.log('object :>> ', cafe.tables[tableNum-1].currentOrder);
}

list.addEventListener('click', handlerOrder);