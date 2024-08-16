import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";

function Footer() {
  return (
    <footer className="mt-20 mb-5">
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-between w-[85%] mx-auto">
        <div>
          <h2 className="text-lg font-bold">Products</h2>
          <ul>
            <li>
              <Link to="#" className="hover:text-green-400">Screen</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-green-400">Interview</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-green-400">Certified Assessments</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-green-400">Plagiarism Detection</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-green-400">Real World Questions</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold">Solutions</h2>
          <ul>
            <li>
              <Link to="#" className="hover:text-green-400">Set Up a Skills Strategy</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-green-400">Showcase Your Talent Brand</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-green-400">Optimize Your Hiring Process</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-green-400">Mobilize Your Internal Talent</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-green-400">Embrace AI</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold">Resources</h2>
          <ul>
            <li>
              <Link to="#" className="hover:text-green-400">Blog</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-green-400">Customer Stories</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-green-400">Roles Directory</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-green-400">Partners</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-green-400">Integrations</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-green-400">What’s New</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold">About Us</h2>
          <ul>
            <li>
              <Link to="#" className="hover:text-green-400">Careers</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-green-400">Our Team</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-green-400">Newsroom</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-green-400">Status</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-green-400">Trust</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold">Get Started</h2>
          <ul>
            <li>
              <Link to="#" className="hover:text-green-400">Pricing</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-green-400">Free Trial</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-green-400">Contact Us</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-green-400">Request Demo</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-green-400">Product Support</Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-green-400">For Developers</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10">
        <div className="my-2">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="inline mx-2 text-2xl text-blue-900" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="inline mx-2 text-2xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="inline mx-2 text-2xl text-red-500" />
          </a>
          <a href="https://www.linkedin.com/company/infiny-school/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="inline mx-2 text-2xl text-blue-700" />
          </a>
          <a href="https://t.me/infinytech" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <FaTelegram className="inline mx-2 text-2xl text-blue-500" />
          </a>
        </div>
        <p className="text-sm">
          Copyright © 2024 Infiny School DBA INTERVIEW STREET TECHNOLOGIES PRIVATE LIMITED
        </p>
        <p>
          <Link to="#" className="hover:text-green-400 text-md">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
