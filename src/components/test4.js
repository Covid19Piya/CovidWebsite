import React, { Component } from "react";
import firebase from "firebase";
import { Link } from 'react-router-dom';
import Select from "react-select";


export default class test3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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

    let checkDuplicateCaseText = "ยืนยันช่วยเหลือ";
    let checkDuplicateCase = true;
    let nameVol = ""
    let urlPhotoVolunteer = ""

    firebase.firestore().collection("Volunteer").doc(user.email)
      .onSnapshot(documentSnapshot => {
        nameVol = documentSnapshot.data().Name
        urlPhotoVolunteer = documentSnapshot.data().urlUser
        console.log(urlPhotoVolunteer);
      });


      function storeUser(nameUser, ageUser, helpUser, addressUser, phoneNumberUser,genderUser) {
          
        firebase.firestore().collection("Volunteer").doc(user.email).collection("Case")
          .add({
            Name: nameUser,
            Age: ageUser,
            Help: helpUser,
            Address: addressUser,
            PhoneNumber1: phoneNumberUser,
            Status: "waiting",
            Confirm: "No",
            gender: genderUser
          })
          .catch((err) => {
            console.log('Error found: ', err);
            this.setState({
              isLoading: false,
            });
          });
      }
    
    

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
                  
                  <button disabled={checkDuplicateCase} onClick={() => {storeUser(d.Name, d.Age, d.Help, d.Address, d.PhoneNumber1, d.gender);
                        }}>{checkDuplicateCaseText}</button>

                <Link
                    disabled={checkDuplicateCase}
                    to={{
                      pathname: '/test4',
                      state: { phoneNumber: d.PhoneNumber1}
                    }} >{checkDuplicateCaseText}
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
