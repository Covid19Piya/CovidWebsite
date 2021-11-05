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
<<<<<<< HEAD
                <h1>ข้อมูลผู้ได้รับผลกระทบ</h1>
                
=======
                <h3 style ={{backgroundColor:"#FEBBDD",
              fontWeight: "bold",
              color:"#fff",
              textShadow: "2px 2px gray",
              textAlign:"center",
              fontFamily:"FC.otf",
              padding: 10,
              borderRadius: 8,
              boxShadow: "1px 3px 1px #9E9E9E",
              

              }}>ข้อมูลผู้ได้รับผลกระทบ</h3>
>>>>>>> ff83c908bad23e2553560b6b188efdbc09af14aa
              {listData.map(function (d, idx) {
                 
                  if (d.Name == namePatient) {
                   
                
                return (
<<<<<<< HEAD
                <div>
                  <p key={idx}>ชื่อ : {d.Name}</p>
                  <p key={idx}>อายุ : {d.Age}</p>
                  <p key={idx}>ที่อยู่ : {d.Address}</p>
                  <p key={idx}>ที่อยู่ : {d.PhoneNumber1}</p>
                  <p key={idx}>ความช่วยเหลือที่ต้องการ : {d.Help}</p>
                  <p key={idx}>สถานะ : {d.Status}</p>          
                  <Link
=======
                <div style = {
                  {backgroundColor: "#fff",
                  padding: 10,
                  margin: 10,
                  marginBottom: 30,
                  paddingBottom: 28,
                  width: 1010,
                  borderRadius: 8,
                  boxShadow: "1px 3px 1px #9E9E9E",
                  
                  }}>
                  <p key={idx}><a style ={{
                    color:"black",
                    fontWeight:"bold"
                  }}>ชื่อ : </a>{d.Name}</p>

                  <p key={idx}><a style ={{
                    color:"black",
                    fontWeight:"bold"
                  }}>อายุ : </a>{d.Age}</p>

                  <p key={idx}><a style ={{
                    color:"black",
                    fontWeight:"bold"
                  }}>ที่อยู่ : </a>{d.Address}</p>

                  <p key={idx}><a style ={{
                    color:"black",
                    fontWeight:"bold"
                  }}>เบอร์โทรศัพท์ : </a>{d.PhoneNumber1}</p>

                  <p key={idx}><a style ={{
                    color:"black",
                    fontWeight:"bold"
                  }}>ความช่วยเหลือที่ต้องการ : </a>{d.Help}</p>

                  <p key={idx}><a style ={{
                    color:"black",
                    fontWeight:"bold"
                  }}>สถานะ : </a>{d.Status}</p>          
                  
                  {/*<button disabled={checkDuplicateCase} onClick={() => {storeUser(d.Name, d.Age, d.Help, d.Address, d.PhoneNumber1, d.gender);
                        }}>{checkDuplicateCaseText}</button>*/}

                <Link style = {{
                    textAlign :"center",
                    backgroundColor:"#F43A6B",
                    color:"white",
                    padding: 6,
                    borderRadius: 8,
                    boxShadow: "1px 3px 1px #9E9E9E",
                 
                  }}
                    disabled={checkDuplicateCase}
>>>>>>> ff83c908bad23e2553560b6b188efdbc09af14aa
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
