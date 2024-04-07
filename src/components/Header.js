import React from 'react'
import { signOut } from "firebase/auth";


import auth from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Header = () => {
  const navigate = useNavigate();
  const user =useSelector((store)=>store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // window.location.href = '/login';
      navigate("/")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  return (
    <>
      <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>

        <img
          className='w-44'
          src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
          alt='logo'
        />
       { user && (<div className='flex p-2'>
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
