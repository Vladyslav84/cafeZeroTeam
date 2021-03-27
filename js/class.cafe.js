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
  };

  const cafe = new ClassCafe ({workers, tables, menu}) 
  cafe.addNewOfficiant('Дима')
//   cafe.getPresentWorkers();
  cafe.setupTables();
// console.log(cafe.tables);

// console.log(cafe.workers);
  console.log(cafe.presentWorkers);
