import React from "react";

function Task({ id, text, category, onDelete }) {
  const handleDelete = () => {
    onDelete(id); // Call the onDelete function with taskId as an argument
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;

