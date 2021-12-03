import React from 'react';
import { connect } from 'react-redux';
import { updateNewTaskText, addTask, removeTask } from '../actions/index.js';

const mapStateToProps = (state) => {
  const { text, tasks } = state;
  const props = {
    text,
    tasks,
  };
  return props;
};

class App extends React.Component {
  handleText = (e) => {
    const { dispatch } = this.props;
    dispatch(updateNewTaskText(e.target.value));
  }

  handleAddTask = (e) => {
    e.preventDefault();
    const { dispatch, text } = this.props;
    dispatch(addTask(text));
  };

  handleDeleteTask = (id) => {
    const { dispatch } = this.props;
    dispatch(removeTask(id));
  }

  render() {
    const { text, tasks } = this.props;
    const lis = tasks.map((task, i) => {
      return (
        <li key={i} id={i} className="list-group-item d-flex">
          <span className="mr-auto">{task}</span>
          <button type="button" className="close" onClick={() => this.handleDeleteTask(i)}>
            <span>&times;</span>
          </button>
        </li>
      );
    });
    const ul = <div className="mt-3"><ul className="list-group">{lis}</ul></div>;

    return (
      <div className="col-5">
        <form action="" className="form-inline">
          <div className="form-group mx-sm-3">
            <input type="text" required value={text} onChange={this.handleText} />
          </div>
          <button type="submit" className="btn btn-primary btn-sm" onClick={this.handleAddTask}>Add</button>
        </form>
        {lis.length > 0 ? ul : null}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);