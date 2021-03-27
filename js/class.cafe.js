import workers from './db.workers.js'
import menu from './db.menu.js'
import tables from './db.tables.js'

 class Cafe  {
    constructor ({workers, tables, menu}) {
        this.workers = workers;
        this.tables = tables;
        this.menu = menu;
   }

   
    addNewOfficiant(name) {
      //  метод добавляет нового официанта
    }
    getPresentWorkers() {
      //  метод возвращает массив оффициантов присутствующих на смене
    }
    setupTables() {
      //  метод распределяет столики между присутствующими официантами
      //  добавляяет официантам в столики, которые за ними закреплены
      //  и добавляет столику оффицианта, который его обслуживает
    }
  };

  const cafe = new Cafe ({workers, tables, menu}) 
  console.log(cafe);