import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth ,onAuthStateChanged,signInWithEmailAndPassword, signOut,GoogleAuthProvider ,signInWithPopup, updateProfile} from "firebase/auth";
import App from "../Firebase.js/Firebase";
import NormalAxios from "../NormalAxios/NormalAxios";
export const  AuthContext=createContext(null)
const  auth=getAuth(App)
const AuthProvider = ({children}) => {
    const [user ,setUser]=useState(null)
    const[loading,setLoading]= useState(true)
    const googleProvider =  new GoogleAuthProvider();
    const axiosPublic= NormalAxios()
    //google function
    const googleSignIn = ()=>{
             setLoading(true);
        return signInWithPopup(auth, googleProvider)
     }
    //email  function
    const userEmail =(email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword( auth ,email, password)
    };
    //sign in  function
    const signIn=(email,password) => {
        setLoading(true);
      return signInWithEmailAndPassword( auth ,email, password)
    };
     //sign out function
     const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }
    //user profile update function
    const updateUserProfile=(name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
    }
    //keep the current user
    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            if(currentUser){
                const userInfo={email:currentUser.email}
             axiosPublic.post('/jwt',userInfo)
             .then(res=>{
                if(res.data.token){
                    localStorage.setItem("access_token",res.data.token);
                }
             })

            }else{
            localStorage.removeItem("access_token");
            }
            setLoading(false);
        });
        return ()=>{
            unSubscribe
        }
    },[]);
    const authInfo ={
        userEmail,
        signIn,
        user,
        logOut,
        googleSignIn,
        loading,
       updateUserProfile
 
     }
    return (
        <div>
              <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;