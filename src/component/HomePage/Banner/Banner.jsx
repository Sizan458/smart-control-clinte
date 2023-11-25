const Banner = () => {
    return (
        <div className="   m-2 mx-auto w-[95%] rounded-lg ">
           <div className="hero bg-fixed  rounded-lg bg-cover md:h-[350px] lg:h-[450px] " style={{backgroundImage: 'url(https://i.ibb.co/VLvYFFd/pexels-pixabay-417339.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-[#3333ff] dark:text-red-700">
    <div className="max-w-md">
      <h1 className="mb-5 text-xl font-bold md:text-4xl">Harmony Towers</h1>
      <p className="mb-5">Home is not just a place; it's a feeling. An apartment is where your story begins, where laughter echoes through the walls, and where memories are woven into the very fabric of everyday life.</p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;