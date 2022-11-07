class todoservice{
    todo_data = {
        "todo":[{
            "ID": "ab",
            "title": "T1",
            "description": "D1",
            "done": false
        },
        {
            "ID": "bc",
            "title": "T1",
            "description": "D1",
            "done": false
        },
        {
            "ID": "cd",
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        this.todo = this.todo_data;
        return this.todos;
    }

    add_todo(todo){
        this.todo_data["todo"].push(todo)
    }

    delete_todo(id){
        this.todo_data["todo"] = this.todo_data["todo"].filter(function(item) {
            return item["ID"] !==id
        })
    
    }

    update_todo(id, todo){
        let c=-1;
        for(let i of this.todo_data["todo"]){
            c=c+1;
            if(i["ID"]==id){
                this.todo_data['todo'][c]=todo;
            }
        }
    }
}


module.exports= todoservice;