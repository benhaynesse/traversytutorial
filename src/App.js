import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';

import Projects from "./Components/Projects";
import AddProject from "./Components/AddProject";
import ToDo from "./Components/ToDo.js";



import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }

  getToDos() {
    var root = 'https://jsonplaceholder.typicode.com';
    $.ajax({
      url: root + '/todos',
      dataType:'json',
      method: 'GET'      
    }).then((data) => {
      this.setState({todos:data});
      
    }).fail((error)=>{
      console.log(error);
    });

    
    
  }

  getProjects() {
    this.setState({
      projects: [{
        id: uuid.v4(),
        title: 'Business Website',
        category: 'Web Design'
      }, {
        id: uuid.v4(),
        title: 'Social App',
        category: 'Mobile Developement'
      }, {
        id: uuid.v4(),
        title: 'Eccomerce Shopping Cart',
        category: 'Web Development'
      }]
    });
  }

 

  componentWillMount() {
    this.getProjects();
    this.getToDos();
  }

  componentDidMount() {
    this.getToDos();
  }

  handleAddProject(newProject) {
    let projects = this.state.projects;
    projects.push(newProject);
    this.setState({ projects: projects });
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(p => p.id === id);
    projects.splice(index, 1);
    this.setState({ projects: projects });
  }

   handleChangeToDo(id){    
    let todos = this.state.todos;
    let index = todos.findIndex(i => i.id === id);    
    todos[index].completed = !todos[index].completed;
    this.setState({todos:todos});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        <hr/>
        <ToDo onchange={(id)=>this.handleChangeToDo(id)} toDoItems={this.state.todos}/>
      </div>
    );
  }
}

export default App;
