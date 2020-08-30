import React, { Component } from "react";
import "../App.css";

import { connect } from "react-redux";
import * as actions from "../redux/actions/index";
import shortid from "shortid";

//Custom Component
import TodoList from "../components/TodoList";
import EmptyTodo from "../components/EmptyTodo";
import EditModal from "../components/EditModal";
import AppHeading from "../components/AppHeading";
import TodoForm from "../components/TodoForm";
import AppHeaderBar from "../components/AppHeaderBar";
import AppNotification from "../components/AppNotification";
class Home extends Component {
  state = {
    icon: true,
    done: false,
    text: "",
    todos: [
      {
        id: "fdsak_1",
        task: "Complete the Redux Project.",
        completed: false,
        priority: 1,
      },
      { id: "eiurwe_2", task: "Go for a Walk", completed: false, priority: 2 },
      {
        id: "dskjfk_3",
        task: "Call Mom and Dad",
        completed: false,
        priority: 3,
      },
    ],
    modal: false,
    currentTodo: null,
    updatedTask: null,
    taskDeleted: false,
    deleteSnackbar: false,
    completedSnackar: false,
    priority: 4,
  };
  componentDidMount() {
    this.props.todo();
  }

  //To toggle the add todo input
  handleClick = (text) => {
    this.setState({
      icon: !this.state.icon,
      done: false,
    });
  };

  //Handle edit of each todo
  handleEdit = (todo) => {
    this.setState({ currentTodo: todo });
    this.setState({ modal: true });
  };

  //Handle deletion of each todo
  handleDelete = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => todo.id !== id);
    this.setState({
      todos: newTodos,
      taskDeleted: true,
      deleteSnackbar: true,
    });
  };

  handleSelectChange = (name, checked) => {
    const { todos } = this.state;

    this.setState({
      todos: todos.map((todo) => {
        if (todo.id === name) {
          return {
            ...todo,
            completed: checked,
          };
        } else {
          return todo;
        }
      }),
      completedSnackar: true,
    });
  };

  //Handle submit of add Task
  submitHandler = (event) => {
    event.preventDefault();

    let { text, todos, priority } = this.state;
    if (text === "") return;
    const todoObj = {
      id: shortid.generate(),
      task: text,
      complete: false,
      priority: parseInt(priority),
    };
    const newTodos = [todoObj, ...todos];

    this.setState({
      todos: newTodos,
    });

    this.setState({
      text: "",
      done: false,
      priority: 4,
    });
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
  //Modal Toggle and Snackbar Title
  handleClose = () => {
    this.setState({
      modal: false,
      completedSnackar: false,
      deleteSnackbar: false,
    });
  };
  // Modal Update on submit button
  handleUpdate = (id) => {
    const { todos, updatedTask } = this.state;
    console.log(updatedTask != null && updatedTask.length === 0);
    if (updatedTask != null && updatedTask.length === 0) {
      return;
    }
    if (updatedTask === null) {
      this.handleClose();
    } else {
      this.setState({
        todos: todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              task: updatedTask,
            };
          } else {
            return todo;
          }
        }),
      });
    }

    this.handleClose();
  };
  // Assign a text input value to updatedTask from Modal
  handleChangeUpdate = (value) => {
    this.setState({ updatedTask: value });
  };

  // Handle Priority change
  handlePriorityChange = (event) => {
    console.log("here");
    this.setState({ priority: event.target.value });
  };

  getCompletedStatus = () => {
    const { todos } = this.state;
    let status = todos.every((todo) => todo.completed);
    return status;
  };

  render() {
    const {
      icon,
      done,
      todos,
      text,
      modal,
      currentTodo,
      taskDeleted,
      deleteSnackbar,
      completedSnackar,
      priority,
    } = this.state;
    console.log(todos);
    console.log(priority);
    return (
      <div className="app_container">
        <AppHeaderBar />
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
          <AppNotification
            open={deleteSnackbar}
            handleClose={this.handleClose}
            status="error"
          >
            Task deleted Successfully
          </AppNotification>
          <AppNotification
            open={completedSnackar}
            handleClose={this.handleClose}
            status="success"
          >
            Task added to completed
          </AppNotification>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todoData: state.todo.data,
});

const mapDispatchToProps = (dispatch) => {
  return {
    todo: () => dispatch(actions.todo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
