import React from "react";
import "./Account.css";

function Account() {
  return (
    <div>
      <h1>Account : </h1>
      <input type="text" className="form-control form-control-instructor" placeHolder="First Name..." />
      <input type="text" className="form-control form-control-instructor" placeHolder="Last Name..." />
      <input type="email" className="form-control form-control-instructor" placeHolder="Email..." />
      <input type="text" className="form-control form-control-instructor" placeHolder="UserName..." />
      <input type="password" className="form-control form-control-instructor" placeHolder="Password" />
      <input
        type="text"
        className="form-control form-control-instructor"
        placeHolder="PhoneNumber..."
      />
      <p className="birthdate">Birth date: </p>
      <input class="form-control form-control-instructor" type="date" id="example-date-input"></input>
    </div>
  );
}

export default Account;
