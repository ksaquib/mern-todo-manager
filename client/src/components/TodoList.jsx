import React, { useState, useEffect } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import Checkbox from "@material-ui/core/Checkbox";
import DoneIcon from "@material-ui/icons/Done";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { Tooltip } from "@material-ui/core";
import { red, orange, yellow } from "@material-ui/core/colors";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function TodoList({
  todos,
  handleEdit,
  handleDelete,
  handleSelectChange,
  deleted,
}) {
  const [completed, setCompleted] = useState();
  useEffect(() => {
    setCompleted(false);
  }, [todos]);
  const handleChange = (e) => {
    if (e.target.checked) {
      setCompleted(true);
    } else {
      setCompleted(false);
    }
    handleSelectChange(e.target.name, e.target.checked);
  };
  const getDeleteClasses = () => {
    if (completed) return "complete";
    if (deleted) return "fade";
    return "fade";
  };

  const prioritySet = (priority) => {
    if (priority === 1) {
      return (
        <Tooltip title={`Priority ${priority}`}>
          <FiberManualRecordIcon style={{ color: red[500] }} />
        </Tooltip>
      );
    }
    if (priority === 2) {
      return (
        <Tooltip title={`Priority ${priority}`}>
          <FiberManualRecordIcon style={{ color: orange[500] }} />
        </Tooltip>
      );
    }
    if (priority === 3) {
      return (
        <Tooltip title={`Priority ${priority}`}>
          <FiberManualRecordIcon style={{ color: yellow[500] }} />
        </Tooltip>
      );
    }
    return (
      <Tooltip title={`Priority ${priority}`}>
        <FiberManualRecordIcon />
      </Tooltip>
    );
  };
  return (
    <ReactCSSTransitionGroup
      transitionName={getDeleteClasses()}
      transitionEnterTimeout={300}
      transitionLeaveTimeout={500}
    >
      {todos.map(
        (todo, i) =>
          !todo.completed && (
            // <Todo todo={todo} handleEdit={this.handleEdit} handleDelete={this.handleDelete}/>
            <Card key={todo.id} className={"todo_card"}>
              <CardContent className="todo_card_content">
                {prioritySet(todo.priority)}
                <Typography variant="body2" component="p" className="task_name">
                  {todo.task}
                </Typography>
                <Tooltip title="Completed">
                  <Checkbox
                    checked={todo.completed}
                    onChange={handleChange}
                    name={todo.id}
                    color="primary"
                    icon={<DoneIcon />}
                    checkedIcon={<DoneIcon />}
                  />
                </Tooltip>
                <div className="todo_action_button">
                  <Tooltip title="Edit">
                    <Button
                      size="small"
                      className="todo_edit"
                      onClick={() => handleEdit(todo)}
                    >
                      <EditRoundedIcon color="primary" />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <Button size="small" className="todo_delete">
                      <DeleteForeverRoundedIcon
                        color="secondary"
                        onClick={() => handleDelete(todo.id)}
                      />
                    </Button>
                  </Tooltip>
                </div>
              </CardContent>
            </Card>
          )
      )}
    </ReactCSSTransitionGroup>
  );
}

export default TodoList;
