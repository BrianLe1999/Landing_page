import React, { useState } from 'react';
import '../SignUp/signUp.css';
import { CSSTransition } from 'react-transition-group'; //using CSS Transition from react-transition-group library



function SignUp(props) {
  const [email, setEmail] = useState("");
  // showSignup and showSuccess keep track of which part of the UI is being showed
  const [showSignUp, setShowSignUp] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const handleOnClick = e => {
    if (email === ""){
      // alert user to enter an email when they click on sign up button without entering one
      alert("Please enter your email to sign up!");
    }
    else {
      // show success message when users enter an email
      setShowSuccess(true);
      props.onClick(email);
    }
    setEmail("");
    e.preventDefault();
  };
  // if showSignUp is true, show the sign up
  // if showSuccess is true, show the success message

  return (
    <div className="sign-up">
      <div className="container">
        <h1 className="sign-up-header">{props.sign_up_header}</h1>
        {showSignUp &&
        (<form className="form">
          <div className="input-form">
            <input className="input" placeholder="Enter your email..." onChange={e => setEmail(e.target.value)}></input>
          </div>
          <div className="button">
            <button className="btn" onClick = {handleOnClick}>Sign up!</button>
          </div>
        </form>)}
        <CSSTransition
          in={showSuccess}
          timeout={{
              appear: 500,
              enter: 300,
              exit: 200,
          }}
          classNames="fade-appear-done"
          unmountOnExit
          onEnter={() => setShowSignUp(false)}
          onExited={() => setShowSignUp(true)}
          >
            <div className="success">
              <p className="success-message">Thank you for signing up</p>
              <button className="btn back-btn" onClick={() => setShowSuccess(false)}>Back</button>
            </div>
        </CSSTransition>
      </div>
    </div>);
}

export default SignUp;
