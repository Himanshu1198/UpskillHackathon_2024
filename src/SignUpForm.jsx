import React, { useState, useContext } from "react";
import { auth, googleAuthProvider } from "./firebase";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword,signInWithPopup } from "firebase/auth";
import { AuthContext } from "./Context/AuthContext";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      // Clear the form fields
    } catch (error) {
      console.log(error);
    }
  };

  const signupWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
      console.log("Successfully signed up with Google");
    } catch (error) {
      console.log("Error signing in with Google:", error);
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
      <form onSubmit={handleSubmit} >
        <h2>Sign up</h2>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div >
          <label htmlFor="Passaord">Password</label>
          <input
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            type="password" // Assuming this field is for passwords
          />
        </div>
        <div >
          <button type="submit">Submit</button>
          <button onClick={signupWithGoogle}>
            Sign Up with Google 
          </button>
        </div>
     
      </form>
    </div>
  );
};

export default SignUpForm;
