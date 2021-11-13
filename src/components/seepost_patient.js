import React, { Component } from "react";
import firebase from "firebase";
import { Link } from 'react-router-dom';
import shadows from "@material-ui/core/styles/shadows";
import './test.css';



export default class PatientCase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userArr: [],
      Name: '',
      Age: '',
      Help: '',
      Address: '',
      PhoneNumber1: '',
      Status: '',
      Request: 'กรุณารอ',
      gender: '',
      url: '',
      NameVol: 'กรุณารอ'
    };
    this.changePermision = this.changePermision.bind(this)
  }

  componentDidMount() {
    this.unsubscribe = this.fireStoreData.onSnapshot(this.getCollection);
    
  }


  componentWillUnmount() {
    this.unsubscribe();

  }
  getCollection = (querySnapshot) => {
    console.log("INNNNN")
    const userArr = [];
    querySnapshot.forEach((res) => {
      const { Name, Help, Address, Age, PhoneNumber1, Status, Request, gender, url, NameVol } = res.data();
      userArr.push({
        key: res.id,
        res,
        Name,
        Age,
        Help,
        Address,
        PhoneNumber1,
        Status,
        gender,
        Request,
        url,
        NameVol
      })
      this.state.Name = Name
      this.state.Age = Age
      this.state.Help = Help
      this.state.Address = Address
      this.state.PhoneNumber1 = PhoneNumber1
      this.state.Status = Status
      if (Request != ""){
        this.state.Request = Request
        this.state.NameVol = NameVol
        this.state.url = url
      }
    })
    this.setState({
      userArr
    })
  }

  changePermision=(email, status, name)=>{
    
    firebase.firestore().collection("Volunteer").doc(email).collection("Case")
            .get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                  if (doc.data().Name == name) {
                        doc.ref.update({
                            Confirm: status
                        });
                        
                    }
                });
            });
            alert("Finish")
  }

  render() {


    let user = firebase.auth().currentUser;
    let phone = user.phoneNumber

    this.fireStoreData = firebase.firestore().collection("Patient").doc(phone).collection("Case")

    console.log(this.fireStoreData)
    return (
      <div className="dashboard container">
        <div className="row">
              <h3 style ={{backgroundColor:"#FEBBDD",
              fontWeight: "bold",
              color:"#fff",
              textShadow: "2px 2px gray",
              textAlign:"center",
              fontFamily:"FC.otf",
              padding: 10,
              borderRadius: 8,
              boxShadow: "1px 3px 1px #9E9E9E",
              
              }}> ผู้ได้รับผลกระทบ</h3> 
                    
          <div className="col s12 m6">
            <div style = {
                    {backgroundColor: "#fff",
                    
                    padding: 10,
                    margin: 10,
                    marginBottom: 30,
                    paddingBottom: 28,
                    width: 1020,
                    borderRadius: 8,
                    boxShadow: "1px 3px 1px #9E9E9E",
                    
                    }}>

             <p><a style ={{fontWeight: "bold",color:"black"}}>อีเมลผู้ต้องการติดต่อ : </a>{this.state.Request}</p>
             <p><a style ={{fontWeight: "bold",color:"black"}}>ชื่อผู้ต้องการติดต่อ : </a>{this.state.NameVol}</p>
             <p><a style ={{fontWeight: "bold",color:"black"}}>ชื่อผู้ต้องการติดต่อ : </a>{this.state.Status}</p>
             <img style={{height:340,width:240}}src={this.state.url}/>
             <br/>
             <button style = {{
                    textAlign :"center",
                    backgroundColor:"#F43A6B",
                    color:"white",
                    padding: 6,
                    borderRadius: 8,
                    boxShadow: "1px 3px 1px #9E9E9E",
                    marginRight: 20,
                    
                  }} onClick={() => this.changePermision(this.state.Request, "Yes", this.state.Name)}>อนุญาติ</button>
             <button style = {{
                    textAlign :"center",
                    backgroundColor:"#FF0000",
                    color:"white",
                    padding: 6,
                    borderRadius: 8,
                    boxShadow: "1px 3px 1px #9E9E9E",
                    
                    
                  }} onClick={() => this.changePermision(this.state.Request, "No", this.state.Name)}>ไม่อนุญาติ</button>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
