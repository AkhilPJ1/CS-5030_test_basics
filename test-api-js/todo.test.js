

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    test("if new item is added", () => {
        let obj= {"ID":"de","title": "T1","description": "D1","done": false}
        todo_service.add_todo(obj);
        expect(todo_service.get_todos().todo.length).toEqual(4);
    });
    
    test("if items to be deleted", () => {
        let id = "cd"
        todo_service.delete_todo(id);
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    test("if items to be updated", () => {
        let id = "ab";
        let obj= {"ID":"ab","title": "new title","description": "new description","done": false}
        todo_service.update_todo(id,obj);
        expect(todo_service.get_todos().todo.find(item=>item["ID"]==obj["ID"])).toEqual(obj);
    });
});