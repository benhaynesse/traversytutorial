import React, { Component } from 'react';


class ToDoItem extends Component {
 
 changeCompleted(id){     
     this.props.onChange(id);    
 }
 
 
  render() {      
      let comp = this.props.todoItems.completed ? "YES" : "NO";
    return (
      <li className="Project">           
        <strong>{this.props.todoItems.title}</strong> - {comp}
        <input type="checkbox" checked={this.props.todoItems.completed} 
        onChange={()=>this.changeCompleted(this.props.todoItems.id)} />
      </li>
    );
  }
}



export default ToDoItem;