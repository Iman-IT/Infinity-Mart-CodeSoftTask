import React from 'react';
import Products from './Products';
import About from './About';
import Contact from './Contact';
//import './home.css'; // Import your CSS file
import  Footer from '../components/Footer'

function Home() {
  return (
    <>
      {/* <section className="h-100" style={{ backgroundColor: '#eee' }}> */}
      <div className="container-fluid text-dark" id='home'>
       
         <div className="row mx-auto justify-content-center align-items-center description">

         <div className="col-12 col-md-6 mt-3">
            <img src="1.png" className='img-fluid' alt="" height={300}/>
          </div>

            <div className="col-12 col-md-6 "> {/* Adjust column layout */}
              <p>Welcome to our store</p>
            <h1 className='fw-bolder' >Infinity Mart</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi doloremque veniam corrupti aut sunt iusto illum. Magni praesentium fugiat in, accusamus repellat sequi adipisci totam, cumque, id iure libero provident!</p>
          </div>
         

      
          
         
       
        </div>
      </div>
    {/* </section> */}

      <Products />
      <About />
          <Contact />
          <Footer/>
    </>
  );
}

export default Home;
