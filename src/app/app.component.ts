import { Component } from '@angular/core';
import { Item, ToDoItem } from './items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  item = new Item();
  isDisplayAll:boolean=false;
  isDelete:boolean=false;
  
  
  getName(){
    return this.item.user;
  }
  getItems(){
    if(this.isDisplayAll){
      return this.item.items
    }else{
      return this.item.items.filter(item=>!item._action)
    }
  }

  addBtn(value){  
     if(value!=""){
      this.item.items.push(new ToDoItem(value,false));
     }
  }
  getAll(){
    return this.item.items;
  }
  deleteItem(i){   
     this.item.items.splice(i,1)
  }
}