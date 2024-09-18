import React from 'react'
import Header from '../Components/Header'
 import Footer from '../Components/Footer'
import '../Pages/About.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function About() {


  return (
    <>
   
   <Header/>


<section id='about'>



<Container  className='pt-5 pb-5'>
      <Row className='pt-5'>

        <Col md={6}>
        <img class="responsive img-fluid"  src="https://i.pinimg.com/736x/fc/19/69/fc1969c9ab064d75fa83c5412def680c.jpg" alt="girl image" style={{borderRadius:"25px",width:"450px",height:"auto"}}/>

        </Col>

       
        <Col md={5}  >
         <h1 className='text-center' style={{color:"white",fontStyle:"oblique"}}>ABOUT</h1>
         <h6  style={{fontStyle:"italic",fontSize:'22px',color:'white',letterSpacing:'1px',textAlign:"justify"}}>The superhero's mission is prosocial and selfless, which means that his fight against evil must fit in with the existing, professed mores of society and must not be intended to benefit or further his own agenda.typically using their powers to help the world become a better place, or dedicating themselves to protecting the public and fighting crime.</h6>
              
        </Col>       

      </Row>
     

    </Container>




    <Container className='pt-5 pb-5'>

    <h1 style={{fontStyle:"oblique"}} className='text-center text-light'>Goal</h1>


<Row xs={1} md={3} className="goal g-4 ">


        <Col >
          <Card style={{ width: '20rem',height:'200px',padding:'10px',fontFamily:'sans',fontSize:'17px',fontWeight:"bold",color:"rgb(158, 142, 70)"}} className='text-center  '>
              <Card.Text>
              Protecting people from harm: Many superheroes use their powers to protect people from harm, whether that be by stopping criminals, rescuing people from dangerous situations, or defending against natural disasters.
              </Card.Text>
          </Card>
        </Col>

        <Col >
        <Card style={{ width: '20rem',height:'200px',padding:'10px',fontFamily:'sans',fontSize:'17px',fontWeight:"bold",color:"rgb(158, 142, 70)"}} className='text-center'>
           <Card.Text>
              Providing assistance to those in need: Superheroes could use their powers to help people in need, whether that be by providing food, shelter, or medical care to those who are struggling.
              </Card.Text>
          </Card>
        </Col>

        <Col >
        <Card style={{ width: '20rem',height:'200px',padding:'10px',fontFamily:'sans',fontSize:'17px',fontWeight:"bold",color:"rgb(158, 142, 70)"}} className='text-center'>
              <Card.Text>
              Advocating for social justice: Some superheroes might use their powers and platform to advocate for social justice issues, such as fighting for equal rights or working to address environmental concerns.
              </Card.Text>
          </Card>
        </Col>

        <Col >
        <Card style={{ width: '20rem',height:'200px',padding:'10px',fontFamily:'sans',fontSize:'17px',fontWeight:"bold",color:"rgb(158, 142, 70)"}} className='text-center '>
              <Card.Text>
              Inspiring hope and optimism: By using their powers to do good, superheroes can inspire hope and optimism in others and show that one person can make a difference in the world.
              </Card.Text>
          </Card>
        </Col>

        <Col >
        <Card style={{ width: '20rem',height:'220px',padding:'10px',fontFamily:'sans',fontSize:'17px',fontWeight:"bold",color:"rgb(158, 142, 70)"}} className='text-center'>
              <Card.Text>
              The first thing a superhero needs is a positive mindset. Believing that “I can do it” or “I can make a difference” gives you momentum that the person that believes “I can't do it” or “I can't make a difference” will never have. This superpower gives you the tenacity to take on challenges.
              </Card.Text>
          </Card>
        </Col>

        <Col >
        <Card style={{ width: '20rem',height:'200px',padding:'10px',fontFamily:'sans',fontSize:'17px',fontWeight:"bold",color:"rgb(158, 142, 70)"}} className='text-center'>
              <Card.Text>
              Superheroes give the extra effort needed to make sure the project, team, or organization is successful.
              </Card.Text>
          </Card>
        </Col>
      
    </Row>

    </Container>

    </section>





    <Footer/>
    </>
  )
}

export default About