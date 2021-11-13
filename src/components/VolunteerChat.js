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
        let phone = this.props.location.state.name

        this.usersCollectionRef = firebase.firestore().collection("Patient").doc(phone).collection('Chat');

        this.usersCollectionRef.add({
            chat: this.state.value,
            name: user.email,
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
        let phone = this.props.location.state.name

        this.fireStoreData = firebase.firestore().collection("Patient").doc(phone).collection('Chat');
        this.usersCollectionRef = firebase.firestore().collection("Patient").doc(phone).collection('CHat');

        const listData = this.state.userArr;

 
        return (
            <div style={{marginLeft: 250,marginTop: 20}}>
                <h3 style = {
                  {backgroundColor: "#fff",
                  color:"white",
                  padding: 10,
                  margin: 10,
                  marginBottom: 30,
                  
                  width: 1010,
                  borderRadius: 8,
                  boxShadow: "1px 3px 1px #9E9E9E",
                  backgroundColor:"#FEBBDD",
                  fontWeight: "bold",
                textShadow: "2px 2px gray",
                padingLeft: 20,
                
                fontFamily:"FC.otf",
                  
                  }}> Chat </h3>
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
                {listData.map(function (d, idx) {
                    return (<div style ={{}}>
                        <p><a style ={{
                    color:"black",
                    fontWeight:"lighter",
                    backgroundColor:"#FEBBDD",
                    margin : 5,
                    padding: 2,
                    borderRadius: 5 ,
                    

                  }}> {d.name}  </a><a style = {{color: "#F43A6B"}}>{d.chat}</a></p>

                    </div>)
                })}</div>
                <div >
                <form style = {
                  {backgroundColor: "#fff",
                  padding: 10,
                  margin: 10,
                  marginBottom: 30,
                  paddingBottom: 28,
                  width: 1010,
                  borderRadius: 8,
                  boxShadow: "1px 3px 1px #9E9E9E",
                  
                  }} onSubmit={this.handleSubmit}>
                    <label >
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input style = {{
                    textAlign :"center",
                    backgroundColor:"#F43A6B",
                    color:"white",
                    padding: 6,
                    borderRadius: 8,
                    boxShadow: "1px 3px 1px #9E9E9E",
                 
                  }}type="submit" value="Submit" />
                </form>
                </div>
            </div>
        );
    }
}

export default Home;
