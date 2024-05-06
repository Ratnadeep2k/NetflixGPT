import React from 'react'
import { Login } from './Login'
import { Browse } from './Browse'
import { createBrowserRouter ,useNavigate} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom' 
export const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/> //default

        },
        {
            path:"/browse",  
            element: <Browse/>
        }
 
    ]);

    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //       if (user) {
    //         // User is signed in, see docs for a list of available properties
    //         // https://firebase.google.com/docs/reference/js/auth.user
    //         const {uid,email,displayName,photoURL} = user;
    //         dispatch(addUser(
                
    //             {uid:uid,email:email,displayName:displayName,photoURL}));   
    //         // navigate("/browse");
    //         // ...
    //         navigate("/browse");
    //       } else {
    //         // User is signed out
    //         // ...
    //         dispatch(removeUser());
    //         navigate("/");
    //       }
    //     });
         
    // },[])
     


  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}
