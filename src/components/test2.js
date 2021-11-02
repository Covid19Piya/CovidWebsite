import React, { Component } from "react";
import firebase from "firebase";
import { Link } from 'react-router-dom';


export default class test2 extends React.Component {
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
      const { Name, Help, Address, Age, PhoneNumber1, Status, Request, gender } = res.data();
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
        gender
      })
    })
    this.setState({
      userArr
    })
  }





  render() {
    let user = firebase.auth().currentUser;
    let phoneUser = this.props.location.state.phoneNumber

    console.log(user.email)

    this.fireStoreData = firebase.firestore().collection("Patient").doc(phoneUser).collection("Case");
    this.storeData =  firebase.firestore().collection("Volunteer").doc(user.email).collection("Case");

        
    let listData = this.state.userArr;

    let checkDuplicateCaseText = "ยืนยันช่วยเหลือ";
    let checkDuplicateCase = false;
    let nameVol = ""
    let urlPhotoVolunteer = ""

    firebase.firestore().collection("Volunteer").doc(user.email)
      .onSnapshot(documentSnapshot => {
        nameVol = documentSnapshot.data().Name
        urlPhotoVolunteer = documentSnapshot.data().urlUser
        console.log(urlPhotoVolunteer);
      });

    function sendRequest(name, email, nameVol, urlPhotoVolunteer) {
        firebase.firestore().collection("Patient").doc(name).collection("Case")
          .get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              doc.ref.update({
                Request: email,
                NameVol : nameVol,
                url :urlPhotoVolunteer
              });
    
            });
          })
      }


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
                 
                
                  if (d.Request == user.email) {
                    checkDuplicateCaseText = "คุณมีเคสนี้เเล้ว"
                    checkDuplicateCase = true
                  }

                return (<div>
                  <p key={idx}>ชื่อ : {d.Name}</p>
                  <p key={idx}>ความช่วยเหลือที่ต้องการ : {d.Help}</p>
                  {console.log(phoneUser, user.email,urlPhotoVolunteer)}
                  <button disabled={checkDuplicateCase} onClick={() => {storeUser(d.Name, d.Age, d.Help, d.Address, d.PhoneNumber1, d.gender);
                        sendRequest(phoneUser, 
                            user.email, nameVol, urlPhotoVolunteer);
                        }}>{checkDuplicateCaseText}</button>
                  
                </div>)
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
