import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Logo"
        />
      </div>
      <form className="w-[30%] absolute p-12 bg-[rgba(0,0,0,.75)] my-28 mx-auto right-0 left-0 text-white rounded-lg">
      <div>
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="p-4 my-4 w-full rounded-lg bg-[#333]"
            type="text"
            placeholder="Name"
          />
        )}
        <input
          className="p-4 my-4 w-full rounded-lg bg-[#333]"
          type="text"
          placeholder="Email"
        />
        <input
          className="p-4 my-2 w-full rounded-lg bg-[#333]"
          type="password"
          placeholder="Password"
        />
        <button className="p-4 my-8 bg-[#e50914] w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
      </div>
      <div>
      <p className="py-4 cursor-pointer text-[#8c8c8c]" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up now."
            : "Already have an account? Sign In now"}
        </p>
        <p className="text-[#8c8c8c]">Sign in is protected by Google reCAPTCHA to ensure you’re not a bot.</p>
      </div>
      </form>
    </div>
  );
};

export default Login;
