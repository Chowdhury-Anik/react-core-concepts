import logo from './logo.svg';
import './App.css';


function App() {
  const products=[
    {name: 'Web Development', price:'$200', duration: '3 month'},
    {name:'Digital Marketing', price: '$300',duration:'1 month'},
    {name: 'Blogging Course', price:'$100', duration:'2 month'},
    {name: 'Python Programming', price:'$300', duration: '6 month'}
  ];
  return (
    <div className="App">
      <header className="App-header">
      <h1>My React App</h1>
      <p>First time react practice!</p>
        <Product product= {products[0]}></Product>

        <Person name="Jhankhar Mahabub" job="Web Developer"></Person>
        <FooterArea></FooterArea>
      </header>
    </div>
  );
}
//products function
function Product(props){
  const ProductStyle={
    border: '2px solid gold',
    borderRadius: '5px',
    margin:'10px',
    backgroundColor:'gray',
    height: '450px',
    width: '400px',


  }
  const ButtonStyle={
    color: 'black',
    border: '3px solid yellow',
    borderRadius: '5px',
  
  }
  return(
    <div style={ProductStyle}>
    <h2>{props.product.name}</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto hic natus rem repudiandae id?</p>
    <h1>{props.product.price}</h1>
    <button style={ButtonStyle}>Buy Now </button>
    </div>
  );

  
}
 // person area
   function Person(props){
     // you can apply style by declaring a variable
     const PersonStyle={
       border:'2px solid gold',
       margin: '30px',
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
