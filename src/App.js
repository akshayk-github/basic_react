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


  // let arr = [10,20,30,40,50];

  // arr.map((a, i) => console.log(a,my_function()));

  // normal method make function
  // function intro()
  // {

  // }

  // let my_function = () => {
  //   console.log ("my name is akshay kumbhani")
  // }

  // my_function();
  // my_function();
  // my_function();
  // my_function();
  // my_function();

  // let obj = {
  //   id:10,
  //   age:20,
  //   per:30
  // }

  // console.log(obj.age)
  // console.log(obj["age"])

  let a = [10,20,30,40,50];
  let b = [10,20,30,40,50];
  let c = [10,20,30,40,50];
  let d = [10,20,30,40,50];
  let e = [10,20,30,40,50];
  let f = [10,20,30,40,50];
  let g = [10,20,30,40,50];
  let h = [10,20,30,40,50];
  let i = [10,20,30,40,50];
  let j = [10,20,30,40,50];
  let k = [10,20,30,40,50];
  let l = [10,20,30,40,50];

  a.push(99); //add element at last
  b.unshift(99); //add element at first
  c.pop(); //remove element at last
  d.shift(); //remove element at first
  e.splice(3, 0, 99); //add element at specific position
  f.splice(3, 2); //remove 1 element from 2nd index
  // g.toString(); //convert array into string
  let res = h.some((a) => a > 10); //check within array, return true/false
  let result = i.find((a) => a > 10); //check within array, return first match element
  let result_2 = Array.isArray(j); //check given element is array or not

  console.log(a, "push_add element at last");
  console.log(b, "unshift_add element at first");
  console.log(c, "pop_remove element at last");
  console.log(d, "shift_remove element at first");
  console.log(e, "splice_add element at specific position");
  console.log(f, "splice_remove 1 element from 2nd index");
  console.log(g.toString(), "toString_convert array into string"); //convert array into string
  console.log(res, "some_check within array, return true/false");
  console.log(result, "find_check within array, return first match element");
  console.log(result_2, "isArray_check given element is array or not");


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
