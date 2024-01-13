import logo from './logo.svg';
import './App.css';
import { Country, State, City }  from 'country-state-city';
import {useEffect, useState} from 'react'

function App() {
  // console.log(State.getAllStates())
  // console.log(City.getAllCities());
  let CountryData = Country.getAllCountries()
  let CityData = City.getAllCities();
  let StateData = State.getAllStates();
  const [country , setcountry] = useState(CountryData)
const [city , setcity] = useState(CityData)
const [state , setstate] = useState(StateData)


const test = () =>{
    

  }

  return (
    <div className="App">
      {/* <select onChange={test}>
      {
        country.map((i)=>{
          return(
            <>
            <option>{i.name}</option>
            </>
          )
        })
      }
        </select> */}
        {/* <select onChange={test}> */}
      {/* {
        city.map((i)=>{
          return(
            <>
            <option>{i.name}</option>
            </>
          )
        })
      }
        </select> */}
        <select onChange={test}>
      {
        state.map((i)=>{
          return(
            <>
            <option>{i.name}</option>
            </>
          )
        })
      }
        </select>
    </div>
  );
}

export default App;
