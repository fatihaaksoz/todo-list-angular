export class Item{
   user: string;
   items: ToDoItem[];
   

   constructor(){
        this.user="Fatih";
        this.items=[
            new ToDoItem("Spor",false),
            new ToDoItem("Kahvaltı",false),
            new ToDoItem("Kitap Okumak",false),
            new ToDoItem("Sinema",false)
        ];
   }
}

export class ToDoItem{
    _description:string;
    _action:boolean;

    constructor(description:string,action:boolean){
        this._description=description;
        this._action=action;    
    }
}