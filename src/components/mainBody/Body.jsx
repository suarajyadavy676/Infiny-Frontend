import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Body() {
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <>
      <Helmet>
        {/* <title>My Awesome Page Title</title> */}
        <meta
          name="description"
          content="This is a description of my awesome page."
        />
        {/* Other meta tags as needed */}
      </Helmet>
      {/* Rest of your component content */}
      <div className="bg-gradient-to-r from-green-50 via-white to-blue-50">
        <div className="w-[96%] mx-auto text-center my-10 ">
          <h1 className="xl:w-[40%] xl:text-5xl mx-auto text-2xl font-bold my-4">
            Skills speak louder than words
          </h1>
          <h1 className="xl:w-[36%] mx-auto text-lg">
            We help companies develop the strongest tech teams around. We help
            candidates sharpen their tech skills and pursue job opportunities.
          </h1>
          <div className="mx-auto my-10 text-center">
            <button className="bg-green-600 py-2 px-10 text-white rounded-md mx-20 my-10">
              <Link to="/access-account">Sign Up</Link>
            </button>
            <button className=" border-2 border-black px-6 py-1 rounded-md">
              Request demo
            </button>
          </div>
          <h1 className="xl:w-[50%] mx-auto text-lg">
            Over 40% of developers worldwide and 3,000 companies use INFINY
            SCHOOL
          </h1>
          <div className="flex justify-between flex-wrap xl:w-[60%] mx-auto">
            <img src="/images/peloton.png" alt="logo" width={100} />
            <img src="/images/adobe.png" alt="logo" width={100} />
            <img src="/images/atlassian.png" alt="logo" width={100} />
            <img src="/images/bloomberg.png" alt="logo" width={100} />
            <img src="/images/goldmansachs.png" alt="logo" width={100} />
            <img src="/images/linkedin.png" alt="logo" width={100} />
            <img src="/images/stripe.png" alt="logo" width={100} />
            <img src="/images/vmware.png" alt="logo" width={100} />
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-center text-2xl lg:text-4xl my-4">
          It’s not a pipeline problem.
        </h1>
        <h1 className="text-center text-2xl lg:text-4xl text-green-500 my-4">
          It’s a spotlight problem.
        </h1>
        <p className="lg:w-[60%] mx-auto text-center text-lg w-[90%]">
          Tech hiring needs a reset. From prepping for jobs and practicing
          coding to running a world-class technical interview, give developers
          the tools they need to showcase their skills, passion, and potential.
        </p>
      </div>
    </>
  );
}

export default Body;
