import React, { Component } from "react";
import "../App.css";

import { connect } from "react-redux";

//Custom Component
import TodoList from "../components/TodoList";
import EmptyTodo from "../components/EmptyTodo";
import EditModal from "../components/EditModal";
import AppHeading from "../components/AppHeading";
import TodoForm from "../components/TodoForm";
import AppHeaderBar from "../components/AppHeaderBar";
import AppNotification from "../components/AppNotification";
import {
  logout,
  getItems,
  addItem,
  deleteItem,
  editItem,
} from "../redux/actions";
import Loader from "../common/components/Loader";
class Home extends Component {
  state = {
    icon: true,
    done: false,
    text: "",

    modal: false,
    currentTodo: null,
    updatedTask: null,
    taskDeleted: false,
    deleteSnackbar: false,
    completedSnackar: false,
    priority: 4,
  };
  componentDidMount() {
    this.props.getItems();
  }

  //To toggle the add todo input
  handleClick = (text) => {
    this.setState({
      icon: !this.state.icon,
      done: false,
    });
  };

  //Handle deletion of each todo
  handleDelete = (id) => {
    // const { todos } = this.props;
    // const newTodos = todos.filter((todo) => todo._id !== id);
    this.props.deleteItem(id);
    this.setState({
      taskDeleted: true,
      deleteSnackbar: true,
    });
  };

  //Handle edit of each todo
  handleEdit = (todo) => {
    this.setState({ currentTodo: todo });
    this.setState({ modal: true });
  };

  //Handle change of add task input
  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
    if (value.length >= 1) {
      this.setState({
        done: true,
      });
    }
    if (value.length === 0) {
      this.setState({
        done: false,
      });
    }
  };
  //Handle submit of add Task
  submitHandler = (event) => {
    event.preventDefault();

    let { text, priority } = this.state;
    if (text === "") return;
    const todoObj = {
      task: text,
      complete: false,
      priority: parseInt(priority),
    };
    this.props.addItem(todoObj);
    this.setState({
      text: "",
      done: false,
      priority: 4,
    });
  };

  // Modal Update on submit button
  handleUpdate = (id) => {
    const { todos, updatedTask, currentTodo } = this.state;
    console.log(updatedTask != null && updatedTask.length === 0);
    if (updatedTask != null && updatedTask.length === 0) {
      return;
    }
    if (updatedTask === null) {
      this.handleClose();
    } else {
      const todoObj = {
        ...currentTodo,
        task: updatedTask,
      };
      console.log(todoObj);
      this.props.editItem(id, todoObj);
    }
    this.handleClose();
  };

  // Assign a text input value to updatedTask from Modal
  handleChangeUpdate = (value) => {
    this.setState({ updatedTask: value });
  };

  //Archive complete Change
  handleSelectChange = (name, checked, todo) => {
    const todoObj = {
      ...todo,
      completed: checked,
    };
    this.props.editItem(name, todoObj);

    this.setState({
      completedSnackar: true,
    });
  };

  //Modal Toggle and Snackbar Title
  handleClose = () => {
    this.setState({
      modal: false,
      completedSnackar: false,
      deleteSnackbar: false,
    });
  };

  // Handle Priority change
  handlePriorityChange = (event) => {
    this.setState({ priority: event.target.value });
  };

  getCompletedStatus = () => {
    const { todos } = this.props;
    let status;
    if (todos.length) {
      status = todos.every((todo) => todo.completed);
    }
    return status;
  };

  render() {
    const {
      icon,
      done,
      text,
      modal,
      currentTodo,
      taskDeleted,
      deleteSnackbar,
      completedSnackar,
      priority,
    } = this.state;

    const { logout, todos, loading, deleteStatus } = this.props;
    console.log(deleteStatus);
    return !loading ? (
      <div className="app_container">
        <AppHeaderBar logout={logout} />
        <div className="app_body">
          <TodoForm
            icon={icon}
            text={text}
            done={done}
            submitHandler={this.submitHandler}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            handlePriorityChange={this.handlePriorityChange}
            priority={priority}
          />
          <div className="todo_container">
            <AppHeading
              styles="title_box"
              todos={todos}
              getCompletedStatus={this.getCompletedStatus}
            />

            <TodoList
              todos={todos}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
              handleSelectChange={this.handleSelectChange}
              deleted={taskDeleted}
            />

            {this.getCompletedStatus() || !todos.length ? (
              <EmptyTodo styles="empty_todos" handleClick={this.handleClick} />
            ) : null}
          </div>
          {currentTodo && (
            <EditModal
              modal={modal}
              currentTodo={currentTodo}
              handleClose={this.handleClose}
              handleChangeUpdate={this.handleChangeUpdate}
              handleUpdate={this.handleUpdate}
            />
          )}
          {/* {deleteStatus && (
            <AppNotification
              open={deleteSnackbar}
              handleClose={this.handleClose}
              status="error"
            >
              Task deleted Successfully
            </AppNotification>
          )}
          <AppNotification
            open={completedSnackar}
            handleClose={this.handleClose}
            status="success"
          >
            Task added to completed
          </AppNotification> */}
        </div>
      </div>
    ) : (
      <Loader />
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos.task_items,
  loading: state.todos.loading,
  deleteStatus: state.todos.deleteStatus,
});

export default connect(mapStateToProps, {
  logout,
  getItems,
  addItem,
  deleteItem,
  editItem,
})(Home);
