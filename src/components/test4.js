import React, { Component } from "react";
import firebase from "firebase";
import { Link } from 'react-router-dom';




export default class test4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,

      userArr: [],
      Name: '',
      Age: '',
      Help: '',
      Address: '',
      PhoneNumber: '',
      gender: ''
    };
    
  }

  componentDidMount() {
    this.unsubscribe = this.fireStoreData.onSnapshot(this.getCollection);
    
  }

 
  componentWillUnmount() {
    this.unsubscribe();

  }

  getCollection = (querySnapshot) => {
    const userArr = [];
    querySnapshot.forEach((res) => {
      const { Name, Help, Address, Age, PhoneNumber1, Status, Request, gender, Confirm } = res.data();
      userArr.push({
        key: res.id,
        res,
        Name,
        Age,
        Help,
        Address,
        PhoneNumber1,
        Status,
        Request,
        gender,
        Confirm
      })
    })
    this.setState({
      userArr
    })
  }


  render() {
    let user = firebase.auth().currentUser;

    let namePatient = this.props.location.state.name


    this.fireStoreData =  firebase.firestore().collection("Volunteer").doc(user.email).collection("Case");

        
    let listData = this.state.userArr;


    let nameVol = ""
    let urlPhotoVolunteer = ""

    firebase.firestore().collection("Volunteer").doc(user.email)
      .onSnapshot(documentSnapshot => {
        nameVol = documentSnapshot.data().Name
        urlPhotoVolunteer = documentSnapshot.data().urlUser
        console.log(urlPhotoVolunteer);
      });

  console.log(listData)

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <div>
                <h1>ข้อมูลผู้ได้รับผลกระทบ</h1>
                
              {listData.map(function (d, idx) {
                 
                  if (d.Name == namePatient) {
                   
                
                return (
                <div>
                  <p key={idx}>ชื่อ : {d.Name}</p>
                  <p key={idx}>อายุ : {d.Age}</p>
                  <p key={idx}>ที่อยู่ : {d.Address}</p>
                  <p key={idx}>ที่อยู่ : {d.PhoneNumber1}</p>
                  <p key={idx}>ความช่วยเหลือที่ต้องการ : {d.Help}</p>
                  <p key={idx}>สถานะ : {d.Status}</p>          
                  <Link
                    to={{
                        pathname: '/VolunteerChat',
                        state: { name: d.PhoneNumber1}
                    }} >พูดคุยกับผู้ได้รับผลกระทบ
                </Link>
                </div>)
              }
              })}
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
