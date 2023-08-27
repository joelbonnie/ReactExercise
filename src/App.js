import './App.css';

const App = () => {
  const name = null;
  const isNameShowing = false;
  return (
    <div className="App">
      <h1> hello {isNameShowing ? name : 'someone'} </h1>
      {name ? (
        <>
          <h1> test </h1>
          <h2> name is {name} </h2>
        </>
      ) : (
        <>
        <h1> test </h1>
        <h2> there is no name </h2>
        </>
      )}
    </div>
  );
}

export default App;
