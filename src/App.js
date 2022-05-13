import logo from './logo.svg';
import './App.css';
import Country from './container/country';
import City from './container/city';
import Conuntry_fun from './container/Conuntry_fun';
import City_fun from './container/City_fun';
import Branch from './container/Branch';
import Time from './container/Time/Time';
import TimeFun from './container/Time/TimeFun';
import { useEffect, useState } from 'react';
import Loading from './components/Loading/Loading';
import Home from './container/home/Home';

function App() {

    const Loadingwithhome = Loading(Home);
 
    const [loading, setLoding] = useState(false);
    const [data, setData] = useState([]);

    let orgData = [
        {id:101, name:"munna"},
        {id:102, name:"curcit"}
    ]

    useEffect (
        () => {
            setLoding(true);
            setTimeout(() => {setLoding(false); setData(orgData)},2000);
        },
        []
    )

    console.log(loading, data);


    return (
        <>
            {/* <Country/> */}
            {/* <City/> */}
            {/* <Conuntry_fun/> */}
            {/* <City_fun/>  */}
            {/* <Branch/> */}
            {/* <Time/> */}
            {/* <TimeFun/> */}

            <Loadingwithhome
                isloading = {loading}
                data = {data}
            />

        </>
    );
}

export default App;
