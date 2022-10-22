import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserAuth } from "../../../context/AuthContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import GoogleButton from "react-google-button";
import Breadcrumb from "../Breadcrumb/Breadcrumb.component";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { signIn, googleSignIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/home");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Breadcrumb title="Welcome" />
      <div className="signin-box">
        <div>
          <h1>Sign in to your account</h1>
          <p>
            Don't have an account yet?
            <Link to="/signup"> Sign Up.</Link>
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
              data-testid="signin-email-input"
            />
            <br />
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              data-testid="signin-password-input"
            />
            <br />
            <button type="submit" className="popBtn" data-testid="signin-btn">
              Sign In
            </button>
          </form>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
            data-testid="google-btn"
          />
        </Box>
      </div>
    </>
  );
}
