import React from "react";
import "../index.css";
const Form = () => {
  return (
    <>
      <form class="m-10">
        <label class="font-family: Roboto, serif; font-bold" for="task">
          Task:
        </label>
        <input
          class="border-black border-2"
          type="text"
          id="task"
          name="task"
        />
        <button
          class="ml-10 bg-blue-500 text-white py-1 px-3 hover:bg-purple-800"
          type="submit"
        >
          Add Task
        </button>
      </form>
    </>
  );
};

export default Form;
