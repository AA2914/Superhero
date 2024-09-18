import React from 'react'
import Header from '../Components/Header'
import '../Pages/Home.css'
import Container from 'react-bootstrap/esm/Container'
import Footer from '../Components/Footer';

function Home() {
    return (
        <>

            <Header />



            <section className='home' style={{ borderBottom: "2px solid  rgb(185, 167, 85)" }}>



                <div className='text-center pt-5'>
                    <h1 style={{ fontSize: "25px", color: "#ecf0f1" }}>धर्मो रक्षति रक्षितः</h1>

                </div>



                <Container style={{ border: "3px solid   rgb(185, 167, 85)", height: '75px', marginTop: "385px", backgroundColor: "white", borderRadius: '10px',display:"flex",justifyContent:"center",alignItems:"center"}}>
                   <h4 className='text-center '>"Yes I am, I am also a Muslim, a Christian, a Buddhist, and a Jew"</h4>
                </Container>




            </section>




            <section className='home2'>


<input type="checkbox" id="checkbox-cover" />
                <input type="checkbox" id="checkbox-page1" />
                <input type="checkbox" id="checkbox-page2" />
                <input type="checkbox" id="checkbox-page3" />

                <div class="book">
                    <div class="cover">
                        <label for="checkbox-cover">
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>


                            </div>
                        </label>
                    </div>

                    <div class="page" id="page1">
                        <div class="front-page">
                            <h2 className='text-center' style={{ fontFamily: 'fantasy' }}>Kalasutram <br />(Hot as hell)</h2>
                            <p>CRIME: Disrespecting, torturing and putting elders & parents in starvation
                                PENALTY: Sinners are made to run around in unbearable heat and drop down exhausted from time to time and are made to undergo similar treatment as they did to their elders.</p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7TdXwUx4ZBNNOzcJp7p4sTULIYA7njkQzdzpBZ8kzs3t7ZRsu9HI_qZafbu3aQDweiM&usqp=CAU" alt="" style={{ width: "320px", height: "220px" }} />
                            <label class="next" for="checkbox-page1"><i class="fas fa-chevron-right"></i></label>
                        </div>
                        <div class="back-page">
                            <h2 className='text-center' style={{ fontFamily: 'fantasy' }}>Sucimukham <br />(Tortured by needles)</h2>
                            <p style={{ paddingLeft: "30px" }}>CRIME: Not doing good and amassing wealth by wrong doings and stealing wealth, not buying
                                PENALTY: Stinging with nails and torturing with hunger and thirst, constantly pricked and pierced by needles.</p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoXvlBKe1RxVAMv0V-m9b8CExCkhx2EJGuw&s" alt="" style={{ width: "340px", height: "240px", paddingLeft: "30px" }} />
                            <label class="prev" for="checkbox-page1"><i class="fas fa-chevron-left"></i></label>
                        </div>
                    </div>

                    <div class="page" id="page2">
                        <div class="front-page">
                            <h2 className='text-center' style={{ fontFamily: 'fantasy' }}>Salmali <br /> (Embracing hot images)</h2>
                            <p>CRIME: Committing adultery (men and women), unchaste relationships with kamukas
                                PENALTY: Hot solid figures of gadha's (maces, clubs) made of iron are heated red-hot and thrashed on genital space, Yama's servants flog the victim behind.</p>
                            <img src="https://miro.medium.com/v2/resize:fit:1000/1*ZypV5eidpe6bgLVY2D5B-A.jpeg" alt="" style={{ width: "340px", height: "210px" }} />
                            <label class="next" for="checkbox-page2"><i class="fas fa-chevron-right"></i></label>
                        </div>
                        <div class="back-page">
                            <h2 className='text-center' style={{ fontFamily: 'fantasy' }}>Ayahpanam (Drinking of burning substances)</h2>
                            <p style={{ paddingLeft: "30px" }}>CRIME: Drinking Alcohol, other intoxicating drinks,
                                PENALTY: Women made to drink liquid form of melted iron, men made to drink drink hot liquid molten lava</p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSM7KPKjmf578FcO5BVGH9YvQOtJ5lThLowQ&s" style={{ width: "340px", height: "250px", paddingLeft: "30px" }} />
                            <label class="prev" for="checkbox-page2"><i class="fas fa-chevron-left"></i></label>
                        </div>
                    </div>



                    <div class="page" id="page3">
                        <div class="front-page">
                            <h2 className='text-center' style={{ fontFamily: 'fantasy' }}>Agnikundam <br /> (Burnt Alive)</h2>
                            <p>CRIME: Stealing, snatching other's property by force, steal gold and jewels care cast into the furnaces of this Naraka and gaining undue advantage and unlawfully making best out of everything in the world
                                PENALTY: Sinners are roasted in inverted positions with hands and legs tied over fire</p>
                            <img src="https://telugustop.com/wp-content/uploads/2020/10/Garuda-Puranam-Punishments-after-death.jpg" alt="" style={{ width: "320px", height: "210px" }} />

                        </div>



                    </div>




                    <div class="back-cover"></div>
                </div>

                


            </section>





            <Footer />


        </>
    )
}

export default Home