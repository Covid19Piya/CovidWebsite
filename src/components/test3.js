import React, { Component } from "react";
import firebase from "firebase";
import { Link } from 'react-router-dom';


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

    console.log(user.email)

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

     function handleClick(e, check) {
         console.log(check)
         if (check== "No"){
             console.log("eeeeeeeeeeee")
             e.preventDefault();
         }
      }



    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <div>
                <h1>ผู้ได้รับผลกระทบในการดูเเลของคุณ</h1>
              {listData.map(function (d, idx) {
                 
                
                  if (d.Confirm == "Yes") {
                    checkDuplicateCaseText = "ตรวจสอบข้อมูล"
                    checkDuplicateCase = false
                  } else if(d.Confirm == "No"){
                    checkDuplicateCaseText = "รอการอนุมัติ"
                    checkDuplicateCase = true
                  }

                return (<div>
                  <p key={idx}>ชื่อ : {d.Name}</p>
                  <p key={idx}>ความช่วยเหลือที่ต้องการ : {d.Help}</p>
                  <p key={idx}>สถานะการเข้าถึง {d.Confirm}</p>
                
                <Link
                  onClick={(e) => handleClick(e, d.Confirm)}
                    to={{
                        pathname: '/test4',
                        state: { name: d.Name}
                    }} >{checkDuplicateCaseText}
                </Link>
                    
                </div>)
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
