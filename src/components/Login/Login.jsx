import React from 'react'
import firebaseConfig from './firebase.config';
import { initializeApp } from "firebase/app";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useContext, useState } from 'react'
import { UserContext } from '../../App';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { useLocation, useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom";


const app = initializeApp(firebaseConfig);


const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        isSignedIn: 'false',
        photo: ''
    });



    //Private route
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || "/";

    //Sign in with google
    const handleGoogleSignIn = () => {

        const provider = new GoogleAuthProvider();

        // if (firebase.app.length === 0) { }
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
                const { displayName, email, photoURL } = result.user;
                const newUserInfo = { name: displayName, email, photo: photoURL }
                newUserInfo.isSignedIn = true;
                setUser(newUserInfo)
                setLoggedInUser(newUserInfo);
                navigate(from, { replace: true })

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    //form validation
    const handleChange = (e) => {
        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(e.target.value);
        }
        if (e.target.name === 'password' && e.target.value === e.target.value) {
            const isPasswordValid = e.target.value.length > 5;
            const isPasswordHasNumber = /\d{1}/.test(e.target.value);
            isFormValid = isPasswordHasNumber && isPasswordValid;
        }
        if (isFormValid) {
            const validUser = { ...user };
            validUser[e.target.name] = e.target.value;
            setUser(validUser)
        }
    }





    //form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if (newUser && user.email && user.password) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, user.email, user.password)
                .then((userCredential) => {

                    const newUserInfo = userCredential.user;
                    newUserInfo.displayName = user.name;

                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    newUserInfo.error = '';
                    newUserInfo.isSignedIn = true;
                    console.log(newUserInfo);
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);

                    navigate(from, { replace: true })
                })
                .catch((error) => {
                    const newUserInfo = {};
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);

                    navigate(from, { replace: true })

                    // ..
                });
        }

        if (!newUser && user.email && user.password) {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, user.email, user.password)
                .then((userCredential) => {
                    // Signed in 
                    const newUserInfo = userCredential.user;
                    newUserInfo.success = true;
                    newUserInfo.isSignedIn = true;
                    newUserInfo.error = '';
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    navigate(from, { replace: true })

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    const newUserInfo = {};
                    newUserInfo.error = errorMessage;
                    newUserInfo.isSignedIn = false;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    navigate(from, { replace: true })
                });

        }

    }


    //sign out
    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            const newUserInfo = {
                name: '',
                email: '',
                isSignedIn: false,
                photo: '',
                error: '',
                success: false
            }
            setUser(newUserInfo);
            setLoggedInUser(newUserInfo)
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });

    }



    return (
        <div className='min-h-[80vh] flex flex-col items-center justify-center'>
            {
                user.isSignedIn ? (<button className='bg-[#0C0032] text-white rounded-md px-3 py-1 my-2' onClick={handleGoogleSignIn}><button />Contineu with Google </button>) : (<button className='bg-[#0C0032] text-white rounded-md px-3 py-1 my-2' onClick={handleSignOut}>Sign Out</button>)
            }
            <form onSubmit={handleSubmit} className='flex flex-col items-center my-20'>
                <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
                <label htmlFor="newUser">New User Sign up</label>
                {
                    newUser && (
                        <input onBlur={handleChange} label='Name' type="text" name='name' variant='filled' placeholder='Enter your name' required />
                    )}

                <input onBlur={handleChange} type="text" placeholder='Enter your phone email' name='email' required />
                <input onBlur={handleChange} type="password" placeholder='Enter password' name='password' required />
                <button type="submit" className='bg-[#0C0032] text-white rounded-md px-3 py-1 my-2'>{newUser ? 'Sign up' : 'Sign in'}</button>
            </form>
            {
                <p className='text-red-500'>{user.error}</p>
            }
            {
                user.success && (
                    <p className='text-green-500'>
                        User {newUser ? 'created' : 'logged in'} successfully
                    </p>)
            }
        </div>
    )

}
export default Login