import React, { useState } from "react";
import "./Form.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const User = {
  fName: "",
  lName: "",
  email: "",
  password: "",
};

export default function Form({ title }) {
  const [user, setUser] = useState(User);
  const [userId, setUserId] = useState(0);

  const addNewUser = (user) => {
    setUser(...user);
  };
  const changeInput = (e) => {
    user[e.target.name] = e.target.value; //generic capture of each input and its value
  };
  const handleSubmit = (event) => {
    console.log("handleSubmit ran");
    event.preventDefault(); // prevent page refresh
    setUserId(userId + 1);
    user._id = userId;
    addNewUser(user);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "50ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <form onSubmit={handleSubmit}>
        <h1>
          <b>{title}</b>
        </h1>
        <span>Please fill in this form to create an account.</span>

        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          type="text"
          name="email"
          defaultValue={user.email}
          required
          onChange={changeInput}
        />
        <br />

        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          type="password"
          name="password"
          defaultValue={user.password}
          required
          onChange={changeInput}
        />
        <br />

        <TextField
          id="standard-basic"
          label="Verify Password"
          variant="standard"
          type="password"
          name="password"
          defaultValue={user.password}
          required
          onChange={changeInput}
        />
        <br />
        
        <TextField
          id="standard-basic"
          label="First Name"
          variant="standard"
          type="text"
          name="fName"
          defaultValue={user.fName}
          required
          onChange={changeInput}
        />
        <br />

        <TextField
          id="standard-basic"
          label="Last Name"
          variant="standard"
          type="text"
          name="lName"
          defaultValue={user.lName}
          required
          onChange={changeInput}
        />
        <br />
        <p>
          By creating an account you agree to our{" "}
          <a href="#">Terms and Privacy</a>.
        </p>
        <button type="submit" className="primary-btn">
          DONE
        </button>
      </form>
    </Box>
  );
}
