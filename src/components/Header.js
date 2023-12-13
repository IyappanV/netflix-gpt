import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out.
      })
      .catch((error) => {
        // Error
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // SignIn or SignUp
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // Signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // UnSubscribe when component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-6 py-1 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-[13rem] text-[16px] color-[#e50914]"
        src={LOGO}
        alt="Logo"
      />
      {user && (
        <div className="flex p-5">
          <img
            className="w-14 h-14 "
            src={user?.photoURL}
            alt="usericon"
          />
          <button className="font-bold text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
