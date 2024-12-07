import React, { useState } from "react";
import "./form.css";
function Form() {
  let [formData, setformData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  let handleInputChange = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;

    setformData((currData) => {
      currData[fieldName] = newValue;
      return { ...currData };
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setformData({
      fullName: "",
      userName: "",
      password: "",
    });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName"> Full Name</label>
        <br></br>

        <input
          placeholder="Enter your full name"
          type="text"
          value={formData.fullName}
          onChange={handleInputChange}
          id="fullName"
          name="fullName"
        ></input>
        <br></br>

        <label htmlFor="userName">Username </label>
        <br></br>
        <input
          placeholder="Enter your full name"
          type="text"
          value={formData.userName}
          onChange={handleInputChange}
          id="userName"
          name="userName"
        ></input>
        <br></br>
        <label htmlFor="password">Password</label>
        <br></br>
        <input
          placeholder="Enter your Password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          id="password"
          name="password"
        ></input>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
