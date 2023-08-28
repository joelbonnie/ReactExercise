import './App.css';

const Person = (props) => {
  return (
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name: {props.lastName}</h2>
    <h2>Age: {props.age}</h2>
    <br></br>
    </>
  )
}

const App = () => {
  const name = null;
  const isNameShowing = false;
  return (
    <div className="App">
      <Person 
        name='John' 
        lastName={'Doe'} a
        ge={25} 
      />
      <Person name = 'Mary' lastName='Smith' age={20 + 10}/>
    
      
      
    </div>
  );
}

export default App;
