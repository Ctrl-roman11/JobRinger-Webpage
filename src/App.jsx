import NavBar from "./components/Navbar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/JobCard";
import jobData from "./JobDumydata";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <NavBar />
      <div className="pt-20">
        {" "}
        {/* Add padding to avoid content overlap with fixed NavBar */}
        <Header />
        <SearchBar />
        <div className="flex">
          <Filter />
          <div className="flex flex-col">
          {jobData.map((job) => (
            <div key={job.id} >
              <JobCard {...job} />
            </div>
          ))}
          </div>
        </div>
      </div>
      <Footer/>

    </div>
  );
}

export default App;
