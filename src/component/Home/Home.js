import React, { useEffect, useState } from 'react'
import SideBarDetails from '../SideBar/SideBarDetails';
import SideBar from '../SideBar/SideBar'
import './HomeStyling.css'
import { Outlet, useNavigate } from 'react-router-dom';
const Home = ({setMenu , setIsToggle , data , menu }) => {
  const [check , setCheck]  = useState(true);
const navigate = useNavigate();
console.log(data);

// console.log(arr);
let chk = 'checked'
const urlParams   = (e)=>{
// const val = e.target.checked;
console.log("Hi")
// console.log( isToggle );

 if( check === true ){
  // isToggle = false;
  setIsToggle(false)
  setCheck(false)
// console.log(page);
 
 }else{
  setIsToggle(true);
  setCheck(true);

 
 }

  
}
useEffect(()=>{

},[menu]);
  return (
   <>
   <div  style ={ {width:'100vw'} }>
  <div className='d-flex'>
    <div className='d-flex'>
      <div className='mx-5'>
      <SideBar data= {data}  setMenu ={setMenu} />
      </div>
      <div className='d-flex flex-column' style={{color:'white' }}>
      <hr style={{backgroundColor:'white !important' , fontSize:'30rem' , height:'100vh' , width:'5px'}} />
      </div>
      
    </div>
    

    <div  style={{width:'60%' , margin:'auto' }} >

      <div className='d-flex   justify-content-between align-items-center w-100'>
        <div>
          <span style={{color:'white' , fontSize:'2rem' , marginRight:'10px'}}>Toggle</span>
        <input type="checkbox"  name="checkbox" id="toggle" onChange={urlParams}/ >
      <label for="toggle" class="switch"></label>
        </div>
        <div style={{color:'white' , fontSize:'2rem'}} >
            {menu.toUpperCase()}
        </div>
      </div>

      <div>
         {
          menu === ""  ? (
            <>
            <SideBarDetails/>
              </>
             ):""
         
                    } 
       
      <Outlet />
      </div>
    
    </div>
    
    <div>

     
    </div>


   </div>
   </div>
   </>
  )
}

export default Home
