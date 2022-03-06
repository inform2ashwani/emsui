import React from "react";
import { useEffect, useState } from 'react';
import axios from "axios"

const REACT_APP_rooturl = process.env;       
let url= process.env.REACT_APP_rooturl   



export function masters() { 
    
    //url += `/equipmentsSearch/${searchText}`     
    axios.get(url+=`/MasterLookup`)  
    .then (responce => {if(responce.data !=null)
          {            //notify();
           //alert ("Equipment Saved Successfully !")
           getUnitNameCollection(responce.data.categoryLookup)
          }
        })
       
    .catch(error=>{
      console.log(error)
  })  
}
export const getUnitNameCollection = ()=>([
    { id: 'Beas ii Hosp', title: 'Beasii Hosp' },
    { id: 'Sik Hosp', title: 'Sik Hosp' },
    { id: 'Bhota Hosp', title: 'Bhota Hosp' },
    { id: 'Dera Hosp', title: 'Dera Hosp' },
])
  export function updateHospName(data) {     
    axios.put(url+='/updateEquipment',data)  
    .then (responce => {
      if(responce.data !=null)
          {            //notify();
           alert ("Equipment updated Successfully !")
           console.log(data)
          }
        })
       
    .catch(error=>{
      console.log(error)
  })      
 // history.push("/users/table") 
  // setShow(false);
    //notify();
}