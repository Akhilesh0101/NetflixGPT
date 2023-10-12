import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store?.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearchView);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const gptHandler = () => {
    dispatch(toggleGptSearchView());
  };

  const homepageHandler = () =>{
  
  }

  const languageHandler = (e) => dispatch(changeLanguage(e.target.value));

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        const { uid, email, displayName, photoURL } = authUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe(); // Cleanup the subscription when the component unmounts
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex flex-col md:flex-row z-10  justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <>
              <select onChange={languageHandler} className="p-2 m-2 bg-gray-900 text-white">
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </>
          )}
            <button
            onClick={gptHandler}
            className="bg-red-800 p-2 m-2  rounded-lg text-white">
            {showGptSearch ?"Homepage":"SearchGPT"}
            </button>


          <img alt="user-icon" className=" hidden md:block w-12 h-12  m-2" src={user?.photoURL} />
          <button onClick={handleSignOut} className="text-white font-bold">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
