import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";

const ViewUser = () => {
  const [user, setUser] = useState({ });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3000/api/equipmentsById/${id}`);
    //console.log(res)
    setUser(res.data[0]);
  };
 // console.log(process.env.PUBLIC_URL+`/images/${user.MODEL}.jpg`)
    {/* <img src={window.location.origin + '/images/Feng-22.jpg'} /> */}
  return (    
    <div className="container py-3">   
          <Link  to="/users/table">
        Back to Home
      </Link>
      <br/>     
      {<h3>Equipment Detail</h3> }     
      <hr />
      <Row>
    <Col>
    <ul className="list-group ">
        <li className="list-group-item"> <b>Hosp Name:</b>    {user.UNIT_NAME}</li>
        <li className="list-group-item"> <b>Equipment ID:</b>   {user.EQUIPMENT_ID}</li>
        <li className="list-group-item"> <b>Equipment Name:</b>    {user.EQUIPMENT_NAME}</li>
        <li className="list-group-item"> <b>Specifications: </b> {user.COMPLETE_SPECIFICATION}</li>
        <li className="list-group-item"> <b>Cost Of Equipment: </b> {user.COST_OF_EQUIPMENT}</li>
        <li className="list-group-item"> <b>Department: </b>  {user.DEPARTMENT}</li>
        <li className="list-group-item"> <b>Date Of Purchase: </b>  {user.DATE_OF_PURCHASE}</li>
        <li className="list-group-item"> <b>Category:</b>   {user.CATEGORY}</li>      
        <li className="list-group-item"> <b>Supplier: </b> {user.SUPPLIER}</li>
         
      </ul> </Col>
    <Col> 
    <ul className="list-group ">
        
        <li className="list-group-item"> <b>Bill Date: </b> {user.BILL_DATE}</li>     
        <li className="list-group-item"> <b> Model: </b> {user.MODEL}</li>     
        <li className="list-group-item"> <b>Remarks:</b>   {user.EQUIP_REMARKS}</li>       
      </ul> 
    
      <img src={process.env.PUBLIC_URL+`/images/${user.MODEL}.jpg`} width="250" height="250"     
     padding= '8px' margin= '16px' alt="example" onError={(e) => {e.target.src = '/images/No-Image.png' // some replacement image
       e.target.style = 'padding: 8px; margin: 16px' // inline styles in html format
    }} 
     /> 
     
   </Col>
  </Row> 
  <Link className="btn btn-primary btn-sm" to="/"> Edit</Link>
    </div>
    
  );
  
};

export default ViewUser;