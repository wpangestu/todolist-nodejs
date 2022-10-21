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

    createToDo(request,response){
        request.addListener("data", (data)=>{
            const body = JSON.parse(data.toString());
            this.toDoList.push(body.todo);

            this.getToDoList(request,response);
        })
    }

    updateToDo(request,response){
        request.addListener("data", (data)=>{
            const body = JSON.parse(data.toString());
            if(this.toDoList[body.id]){
                this.toDoList[body.id] = body.todo;
            }

            this.getToDoList(request,response);
        })        
    }

    deleteToDo(request,response){
        request.addListener("data", (data)=>{
            const body = JSON.parse(data.toString());
            if(this.toDoList[body.id]){
                this.toDoList.splice(body.id,1);
            }
            this.getToDoList(request,response);
        })
    }
}