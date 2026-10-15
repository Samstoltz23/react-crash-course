import "./App.css";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

function App() {
 

  return (
    <div>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
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


// React Routing

//Routing lets you navigate around your website - changing the url of your page


//  useEffect(() => {
//      console.log('ONLY on mount')
//    }, []) 

//    // If you have an empty array, it runs on mount

//   useEffect(() => {
//     console.log(`on mount AND on ${showModal} change`)
//   }, [showModal])

//   // If its an array with dependencies inside of it, it will run on mount AND when the dependencies change


//    useEffect(() => {
//      console.log('EVERY render')
//    })

//   // If you have nothing, it will show on mount after every single render