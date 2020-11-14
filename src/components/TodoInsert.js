import React, { useState } from "react";
import "./TodoInsert.scss";
import { MdAdd } from "react-icons/md";

const Todoinsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className="TodoInsert">
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default Todoinsert;
