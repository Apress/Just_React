import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signIn, signUp } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import authStyles from "./Auth.module.css";

function Auth() {
  const [isNewUser, setIsNewUser] = useState(false);
  const [authButtonText, setAuthButtonText] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      navigate("/app");
    }
  }, [user, loading]);
  const completeSignInOrSignUp = () => {
    isNewUser ? signUp(name, email, password) : signIn(email, password);
  };
  const toggleForm = () => {
    if (authButtonText === "Sign In") {
      setIsNewUser(true);
      setAuthButtonText("Sign Up");
    } else {
      setIsNewUser(false);
      setAuthButtonText("Sign In");
    }
  };
  return (
    <div className={authStyles.boxAuth}>
      <div className={authStyles.boxAuthContainer}>
        <label className={authStyles.title}>Just Food Online Shop</label>
        {isNewUser && (
          <input
            type="text"
            className={authStyles.inputAuth}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          />
        )}
        <input
          type="text"
          className={authStyles.inputAuth}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          className={authStyles.inputAuth}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className={authStyles.btnAuth} onClick={completeSignInOrSignUp}>
          {authButtonText}
        </button>
        {!isNewUser && (
          <div className={authStyles.messageAuth}>
            New to Just Food?
            <span className={authStyles.linkAuth} onClick={toggleForm}>
              Click to Sign Up
            </span>
          </div>
        )}
        {isNewUser && (
          <div className={authStyles.messageAuth}>
            Already on Just Food?
            <span className={authStyles.linkAuth} onClick={toggleForm}>
              Click to Sign In
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
export default Auth;
