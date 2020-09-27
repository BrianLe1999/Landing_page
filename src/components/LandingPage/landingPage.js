import React from 'react';
import SignUp from "../SignUp/signUp.js";
import Features from "../Features/features.js";
import Showcase from "../Showcase/showcase.js";
import Stories from "../Stories/stories.js";

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: []
    };
    this.addEmail = this.addEmail.bind(this);
  }

  // add a new email to the list of all sign up emails
  async addEmail(newEmail) {
    var currentList = this.state.emails;
    currentList.push(newEmail);
    await this.setState({emails : currentList});
    console.log(this.state.emails);
  }
  render() {
    var sign_up_header = "Build a landing page for your business or project and generate more leads!";
    return (
      <div className="main-page">
        <SignUp onClick={this.addEmail} sign_up_header={sign_up_header}/>
        <Features />
        <Showcase />
        <Stories />
      </div>
    );
  }
}
