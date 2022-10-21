import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { UserAuth } from "../../../context/AuthContext";
import Breadcrumb from "../Breadcrumb/Breadcrumb.component";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/home");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <>
      <Breadcrumb title="Join & Enjoy" />
      <div className="signup-box">
        <div>
          <h1>Sign in to your account</h1>
          <p>
            Already have an account?
            <Link to="/"> Sign in.</Link>
          </p>
        </div>
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <form onSubmit={handleSubmit}>
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              type="text"
              name="email"
              // defaultValue={}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              type="password"
              name="password"
              // defaultValue={}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <TextField
              id="standard-basic"
              label="Verify Password"
              variant="standard"
              type="password"
              name="password"
              // required
              // onChange={}
            />
            <br />
            <TextField
              id="standard-basic"
              label="First Name"
              variant="standard"
              type="text"
              name="fName"
              // required
              // onChange={changeInput}
            />
            <br />
            <TextField
              id="standard-basic"
              label="Last Name"
              variant="standard"
              type="text"
              name="lName"
              // required
              // onChange={}
            />
            <br />
            <p className="">
              By creating an account you agree <wbr />
              to our <a href="#">Terms and Privacy</a>.
            </p>
            <button type="submit" className="popBtn">
              Sign Up
            </button>
          </form>
        </Box>
      </div>
    </>
  );
}
