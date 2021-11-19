import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

class Home extends React.Component {
    render() {
      return (
        <div>
         <section class="">
              <div  class="condiv" >
                <img style={{borderRadius:"10%"}}class="img-responsive" src="https://static.thairath.co.th/media/dFQROr7oWzulq5Fa4VnLIoPobFjJeRo6JQXfLpjUaN7Cjs1T05vZyRUcqao4CBGl3C4.webp" alt=""/>
              </div>
        </section>   
        
        <section class="" id="destinations">  
         <div class="container">
             <div class="row">
              <div class="col-sm-12 col-md-12">
                 <h3 class="header">Favourite Destinations</h3>
               </div>
              </div>

              <div class="row">
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img  src="Img/p1.jpeg" alt=""/>
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
                       <img  src="Img/p3.jpeg" alt=""/>
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
                       <img  src="Img/p2.jpeg"alt=""/>
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

       <section style={{marginTop:40,backgroundColor:"#fff",height:200}}>
       <section style={{marginTop:50}}>
          <div class="container">
            <div class="row">
              <div>
                 <h3 class="header">Know about us</h3>
               </div>
              </div>
             <div class="row">
                <p className="para"> เว็บไซต์นี้ถูกสร้างขึ้นมาเพื่อเป็นศูนย์กลางระหว่าง อาสาสมัครที่ต้องการช่วยเหลือคนที่ได้รับผลกระทบจากโควิค 
                และคนที่ได้รับผลกระทบจากโควิด ไม่ว่าจะเป็นจากโดยตรงหรือ ทางอ้อมให้สามารถติดต่อช่วยเหลือกันได้ง่ายยิ่งขึ้น โดยตัดปัญหาการที่จะต้องไปหาคนช่วยเหลือเอง แค่สมัครด้วยเบอร์โทรศัพท์ และโพสความต้องการ</p>
             </div>   
          </div>   
        </section>
        </section>  

    
       
     <div style={{}}>
        <h3 className="header">Member</h3>
     </div>
     <div class="container-picture">
        <div class="picture-item">        
            <img src="/img/kampu.jpg" />
            <h6 className="font">Thapanapong Sinprommat</h6>
            <h6 style={{fontWeight:"bold",color:"blue",margin:10,textAlign:"center"}}>Scummaster</h6>
            <p className="font2">6210742257</p>
        </div>

        <div className="picture-item">  
            <img src="img/poom.jpeg" />
            <h6 class="font">Jirawat Chaichompu</h6>
            <h6 style={{fontWeight:"bold",color:"blue",margin:10,textAlign:"center"}}>Developer</h6>
            <p class="font2">6210742075</p>
        </div>  

        <div className="picture-item">
            <img src="img/pon.jpeg" />
          <h6 className="font">Nattapon Khajornkasirat</h6>
          <h6 style={{fontWeight:"bold",color:"blue",margin:10,textAlign:"center"}}>Developer</h6>
          <p className="font2">6210742513</p>
        </div>

        <div className="picture-item">
            <img src="img/aom.jpeg" />
          <h6 className="font">Sahassawat Thipdee</h6>
          <h6 style={{fontWeight:"bold",color:"blue",margin:10,textAlign:"center"}}>Developer</h6>
          <p className="font2">6210742265</p>
        </div>

        <div className="picture-item">
            <img src="img/peter.jpeg" />
          <h6 className="font">chonlakorn panchaviwatkul</h6>
          <h6 style={{fontWeight:"bold",color:"blue",margin:10,textAlign:"center"}}>Developer</h6>
          <p className="font2">6210742216</p>
        </div>

    </div>
    <section style={{marginTop:40,backgroundColor:"#242424",height:200}}>
    <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        </section>  
        </section> 
</div>
      );
    }
  }

  export default Home;
