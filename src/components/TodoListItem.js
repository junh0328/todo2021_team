import React from "react";
import { MdCheckBox, MdRemoveCircleOutline } from "react-icons/md";
import "./TodoListItem.scss";

const TodoListItem = () => {
  return (
    <div className="TodoListItem">
      <div className="checkbox">
        <MdCheckBox />
        <div className="text">할 일</div>
      </div>

      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
