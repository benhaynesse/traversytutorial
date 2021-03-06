import React, { Component } from 'react';
import uuid from'uuid';

import ProjectItem from "./ProjectItem";

class AddProject extends Component {

    constructor(){
        super();
        this.state = {
            newProject:{}
        }
    }

    static defaultProps = {
        categories: ['Web Design', "Web Development", "Mobile Development"]
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.refs.title.value === ""){
            alert("title is requred");
        }else{
            this.setState({newProject:{
                id:uuid.v4(),
                title: this.refs.title.value,
                category: this.refs.category.value
            }}, function(){
                //console.log(this.state);
                this.props.addProject(this.state.newProject);
            });
        }        
    }

    render() {
        let catOptions = this.props.categories.map(category => {
            return <option key={uuid.v4()} value={category}>{category}</option>
        });
       
        return (
            <div>
              <h3>Add Project</h3>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <label>Title</label><br/>
                    <input type="text" ref="title"/>
                </div>
                <div>
                    <label>Category</label><br/>
                    <select ref="category">
                        {catOptions}
                    </select>
                </div>
                <input type="submit" value="Submit"/>
              </form>
            </div>
        );
    }
}

export default AddProject;