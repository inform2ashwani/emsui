import React, { SyntheticEvent,useState } from 'react'
import { Link } from 'react-router-dom'
import {  CButton,  CCard,  CCardBody,  CCardGroup,CCol,CContainer,CForm,
  CFormInput,  CInputGroup,  CInputGroupText,  CRow,CCardHeader,CCardFooter,CCardTitle,CCardSubtitle,
  CCardText} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import CImg from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import axios from "axios";

const Login1 = () => { 
  const [user,setUser]=useState("")
  const [password,setPassword]=useState("")
  const [allEntry, setAllEntry]=useState("")

  const submit =async(e:SyntheticEvent)=>{
    e.preventDefault();
     const data ={UserId:user, Password:password}
    // setAllEntry([...allEntry,data])
    //`/locks/${id}`
     console.log(`http://emsadmin-001-site1.htempurl.com/api/AppUserLogin?${data}`)

  //   useEffect(() => {
  //     // POST request using axios inside useEffect React hook
  //     const article = { title: 'React Hooks POST Request Example' };
  //     axios.post('http://ashwaniems1-001-site1.ctempurl.com/api/AppUserLogin', article)
  //         .then(response => setArticleId(response.data.id));
  
  // // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // }, []);http://ashwaniems1-001-site1.ctempurl.com/api/AppUserLogin
 // http://ashwaniems1-001-site1.ctempurl.com/api/AppUserLogin?UserId=ems01&Password=admin  
  axios.post("http://emsadmin-001-site1.htempurl.com/api/AppUserLogin?",data)     
    .then((response)=> {
      //handle success
      console.log(response);     
    })
    .catch((response)=> {
      //handle error
      console.log(response);
    });
    
  }
 
  // await fetch ('http://ashwaniems1-001-site1.ctempurl.com/api/AppUserLogin?',
  //    {
  //     method: 'post',
  //     header: {'Content-Type':'application/json',"Accept":'application/json'},
  //     Credential:'include',
  //     body:JSON.stringify({
  //       requestData
  //     })
    
  //   }).then(res=> res.json())
  //   .then(resData=>{     
  //   alert(resData.message);
    
  //   })


  // }   
  
  
  return ( 
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>            
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCardGroup>
              <CCard className="p-2">
                <CCardBody>
                  <CForm>
                    <h1>Login1</h1>
                   
                    <p className="text-medium-emphasis">Sign In to your account</p>                    
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" type ="submit" onClick={submit}   className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>             
            </CCardGroup>
          </CCol>
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login1</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" autoComplete="username" onChange={e=>setUser(e.target.value)}/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password" placeholder="Password" autoComplete="current-password" onChange={e=>setPassword(e.target.value)}/>
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" type ="submit" onClick={submit}   className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>             
            </CCardGroup>
          </CCol>
        </CRow>        
      </CContainer>
    </div>
    
  )
}

export default Login1
