import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(
      name?.current?.value,
      email?.current?.value,
      password?.current?.value,
      isSignInForm
    );
    setErrorMessage(message);

    if (message) return;

    // SignIn / SignUp
    if (!isSignInForm) {
      // Sign Up
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute z-0 overflow-hidden bg-black">
        <img
          src={BG_URL}
          alt="Logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[30%] absolute p-12 bg-[rgba(0,0,0,.75)] my-24 mx-auto right-0 left-0 text-white rounded-lg"
      >
        <div>
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              className="p-4 my-4 w-full rounded-lg bg-[#333]"
              type="text"
              placeholder="Name"
            />
          )}
          <input
            ref={email}
            className="p-4 my-4 w-full rounded-lg bg-[#333]"
            type="text"
            placeholder="Email"
          />
          <input
            ref={password}
            className="p-4 my-2 w-full rounded-lg bg-[#333]"
            type="password"
            placeholder="Password"
          />
          <p className="text-red-500">{errorMessage}</p>
          <button
            className="p-4 my-8 bg-[#e50914] w-full rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
        </div>
        <div>
          <p
            className="py-4 cursor-pointer text-[#8c8c8c]"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up now."
              : "Already have an account? Sign In now"}
          </p>
          <p className="text-[#8c8c8c]">
            Sign in is protected by Google reCAPTCHA to ensure you’re not a bot.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
