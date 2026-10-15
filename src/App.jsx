import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";
import Counter from "./components/Counter.jsx";
import React, { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false)

  function onTodoDelete(){
    setShowModal(true)
    console.log('onTodoDelete()')
  }

  function cancelModal(){
    setShowModal(false)
  }

  function confirmModal(){
    setShowModal(false)
  }

  return (
    <div>
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }}/>
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified" />
        <Todo onTodoDelete={onTodoDelete} title="Finish interview section"/>
        <Todo onTodoDelete={onTodoDelete} title="Land a $100k job"/>
      </div>
      {showModal && <Modal cancelModal={cancelModal} confirmModal={confirmModal} title="Confirm Delete?"/>}
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

// const [state, setState] = useState(false);

// state: state variable 
// setState: function that changes the state variable 
// false: default value
