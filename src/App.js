import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <h1>My React App</h1>
        <p>First time react practice!</p>
        <Person name="Anik Chowdhury" job="Learner"></Person>
        <Person name="Jhankar Mahabub" job="Instructor"></Person>
        <Person name="joy Dev" job="Job Holder"></Person>
        
      </header>
    </div>
  );
}
 
   function Person(props){
     // you can apply style by declaring a variable
     const PersonStyle={
       border:'2px solid gold',
       margin: '10px',
       width: '600px'

     }
  return(<div style = {PersonStyle}>
    <h2>Name: {props.name}</h2>
    <h4>Profession: {props.job}</h4>
  </div>) 
  }


export default App;
