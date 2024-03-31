import React, { useState , useContext} from "react";
import {auth,googleAuthProvider } from "./firebase";
import {createUserWithEmailAndPassword,signInWithPopup,signInWithEmailAndPassword} from "firebase/auth";
import { AuthContext } from "./Context/AuthContext";

function SignInForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
  const handleChange = evt => {
    const value = evt.target.value;
    setFormData({
      ...formData,
      [evt.target.name]: value
    });
  };

  const {dispatch} = useContext(AuthContext)



  

  const signinWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
      console.log("Successfully signed in with Google"); // Add this line
   
    } catch (error) {
      console.log("Error signing in with Google:", error); // Add this line
    }
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        
      })
      .catch((error) => console.log(error));
  };
  return (
    <div >
      <form >
        <h1>Sign in</h1>
        <div >
          <a href="#" >
            <i /><div></div>
          </a>
          <a href="#"  onClick={signinWithGoogle}>
            <i  /><div></div>
          </a>
          <a href="#">
            <i  />
          </a>
        </div>
        <span>or use your account</span>
        <input
        
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
        
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <a href="#">Forgot your password?</a>
        <button className="buttonsign" onClick={signIn}>Sign In </button >
      </form>
    </div>
  );
}

export default SignInForm;
