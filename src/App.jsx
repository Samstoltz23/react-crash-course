import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";
import React, { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false)
  setShowModal(false)
  return (
    <div>
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }}/>
        <button >Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo title="Finish Frontend Simplified" />
        <Todo title="Finish interview section"/>
        <Todo title="Land a $100k job"/>
      </div>
      {showModal && <Modal title="Confirm Delete?"/>}
    </div>
  );
}

export default App;





// Using Props 
//   * accept props in parameter
//      function Todo({propName}){
//       ...
//      }

//   * use props
//      function Todo({propName}){
//       return <div>{propName}</div>
//      }

// Parent: <myComponent test="Testing" />

// Child: function myComponent({test}){
//   return <div>{test}</div>
// }

// Output: Testing

// Event Handlers
//   onClick: on buttons
//   onChange: on input fields  


// React Hooks 
//    useState: how we define variables in React
//    useEffect:

// Conditional Rendering: rendering a component when a certain condition is met