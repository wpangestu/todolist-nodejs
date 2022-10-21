export class ToDoListService{
    toDoList = ["Wahyu","Aji","Pangestu"];

    getJsonToDoList(){
        return JSON.stringify({
            code: 200,
            status: "OK",
            data:this.toDoList.map((value,index)=>{
                return {
                    id:index,
                    todo:value
                }
            })
        })
    }

    getToDoList(request, response){
        const json = this.getJsonToDoList();
        response.write(json);
        response.end();
    }

    async createToDo(request,response){
        await request.addListener("data", (data)=>{
            const body = JSON.parse(data.toString());
            this.toDoList.push(body.todo);
        })
        this.getToDoList(request,response);
    }
}