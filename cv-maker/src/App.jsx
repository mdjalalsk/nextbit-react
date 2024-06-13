import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import {useState} from "react";
import ViewCv from "./Components/ViewCv/ViewCv.jsx";
import MainForm from "./Components/Form/MainForm.jsx";

const navItems=["Home","Contact","About Us"];
function App() {
const [navs,setNavs]=useState(navItems);
console.log(navs);
  return (
   <div className="container mx-auto px-4">
       <Navbar navs={navs}/>
       <ViewCv></ViewCv>
       <MainForm></MainForm>
       <Footer/>
   </div>
  )
}

export default App