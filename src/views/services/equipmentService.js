
import axios from "axios"
//import {useHistory, useParams, Link,} from 'react-router-dom'

let url= process.env.REACT_APP_rooturl 

const KEYS ={
    employees:'employees',
    employeeId:'employeeId'
}
export const getUnitNameCollection = ()=>([
    { id: 'Beas Hosp', title: 'Beas Hosp' },
    { id: 'Sik Hosp', title: 'Sik Hosp' },
    { id: 'Bhota Hosp', title: 'Bhota Hosp' },
    { id: 'Dera Hosp', title: 'Dera Hosp' },
])

export const getEquipmentStatusCollection = ()=>([
    { id: 'OK', title: 'OK' },
    { id: 'BER', title: 'BER' },
    { id: 'Condemned', title: 'Condemned' },
    { id: 'Transffered', title: 'Transffered' },
])
export const getCategoryCollection = ()=>([
    { id: 'Medical', title: 'Medical' },
    { id: 'Non-Medical', title: 'Non-Medical' },
    { id: 'Cpmputer', title: 'Computer' },
    { id: 'UPS', title: 'UPS' },
    { id: 'Printer', title: 'Printer' },
    { id: 'Officen Equipment', title: 'Office Equipment' },
    { id: 'CCTV', title: 'CCTV' },
    { id: 'Audio Visual', title: 'Audio Visual' },
    { id: 'Others', title: 'Others' },
    
])
export const getSubCategoryCollection = ()=>([
    { id: 'Laser printer', title: 'Laser printer' },
    { id: 'ETCO2', title: 'ETCO2' },
    { id: 'Thermal', title: 'Thermal' },
    { id: 'Dot Matrix', title: 'Dot Matrix' },
])
export const getWarrantyCollection = ()=>([
    { id: '1', title: '1' },
    { id: '2', title: '2' },
    { id: '3', title: '3' },
    { id: '4', title: '4' },
])
export const getMaintPeriodicityCollection = ()=>([
    { id: 'Quarterly', title: 'Quarterly' },
    { id: 'Monthly', title: 'Monthly' },
    { id: 'Yearly', title: 'Yearly' },
    { id: 'Bi-Monthly', title: 'Bi-Monthly' },
    { id: 'Daily', title: 'Daily' },
])

export const getDepartmentCollection = ()=>([
    { id: '1', title: 'Development' },
    { id: '2', title: 'Marketing' },
    { id: '3', title: 'Accounting' },
    { id: '4', title: 'HR' },
 ])
// export function getDepartmentCollection(){
 
// }


// export function insertEmployee(data) {
//     let employees=getAllEmployees();
//     data['id'] = generateEmployeeId()
//     employees.push(data)
//     localStorage.setItem(KEYS.employees,JSON.stringify(employees))
// }

export function  insertEquipment(data) { 
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
  export function updateEquipment(data) {     
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
// export function fetchData () {
//     // console.log(obj);
// const equipName = await axios.get('http://localhost:3000/api/getAllEquipnames') ;       
// const suppl= await axios.get('http://localhost:3000/api/getAllSuppliers');            
// const dept = await axios.get('http://localhost:3000/api/getAlldepartments')        
// setSelects({ equipName:equipName.data, dept: dept.data, suppl:suppl.data })
// }
// useEffect(()=>{
// fetchData();   
// },[]);

export function generateEmployeeId() {
    if (localStorage.getItem(KEYS.employeeId) == null)
        localStorage.setItem(KEYS.employeeId, '0')
    var id = parseInt(localStorage.getItem(KEYS.employeeId))
    localStorage.setItem(KEYS.employeeId, (++id).toString())
    return id;
}

export function getAllEmployees() {
    if (localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.employees));
}

