import React, { Component } from "react";
import firebase from "firebase";
import { Link } from 'react-router-dom';




export default class PatientConfirm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null,
      userArr: [],
      NameVol: '',
      Confirm: '',
      Help: '',
      Address: '',
      PhoneNumber: '',
      gender: '',
      Request:'No',
      url: '',
      Name:''
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
      const { Name, Help, Address, Age, PhoneNumber1, Status, Request, gender, Confirm, NameVol, url } = res.data();
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
        Confirm,
        NameVol,
        url
      })
      this.state.NameVol = NameVol
      this.state.Request = Request
      this.state.Confirm = Confirm
      this.state.url = url;
      this.state.Name =Name

    })
    this.setState({
      userArr
    })
  }

    updateData = (name, status, user) =>{
    firebase.firestore().collection("Volunteer").doc(user).collection("Case")
        .get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                if (doc.data().Name == name) {
                    doc.ref.update({
                        Confirm: status
                    });
                }
            });
        });
}
  


  render() {

    let user = firebase.auth().currentUser;

    console.log(user.phoneNumber)
    this.fireStoreData =  firebase.firestore().collection("Patient").doc(user.phoneNumber).collection("Case");

        

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <h2>ผู้ติดต่อต้องการให้ความช่วยเหลือ</h2>
              <p>ชื่อ : {this.state.NameVol}</p>
              <p>อีเมล : {this.state.Request}</p>
              <p>สถานะ : {this.state.Confirm}</p>
              <img src={this.state.url}/>
              <button onClick={this.updateData(this.state.Name, "Yes", this.state.Request)}>อนุญาติให้เข้าถึงข้อมูล</button>
              <button onClick={this.updateData(this.state.Name, "No", this.state.Request)}>ไม่อนุญาติให้เข้าถึงข้อมูล</button>
         </div>
        </div>
      </div>
    );
  }
}
