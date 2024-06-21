import { useState } from "react";
import ProductForm from "./components/ProductForm";
import Reports from "./components/Reports";


function App() {
  const [view, setView] = useState('form');

  const [products, setProducts] = useState([]);

console.log(products);
  const handleAddProduct = (product) => {
    setProducts([...products, product]);

  };

  return (
    <>

      <div className="container mx-auto p-4 ">
        <h1 className="text-center text-blue-700 font-bold text-3xl underline mt-4">Product Report Generator
        </h1>
      <div className="flex justify-end space-x-4 my-5">
        <button className="btn btn-secondary" onClick={() => setView('report')}>Show Report</button>
        <button className="btn btn-primary" onClick={() => setView('form')}>Add Product</button>

      </div>
      
      {view === 'form' && <ProductForm handleAddProduct={handleAddProduct} />}
      {view === 'report' && <Reports products={products} />}
    </div>
  
    </>
  )
}

export default App
