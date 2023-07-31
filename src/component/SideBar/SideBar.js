import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import './style.css'
const SideBar = ({setMenu , data }) => {
  const nav = useNavigate();
    console.log(setMenu);
    console.log(data.results);
    useEffect(()=>{

    },[data]);
  return (
    <div id='sidelist'  >
    <div  className='container-fluid'>
      <div className='row w-100' >
        <div className='col-auto bg-dark d-flex flex-column justify-content-between min-vh-100'>
          <div className='mt-2'>
            <a className='text-decoration ms-4 d-flex align-items text-white d-none d-sm-inline' href="">
              <span className='fs-4'><img src="https://shorturl.at/jyNT6" style={{width:'8rem' , borderRadius:'5rem'}} alt="" /></span>
            </a>

            <ul class="nav nav-pills  mt-5  flex-column" id="parentM">
            <Link to="/films">
            <li class="nav-item text-white my-1 btn-group dropend" onClick={()=>nav('/films')}   >
                <button  type='button' class="  btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-folder"></i>
                  <span  onClick={()=>{setMenu('films')}} className='ms-2 d-none d-sm-inline-flex'>films</span>
                </button>
                <ul class="nav justify-content-center collapse ml-1 flex-column dropdown-menu" data-bs-parent="#parentM">
                
                 

                    {

data != undefined && data.results != undefined && ( data.results.length !== 0) &&  (Array.isArray(data.results))   ? 
 (
 <>


{

data.results.map(curr=> 
<li >
<button class="btn btn-dark btn-lg w-100 mb-2" type="button" >
    {
      curr.name || curr.title
    }
  </button>
 
</li>
  

  ) 


}


   </> 
 ):"process"
 

 
 
    }




                


                        
                   
                  
                  
                </ul>
              </li>
            </Link>
         
            <Link to="/people">
            <li class="nav-item text-white my-1 btn-group dropend" onClick={()=>nav('/people')}   >
                <button  type='button' class="  btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-folder"></i>
                  <span  onClick={()=>{setMenu('people')}} className='ms-2 d-none d-sm-inline-flex'>People</span>
                </button>
                <ul class="nav justify-content-center collapse ml-1 flex-column dropdown-menu" data-bs-parent="#parentM">
                
                 

                    {

data != undefined && data.results != undefined && ( data.results.length !== 0) &&  (Array.isArray(data.results))   ? 
 (
 <>


{

data.results.map(curr=> 
<li >
<button class="btn btn-dark btn-lg w-100 mb-2" type="button" >
    {
      curr.name || curr.title
    }
  </button>
 
</li>
  

  ) 


}


   </> 
 ):"process"
 

 
 
    }




                


                        
                   
                  
                  
                </ul>
              </li>
              </Link>
              
              <Link to="/species">
              <li class="nav-item text-white my-1 btn-group dropend" onClick={()=>nav('/species')}   >
                <button  type='button' class="  btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-folder"></i>
                  <span  onClick={()=>{setMenu('species')}} className='ms-2 d-none d-sm-inline-flex'>species</span>
                </button>
                <ul class="nav justify-content-center collapse ml-1 flex-column dropdown-menu" data-bs-parent="#parentM">
                
                 

                    {

data != undefined && data.results != undefined && ( data.results.length !== 0) &&  (Array.isArray(data.results))   ? 
 (
 <>


{

data.results.map(curr=> 
<li >
<button class="btn btn-dark btn-lg w-100 mb-2" type="button" >
    {
      curr.name || curr.title
    }
  </button>
 
</li>
  

  ) 


}


   </> 
 ):"process"
 

 
 
    }




                


                        
                   
                  
                  
                </ul>
              </li>
              </Link>
              <Link to="/starships">
              <li class="nav-item text-white my-1 btn-group dropend" onClick={()=>nav('/starships')}   >
                <button  type='button' class="  btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-folder"></i>
                  <span  onClick={()=>{setMenu('starships')}} className='ms-2 d-none d-sm-inline-flex'>starships</span>
                </button>
                <ul class="nav justify-content-center collapse ml-1 flex-column dropdown-menu" data-bs-parent="#parentM">
                
                 

                    {

data != undefined && data.results != undefined && ( data.results.length !== 0) &&  (Array.isArray(data.results))   ? 
 (
 <>


{

data.results.map(curr=> 
<li >
<button class="btn btn-dark btn-lg w-100 mb-2" type="button" >
    {
      curr.name || curr.title
    }
  </button>
 
</li>
  

  ) 


}


   </> 
 ):"process"
 

 
 
    }




                


                        
                   
                  
                  
                </ul>
              </li>
              </Link>
              <Link to ="vehicles">
              <li class="nav-item text-white my-1 btn-group dropend" onClick={()=>nav('/vehicles')}   >
                <button  type='button' class="  btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-folder"></i>
                  <span  onClick={()=>{setMenu('vehicles')}} className='ms-2 d-none d-sm-inline-flex'>vehicles</span>
                </button>
                <ul class="nav justify-content-center collapse ml-1 flex-column dropdown-menu" data-bs-parent="#parentM">
                
                 

                    {

data != undefined && data.results != undefined && ( data.results.length !== 0) &&  (Array.isArray(data.results))   ? 
 (
 <>


{

data.results.map(curr=> 
<li >
<button class="btn btn-dark btn-lg w-100 mb-2" type="button" >
    {
      curr.name || curr.title
    }
  </button>
 
</li>
  

  ) 


}


   </> 
 ):"process"
 

 
 
    }




                


                        
                   
                  
                  
                </ul>
              </li>
              </Link>


              <Link  to="planets" >

              <li class="nav-item text-white my-1 btn-group dropend" onClick={()=>nav('/planets')}   >
                <button  type='button' class="  btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-folder"></i>
                  <span  onClick={()=>{setMenu('planets')}} className='ms-2 d-none d-sm-inline-flex'>Planets</span>
                </button>
                <ul class="nav justify-content-center collapse ml-1 flex-column dropdown-menu" data-bs-parent="#parentM">
                
                 

                    {

data != undefined && data.results != undefined && ( data.results.length !== 0) &&  (Array.isArray(data.results))   ? 
 (
 <>


{

data.results.map(curr=> 
<li >
<button class="btn btn-dark btn-lg " type="button" >
    {
      curr.name || curr.title
    }
  </button>
 
</li>
  

  ) 


}


   </> 
 ):"process"
 

 
 
    }




                


                        
                   
                  
                  
                </ul>
              </li>

              </Link>
              



            </ul>
          </div>


          <div class="btn-group">
            <button class="btn-border-none btn-dark dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">
                  <span>Sahil</span>
            </button>



            <div class="dropdown-menu dropdown-menu-start" aria-labelledby="triggerId">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item disabled" href="#">Disabled action</a>
              <h6 class="dropdown-header">Section header</h6>
              <a class="dropdown-item" href="#">Action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">After divider action</a>
            </div>

          </div>




        </div>
      </div>
    </div>
  </div>
  )
}

export default SideBar
