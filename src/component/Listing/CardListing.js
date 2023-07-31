import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

const CardListing = ({validData}) => {
  return (
    <>
     
     <div class="container text-center">
<div class="row row-col-auto">
  {
      validData ? (
        <>
        {
        validData.map((data , index)=>
        <MovieCard data = {data} index  ={index}  class ="col-lg-3  col-sm-auto col"/>
        )
      }  
        </>
      ):""
   }    
</div>
</div>



  
    
    </>
  )
}

export default CardListing;
