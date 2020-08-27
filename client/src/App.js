import React, { Component } from "react";
import "./App.css";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Cancel from "@material-ui/icons/Cancel";
import Check from "@material-ui/icons/Check";
import { green } from "@material-ui/core/colors";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import Alert from "@material-ui/lab/Alert";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { connect } from "react-redux";
import * as actions from "./redux/actions/index";

class App extends Component {
  state = {
    icon: true,
    done: false,
    todo: {},
    todos: [
      { id: 1, task: "I have to complete it." },
      { id: 2, task: "Do the chores of house." },
    ],
    modal: false,
    currentTodo: null,
    updatedTask: null,
  };
  componentDidMount() {
    this.props.todo();
  }
  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      icon: !this.state.icon,
      done: false,
    });
  };
  handleEdit = (todo) => {
    this.setState({ currentTodo: todo });
    this.setState({ modal: true });
  };
  handleDelete = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => todo.id !== id);
    this.setState({
      todos: newTodos,
      delete: true,
    });
  };
  submitHandler = (event) => {
    event.preventDefault();
    let { todo } = this.state;
    if (JSON.stringify(todo) === JSON.stringify({})) return;
    this.setState({
      todos: [todo, ...this.state.todos],
    });
    todo = { id: null, task: "" };
    this.setState({
      todo: todo,
    });
    console.log("ïn submit");
  };

  handleChange = ({ target: { name, value } }) => {
    console.log("hello");
    let todo = {};
    todo[name] = value;
    todo["id"] = Math.random();

    this.setState({
      todo: todo,
    });
    if (value.length === 1) {
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
  handleClose = () => {
    this.setState({ modal: false });
  };
  // Modal Update
  handleUpdate = (id) => {
    const { todos, updatedTask } = this.state;
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
    this.handleClose();
  };
  handleChangeUpdate = ({ target: { value } }) => {
    this.setState({ updatedTask: value });
  };

  render() {
    const { icon, done, todos, todo, modal, currentTodo } = this.state;
    console.log(todos);

    return (
      <div className="app_container">
        <form onSubmit={this.submitHandler}>
          <div className={icon ? "add" : "add_input"}>
            {icon ? null : (
              <input
                id="task"
                name="task"
                type="text"
                value={todo.task}
                className="task_add"
                placeholder="Enter a task here"
                onChange={this.handleChange}
              />
            )}
            {done ? (
              <Fab
                style={{ backgroundColor: green[500], color: "white" }}
                aria-label="add"
                component="button"
                type="submit"
                className="done"
              >
                <Check />
              </Fab>
            ) : null}
            {icon ? (
              <Fab
                color="primary"
                aria-label="add"
                component="button"
                onClick={this.handleClick}
                size="large"
              >
                <AddIcon />
              </Fab>
            ) : (
              <Fab
                color="secondary"
                aria-label="add"
                component="button"
                onClick={this.handleClick}
                size="large"
              >
                <Cancel />
              </Fab>
            )}
          </div>
        </form>

        <div className="todo_container">
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={500}
          >
            {todos.map((todo) => (
              <Card key={todo.id} className={"todo_card"}>
                <CardContent className="todo_card_content">
                  <Typography
                    variant="body2"
                    component="p"
                    className="task_name"
                  >
                    {todo.task}
                  </Typography>
                  <div className="todo_action_button">
                    <Button
                      size="small"
                      className="todo_edit"
                      onClick={() => this.handleEdit(todo)}
                    >
                      <EditRoundedIcon color="primary" />
                    </Button>
                    <Button size="small" className="todo_delete">
                      <DeleteForeverRoundedIcon
                        color="secondary"
                        onClick={() => this.handleDelete(todo.id)}
                      />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </ReactCSSTransitionGroup>
          {!todos.length && (
            <Alert severity="success" className="empty_todos">
              There are no todos
            </Alert>
          )}
        </div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className="todo_modal"
          open={modal}
          onClose={this.handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={modal}>
            <div className="todo_modal_content">
              <input
                id="task_update"
                name="task"
                type="text"
                placeholder="Update Your Task"
                onChange={this.handleChangeUpdate}
              />
              <Fab
                color="secondary"
                aria-label="add"
                component="button"
                onClick={this.handleClose}
                size="large"
              >
                <Cancel />
              </Fab>
              <Fab
                style={{ backgroundColor: green[500], color: "white" }}
                aria-label="add"
                component="button"
                className="done"
                onClick={() => this.handleUpdate(currentTodo.id)}
              >
                <Check />
              </Fab>
            </div>
          </Fade>
        </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
