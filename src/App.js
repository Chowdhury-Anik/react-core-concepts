import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const students = ['Anik', 'Rakib','Fardin','Nepal','Anup'];
  const products=[
    {name:'Web Development', price:'$200', duration: '3 month'},
    {name:'Digital Marketing', price: '$300',duration:'1 month'},
    {name:'Blogging Course', price:'$100', duration:'2 month'},
    {name:'Python Programming', price:'$300', duration: '6 month'}
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>A Dedicated Learning Platform</h1>
        <h3>Learn from home and Lead the digital world</h3>
        {
          products.map(product => <Product product={product}></Product>)
        }
      
        <Person name="Jhankhar Mahabub" job="Web Developer"></Person>
        
        <Counter></Counter>
        <Users></Users>

        <h3>Building a list </h3>
        <ul>
          {
            students.map(student => <li>{student}</li>)
          }

          {
            products.map(product => <li>{product.name}</li>)
          }


        </ul>
        <FooterArea></FooterArea>
      </header>
    </div>
  );
}

//User data load using API
function Users(){
  const [users, setUsers]= useState([]);
  useEffect(() =>{
   fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data=> setUsers(data));

  })

  return(
    <div>
      <h3>Dynamic:{users.length}</h3>
    </div>
  );
}


// counter function 
function Counter(){
  const [count, setCount]= useState(10);
  const handleDecrease = () =>setCount(count - 1);
  const handleIncrease = () =>setCount(count + 1);

  return(
    <div>
      <h1>Count: {count} </h1> 
      <button onClick ={handleDecrease}>Decrease</button>
      <button onClick ={handleIncrease}>Increase</button>
    </div>
  )
}


//products function
function Product(props){
  const ProductStyle={
    border: '2px solid gold',
    borderRadius: '5px',
    margin:'10px',
    backgroundColor:'gray',
    height: '500px',
    width: '400px',
    float:'left'


  }
  const ButtonStyle={
    color: 'black',
    border: '3px solid yellow',
    borderRadius: '5px',
  
  }
  // destructing product 

  const {name, price} = props.product;
  return(
      <div style={ProductStyle}>
        <h2>{name}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto hic natus rem repudiandae id?</p>
        <h1>{price}</h1>
        <button style={ButtonStyle}>Buy Now </button>
      </div>
  );

  
}
 // person area
   function Person(props){
     // you can apply style by declaring a variable
     const PersonStyle={
       border:'2px solid gold',
       marginTop: '50px',
       width: '800px',
       backgroundColor:'white',
       padding: '10px',
       color:'gold',
       borderRadius:'25px',

     }
  return(<div style = {PersonStyle}>
    <h2>Learn With {props.name}</h2>
    <h4>Programmer and Senior {props.job}</h4>
  </div>) 
  }
//footer area
function FooterArea(props){
  const FooterStyle={
    borderRadius: '5px',
    margin:'10px',
    backgroundColor:'gold',
    height: '500px',
    width: '100%',
    color:'black',
}
return(
<div style={FooterStyle}>
<h1>The Best Learning Method You Ever Never Seen Before</h1>
<h3>Join Thousand of programmer's Club Today</h3>
<h2>Be a programmer & be a part of the future world !</h2>
<button>Join Now...</button>
</div>
);
}
export default App;
