import React, { Component } from 'react';
import uuid from 'uuid';
import ProjectItem from "./ProjectItem";
import ToDoItem from "./ToDoItem";

class ToDo extends Component {

deleteProject(id){
    this.props.onDelete(id);
}

onchange(id){    
    console.log(id);
    this.props.onchange(id);
}

    render() {
        let todoItems;
        if (this.props.toDoItems) {
            todoItems = this.props.toDoItems.map(item => {
                return (
                    <ToDoItem onChange={(id)=>this.onchange(id)} key={item.id} todoItems={item}/>
                );
            });
        }

        return (
            <div className="Projects">
                <h3>To Do List</h3>
                {todoItems}  
            </div>
        );
    }
}



export default ToDo;