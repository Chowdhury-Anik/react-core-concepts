import logo from './logo.svg';
import './App.css';


function App() {
  const students = ['Anik', 'Rakib','Fardin','Nepal','Anup'];
  const products=[
    {name: 'Web Development', price:'$200', duration: '3 month'},
    {name:'Digital Marketing', price: '$300',duration:'1 month'},
    {name: 'Blogging Course', price:'$100', duration:'2 month'},
    {name: 'Python Programming', price:'$300', duration: '6 month'}
  ];
  return (
    <div className="App">
      <header className="App-header">
      <h1>A Dedicated Learning Platform</h1>
      <h3>Learn from home and Lead the digital world</h3>
        <Product product= {products[0]}></Product>
        <Product product= {products[1]}></Product>
        <Product product= {products[2]}></Product>
        <Product product= {products[3]}></Product>
       
        <Person name="Jhankhar Mahabub" job="Web Developer"></Person>
        
        <h3>List of ours success students</h3>
        <ul>
          <li>{students[0]}</li>
          <li>{students[1]}</li>
          <li>{students[2]}</li>
          <li>{students[3]}</li>
          <li>{students[4]}</li>
        </ul>
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
