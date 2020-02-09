import React, { Component } from "react";

class ContactForm extends Component {
  addNewContact = event => {
    console.log("adding a new contact...");
    const name = this.refs.name.value;
    const email = this.refs.email.value;
    const phone = this.refs.phone.value;
    const picture = this.refs.picture.value;

    const p1 = { name, email, phone, picture };
    console.log(p1);

    this.refs.name.value = "";
    this.refs.email.value = "";
    this.refs.phone.value = "";
    this.refs.picture.value = "";

    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h3>Add a new contact</h3>
        <form className="form" onSubmit={this.addNewContact}>
          <div className="form-group row">
            <label htmlFor="" className="control-label col-md-4">
              Name
            </label>
            <div className="col-md-8">
              <input ref="name" type="text" className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="" className="control-label col-md-4">
              Email address
            </label>
            <div className="col-md-8">
              <input ref="email" type="text" className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="" className="control-label col-md-4">
              Phone number
            </label>
            <div className="col-md-8">
              <input ref="phone" type="text" className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="" className="control-label col-md-4">
              Picture
            </label>
            <div className="col-md-8">
              <input ref="picture" type="text" className="form-control" />
            </div>
          </div>
          <button className="btn btn-primary">Save data</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
