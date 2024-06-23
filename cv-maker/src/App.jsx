import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import {useState} from "react";
import ViewCv from "./Components/ViewCv/ViewCv.jsx";
import MainForm from "./Components/Form/MainForm.jsx";

const navItems=["Home","Contact","About Us"];
function App() {
const [navs,setNavs]=useState(navItems);
    const [formData, setFormData] = useState(null);
    // console.log(formData?.personalInfo?.name);
    let cvMakerName=formData?.personalInfo?.name;
    const handleFormSubmit = (data) => {
        setFormData(data);
    };

console.log(navs);
  return (
   <div className="container mx-auto px-4">
       <Navbar navs={navs} name={cvMakerName}/>
       {
           formData &&  <ViewCv data={formData}></ViewCv>
       }

       <MainForm onSubmit={handleFormSubmit}/>
       <Footer/>
   </div>
  )
}

export default App
