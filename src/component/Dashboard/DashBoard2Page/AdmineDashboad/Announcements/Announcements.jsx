import NormalAxios from "../../../../Hookes/NormalAxios/NormalAxios";


const Announcements = () => {
    const axios =NormalAxios()
    const handleNews=e=>{
        e.preventDefault();
        const tittle = e.target.tittle.value;
        const  description = e.target.description.value;
        const user ={tittle, description}
        
        axios.post("/all-announcement",user)
    } 
    return (
        <div>
          <div>
            <h1 className="text-2xl text-center text-black m-2">Make Announcements</h1>
          </div>
          <div className="w-[80%] mt-5 mx-auto md:w-[70%] lg:w-[50%] xl:w-[25%]">
            <form onSubmit={handleNews}>
            <input type="text" name='tittle' placeholder="Tittle here" className="input input-bordered input-secondary w-[300px] md:w-[500px]" />
            <br />
            <textarea name="description"  className="textarea textarea-accent mt-3  h-[250px] w-[300px] md:w-[500px]" placeholder="Description"></textarea>
            <button className="btn btn-error m-2 w-full">Post</button>
            </form>
          </div>
        </div>
    );
};

export default Announcements;