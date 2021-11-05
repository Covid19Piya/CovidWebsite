import React, { Component } from 'react';
import firebase from "firebase";


class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
            userArr: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        this.storeUser();
        event.preventDefault();
    }

    componentDidMount() {
        this.unsubscribe = this.fireStoreData.orderBy("timestamp", "asc").onSnapshot(this.getCollection);

    }


    componentWillUnmount() {
        this.unsubscribe();

    }

    storeUser() {
        let user = firebase.auth().currentUser;
        let phone = user.phoneNumber

        this.usersCollectionRef = firebase.firestore().collection("Patient").doc(phone).collection('Chat');

        this.usersCollectionRef.add({
            chat: this.state.value,
            name: "Patient",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then((res) => {
            this.setState({
                chat: '',
                name: ''
            })
        })
            .catch((err) => {
                console.log('Error found: ', err);
                this.setState({
                    isLoading: false
                })
            })
    }

    getCollection = (querySnapshot) => {
        const userArr = [];
        querySnapshot.forEach((res) => {
            const { name, chat } = res.data();
            userArr.push({
                chat,
                name
            })
        })
        this.setState({
            userArr
        })
    }


    render() {

        let user = firebase.auth().currentUser;
        let phone = user.phoneNumber

        this.fireStoreData = firebase.firestore().collection("Patient").doc(phone).collection('Chat');
        this.usersCollectionRef = firebase.firestore().collection("Patient").doc(phone).collection('Chat');

        const listData = this.state.userArr;


        return (
            <div>
                {listData.map(function (d, idx) {
                    return (<div>
                        <p >{d.name} : {d.chat}</p>

                    </div>)
                })}
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Home;
