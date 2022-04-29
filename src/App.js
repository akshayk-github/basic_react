import logo from './logo.svg';
import './App.css';

function App() {

  let initialValue = 0
  const medicine = [
    {
      id: 101,
      name: 'Abacavir',
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true
    },
    {
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true
    },
    {
      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63, 
      price: 250,
      expiry: 2021,
      status: false
    }
  ]
  .reduce(
    (previousValue, currentValue) => previousValue + currentValue.price
    , initialValue
  )

  console.log(medicine) 

  console.log(medicine.map((i) => {return i}));

  console.log(medicine.filter((i) => i.expiry > 2021));


  // let initialValue = 0
  // let sum = [
  //   {
  //     price: 1,
  //     y: 1
  //   },
  //   {
  //     price: 3,
  //     y: 1
  //   },
  //   {
  //     price: 1,
  //     y: 1
  //   }
  // ]
  // .reduce(
  //     (previousValue, currentValue) => previousValue + currentValue.price
  //     , initialValue
  // )
  
  // console.log(sum) 




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
