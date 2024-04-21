import {Link} from "react-router-dom"


function Footer() {
  
 
  return (
    <div className="mb-10 mt-96">
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-between w-[85%] mx-auto">
        <div>
          <h1 className="text-lg font-bold">PRODUCTS</h1>
          <p className="hover:text-green-400"><Link to="#">Screen</Link></p>
          <p className="hover:text-green-400"> <Link to="#">Interview</Link></p>
          <p className="hover:text-green-400"> <Link to="#">Certified Assessmentss</Link></p>
          <p className="hover:text-green-400"> <Link to="#">Plagiarism Detection</Link></p>
          <p className="hover:text-green-400"> <Link to="#">Real World Questions</Link></p>
        </div>
        <div>
          <h1 className="text-lg font-bold">SOLUTIONS</h1>
          <p className="hover:text-green-400"> <Link to="#">Set Up a Skills Strategy</Link></p>
          <p className="hover:text-green-400"><Link to="#">Showcase Your Talent Brand</Link></p>
          <p className="hover:text-green-400"><Link to="#">Optimize Your Hiring Process</Link></p>
          <p className="hover:text-green-400"> <Link to="#">Mobilize Your Internal Talent</Link></p>
          <p className="hover:text-green-400"> <Link to="#">Embrace AI</Link></p>
        </div>
        <div>
          <h1 className="text-lg font-bold">RESOURCES</h1>
          <p className="hover:text-green-400"> <Link to="#">Blog</Link></p>
          <p className="hover:text-green-400"> <Link to="#">Customer Stories</Link></p>
          <p className="hover:text-green-400"> <Link to="#">Roles Directory</Link></p>
          <p className="hover:text-green-400"> <Link to="#">Partners</Link></p>
          <p className="hover:text-green-400"> <Link to="#">Integrations</Link></p>
          <p className="hover:text-green-400"> <Link to="#">What’s New</Link></p>
        </div>
        <div>
          <h1 className="text-lg font-bold">ABOUT US</h1>
          <p className="hover:text-green-400"> <Link to="#">Careers</Link></p>
          <p className="hover:text-green-400"> <Link to="#">Our Team</Link></p>
          <p className="hover:text-green-400"> <Link to="#">Newsroom</Link></p>
          <p className="hover:text-green-400"> <Link to="#">Status</Link></p>
          <p className="hover:text-green-400"> <Link to="#">Trust</Link></p>
        </div>
        <div>
          <h1 className="text-lg font-bold">GET STARTED</h1>
          <p className="hover:text-green-400"> <Link to="#">Pricing</Link></p>
          <p className="hover:text-green-400"> <Link to="#">Free Trial</Link></p>
          <p className="hover:text-green-400"> <Link to="#">Contact Us</Link></p>
          <p className="hover:text-green-400"> <Link to="#">Request Demo</Link></p>
          <p className="hover:text-green-400"> <Link to="#">Product Support</Link></p>
          <p className="hover:text-green-400"> <Link to="#">For Developers</Link></p>
        </div>
      </div>

    </div>
  );
}

export default Footer;
