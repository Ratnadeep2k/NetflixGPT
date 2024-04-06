import React, { useState, useRef} from 'react'
import { Header } from './Header'
import checkValidData from "../utils/validate"
export const Login = () => {
const [isSignInForm,setIsSignInForm] = useState(true);
const [errorMessage,setErrorMessage]=useState(null);

// const name =useRef(null);
const email = useRef(null);
const password = useRef(null);

const handleButtonClick =()=>{
    //Falidate the form data
    // checkValidData
    // console.log(email.current.value);
    // console.log(password.current.value);
   const msg = checkValidData(email.current.value,password.current.value); 
   setErrorMessage(msg);
   console.log(msg);
}
const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
}
  return (
    <>
    <Header/>
    <div  className="absolute">
    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
    alt = 'background' />
    </div>
   <form onSubmit={(e)=>{e.preventDefault()}}
        className='w-3/12 p-12 bg-black my-36 absolute mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" :"Sign Up"}</h1>
        { !isSignInForm && (
        <input 
        // ref={name}
        type ="Name" 
         placeholder='Full Name'  
         className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
       )
        } 
        <input 
        ref={email} 
        type ="text"  
        placeholder='Email address' 
        className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
        <input 
        ref={password}
        type ="password" 
         placeholder='password'  
         className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
         <p className='text-red-500 '>
          {errorMessage} 
         </p>
        <button 
        className='p-4 my-4 bg-red-700 w-full rounded-lg' onClick ={handleButtonClick}  
        >{isSignInForm ? "Sign In" :"Sign UP"}</button>
        <p className='text-gray-400 bg-transparent cursor-pointer'onClick={ toggleSignInForm }>{!isSignInForm ? "Already a user Sign In now ?" :" New to Netflix? Sign up now."}</p>

   </form>
   </>
  )
}
