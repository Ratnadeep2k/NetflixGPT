import React from 'react'
import { onAuthStateChanged,signOut } from "firebase/auth";
import auth from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user =useSelector((store)=>store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // window.location.href = '/login';
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  };
  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser(
            
            {uid:uid,email:email,displayName:displayName,photoURL}));   
        // navigate("/browse");
        // ... 
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return()=>unsubscribe();
     
},[])
  const handleGptSearchClick = () => {
    //toggle GPT search button 
    dispatch(toggleGptSearchView()) 
  }
  return (
    <>
      <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>

        <img
          className='w-44'
          src= {LOGO}
          alt='logo'
        />
       { user && (<div className='flex p-2'>
        <button className='py-2 px-4 m-2 bg-purple-950 text-white rounded-lg mx-4 my-2 ' onClick={handleGptSearchClick} >GPT Search</button>
          <img className='w-12 h-12 '
            alt='usericon'
            src='https://occ-0-6183-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTgzNlMDDnYisoqnWeKOqgXM_Gp9rFLw4ygsX6m4G2KKUX9Z0u0EQwo9lKi8qorstVzYPEsb-JmLw5EeF6FxG7psHD96t60.png?r=a83'
          />

          <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
        </div>)}
      </div>
    </>
  )
}
