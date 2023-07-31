import './App.css';
import {BrowserRouter , Route  , Routes} from 'react-router-dom';
import Home from './component/Home/Home';
import PeopleListing from './component/Listing/PeopleListing';
import PlanetsListing from './component/Listing/PlanetsListing';
import SpeciesListing from './component/Listing/SpeciesListing';
import StarshipsListing from './component/Listing/StarshipsListing';
import VehiclesListing from './component/Listing/VehiclesListing';
import SideBar from './component/SideBar/SideBar';
import { useState , useEffect } from 'react';
import FilmsListing from './component/Listing/FilmsListing';
function App() {
  const [menu , setMenu]  =  useState("");
  const[data , setData ]  = useState([]);
  const [ isToggle, setIsToggle] =  useState(true);
  console.log(menu)
  // useState()
  console.log(data);

  const fetchData = async()=>{
    try{
    const response =  await fetch(`https://swapi.dev/api/${menu}`)
     const data =  await response.json();
     setData(data);

        }
        catch(error){
          console.log('error');
        }

  }
  useEffect(()=>{
    fetchData();
  },[menu])

  return (
    <div>
         <BrowserRouter> 
      <Routes>
        <Route path ='/' element ={<Home data ={data} menu =  {menu} setIsToggle = {setIsToggle} setMenu = {setMenu}  />}   >
        <Route  path = 'people' element={<PeopleListing isToggle ={isToggle} data = {data } menu = {menu}  />} / >
        <Route  path = 'planets' element={<PlanetsListing isToggle ={isToggle} data = {data } menu = {menu} />} / >
        <Route  path = 'species' element={<SpeciesListing isToggle ={isToggle} data = {data } menu = {menu} />} / >
        <Route  path = 'starships' element={<StarshipsListing isToggle ={isToggle} data = {data } menu = {menu} />} / >
        <Route  path = 'vehicles' element={<VehiclesListing isToggle ={isToggle} data = {data } menu = {menu} />} / >
        <Route  path = 'films' element={<FilmsListing isToggle ={isToggle} data = {data } menu = {menu} />} / >
        </Route>

      </Routes>
   
      </BrowserRouter>
    </div>
  );
}

export default App;
