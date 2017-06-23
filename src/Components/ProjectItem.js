import React, { Component } from 'react';


class ProjectItem extends Component {
 
 deleteProject(id){
     this.props.onDelete(id);
 }
 
 
  render() {
    return (
      <li className="Project"> 
        <strong>{this.props.project.title}</strong> - {this.props.project.category}
        <a href="#" onClick={() => this.deleteProject(this.props.project.id)}>&times;</a>
      </li>
    );
  }
}



export default ProjectItem;