import workers from './db.workers.js'
import menu from './db.menu.js'
import tables from './db.tables.js'

 class ClassCafe  {
    constructor ({workers, tables, menu}) {
        this.workers = workers;
        this.tables = tables;
        this.menu = menu;
   }
   
    addNewOfficiant(name) {
        const newWorker = {
            name,
            isPresent: false,
            tables: [],
            tips: 0,
        }
        this.workers.push(newWorker);
   }
   
    getPresentWorkers() {
        this.presentWorkers = this.workers.filter(worker => {return worker.isPresent});
   }
   
    setupTables() {
      this.getPresentWorkers();
      const countWorkers = this.presentWorkers.length;
      this.tables = this.tables.map((table,ind) => {
        const currentWorker = this.presentWorkers[ind % countWorkers];
        table.service = currentWorker.name;
        currentWorker.tables.push({id: table.table})

        return table;
      })
   }
   
   getOrder(tableNum, dishId, num) {
     const table = this.tables.find(({ table }) => table === tableNum);
     //console.log(table.currentOrder);
     if(!table.currentOrder){
       table.currentOrder = {};
     }
     if (table.currentOrder[dishId]) {
       table.currentOrder[dishId] += num;
       return;
     }
    table.currentOrder[dishId] = num;
   }
};
 


  export const cafe = new ClassCafe ({workers, tables, menu}) 
  cafe.addNewOfficiant('Дима')
//   cafe.getPresentWorkers();
  cafe.setupTables();
// console.log(cafe.tables);

// console.log(cafe.workers);
console.log(cafe.presentWorkers);
cafe.getOrder(2, 'late', 4);
cafe.getOrder(2, 'late', 4);
cafe.getOrder(2, 'water', 4);

console.log(cafe.tables[1]);
  

// 3. Написать функцию getOrder(table, dishId, num), которая принимает номер столика,
//   id блюда(меню с блюдами внешняя переменная из глобальной области видимости)
// и кол - во данных блюд в заказе.добавляет в объекте столика, свойство currentOrder
//   - объект со свойствами, где ключ - id блюда, значение ключа - кол - во этих блюд
// в текущем заказе, Пример currentOrder: { capuchino: 2, napoleon: 2, zavarnoe: 1