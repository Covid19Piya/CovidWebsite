import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

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
                <p > เว็บไซต์นี้ถูกสร้างขึ้นมาเพื่อเป็นศูนย์กลางระหว่าง อาสาสมัครที่ต้องการช่วยเหลือคนที่ได้รับผลกระทบจากโควิค 
                และคนที่ได้รับผลกระทบจากโควิด ไม่ว่าจะเป็นจากโดยตรงหรือ ทางอ้อมให้สามารถติดต่อช่วยเหลือกันได้ง่ายยิ่งขึ้น โดยตัดปัญหาการที่จะต้องไปหาคนช่วยเหลือเอง แค่สมัครด้วยเบอร์โทรศัพท์ และโพสความต้องการ</p>
             </div>   
          </div>   
        </section>   

    
       
     <div style={{}}>
        <h3 className="header">Member</h3>
     </div>
     <div class="container-picture">
        <div class="picture-item">        
            <img src="/img/kampu.jpg" />
            <h4>Thapanapong Sinprommat</h4>
        </div>

        <div className="picture-item">  
            <img src="img/poom.jpg" />
            <h4 >Jirawat Chaichompu</h4>
        </div>  

        <div className="picture-item">
            <img src="img/pon.jpg" />
          <h4 >Nattapon Khajornkasirat</h4>
        </div>

        <div className="picture-item">
            <img src="img/aom.jpg" />
          <h4 >Sahassawat Thipdee</h4>
        </div>

        <div className="picture-item">
            <img src="img/peter.jpg" />
          <h4 >chonlakorn panchaviwatkul</h4>
        </div>

    </div> 
    
</div>
      );
    }
  }

  export default Home;
