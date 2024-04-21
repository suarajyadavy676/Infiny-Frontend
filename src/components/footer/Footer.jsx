import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";

function Footer() {
  return (
    <div className="mt-20 mb-5">
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-between w-[85%] mx-auto">
        <div>
          <h1 className="text-lg font-bold">PRODUCTS</h1>
          <p className="hover:text-green-400">
            <Link to="#">Screen</Link>
          </p>
          <p className="hover:text-green-400">
            <Link to="#">Interview</Link>
          </p>
          <p className="hover:text-green-400">
            <Link to="#">Certified Assessmentss</Link>
          </p>
          <p className="hover:text-green-400">
            <Link to="#">Plagiarism Detection</Link>
          </p>
          <p className="hover:text-green-400">
            <Link to="#">Real World Questions</Link>
          </p>
        </div>
        <div>
          <h1 className="text-lg font-bold">SOLUTIONS</h1>
          <p className="hover:text-green-400">
            <Link to="#">Set Up a Skills Strategy</Link>
          </p>
          <p className="hover:text-green-400">
            <Link to="#">Showcase Your Talent Brand</Link>
          </p>
          <p className="hover:text-green-400">
            <Link to="#">Optimize Your Hiring Process</Link>
          </p>
          <p className="hover:text-green-400">
            <Link to="#">Mobilize Your Internal Talent</Link>
          </p>
          <p className="hover:text-green-400">
            <Link to="#">Embrace AI</Link>
          </p>
        </div>
        <div>
          <h1 className="text-lg font-bold">RESOURCES</h1>
          <p className="hover:text-green-400">
            <Link to="#">Blog</Link>
          </p>
          <p className="hover:text-green-400">
            <Link to="#">Customer Stories</Link>
          </p>
          <p className="hover:text-green-400">
            <Link to="#">Roles Directory</Link>
          </p>
          <p className="hover:text-green-400">
            <Link to="#">Partners</Link>
          </p>
          <p className="hover:text-green-400">
            <Link to="#">Integrations</Link>
          </p>
          <p className="hover:text-green-400">
            <Link to="#">What’s New</Link>
          </p>
        </div>
        <div>
          <h1 className="text-lg font-bold">ABOUT US</h1>
          <p className="hover:text-green-400">
            {" "}
            <Link to="#">Careers</Link>
          </p>
          <p className="hover:text-green-400">
            {" "}
            <Link to="#">Our Team</Link>
          </p>
          <p className="hover:text-green-400">
            {" "}
            <Link to="#">Newsroom</Link>
          </p>
          <p className="hover:text-green-400">
            {" "}
            <Link to="#">Status</Link>
          </p>
          <p className="hover:text-green-400">
            {" "}
            <Link to="#">Trust</Link>
          </p>
        </div>
        <div>
          <h1 className="text-lg font-bold">GET STARTED</h1>
          <p className="hover:text-green-400">
            {" "}
            <Link to="#">Pricing</Link>
          </p>
          <p className="hover:text-green-400">
            {" "}
            <Link to="#">Free Trial</Link>
          </p>
          <p className="hover:text-green-400">
            {" "}
            <Link to="#">Contact Us</Link>
          </p>
          <p className="hover:text-green-400">
            {" "}
            <Link to="#">Request Demo</Link>
          </p>
          <p className="hover:text-green-400">
            {" "}
            <Link to="#">Product Support</Link>
          </p>
          <p className="hover:text-green-400">
            {" "}
            <Link to="#">For Developers</Link>
          </p>
        </div>
      </div>

      <div className="text-center mt-10">
        <div className="my-2">
          <Link to="#">
            <SiHackerrank className="inline mx-2 text-4xl" />
          </Link>
          <Link to="#">
            <FaFacebook className="inline mx-2 text-2xl text-blue-900" />
          </Link>
          <Link to="#">
            <FaSquareXTwitter className="inline mx-2 text-2xl" />
          </Link>
          <Link to="#">
            <FaSquareInstagram className="inline mx-2 text-2xl text-red-500" />
          </Link>
          <Link to="#">
            <FaLinkedin className="inline mx-2 text-2xl text-blue-700" />
          </Link>
          <Link to="#">
            <FaTelegram className="inline mx-2 text-2xl text-blue-500" />
          </Link>
        </div>
        <h1>
          Copyright © 2024 HackerRank DBA INTERVIEW STREET TECHNOLOGIES PRIVATE
          LIMITED
        </h1>
        <p>
          <Link to="#" className="hover:text-green-400 text-md">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
