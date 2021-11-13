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
            const { address, detail, fileName, fileType, name, other, phoneNumber, timestamp, topic, url } = res.data();
            userArr.push({
                key: res.id,
                res,
                address,
                detail,
                fileName,
                fileType,
                name,
                other,
                phoneNumber,
                timestamp,
                topic,
                url
            })
        })
        this.setState({
            userArr
        })
    }

    

    render() {


        this.fireStoreData = firebase.firestore().collection("PostDonate")



        const listData = this.state.userArr

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
                                padding: 10,
                                borderRadius: 8,
                                boxShadow: "1px 3px 1px #9E9E9E",


                            }}>ข้อมูลผู้ได้รับผลกระทบ</h3>
                            {listData.map(function (d, idx) {



                                return (
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

                                        <p key={idx}><a style={{
                                            color: "black",
                                            fontWeight: "bold"
                                        }}>หัวข้อ : </a>{d.topic}</p>

                                        <p key={idx}><a style={{
                                            color: "black",
                                            fontWeight: "bold"
                                        }}>ชื่อ : </a>{d.name}</p>

                                        <p key={idx}><a style={{
                                            color: "black",
                                            fontWeight: "bold"
                                        }}>สถานที่เเจก : </a>{d.address}</p>


                                        <p key={idx}><a style={{
                                            color: "black",
                                            fontWeight: "bold"
                                        }}>รายละเอียดเพิ่มเติม : </a>{d.detail}</p>

                                        <p key={idx}><a style={{
                                            color: "black",
                                            fontWeight: "bold"
                                        }}>เบอร์โทรศัพท์ : </a>{d.phoneNumber}</p>

                                        <p key={idx}><a style={{
                                            color: "black",
                                            fontWeight: "bold"
                                        }}>เพิ่มเติม : </a>{d.other}</p>
                                        <img src={d.url}/>
                                      

                                    
                                    </div>)

                            })}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
