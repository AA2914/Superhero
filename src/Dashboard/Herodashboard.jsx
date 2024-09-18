import React, { useEffect, useState } from 'react'
import { dashboardAPI } from '../services/allAPI'
import './Herodashboard.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';



function Herodashboard() {

const [dashboardGrievance,setDashboardGrievance] = useState([])
const [count,setCount] = useState(0)
const [users,setUsers] = useState(0)

const [email,setEmail] = useState(0)
 const [number,setNumber] = useState(0)

const [search,setSearch] = useState('')

console.log(dashboardGrievance);

useEffect(()=>{
  getDashboardGrievance()
 
},[])

const getDashboardGrievance = async ()=>{
  try{
    const result = await dashboardAPI()
    console.log(result);
    if(result.status==200){
      setDashboardGrievance(result.data)
    }

  }catch(err){
    console.log(err);
  }
}

useEffect(()=>{
  if(dashboardGrievance.length>0){
 const totalDescriptions = dashboardGrievance.reduce((sum, obj) => sum + obj.description.length, 0);

  console.log("Total number of descriptions:", totalDescriptions);
  setCount(totalDescriptions)
  setUsers(dashboardGrievance.length)

  setEmail(dashboardGrievance.length)
  setNumber(dashboardGrievance.length)

}
 
},[dashboardGrievance])


const handleSearch=(e)=>{
setSearch(e.target.value)
}



  const filteredTags = dashboardGrievance.filter(tag => {
    const searchQueryLower = search.toLowerCase();

    // Check if number or type matches the search query
    const matchesNumberOrType = tag.email.toLowerCase().includes(searchQueryLower) ||
                                tag.uname.toLowerCase().includes(searchQueryLower);

    // Check if date matches the search query (convert date to a string for comparison)
    const matchesDate = tag.date && new Date(tag.date).toLocaleDateString().toLowerCase().includes(searchQueryLower);

    return matchesNumberOrType || matchesDate;
});


  return (
    < >

    

{/* navbar */}

<Navbar style={{backgroundColor:'#d6dbdf'}} >
        <Container>
          <Navbar.Brand style={{fontFamily:"Protest Guerrilla",color:'#1b2631 '}} >GARUDA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  href="home" style={{fontFamily:' "Playfair Display", serif ',fontSize:'25px',color:' #34495e '}}>Home</Nav.Link>
            <Nav.Link  href="about" style={{fontFamily:' "Playfair Display", serif ',fontSize:'25px',color:'#34495e '}}>About</Nav.Link>
            <Nav.Link href="grievanceForm"  style={{fontFamily:' "Playfair Display", serif ',fontSize:'25px',color:' #34495e '}}>Grievance</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search by date"
              className="me-2"
              aria-label="Search"
              value={search} 
              onChange={handleSearch}
            />
          </Form>

        </Container>
      </Navbar>





{/* sidebar and dashboard */}


   <div className="container-fluid">
    <div className="row ">
      <div style={{height:"87vh",backgroundColor:"#aeb6bf "}} className="col-lg-2  d-flex flex-column p-3">
         
      <ul className="navbar-nav d-flex flex-column">
                <li className="nav-item"><a className="nav-link" >Dashboard</a></li>
                <li className="nav-item"><a className="nav-link" >Grievances</a></li>
                <li className="nav-item"><a className="nav-link" >Messages</a></li>
                <li className="nav-item"><a className="nav-link" >Reports</a></li>
                <li className="nav-item"><a className="nav-link" href="login">Log Out</a></li>
            </ul>

      </div>


      <div className="col p-4" style={{backgroundColor:"#f2f4f4 "}}>
        <h1 style={{fontFamily:'serif'}}>welcome Admin</h1>


        
        {/* card */}

        <Row xs={1} md={4} style={{ display:"flex", justifyContent:"space-around"}} className='pt-3'>

        <Card  style={{ width: '15rem',backgroundColor:'#d5d8dc  ' }}  className="mb-2 ">
          <Card.Body>
            <Card.Title className='fs-3' style={{fontFamily:' "Playfair Display", serif'}}>Total Grievances</Card.Title>
            <Card.Text>
             <h1>{count}</h1>
            </Card.Text>
          </Card.Body>
        </Card>


        <Card  style={{ width: '15rem',backgroundColor:'#d5d8dc ' }}  className="mb-2">
          <Card.Body>
            <Card.Title className='fs-3' style={{fontFamily:' "Playfair Display", serif'}}>Total Users</Card.Title>
            <Card.Text>
             <h1>{users}</h1>
            </Card.Text>
          </Card.Body>
        </Card>


        <Card  style={{ width: '15rem' ,backgroundColor:'#d5d8dc  '}}  className="mb-2 ">
          <Card.Body>
            <Card.Title className='fs-3' style={{fontFamily:' "Playfair Display", serif'}}>Total Emails</Card.Title>
            <Card.Text>
            <h1>{email}</h1>
            </Card.Text>
          </Card.Body>
        </Card>


        <Card  style={{ width: '15rem' ,backgroundColor:"#d5d8dc " }}  className="mb-2 ">
          <Card.Body>
            <Card.Title className='fs-3' style={{fontFamily:' "Playfair Display", serif'}}> Total Contact </Card.Title>
            <Card.Text>
            <h1>{number}</h1>
            </Card.Text>
          </Card.Body>
        </Card>

        </Row>


       {/* table */}

<Row className='pt-2'>

<Col>
     <h1 style={{fontFamily:'serif'}}> User Details</h1>


     
       <Table responsive style={{border:'1px solid blue',width:'500px'}}>
      <thead>
        
      <tr>        
         <th >Number</th>        
         <th>Name</th> 
         <th>Email</th>
         <th>Contact</th>
           
         </tr>

      </thead>
      <tbody>
       
      
      {dashboardGrievance.map((d,index) => (
      <tr>        
         <td key={index}>{index+1}</td>        
         <td>{d.uname}</td>   
         <td>{d.email}</td> 
         <td>{d.contact}</td> 
           
         </tr>

       

    ))}

      </tbody>
    </Table>



    </Col>



    <Col>

    <h1 style={{fontFamily:'serif'}}>Grievances</h1>

<Table responsive style={{border:'1px solid blue',width:'500px'}}>
<thead>
 
<tr>        
  <th >Number</th>        
  <th>Name</th> 
  <th>Complaint</th>
  <th>Date</th>

  </tr>

</thead>
<tbody>



{filteredTags.map((d, index) => {
  console.log(d.date); // Check date in the console

  const formattedDate = d.date ? new Date(d.date).toISOString().split('T')[0] : "N/A";

  return (
    <tr key={d._id}>
      <td>{index + 1}</td>
      <td>{d.uname}</td>
      <td>{Array.isArray(d.description) ? d.description.join(', ') : d.description}</td>
      <td>{formattedDate}</td>
  </tr>
 );
})}


</tbody>
</Table>

    </Col>
    </Row>

      </div>
    </div>
   </div>







    </>
  )
}

export default Herodashboard