
import axios from "axios"
const REACT_APP_rooturl = process.env;       
let url= process.env.REACT_APP_rooturl    

export function  insertHospName(data) { 
    //url += `/equipmentsSearch/${searchText}`     
    axios.post(url+='/addEquipment',data)  
    .then (responce => {if(responce.data !=null)
          {            //notify();
           alert ("Equipment Saved Successfully !")
          // console.log(responce.data)
          }
        })
       
    .catch(error=>{
      console.log(error)
  }) 
}
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