import React, {useState} from 'react';

function Counter(){
  const[arr, setArr] = useState([])

  function addPlus(){
    setArr(prevArr => [...prevArr, "+"])
  }

  function addMinus(){
    setArr(prevArr => [...prevArr, "-"])
  }

 return (
  <div>
    <button onClick={addMinus}>+</button>
    <button onClick={addPlus}>-</button>
    {arr.toString()}
  </div>
 )
}

export default Counter


// use a callback
//  setArr(prevArr => prevArr + )

// Numbers
//  setNum(10)
//  setNum(prevNum => prevNum +10)

// Booleans 
//  setBool(true)
//  setBool(prevBool => !prevBool)

// Strings 
//  setSelectionRange('Hello World')
//  setStr(prevStr => prevStr + 'simplified')

//Objects
//  setObj(preObj => ({...prevObj, quantity:prevObj.quantity + 1}))

//Arrays
//  setArr(prevArr => ([...prevArr, 5]))