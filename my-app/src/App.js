import logo from './logo.svg';
import './App.css';

// Creating a function which behaves as a component
const sayHello = () => {
  return <h2>Hello</h2>
}

function App() {
  return (
    // Invoking the component
    <div>
    <sayHello>Hello there!</sayHello>
    </div>
  ); // the entire argument of the return function is written in JSX
}

export default App;
