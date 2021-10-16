import React, { Component } from 'react'
import firebase from 'firebase'

export default class seepost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userArr: [],
      checkUser: "notnull"
    }
  }

  render() {

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.state.checkUser = user.phoneNumber
      }
    })
    console.log(this.state.checkUser)
    const docRef = firebase.firestore().collection('Patient').doc(this.state.checkUser).collection("Case");

    docRef.onSnapshot((querySnapShot) => {
      querySnapShot.forEach((doc) => {
        console.log(doc.data())
        this.n = doc.data().Name
        this.state.userArr.push({
          Address: doc.data().Address,
          Age: doc.data().Age,
          Confirm: doc.data().Confirm,
          Help: doc.data().Help,
          Name: doc.data().Name,
          PhoneNumber1: doc.data().PhoneNumber1,
          Status: doc.data().Status,
          gender: doc.data().gender,
          Request: doc.data().Request

        })
      });
    })

    let listData = []

    this.state.userArr.forEach((doc) => {
      listData.push(doc.Name)
      listData.push(doc.Age)
      listData.push(doc.gender)
      listData.push(doc.Address)
      listData.push(doc.PhoneNumber1)
      listData.push(doc.Status)
      listData.push(doc.Help)
      listData.push(doc.Confirm)
      listData.push(doc.Request)

    })
    console.log(listData)
    let count = 0
    return (
      <ul>
      {listData.map((item,index)=>{
        count += 1
        if (count == 9){
          count = 0
            return <div>
              <p>อนุญาติให้เข้าถึงหรือไม่</p>
                  <button >
                    ยืนยัน
                  </button>
                  <button >
                    ปฏิเสธ
                  </button>
              </div>
                  
        }
        return <li key={index}>{item}</li>
      })}
  </ul>
    );
  }
}