import React, { Component } from "react";
import firebase from "firebase";
import { Link } from 'react-router-dom';
import { hexToRgb } from "@material-ui/core";




export default class test4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,

      userArr: [],
      Name: 'unknow',
      Age: 'unknow',
      Help: 'unknow',
      Address: 'unknow',
      PhoneNumber1: 'unknow',
      Status: 'unknow',
      Request: 'unknow',
      gender: 'unknow',
      Confirm: 'unknow'
    };
    this.changeState = this.changeState.bind(this)
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
      this.state.Name = Name
      this.state.Age =Age
      this.state.Help = Help
      this.state.Address = Address
      this.state.PhoneNumber1 = PhoneNumber1
      this.state.Status = Status
      this.state.Request = Request
      this.state.gender = gender
      this.state.Confirm = Confirm
    })
    this.setState({
      userArr
    })
  }

  changeState = (Phone, status, name, email) => {
    console.log(Phone, status,name)

    firebase.firestore().collection("Patient").doc(Phone).collection("Case")
      .get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.data().Name)
          if (doc.data().Name == name) {
            doc.ref.update({
              Status: status
            });
          }
        });
      });

      firebase.firestore().collection("Volunteer").doc(email).collection("Case")
      .get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.data().Name)
          if (doc.data().Name == name) {
            doc.ref.update({
              Status: status
            });
          }
        });
      });
    alert("Update Finish")
  }


  render() {
    let user = firebase.auth().currentUser;

    let namePatient = this.props.location.state.name


    this.fireStoreData = firebase.firestore().collection("Volunteer").doc(user.email).collection("Case");


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
              <h3 style={{
                backgroundColor: "#FEBBDD",
                fontWeight: "bold",
                color: "#fff",
                textShadow: "2px 2px gray",
                textAlign: "center",
                fontFamily: "FC.otf",
                marginTop:30,
                marginBottom:30,
                width:1050,
                padding: 10,
                borderRadius: 8,
                boxShadow: "1px 3px 1px #9E9E9E",


              }}>ข้อมูลผู้ได้รับผลกระทบ</h3>
              
                  
                    <div style={
                      {
                        backgroundColor: "#fff",
                        padding: 10,
                        margin: 10,
                        marginBottom: 30,
                        paddingBottom: 28,
                        width: 1010,
                        borderRadius: 8,
                        boxShadow: "1px 3px 1px #9E9E9E",

                      }}>
                      <p ><a style={{
                        color: "black",
                        fontWeight: "bold"
                      }}>ชื่อ : </a>{this.state.Name}</p>

                      <p ><a style={{
                        color: "black",
                        fontWeight: "bold"
                      }}>อายุ : </a>{this.state.Age}</p>

                      <p ><a style={{
                        color: "black",
                        fontWeight: "bold"
                      }}>ที่อยู่ : </a>{this.state.Address}</p>

                      <p ><a style={{
                        color: "black",
                        fontWeight: "bold"
                      }}>เบอร์โทรศัพท์ : </a>{this.state.PhoneNumber1}</p>

                      <p><a style={{
                        color: "black",
                        fontWeight: "bold"
                      }}>ความช่วยเหลือที่ต้องการ : </a>{this.state.Help}</p>

                      <p ><a style={{
                        color: "black",
                        fontWeight: "bold"
                      }}>สถานะ : </a>{this.state.Status}</p>

                      <button style={{
                        textAlign: "center",
                        backgroundColor: "#F43A6B",
                        color: "white",
                        padding: 6,
                        borderRadius: 8,
                        
                        marginRight: 20
                      }} onClick={() => this.changeState(this.state.PhoneNumber1, "Waiting", this.state.Name, user.email)}>รอ</button>
                      
                      <button style={{
                        textAlign: "center",
                        backgroundColor: "#F43A6B",
                        color: "white",
                        padding: 6,
                        borderRadius: 8,
                        
                        marginRight: 20
                      }} onClick={() => this.changeState(this.state.PhoneNumber1, "On Process", this.state.Name, user.email)}>กำลังดำเนิการ</button>
                      
                      <button style={{
                        textAlign: "center",
                        backgroundColor: "#F43A6B",
                        color: "white",
                        padding: 6,
                        borderRadius: 8,
                        
                        marginRight: 20
                      }} onClick={() => this.changeState(this.state.PhoneNumber1, "Finish", this.state.Name, user.email)}>เสร็จสิ้น</button>

                      <Link style={{
                        textAlign: "center",
                        backgroundColor: "#F43A6B",
                        color: "white",
                        padding: 6,
                        borderRadius: 8,
                        boxShadow: "1px 3px 1px #9E9E9E",
                      }}
                        to={{
                          pathname: '/VolunteerChat',
                          state: { name: this.state.PhoneNumber1 }
                        }} >พูดคุยกับผู้ได้รับผลกระทบ
                      </Link>
                    </div>
                
              

            </div>
          </div>
        </div>
      </div>
    );
  }
}
