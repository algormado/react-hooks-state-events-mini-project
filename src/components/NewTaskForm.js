import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskDetails, setTaskDetails] = useState({ text: "", category: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTaskDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskDetails.text.trim() && taskDetails.category.trim()) {
      onTaskFormSubmit(taskDetails);
      setTaskDetails({ text: "", category: "" });
    }
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={taskDetails.text}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={taskDetails.category}
          onChange={handleChange}
          required
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;


