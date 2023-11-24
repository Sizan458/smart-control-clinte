const Location = () => {
    return (
        <div className="w-[95%] mx-auto m-3">
            <div className="hero  bg-base-200">
            <div className="flex flex-col w-full lg:flex-row">
  <div className="grid flex-grow h-[220px] card bg-base-300 rounded-box place-items-center md:h-[310px] lg:h-[360px]">
    <img src="https://i.ibb.co/QFbLL3Z/Screenshot-2023-11-24-172247.png" className="h-[200px] w-full m-1 p-2 md:h-[300px] lg:h-[360px] "/>
    </div> 
  <div className="divider lg:divider-horizontal"></div> 
  <div className="grid flex-grow h-[220px] card rounded-box place-items-center md:h-[310px] lg:h-[360px] bg-cover bg-fixed  " style={{backgroundImage:'url(https://i.ibb.co/qNNZzb2/pexels-medhat-ayad-439227.jpg)'}}>
   
        
        <ol className=" list-disc text-xl font-bold  text-white">
        <h1>Feature of building:</h1>
        <li>Energy Efficiency</li>
        <li>Safety and Security</li>
        <li>Environmental Considerations</li>
        <li>Technological Integration</li>
        <li>Cost-Effectiveness</li>
        <li>Adaptable Spaces</li>
        <li>Efficient Use of Resources</li>
    </ol>
  </div>
</div>
  
</div>
        </div>
    );
};

export default Location;