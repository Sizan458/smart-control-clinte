import Lottie from "lottie-react";
import logAnimation from "../../../assets/login.json"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import swal from 'sweetalert';
import { AuthContext } from "../../Hookes/AuthProvider/AuthProvider";
import NormalAxios from "../../Hookes/NormalAxios/NormalAxios";

const From = () => {
  const Axios =  NormalAxios()
    const [see,setSee]=useState(false);
    const[logError,setLogError]=useState('');
    const[success, setSuccess]=useState('');
    //page reload function
    const location=useLocation()
    const navigate  =useNavigate()
    const{signIn,googleSignIn,user}=useContext(AuthContext)
    const handleLogIn = e => {
        e.preventDefault();
        const from = e.target;
        const email= from.email.value;
        const password = from.password.value;
        const user ={email,password}
        
         
          //reset error message & success message
          setLogError('');
          setSuccess('');
          //sign in the user with the email and password
     signIn(email,password)

     .then(result=>{console.log(result)

       // navigate to page after successful login
       navigate(location?.state? location?.state : '/')
       setSuccess('Successfully login ');
     })
     .catch(err=>{setLogError(err.message)});

 }

 //login  with google
 const handleGoogle=()=>{
    googleSignIn()
    .then(result=>{
       console.log(result.user)
       const userInfo ={
        email: result.user.email,
        name: result.user.displayName
       }
       Axios.post('/all-user',userInfo)
       //if successful login
       swal("Good job!", "You are successfully registered", "success"); 
        // navigate to page after successful login
        navigate(location?.state? location?.state : '/')
    })
    .then(error=>{
      console.log(error.message)
      //if failed login
      swal("There was an problem. Please try again");
      return 
    })
    // send data to database
    Axios.post('/all-user',user.email)
  }

    return (
        <div className="w-[97%] mx-auto m-2 ">
        <div className=" bg-purple-300   dark:bg-indigo-300  dark:rounded-lg  lg:w-[90%] lg:mx-auto" >
<div className="hero-content flex-col gap-4 lg:flex-row-reverse">
 <div className="text-center lg:text-left">
   <h1 className="text-2xl font-bold text-center md:text-4xl lg:ml-[160px] dark:text-black">Login Now!</h1>
   <Lottie animationData={logAnimation} className="m-3 h-[250px] md:h-[340px] lg:h-[550px] lg::ml-[160px]"></Lottie>
 </div>
 <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
   <form className="card-body" onSubmit={handleLogIn}>
   {
 logError && <p className="text-red-700 text-center text-2xl">{logError}</p>
}
{
success &&  <p className="text-green-700 text-center text-2xl">{success}</p>
}
    
     <div className="form-control">
       <label className="label">
         <span className="label-text">Email</span>
       </label>
       <input type="email" placeholder="email" name="email" className="input input-bordered" required />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Password</span>
       </label>
       <input type={see? "text" : "password"}  placeholder="password" name="password" className="input input-bordered" required />
       <div className="flex gap-2 justify-between">
       <label className="label">
         <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
       </label>
       <span className="text-xm  mt-1 ml-[80px]"  onClick={()=>setSee(!see)}>Show password</span>
       </div>
     </div>
     <div className="form-control mt-6">
     <button className="btn btn-outline btn-info text-xl font-bold">Login</button>
    
     <button className="btn btn-outline btn-accent text-4xl font-bold mt-4" onClick={handleGoogle}><AiOutlineGoogle></AiOutlineGoogle></button>
    
     <div>
         <p className="text-xl font-bold text-black mt-2 text-center">Do not  have an account <Link to='/register' className="text-rose-700">Register</Link></p>
     </div>
     </div>
   </form>
 </div>
</div>
</div> 
     </div>
    );
};

export default From;