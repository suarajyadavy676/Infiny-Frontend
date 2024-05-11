import Navbar1 from "./components/navbar/Navbar1";
import Navbar2 from "./components/navbar/Navbar2";
import Footer from "./components/footer/Footer";
import Navbar3 from "./components/navbar/Navbar3";
import AllRoutes from "./routes/AllRoutes";
import DevNavbar from "./routes/for-developrs/DevNavbar";
import { AuthContext } from "./components/AuthContextProvider";
import { useContext, useEffect } from "react";
function App() {
  console.log("token",!localStorage.getItem('token'))
  let {token} = useContext(AuthContext)
  useEffect(()=>{
    
  },[token])
  return (
    <>
    {token
    ?
    <DevNavbar/>
    :
    (<>
      <Navbar1 />
      <Navbar2 />
      <Navbar3 />
    </>)
    }
      <AllRoutes/>
      {token?<h1>hello</h1>:<Footer />}     
    </>
  );
}

export default App;
