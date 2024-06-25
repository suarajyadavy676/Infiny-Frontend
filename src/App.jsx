import Navbar1 from "./components/navbar/Navbar1";
import Navbar2 from "./components/navbar/Navbar2";
import Footer from "./components/footer/Footer";
import Navbar3 from "./components/navbar/Navbar3";
import AllRoutes from "./routes/AllRoutes";
import { AuthContext } from "./components/AuthContextProvider";
import { useContext, useEffect } from "react";
import DNavbar from "./routes/for-developrs/DNavbar";
import DFooter from "./routes/for-developrs/DFooter";
function App() {
  console.log("token",!localStorage.getItem('token'))
  let {token} = useContext(AuthContext)
  useEffect(()=>{
    
  },[token])
  return (
    <>
    {token
    ?
    <DNavbar/>
    :
    (<>
      <Navbar1 />
      <Navbar2 />
      <Navbar3 />
    </>)
    }
      <AllRoutes/>
      {token?<DFooter/>:<Footer />}
           
    </>
  );
}

export default App;
