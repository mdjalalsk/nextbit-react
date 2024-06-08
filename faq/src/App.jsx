import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Accordion from "./components/Accordion";

function App() {
  const [faqData, setFaqData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState(faqData);
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    const faq = async () => {
      try {
        const res = await fetch("/faq.json");
        const data = await res.json();

        if (showAll) {
          const res = data.slice(0, 4);
          // console.log(res)
          setFaqData(res);
        } else {
          setFaqData(data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    faq();
  }, [showAll]);

  const handleSearchText = (event) => {
    setSearchValue(event.target.value);
    setShowAll(false);
  };
  const handleShow = () => {
 
    setShowAll(false);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const filteredData = faqData.filter((item) =>
      item.question.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResult(filteredData);
    
    

  };


  return (
    <>
      <div className="container mx-auto ">
        <div className="w-1/3 mx-auto p-3">
          <form className="my-5" onSubmit={handleSearch}>
            <div className="flex items-center justify-between border-2">
              <input
                className="form-input border-none p-3 w-4/5"
                type="search"
                name="search"
                id="search"
                value={searchValue}
                placeholder="Search FAQ"
                onChange={handleSearchText}
              />
              <button className="w-1/5 flex justify-center" type="submit">
                <FaSearch className="text-2xl me-3" />
              </button>
            </div>
          </form>
          <div className="py-3">
            <Accordion data={searchValue ? searchResult : faqData} />
          </div>
          <div className="text-center">
            {showAll && (
              <button
                className="my-4 py-2 px-4 bg-blue-500 text-white rounded-md "
                onClick={handleShow}
              >
                See More
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
