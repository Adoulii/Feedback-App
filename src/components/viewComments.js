import React,{useState,useEffect} from 'react'
import {productRequests} from '../data.json'
import calcComments from '../utils/calcComments';



function viewComments({match,id}) {
    const [viewCom,setviewCom]= useState(null);
 useEffect(()=>{
   const comm = productRequests.map(comm);
   setviewCom(comm);
   console.log(viewCom);


 },[])
    return (
        <div>
           {productRequests.map((val,i)=>{
               return (
                  <div>
                <p>{}</p>
            </div>
               );
            
            

           })}
            
        </div>
    );
}

export default viewComments
