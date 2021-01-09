import React, { Component } from 'react';
import './App.css';
import axios from 'axios'  

const API_URL = 'http://127.0.0.1:8000';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        title: '',
        description: '',
        label:'',
        label_select: [],
	name: '',
        todo: []
    }  
  }

  getInitialState() {
    return { title: '', description:'', label:''}
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { title, description, label } = this.state;

    axios.post(`${API_URL}/todolist/`, { title, description, label})
      .then((result) => {
        console.log(result);
        this.getTodos();
    });
    this.setState(this.getInitialState());
    
  }
  onAdd = () => {
    const { name } = this.state;

    axios.post(`${API_URL}/category/`, { name })
      .then((result) => {
        console.log(result);
	this.getLabels();
    });
	this.setState(this.getInitialState());

  }

  handleDelete = todo => {
        axios
          .delete(`${API_URL}/todolist/${todo}`)
          .then(res => this.getTodos());
      };
  componentDidMount() {
	  this.getLabel();
  }
getLabel(){
    axios.get(`${API_URL}/category`)
      .then(res => {
        const label_select = res.data;
        this.setState({ label_select });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });

      this.getTodos();
  }

  getTodos(){
    axios.get(`${API_URL}/todolist`)
      .then(res => {
        const todo = res.data;
        this.setState({ todo });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }


  render() {
    const { title, description, label } = this.state;
    return (
<html>
<head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
</head>
<body>
      <div className="container">
        <div className="content">
          <h1>TodoApp</h1>
          <form>
          <div className="inputContainer">
              <input onChange={this.onChange} value={this.state.title} type="text" id="title" className="taskName" placeholder="What do you need to do?" name="title" />
              <label htmlFor="title">Title</label>
          </div>  
          <div className="inputContainer">
              <input onChange={this.onChange} value={this.state.description} type="text" id="description" className="taskName" placeholder="Breif about your task" name="description" />
              <label htmlFor="description">Description</label>
            </div>
            <div className="inputContainer half last">
              <i className="fa fa-caret-down selectArrow" />
              <select onChange={this.onChange} value={this.state.label} id="label" className="taskCategory" name="label">
                <option className="disabled" value>Choose a label</option>
                {this.state.label_select.map(label_select =>
                  <option key={label_select.id} className="" value={ label_select.id } name={ label_select.name }>{ label_select.name }</option>
                )}
              </select>
              <label htmlFor="label">Category</label>
            </div>
            <div>
              <div className="row">
                <button className="taskAdd" name="taskAdd" onClick={this.onSubmit} type="submit"><i className="fa fa-plus icon" />Add task</button> &nbsp;
              </div>
            </div>
	   
	    <div className="inputContainer">
              <input onChange={this.onChange} value={this.state.name} type="text" id="name" className="name" placeholder="Add Label" name="name" required />
              <label htmlFor="name">Name</label>
          </div>
	    <div>
              <div className="row">
                <button className="labelAdd" name="labelAdd" onClick={this.onAdd} type="submit"><i className="fa fa-plus icon" />Add Label</button> &nbsp;
              </div>
            </div>
	    <ul className="taskList">
              {this.state.todo.map(todo =>
              <li key={todo.id} className="taskItem">
		  <button className="taskDelete" name="taskDelete" onClick={() => this.handleDelete(todo.id)} type="submit" ><i className="fa fa-trash-o"/></button>&emsp;
			
                  <input type="checkbox" className="taskCheckbox" name="checkedbox" id={ todo.id } value={ todo.id } />
                  <label htmlFor={ todo.id }><span className="complete-">{ todo.title }</span></label>
              </li>
              )}
            </ul>    
          </form>
        </div>
      </div>
</body>
</html>
    );
  }
}

export default App;
