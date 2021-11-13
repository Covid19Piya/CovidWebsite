import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Home extends React.Component {
    render() {
      return (
        <div>
         <section class="">
              <div  class="condiv" >
                <img class="img-responsive" src="https://static.thairath.co.th/media/dFQROr7oWzulq5Fa4VnLIoPobFjJeRo6JQXfLpjUaN7Cjs1T05vZyRUcqao4CBGl3C4.webp" alt=""/>
              </div>
        </section>   
        
        <section class="" id="destinations">  
         <div class="container">
             <div class="row">
              <div class="col-sm-12 col-md-12">
                 <h3 class="text-center mt-4 text-secondary">Favourite Destinations</h3>
               </div>
              </div>

              <div class="row">
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img  src="Img/log.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Sign Up</h4>
                          <p class="card-text text-secondary">สมัครสมาชิกเพื่อเป็นส่วนนึงของอาสาสมัคร</p>
                       </div>
                       <div class="card-footer">
                          <a href="/signup" class="btn btn-primary">Go Now!</a>
                       </div>
                    </div>
                 </div>
                 <div class="col-sm-4 mb-6">
                    <div class="card mt-4">
                       <img  src="Img/vo.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Login Volunteer</h4>
                          <p class="card-text text-secondary">Login เข้าสู่ระบบอาสาสมัคร</p>
                       </div>
                       <div class="card-footer">
                          <a href="/signin" class="btn btn-primary">Go Now!</a>
                       </div>
                    </div>
                 </div>
                 <div class="col-sm-4 mb-6" >
                    <div class="card mt-4">
                       <img  src="Img/pa.jpg"alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Login Patient</h4>
                          <p class="card-text text-secondary">Login เข้าสู่ระบบผู้ได้รับผลกระทบ</p>
                       </div>
                       <div class="card-footer">
                          <a href="/loginp" class="btn btn-primary">Go Now!</a>
                       </div>
                    </div>
                 </div>
              </div>
        </div>
       </section>
       
       <section class="bg-light" id="about" style={{marginTop:50}}>
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12">
                 <h3 class="text-center mt-4 text-secondary">Know about us</h3>
               </div>
              </div>
             <div class="row">
                <p class="mt-4 mb-5"> เว็บไซต์นี้ถูกสร้างขึ้นมาเพื่อเป็นศูนย์กลางระหว่าง อาสาสมัครที่ต้องการช่วยเหลือคนที่ได้รับผลกระทบจากโควิค 
                และคนที่ได้รับผลกระทบจากโควิด ไม่ว่าจะเป็นจากโดยตรงหรือ ทางอ้อมให้สามารถติดต่อช่วยเหลือกันได้ง่ายยิ่งขึ้น</p>
             </div>   
          </div>   
        </section>   

    
    <section class="bg-light mt-5" id="tourist">    
     <div class="container">
      <div class="row text-center">
        <div class="col-sm-12 col-md-12 mb-4">
            <h3 class="text-center mt-4 text-secondary">Member</h3>
         </div>
        <div class="col-md-4">
          <div class="testimonial mb-5">
           <div class="avatar mx-auto">
            <img src="img/kampu.jpg" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Thapanapong Sinprommat</h4>
          <h6 class="font-weight-bold blue-text my-3">Scummaster</h6>
          <p class="font-weight-normal dark-grey-text">
          Thapanapong Sinprommat 6210742257</p>
        </div>
      </div>

      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src="img/poom.jpg" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Jirawat Chaichompu</h4>
          <h6 class="font-weight-bold blue-text my-3">Developer</h6>
          <p class="font-weight-normal dark-grey-text">Jirawat Chaichompu 6210742075</p>
        </div>

      </div>
      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src="img/pon.jpg" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Nattapon Khajornkasirat</h4>
          <h6 class="font-weight-bold blue-text my-3">Developer</h6>
          <p class="font-weight-normal dark-grey-text">Nattapon Khajornkasirat 6210742513</p>
        </div>

      </div>
      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src="img/aom.jpg" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Sahassawat Thipdee</h4>
          <h6 class="font-weight-bold blue-text my-3">Developer</h6>
          <p class="font-weight-normal dark-grey-text">Sahassawat Thipdee 6210742265</p>
        </div>

      </div>
      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src="img/peter.jpg" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">chonlakorn panchaviwatkul</h4>
          <h6 class="font-weight-bold blue-text my-3">Developer</h6>
          <p class="font-weight-normal dark-grey-text">
          chonlakorn panchaviwatkul 6210742216</p>
        </div>
        </div>
      </div>
    </div> 
   </section>

   <section class="bg-dark">
             <div class="container">
               <div style={{height:100}}>                
                  <h6 style={{color:"white"}}>Copyright @ One for All 2021</h6>  
               </div>
             </div>    
          </section>
   
   </div>
      );
    }
  }

  export default Home;
