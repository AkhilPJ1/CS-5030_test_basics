class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
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
            return item.id !==id
        })
    
    }

    update_todo(id, todo){
        for(let i of this.todo_data["data"]){
            if(i["id"]==id){
                i["title"]=todo["title"]
                i["completed"]=todo["completed"]
            }
        }
    }
}


module.exports= todoservice;