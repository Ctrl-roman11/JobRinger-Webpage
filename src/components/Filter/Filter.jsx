import { useState } from "react"; 

const Filter = () => {
  const [dropdowns, setDropdowns] = useState({
    experience: false,
    workMode: false,
    jobType: false,
    salary: false,
  });

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const quickJobSearchTags = [
    "Fresher",
    "Work From Home",
    "WFH",
    "IT",
    "HR",
    "Back Office",
    "BPO Jobs",
    "ITES",
    "Finance",
    "Accounts",
    "Medical",
    "Pharma",
    "Manager",
    "Developer",
    "CA",
    "Marketing",
    "Engineering",
    "Research",
    "Sales",
    "MBA",
    "Non Government Jobs",
  ];

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md w-80 ml-10 mt-6">
      <h2 className="text-lg font-bold mb-4">Filters</h2>

      
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Keywords</label>
        <input
          type="text"
          placeholder="Type keyword and press enter"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="mb-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleDropdown("experience")}
        >
          <label className="block text-gray-700">Experience</label>
          <span className="text-gray-500">{dropdowns.experience ? "-" : "+"}</span>
        </div>
        {dropdowns.experience && (
          <input
            type="text"
            placeholder="Enter years of experience"
            className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}
      </div>

      
      <div className="mb-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleDropdown("workMode")}
        >
          <label className="block text-gray-700">Work Mode</label>
          <span className="text-gray-500">{dropdowns.workMode ? "-" : "+"}</span>
        </div>
        {dropdowns.workMode && (
          <div className="mt-2">
            {["In Office", "Work From Home / WFH", "Hybrid", "Remote", "On Field"].map(
              (mode) => (
                <div key={mode} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={mode}
                    className="mr-2"
                  />
                  <label htmlFor={mode} className="text-gray-700">
                    {mode}
                  </label>
                </div>
              )
            )}
          </div>
        )}
      </div>

      
      <div className="mb-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleDropdown("jobType")}
        >
          <label className="block text-gray-700">Job Type</label>
          <span className="text-gray-500">{dropdowns.jobType ? "-" : "+"}</span>
        </div>
        {dropdowns.jobType && (
          <div className="mt-2">
            {["All Jobs", "Classic Jobs", "Featured Jobs", "Premium Jobs"].map(
              (job) => (
                <div key={job} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={job}
                    className="mr-2"
                  />
                  <label htmlFor={job} className="text-gray-700">
                    {job}
                  </label>
                </div>
              )
            )}
          </div>
        )}
      </div>

      
      <div className="mb-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleDropdown("salary")}
        >
          <label className="block text-gray-700">Salary</label>
          <span className="text-gray-500">{dropdowns.salary ? "-" : "+"}</span>
        </div>
        {dropdowns.salary && (
          <div className="mt-2">
            <input
              type="number"
              placeholder="Min Salary"
              className="w-full mb-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Max Salary"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}
      </div>

      
      <div>
        <h3 className="text-gray-700 font-bold mb-2">Quick Job Search</h3>
        <div className="flex flex-wrap gap-2">
          {quickJobSearchTags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-blue-200"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
