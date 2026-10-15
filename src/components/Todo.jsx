import './Todo.css';

function Todo({title, onTodoDelete}){
  
  return (
    <div className="todo">
      <p>{title}</p>
      <span>Description</span>
      <button onClick={onTodoDelete}>Delete</button>
    </div>
  )
}

export default Todo;




// PARENT

// function Parent(){
//   function clicked(){
//     console.log('Parent notified!')
//   }
//   return (
//     <Child clicked={clicked} />
//   )
// }

// clicked={clicked}: Pass props




// CHILD

// function Child({clicked}){
//   return (
//     <button onClick={clicked}>Child Button</button>
//   )
// }

// onClick={clicked}: Emit Events