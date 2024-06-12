import NavBar from "./Components/NavBar.jsx";
import SideBar from "./Components/SideBar.jsx";
import {useEffect, useState} from "react";
import Footer from "./Components/Footer.jsx";
const navArray=[
    "Home","About","Blog","Reports","Contact",
]
function App() {
const [navs,setNavs]=useState([]);

console.log(navs)
    useEffect(()=>{
      setNavs(navArray)
    },[])




  return (
    <>
        <div>
        <div>
            <NavBar navs={navs}></NavBar>
        </div>
        <div className="flex w-full min-h-screen p-2">
          <aside className="bg-white w-2/5 md:w-1/5 p-1">
              <SideBar>
                  <div>
                      <div className="collapse collapse-plus">
                          <input type="radio" name="my-accordion-3" defaultChecked/>
                          <div className="collapse-title text-xl font-medium">
                              Introductions
                          </div>
                          <div className="collapse-content">
                              <ul>
                                  <li className="my-2">Basic</li>
                                  <li className="my-2">useState</li>
                                  <li className="my-2">useEffect</li>
                                  <li className="my-2">useRef</li>
                              </ul>
                          </div>
                      </div>
                      <div className="collapse collapse-plus ">
                          <input type="radio" name="my-accordion-3"/>
                          <div className="collapse-title text-xl font-medium">
                              Hooks
                          </div>
                          <div className="collapse-content">
                              <ul>
                                  <li className="my-2">Basic</li>
                                  <li className="my-2">useState</li>
                                  <li className="my-2">useEffect</li>
                                  <li className="my-2">useRef</li>
                              </ul>
                          </div>
                      </div>
                      <div className="collapse collapse-plus">
                          <input type="radio" name="my-accordion-3"/>
                          <div className="collapse-title text-xl font-medium">
                              Image
                          </div>
                          <div className="collapse-content">
                              <ul>
                                  <li className="my-2">Basic</li>
                                  <li className="my-2">useState</li>
                                  <li className="my-2">useEffect</li>
                                  <li className="my-2">useRef</li>
                              </ul>
                          </div>
                      </div>
                      <div className="collapse collapse-plus">
                          <input type="radio" name="my-accordion-3"/>
                          <div className="collapse-title text-xl font-medium">
                              Custome Hooks
                          </div>
                          <div className="collapse-content">
                              <ul>
                                  <li className="my-2">Basic</li>
                                  <li className="my-2">useState</li>
                                  <li className="my-2">useEffect</li>
                                  <li className="my-2">useRef</li>
                              </ul>
                          </div>
                      </div>
                      <div className="collapse collapse-plus">
                          <input type="radio" name="my-accordion-3"/>
                          <div className="collapse-title text-xl font-medium">
                              Props
                          </div>
                          <div className="collapse-content">
                              <ul>
                                  <li className="my-2">Basic</li>
                                  <li className="my-2">useState</li>
                                  <li className="my-2">useEffect</li>
                                  <li className="my-2">useRef</li>
                              </ul>
                          </div>
                      </div>
                  </div>

              </SideBar>
          </aside>
            <main className="w-3/5 md:w-4/5 p-4">
                <p>What is Lorem Ipsum?
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                    Why do we use it?
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                    default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                    infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).


                    Where does it come from?
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                    classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
                    professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                    literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
                    of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
                    book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of
                    Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                </p>
            </main>
        </div>
            <Footer></Footer>
        </div>
    </>
  )
}

export default App
