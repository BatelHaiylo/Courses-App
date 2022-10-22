import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { UserAuth } from "../../../context/AuthContext";
import Breadcrumb from "../Breadcrumb/Breadcrumb.component";


export default function SignUp() {
  const [additionalUserData, setAdditionalUserData] = useState({ firstName: '', lastName: '', email: '', password: '' })
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAdditionalUserData(additionalUserData[e.target.name] = e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password)
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
            "& > :not(style)": { m: 1},
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
              required
              onChange={(e) => setEmail(e.target.value)}
              data-testid="signup-email-input"
            />
            <br />
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              type="password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              data-testid="signup-password-input"

            />
            <br />

            <TextField
              id="standard-basic"
              label="Verify Password"
              variant="standard"
              type="password"
              name="verifypassword"
              required
              onChange={handleChange}
              data-testid="signup-verifypassword-input"

            />
            <br />
            <TextField
              id="standard-basic"
              label="First Name"
              variant="standard"
              type="text"
              name="firstName"
              required
              onChange={handleChange}
              data-testid="signup-fName-input"

            />
            <br />
            <TextField
              id="standard-basic"
              label="Last Name"
              variant="standard"
              type="text"
              name="lastName"
              required
              onChange={handleChange}
              data-testid="signup-lName-input"
            />
            <br />
            <p className="">
              By creating an account you agree <wbr />
              to our <a href="#">Terms and Privacy</a>.
            </p>
            <button type="submit" className="popBtn" data-testid="signup-btn">
              Sign Up
            </button>
          </form>
        </Box>
      </div>
    </>
  );
}


// const UserImpl = {
// displayName: null
// email: "estherhayilo@gmail.com"
// emailVerified: false
// metadata: {
//   createdAt: "1666398466776"
//   creationTime: "Sat, 22 Oct 2022 00:27:46 GMT"
//   lastLoginAt: "1666398466776"
//   lastSignInTime: "Sat, 22 Oct 2022 00:27:46 GMT"
// }
// phoneNumber: null
// photoURL: null
// proactiveRefresh
// : 
// providerData: [
//   0:{providerId: 'password', uid: 'estherhayilo@gmail.com', displayName: null, email: 'estherhayilo@gmail.com', phoneNumber: null, …}
// ]
// }