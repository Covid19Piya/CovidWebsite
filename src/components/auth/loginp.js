import React from 'react'
import firebase from 'firebase'
import { Link } from 'react-router-dom';

class loginp extends React.Component {

  handleChange = (e) =>{
    const {name, value } = e.target
    this.setState({
        [name]: value
      })
  }
  configureCaptcha = () =>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log("Recaptca varified")
      },
      defaultCountry: "TH"
    });
  }
  onSignInSubmit = (e) => {
    e.preventDefault()
   
    this.configureCaptcha()
    const phoneNumber = "+66" + this.state.mobile
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent")
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("SMS not sent")
        });
  }
  onSubmitOTP = (e) =>{
    e.preventDefault()
    const code = this.state.otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("User is verified")
      
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }
  render() {
    return (
      <div className="container" id="loginp">
        <form className="white" onSubmit={this.onSignInSubmit}>
        <h5 className="grey-text text-darken-3">Login</h5>
          <div className="input-field" id="sign-in-button"></div>
          <input type="number" name="mobile" placeholder="กรอกหมายเลขโทรศัพท์" required onChange={this.handleChange}/>
          <button  style = {{
                    textAlign :"center",
                    backgroundColor:"#F43A6B",
                    color:"white",
                    padding: 6,
                    borderRadius: 8,
                    boxShadow: "1px 3px 1px #9E9E9E",
                 
                  }} type="submit">Submit</button>
        </form>

        <form className="white" onSubmit={this.onSubmitOTP}>
        <h5 className="grey-text text-darken-3">Enter OTP</h5>
          <input type="number" name="otp" placeholder="กรอกรหัสOTP" required onChange={this.handleChange}/>
          <button  style = {{
                    textAlign :"center",
                    backgroundColor:"#F43A6B",
                    color:"white",
                    padding: 6,
                    borderRadius: 8,
                    boxShadow: "1px 3px 1px #9E9E9E",
                 
                  }} type="submit">Submit</button>

        </form>
      </div>
    )
  }
}


export default loginp
