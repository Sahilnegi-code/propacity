import React from 'react'
const SideBarDetails = () => {
 
  return (
    <>
  <div class="card" >
     <img src={`https:picsum.photos/id/${ Math.floor(Math.random()*10) }/200/300`} style={{height:'25rem'}} class="card-img-top" />

   <div class="card-body">
     <h5 class="card-title">Welcome To Star Wars DashBoards</h5>
     <p class="card-text">
     Star Wars is an American epic space opera[1] multimedia franchise created by George Lucas, which began with the eponymous 1977 film[a] and quickly became a worldwide pop culture phenomenon. The franchise has been expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe.[b] Star Wars is one of the highest-grossing media franchises of all time.
     </p>
   </div>


 </div>
    </>
  )
}

export default SideBarDetails
