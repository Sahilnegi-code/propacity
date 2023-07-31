import React, { useEffect } from 'react'
const MovieCard = ({data , index}) => {
console.log(data);
useEffect(()=>{

},[data])
  return (
    <>
      <div class="card" style={{width: '18rem' , margin:'10px 10px 10px 10px'}}>
  <img src={`https://picsum.photos/id/${ Math.floor(Math.random()*10) }/200/300`} style={{height:'15rem'}} class="card-img-top" alt="..."/>
  <div class="card-body d-flex justify-content-between">
    <div style={{width:'80%'}} >
      <span>{ data.title || data.name }</span>
    </div>
    <div style={{textAlign:'right' ,width:'10%'}}>
      
      <i class="bi bi-three-dots-vertical"></i>
      </div>
    
<div>

</div>
  </div>
</div>
    </>
  )
}

export default MovieCard;