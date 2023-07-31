import React, { useEffect, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard';
import './style.css';
import CardListing from './CardListing';
const FilmsListing = ({data , menu  ,isToggle }) => {
    // const loc =  useLocation();
  const [validData , setValidData] =  useState([]);
//   const [Tole , setIsToggle] = useState(false);
  console.log(isToggle);

const obj = { people :[ "index", "name",	"height",
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
// consol
console.log(validData );

    useEffect(()=>{
        setValidData(data.results);
    },[data , isToggle])
  return (

    <>
    <div id='leftpage'>
{

isToggle ?(
    <div class="row my-5">
            <h3 class="fs-4 mb-3">Recent Orders</h3>

            <div class="row">
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
<td>{curr.title}</td>
<td>{curr.episode_id}</td>
<td>{curr.opening_crawl}</td>
<td>{curr.director}</td>
<td>{curr.producer}</td>
<td>{curr.release_date}</td>
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
          ):(
            <>

            {
validData?(
    <>
    {
        < CardListing validData ={validData} />
            // <MovieListing  validData ={validData}/>
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

export default FilmsListing;
