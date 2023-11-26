import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className=" w-96 mx-auto mt-[25%] md:mt-[15%] lg:mt-[10%]">
           <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/mFrpzPD/20824300-6363147.jpg" className="h-[300px] w-full md:h-[400px]" /></figure>
  <div className="card-body">
   
   
    <div className="card-actions justify-center">
    <Link to='/'>
    <button className="btn btn-primary text-2xl font-bold">Go TO Home</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ErrorPage;