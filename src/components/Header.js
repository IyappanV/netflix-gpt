import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out.
        navigate("/");
      })
      .catch((error) => {
        // Error
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-6 py-1 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-[13rem] text-[16px] color-[#e50914]"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />
      {user && (
        <div className="flex p-5">
          <img className="w-14 h-14 rounded-full" src={user?.photoURL} alt="usericon" />
          <button className="font-bold text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
