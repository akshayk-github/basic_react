import logo from './logo.svg';
import './App.css';

function App() {

  // var a = 10;
  // {
  //   var a = 20;
  // }
  // console.log(a)


  // let a = 10;
  // {
  //   let a = 20;
  //   console.log(a)
  // }
  // console.log(a)


  // const a = 10;
  // {
  //   const a = 20;
  //   // console.log(a)
  // }
  // console.log(a)


  // const value compulsory declare
  // const a;
  // console.log(a);


  // let a;
  // a = 10;
  // console.log(a);


  // const value can not be re-declared
  // const a = 10;
  // a = a + 10;
  // console.log(a);


  let arr = [10,20,30,40,50,];

  arr.map((a, i) => console.log(a,my_function()));

  // normal method make function
  // function intro()
  // {

  // }

  let my_function = () => {
    console.log ("my name is akshay kumbhani")
  }

  my_function();
  my_function();
  my_function();
  my_function();
  my_function();



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

        </a>
      </header>
    </div>
  );
}

export default App;
