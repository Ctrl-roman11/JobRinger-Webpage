//import React from 'react'

function Footer() {
    return (
      <div className="bg-blue-50 pt-6 pb-4 mt-5 h- ">
        
        <div className="flex flex-wrap justify-around border-b border-blue-400 pb-4">
          {/* Jobs in India */}
          <div className="text-center mb-4 md:mb-0">
            <h3 className="font-bold text-lg text-gray-700 mb-2">JOBS IN INDIA</h3>
            <div className="text-blue-600 space-x-2">
              <span>#Mumbai</span>
              <span>#Delhi</span>
              <span>#Ajmer</span>
              <span>#Pune</span>
              <span>#Hyderabad</span>
              <span>#Agra</span>
              <span>#Chennai</span>
              <span>#Kolkata</span>
              <span>#Indore</span>
              <span>#Gurugram</span>
              <span>#Jaipur</span>
              <span>#Ahmedabad</span>
            </div>
          </div>
  
          {/* International Jobs Section*/}
          <div className="text-center mb-4 md:mb-0">
            <h3 className="font-bold text-lg text-gray-700 mb-2">INTERNATIONAL JOBS</h3>
            <div className="text-blue-600 space-x-2">
              <span>#Africa</span>
              <span>#USA</span>
              <span>#UK</span>
              <span>#Australia</span>
              <span>#Canada</span>
              <span>#Singapore</span>
              <span>#Dubai</span>
              <span>#Saudi Arabia</span>
              <span>#New Zealand</span>
            </div>
          </div>
        </div>

        <div className="text-center py-4 border-b border-blue-400">
          <div className="flex justify-center gap-10 mb-2">
            <div>
              <h4 className="text-xl font-bold text-blue-600">31258</h4>
              <p className="text-gray-600">Jobs Posted</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-blue-600">15153</h4>
              <p className="text-gray-600">Jobs Filled</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-blue-600">19967</h4>
              <p className="text-gray-600">Employers</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-blue-600">1295533</h4>
              <p className="text-gray-600">Active Users</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Disclaimer: All Trademarks and Logos are the property of their respective owners, depicted here purely
            for representation purposes. Jobringer.com shall not have any responsibility in this regard...
          </p>
        </div>

        {/* Bottom Section */}

        <div className="mt-4">
        <div className="flex items-center mb-2 gap-4 justify-center">
  <span className="font-bold text-gray-700">Follow us on:</span>

  <i className="fab fa-whatsapp text-2xl text-green-500 hover:text-green-700 transition-all duration-300 ease-in-out"></i>
  <i className="fab fa-facebook text-2xl text-blue-600 hover:text-blue-800 transition-all duration-300 ease-in-out"></i>
  <i className="fab fa-twitter text-2xl text-blue-400 hover:text-blue-600 transition-all duration-300 ease-in-out"></i>
  <i className="fab fa-instagram text-2xl text-pink-500 hover:text-pink-700 transition-all duration-300 ease-in-out"></i>
  <i className="fab fa-linkedin text-2xl text-blue-700 hover:text-blue-900 transition-all duration-300 ease-in-out"></i>
</div>

          <div className="flex justify-center items-center flex-wrap text-sm text-gray-500 px-4">
            <div>
              <p>
                Terms and conditions | Privacy Policy | Refund / Cancellation Policy | About Us | Contact Us | FAQ
              </p>
              <p>© All Rights Reserved @ 2024 Jobtech Ventures Private Limited.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Footer;
