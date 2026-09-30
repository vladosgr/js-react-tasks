import axios from 'axios';
import React from 'react';
import update from 'immutability-helper';
import Item from './Item.jsx';
import routes from './routes.js';

// BEGIN (write your solution here)
export default class TodoBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {tasks: [], text: ''};
  }
  async componentDidMount(){
    const res = await axios.get(routes.tasksPath());
    this.setState({tasks: res.data});
  }
  handleChange = (e)=>{
    this.setState({text: e.target.value});
  };
  handleSubmit = async (e)=>{
    e.preventDefault();
    const {text, tasks} = this.state;
    const res = await axios.post(routes.tasksPath(), {text});
    this.setState({tasks: [res.data, ...tasks], text: ''});
  };
  handleToggle = async (task)=>{
    const route = task.state === 'active'
      ? routes.finishTaskPath(task.id)
      : routes.activateTaskPath(task.id);
    const res = await axios.patch(route);
    const {tasks} = this.state;
    const index = tasks.findIndex((item) => item.id === task.id);
    this.setState({
      tasks: update(tasks, { [index]: { $merge: { state: res.data.state } } }),
    });
  };
  renderTasks(tasks, className){
    if (tasks.length === 0){
      return null;
    }
    return(
      <div className={className}>
        {tasks.map((task)=>(
          <Item key={task.id} task={task} onClick={this.handleToggle} />
        ))}
      </div>
    );
  }
  render(){
    const { tasks, text } = this.state;
    const active = tasks.filter((task) => task.state === 'active');
    const finished = tasks.filter((task) => task.state === 'finished');
    return(
      <div>
        <div className="mb-3">
          <form className="todo-form mx-3" onSubmit={this.handleSubmit}>
            <div className="d-flex col-md-3">
              <input
                type="text"
                value={text}
                required
                className="form-control me-3"
                placeholder="I am going..."
                onChange={this.handleChange}
              />
              <button type="submit" className="btn btn-primary">add</button>
            </div>
          </form>
        </div>
        {this.renderTasks(active, 'todo-active-tasks')}
        {this.renderTasks(finished, 'todo-finished-tasks')}
      </div>
    );
  }
}
// END
