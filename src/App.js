import React from "react";
import Form from "./components/Form";
import List from "./components/List";

import "./index.css";

function App() {
  return (
    <div class="bg-gray-100 flex flex-col items-center justify-center">
      <h1 class="ml-10 mt-10 font-family: Roboto, Times, serif; font-bold text-3xl">
        To-Do de Noob
      </h1>
      <Form />
      <List />
    </div>
  );
}

export default App;
