import React, { Component } from "react";
import firebase from "firebase";
import { Link } from 'react-router-dom';
import shadows from "@material-ui/core/styles/shadows";
import './test.css';



export default class FindPatient extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userArr: [],
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

    this.fireStoreData = firebase.firestore().collection("Patient")


        
    let listData = this.state.userArr;
 
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
            <div>
              {listData.map(function (d, idx) {
                return (<div>

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
                  <p key={idx}><a style ={{fontWeight: "bold",color:"black"}}>ชื่อ :</a> {d.Name}</p>
                  <p key={idx}><a style ={{fontWeight: "bold",color:"black"}}>ความช่วยเหลือที่ต้องการ : </a>{d.Help}</p>
                  <Link style = {{
                    textAlign :"center",
                    backgroundColor:"#F43A6B",
                    color:"white",
                    padding: 6,
                    borderRadius: 8,
                    boxShadow: "1px 3px 1px #9E9E9E",
                    
                    
                  }}
                    to={{
                      pathname: '/test2',
                      state: { phoneNumber: d.PhoneNumber1}
                    }} >ต้องการติดต่อ
                  </Link>
                  
                  </div>
                </div>)
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
