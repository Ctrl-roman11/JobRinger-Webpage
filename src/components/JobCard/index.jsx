//import React from 'react'
import dayjs from "dayjs";
import PropTypes from "prop-types";

function JobCard(props) {
    //const skills=["Javascript","React","Node.js","System Design","problem solving"];
    const date1 = dayjs(Date.now());
    const diffInDays =date1.diff(props.postedOn,'day');

  return (
    <div className="flex flex-col">
    <div className=" flex-1 justify-between mx-32 mb-4 p-6 flex-col">
        <div className="flex justify-between item-center px-6 py-4 bg-zinc-200 rounded-mb border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103">
            <div className="flex flex-col items-start gap-3">
            <h1 className="text-lg font-semibold ">{props.title} - {props.company}</h1>
            <p className="text-gray-500 mt-0">posted {diffInDays} days ago</p>
            <p>{props.type} &#x2022; {props.experience} &#x2022;{props.location} &#x2022;</p>
            <div className="flex items-center gap-2">
                {props.skills.map((skill)=>(
                    <p key={skill} className="text-gray-500 py-1 px-2 rounded-md border border-black">{skill}</p>
                ))}

            </div>
        </div>
     <div className="flex mt-4 flex-col items-center gap-4 mb-7">
           
            <a href={props.job_link}>
            <button className="text-black border  font-semibold bg-yellow-300 border-blue-300 px-20 py-2 rounded-md hover:bg-yellow-500 transition-all duration-300">Apply</button>
            </a>
            <div className="flex justify-between gap-4 mt-4 w-full max-w-[400px] ">
          <button className="text-black border font-semibold bg-green-300 border-blue-300 px-5 py-2 rounded-md hover:bg-green-400 transition-all duration-300 w-full">
            Save
          </button>
          <button className="text-black border font-semibold bg-blue-300 border-blue-300 px-5 py-2 rounded-md hover:bg-blue-400 transition-all duration-300 w-full">
            Share
          </button>
        </div>
         </div>
     </div>

    </div>
    
    </div>
  )
}

JobCard.propTypes = {
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    postedOn: PropTypes.string.isRequired,
    job_link: PropTypes.string.isRequired,
  };

export default JobCard