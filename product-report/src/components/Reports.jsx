
// eslint-disable-next-line react/prop-types
const Reports = ({products}) => {
  console.log(products);
  // Function to calculate totals
    let calculateTotal = 0;
    let calculateTax = 0;
    let calculateGrandTotal = 0;
    products.forEach((product) => {
      calculateTotal += parseFloat(product.totalAmount);
      calculateTax += parseFloat(product.tax);
      calculateGrandTotal += parseFloat(product.grandTotal);
    });

    const downloadCSV = () => {

      const csvContent = [
        "Product Name,Product Image,Variant,Selling Date,Quantity,Price,TIN,Tax,Total Amount,Grand Total",
        ...products.map((product) =>
          [
            product.name,
            product.productImageUrl,
            product.variant,
            product.sellingDate,
            product.quantity,
            product.price,
            product.tin || "N/A",
            product.tax,
            product.totalAmount,
            product.grandTotal,
          ].join(",")
        ),
      ].join("\n");
  
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", "products.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    };
  

    return (
       <div className="mt-4">
      <table className="border-collapse border border-slate-400  w-full">
        <thead>
          <tr>
            <th className="border border-slate-300">Product Name</th>
            <th className="border border-slate-300">Product Image</th>
            <th className="border border-slate-300">Variant</th>
            <th className="border border-slate-300">Selling Date</th>
            <th className="border border-slate-300">Quantity</th>
            <th className="border border-slate-300">Price</th>
            <th className="border border-slate-300">TIN</th>
            <th className="border border-slate-300">Tax</th>
            <th className="border border-slate-300">Total Amount</th>
            <th className="border border-slate-300">Grand Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="border border-slate-300">{product.name}</td>
              <td className="border border-slate-300">{product.productImageUrl}</td>
              <td className="border border-slate-300">{product.variant}</td>
              <td className="border border-slate-300">{product.sellingDate}</td>
              <td className="border border-slate-300">{product.quantity}</td>
              <td className="border border-slate-300">{product.price}</td>
              <td className="border border-slate-300">{product.tin || 'N/A'}</td>
              <td className="border border-slate-300">{product.tax}</td>
              <td className="border border-slate-300">{product.totalAmount}</td>
              <td className="border border-slate-300">{product.grandTotal}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="7" className="text-right border border-slate-300 font-bold">Total:</td>
            <td className="border border-slate-300 font-bold">{calculateTax}</td>
            <td className="border border-slate-300 font-bold">{calculateTotal}</td>
            <td className="border border-slate-300 font-bold">{calculateGrandTotal}</td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-primary mt-4" onClick={downloadCSV}>
        Download CSV
      </button>    </div>
    );
};

export default Reports;