import http from 'http';
import { ToDoListService } from './todolist-service.mjs';

const service = new ToDoListService();
const server = http.createServer((request,response)=>{

    response.setHeader("Content-Type","application/json");

    if(request.method=="GET"){
        service.getToDoList(request,response);
    }else if(request.method=="POST"){
        service.createToDo(request,response);
    }else if(request.method=="PUT"){
        service.updateToDo(request,response);
    }else if(request.method=="DELETE"){
        service.deleteToDo(request,response);
    }
});

server.listen(3000);