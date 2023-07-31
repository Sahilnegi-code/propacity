import React, { useEffect, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard';
import CardListing from './CardListing';
import './style.css';
const SpeciesListing = ({data , menu ,isToggle}) => {
    console.log(data , menu);
  const [validData , setValidData] =  useState([]);

  const obj = {
    people :[ "index", "name",	"height",
	"mass",
	"hair_color",
	"skin_color",
	"eye_color",
	"birth_year"],

     vehicles : ["index","name",
    "model",
    "manufacturer",
    "cost_in_credits",
    "length",
    "max_atmosphering_speed",
    "crew",
    "passengers"] ,
     films : ["index","title",
    "episode_id",
    "opening_crawl",
    "director",
    "producer",
    "release_date"],
     planets:[ "index","name",
    "rotation_period",
    "orbital_period",
    "diameter",
    "climate",
    "gravity",
    "terrain",
    "surface_water",
    "population"],

     species : ["index","name" ,
    "classification",
    "designation",
    "average_height",
    "skin_colors",
    "hair_colors",
    "eye_colors",
    "average_lifespan",
    "language"],
 starships : [
    "index",   "name",
			"model",
			"manufacturer",
			"cost_in_credits",
			"length",
			"max_atmosphering_speed",
			"crew",
			"passengers",
			"cargo_capacity",
			"consumables",
			"hyperdrive_rating",
			"MGLT",
			"starship_class"]
}

    useEffect(()=>{
        setValidData(data.results);
    },[data,isToggle])
  return (

    <>
    <div id='leftpage'>
        {
            isToggle ?(
    <div class="row my-5">
                    <h3 class="fs-4 mb-3">Recent Orders</h3>
                    <div class="col">
                        <table class="table bg-white rounded shadow-sm  table-hover">
                            <thead>
                                <tr>
                                   
                                    {
                                        menu !== "" ? (
                                            <>
                                            {
                                                obj[menu].map( (curr , index )=> 
                                                    <th scope="col" width="50">{curr}</th>
                                                )
                                            }
                                            </>
                                        ) :""
                                        }
                                    
                                </tr>
                            </thead>
                            <tbody>
                        {
                                     ( validData )  ? (
                                    
                        <> 
                                
                            
                              {


validData.map((curr, index)=>
    <tr>
    <th scope="row">{index}</th>
    <td>{curr.name}</td>
    <td>{curr.classification}</td>
    <td>{curr.designation}</td>
    <td>{curr.average_height}</td>
    <td>{curr.skin_colors}</td>
    <td>{curr.hair_colors}</td>
    <td>{curr.eye_colors}</td>
    <td>{curr.average_lifespan}</td>
    <td>{curr.language}</td>
</tr>
)


                                 
                                
                             }
                                 
  
                        </>
                         ) :""

                        }

                            
                             
                              
                            
                            
                            </tbody>
                        </table>
                    </div>
    </div>
    ):
    (
        <>
        {
           validData?(
            <>
            {
                < CardListing validData ={validData} />
            }
        
            </>
        ):"" 
        }
        </>
    )

  
}
</div>
    </>
  )
}

export default SpeciesListing
