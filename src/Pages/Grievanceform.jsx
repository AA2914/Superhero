import React from 'react'
import Header from '../Components/Header'
 import Footer from '../Components/Footer'
import '../Pages/Grievanceform.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { grievanceAPI } from '../services/allAPI';

function Grievanceform() {

  const [formdetails,setFormDetails] = useState({
    uname:'',
    email:'',
    contact:'',
    description:''
  })

 console.log(formdetails);

   
//ADD GRIEVANCE
 const handleGrievance = async (e)=>{
  e.preventDefault()
  if(formdetails.uname && formdetails.email && formdetails.contact && formdetails.description){
      //api call
      try{
          const result = await grievanceAPI(formdetails)
          console.log(result);
          if(result.status==200){
              toast.success(`your complaint successfully added`)
              setFormDetails({uname:"",email:"",contact:"",description:""})
              
          }else{
              if(result.response.status==406){
                  toast.success(result.response.data)
                  setUserData({uname:"",email:"",contact:"",description:""})
              }
          }
      }catch(err){
          console.log(err);
      }
  }else{
      toast.info("please fill the form completely")
  }
}
// const handleAdd = ()=>{
//     if(formdetails.uname && formdetails.contact && formdetails.description){
//       //reqbody -add items to form data
//       const reqBody = new FormData()
//       reqBody.append("uname",uname)
//       reqBody.append("contact",contact)
//       reqBody.append("description",description)


//       const token = sessionStorage.getItem("token")
//       if(token){
//         const reqheader = {
//           "Content-Type": "multipart/form-data",
//           "Authorization": `Bearer ${token}`
//         }
//       }
//        //api call - reqbody , reqheader
//     }else{
//       toast.info("please fill the form completely")
//     }
// }

  // const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };

  return (
    <>
 <Header/>
     

<section id='grievance'>



<Container  className=' d-flex justify-content-center align-items-center pt-5 pb-5'>

<Form  style={{border:'3px solid rgb(158, 142, 70)',width:"400px",borderColor:"rgb(158, 142, 70)",borderRadius:"15px"}} className='p-3'>

     <h1 className='text-center  mb-2 ' style={{fontFamily:"serif",color:"rgb(158, 142, 70)",fontWeight:"bold"}}>Grievance Form</h1>

      <Row >
        <Form.Group as={Col} md="12"  >
          <Form.Label className='fs-5' style={{color:"rgb(158, 142, 70)",fontWeight:"bold"}}>Name</Form.Label>
          <Form.Control 
             style={{border:"1px solid rgb(158, 142, 70)"}}
            size="md"
            type="text"
            value={formdetails.uname} onChange={e=>setFormDetails({...formdetails,uname:e.target.value})}
          />
        </Form.Group>
        </Row>


        <Row >
        <Form.Group as={Col} md="12"  >
          <Form.Label className='fs-5' style={{color:"rgb(158, 142, 70)",fontWeight:"bold"}}>Email</Form.Label>
          <Form.Control 
            style={{border:"1px solid rgb(158, 142, 70)"}}
            size="md"
            type="email"
            value={formdetails.email} onChange={e=>setFormDetails({...formdetails,email:e.target.value})}
          />
        </Form.Group>
        </Row>


        <Row >
        <Form.Group as={Col} md="12" >
          <Form.Label className='fs-5' style={{color:"rgb(158, 142, 70)",fontWeight:"bold"}}>Contact</Form.Label>
          <Form.Control 
            style={{border:"1px solid rgb(158, 142, 70)"}}
            size="md"
            type="number"
            value={formdetails.contact} onChange={e=>setFormDetails({...formdetails,contact:e.target.value})}

          />
        </Form.Group>
        </Row>


     
      <Row >
        <Form.Group as={Col} md="12" >
          <Form.Label className='fs-5' style={{color:"rgb(158, 142, 70)",fontWeight:"bold"}}>Issue Description</Form.Label>
          <Form.Control
           style={{border:"1px solid rgb(158, 142, 70)"}} 
          size="md"
          type="text" 
          as="textarea"
          value={formdetails.description} onChange={e=>setFormDetails({...formdetails,description:e.target.value})}
          
          />
          
        </Form.Group>
        </Row>

        <div className='text-center pt-3'>
 <Button  onClick={handleGrievance}  className=' ps-5 pe-5' style={{backgroundColor:"rgb(158, 142, 70)",border:"0px",fontWeight:'bold'}}>SUBMIT</Button>
   </div>


    </Form>

    
   

   </Container>

   

</section>


  <Footer/>

  <ToastContainer position='top-center' theme='colored' autoClose={2000} />

    </>
  )
}

export default Grievanceform