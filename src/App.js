import logo from './logo.svg';
import './App.css';

function App() {

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
    ];

    // medicine.map((value, index) => console.log(value.id, value.name));

    let filterdata = medicine.filter((d, i) => d.expiry >= 2022);

    // let ans = filterdata.reduce((acc, d, i) => acc + d.price, 0);

    let ans = medicine.reduce((acc, d, i) => acc + d.price, 0);
    // console.log(ans);




    let arr = [10,20,30,40,50];

    // copy
    let arr1 = [...arr];
    console.log(arr1);

    // merge
    let arr2 = [99, ...arr, 60];
    console.log(arr2);

    // destructure
    let [maths, eng, sci, guj, ss] = arr;
    console.log(ss);


    // copy
    let obj ={
        id: 101,
        name: 'akshay'
    };
    let obj1 = {...obj};
    console.log(obj1);

    // merge
    let obj2 = {
        ...obj,
        place: 'surat'
    };
    console.log(obj2);

    // destructure
    let {id, name} = obj;
    console.log(id, name);


    return (
        <>
            <table border="1">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Expiry</th>
                    <th>total</th>
                </tr>
                {
                    filterdata.map((value, index) => {
                        return (
                            <tr>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.price}</td>
                                <td>{value.expiry}</td>
                                { index ===  0? <td rowspan = {medicine.length}>{ans}</td> :null }
                            </tr>
                        )
                    })
                }
            </table>
        </>
    );
}

export default App;
