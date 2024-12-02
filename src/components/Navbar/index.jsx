//import React from "react";

function NavBar() {
  return (
    <div className='fixed top-0 left-0 w-full border border-blue-400 pt-2 text-white z-50 bg-blue-300'>
      <div className='flex items-center justify-between'>
      <div className="flex items-center  text-3xl  font-bold">

  <img
    src="https://www.jobringer.com/images/logonew.svg"
    alt="JobRinger Logo"
    className="h-12 mr-3 size-60"/>

</div>

        <div className="flex items-center space-x-7 ml-96">
        <span className="text-lg cursor-pointer hover:underline hover:text-blue-500 transition-all duration-300 ease-in-out">
            Active Employers
        </span>

       <span className="text-lg cursor-pointer hover:underline hover:text-blue-500 transition-all duration-300 ease-in-out">
            Pricing
       </span>
    </div>
        <div className="flex items-center space-x-4 mr-2">
          <button className="px-4 py-2 border border-white rounded hover:bg-white hover:text-blue-600 transition">
            Jobseeker Login
          </button>
          <button className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-yellow-500 hover:text-white transition ">
            Employer Login
          </button>
        </div>
      </div>
      <p className="w-full text-center border-t-2 border-b-2 border-green-500 py-1 mt-3">
        Masum Ali applied on this job
      </p>
    </div>
  )
}

export default NavBar;
