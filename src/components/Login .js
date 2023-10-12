import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { AVTAR_LOGO, BACKGROUND_IMG } from "../utils/constant";
const Login = () => {
  const [isSignIn, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch =useDispatch();

  const handleButtonClick = () => {
    // console.log(email.current.value);
    // console.log(password.current.value);

    const message = validateForm(
      email?.current?.value,
      password?.current?.value,
    
    );
    setErrorMessage(message);
    if (message) return;
    if (!isSignIn) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value,
             photoURL:AVTAR_LOGO,
          }).then(() => {
            const{uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
         
          }).catch((error) => {
           setErrorMessage(error?.message);
          });
        
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      //Sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          
    
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };
  const clickHandler = (e) => {
    setIsLogin(!isSignIn);
    e.preventDefault();
  };

  // validateForm(email, password)

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
        className="w-screen h-screen object-cover "
          src={BACKGROUND_IMG} 
          alt="background_img"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-9/12 md:w-3/12 absolute my-36 mx-auto right-0 left-0 text-white bg-black p-12 rounded-lg bg-opacity-80"
      >
        <h1 className=" text-3xl py-4 font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name "
            className="my-4  w-full bg-gray-700 p-4"
          />
        )}
        <input
          type="email"
          ref={email}
          className="my-4  w-full bg-gray-700 p-4"
          placeholder="Email or phone number"
        />

        <input
          type="password"
          ref={password}
          className="my-4  w-full bg-gray-700 p-4"
          placeholder="Password"
        />
        <p className="text-red-500 leading-5 text-start">{errorMessage}</p>

        <button
          onClick={handleButtonClick}
          className="bg-red-700 w-full rounded-lg my-6 p-4"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex">
          <input type="checkbox" />
          <p className="text-sm ml-2 text-gray-400">Remember me</p>
        </div>
        <p className="">
          {isSignIn ? "New to Netflix?" : "Already registered"}{" "}
          <button onClick={clickHandler} className="">
            {isSignIn ? "Sign up now." : "Sign In now."}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
