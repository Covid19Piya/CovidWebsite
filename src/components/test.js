import React, { Component } from "react";
import firebase from "firebase";
import { Link } from 'react-router-dom';


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
          <div className="col s12 m6">
            <div>
                <h1>ผู้ได้รับผลกระทบ</h1>
              {listData.map(function (d, idx) {
                return (<div>
                  <p key={idx}>ชื่อ : {d.Name}</p>
                  <p key={idx}>ความช่วยเหลือที่ต้องการ : {d.Help}</p>
                  <Link
                    to={{
                      pathname: '/test2',
                      state: { phoneNumber: d.PhoneNumber1}
                    }} >ต้องการติดต่อ
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
