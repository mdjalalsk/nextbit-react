import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ProductForm = ({ handleAddProduct }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    productImageUrl: "",
    quantity: 1,
    price: 0,
    variant: "",
    sellingDate: "",
    tin: "",
    tax: 0,
    totalAmount: 0,
    grandTotal: 0,
  });
  console.log(formValues);
  const [showTaxFields, setShowTaxFields] = useState(false);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formValues.name) errors.name = "Name is required";
    if (!formValues.productImageUrl)
      errors.productImageUrl = "Product Image Url is required";
    if (!formValues.sellingDate)
      errors.sellingDate = "Selling Date is required";
    if (formValues.quantity <= 0)
      errors.quantity = "Quantity must be greater than 0";
    if (formValues.price <= 0) errors.price = "Price must be greater than 0";
    if (!formValues.variant) errors.variant = "Variant is required";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;
    if (
      name === "quantity" ||
      name === "price" ||
      name === "tax" ||
      name === "totalAmount" ||
      name === "grandTotal"
    ) {
      processedValue = parseFloat(value);
    }

    setFormValues({
      ...formValues,
      [name]: processedValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const totalAmount = formValues.quantity * formValues.price;
    const tax = showTaxFields ? totalAmount * 0.08 : 0;
    const grandTotal = totalAmount + tax;
    handleAddProduct({ ...formValues, tax, totalAmount, grandTotal });

    // Reset form after submission
    setFormValues({
      name: "",
      productImageUrl: "",
      quantity: 1,
      price: 0,
      variant: "",
      sellingDate: "",
      tin: "",
      tax: 0,
      totalAmount: 0,
      grandTotal: 0,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 w-[800px] mx-auto">
        <div className="flex flex-col md:flex-row gap-x-10">
          <div className="form-control">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formValues.name}
              className="input input-bordered w-[300px]"
            />
            {errors.name && <div className="text-red-500">{errors.name}</div>}
          </div>
          <div className="form-control">
            <label className="label">Product Image Url</label>
            <input
              type="text"
              name="productImageUrl"
              onChange={handleChange}
              value={formValues.productImageUrl}
              className="input input-bordered w-[300px]"
            />
            {errors.productImageUrl && (
              <div className="text-red-500">{errors.productImageUrl}</div>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-x-10">
          <div className="form-control">
            <label className="label">Quantity</label>
            <input
              type="number"
              name="quantity"
              onChange={handleChange}
              value={formValues.quantity}
              className="input input-bordered w-[300px]"
            />
            {errors.quantity && (
              <div className="text-red-500">{errors.quantity}</div>
            )}
          </div>
          <div className="form-control">
            <label className="label">Price</label>
            <input
              type="number"
              name="price"
              onChange={handleChange}
              value={formValues.price}
              className="input input-bordered w-[300px]"
            />
            {errors.price && <div className="text-red-500">{errors.price}</div>}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-x-10">
          <div className="form-control">
            <label className="label">Variant</label>
            <select
              name="variant"
              onChange={handleChange}
              value={formValues.variant}
              className="select select-bordered w-[300px]"
            >
              <option value="">Select variant</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
            {errors.variant && (
              <div className="text-red-500">{errors.variant}</div>
            )}
          </div>

          <div className="form-control">
            <label className="label" htmlFor="sellingDate">
              Selling Date
            </label>
            <input
              type="date"
              id="sellingDate"
              name="sellingDate"
              onChange={handleChange}
              value={formValues.sellingDate}
              className="input input-bordered w-[300px]"
            />
          </div>
        </div>

        <div className="form-control my-5">
          <label className="cursor-pointer flex items-center gap-x-5">
            <input
              type="checkbox"
              onChange={() => setShowTaxFields(!showTaxFields)}
              className="checkbox"
            />
            <span className="label-text">Add Tax Information</span>
          </label>
        </div>
        {showTaxFields && (
          <>
            <div className="flex flex-col md:flex-row gap-x-10">
              <div className="form-control">
                <label className="label">TIN</label>
                <input
                  type="text"
                  name="tin"
                  onChange={handleChange}
                  value={formValues.tin}
                  className="input input-bordered w-[300px]"
                />
              </div>
              <div className="form-control">
                <label className="label">Tax Amount</label>
                <input
                  type="number"
                  name="tax"
                  readOnly
                  value={
                    showTaxFields
                      ? (formValues.quantity * formValues.price * 0.08).toFixed(
                          2
                        )
                      : "0.00"
                  }
                  className="input input-bordered w-[300px]"
                />
              </div>
            </div>
          </>
        )}
        <div className="flex flex-col md:flex-row gap-x-10">
          <div className="form-control">
            <label className="label">Total Amount</label>
            <input
              type="number"
              name="totalAmount"
              readOnly
              value={(formValues.quantity * formValues.price).toFixed(2)}
              className="input input-bordered w-[300px]"
            />
          </div>
          <div className="form-control">
            <label className="label">Grand Total</label>
            <input
              type="number"
              name="grandTotal"
              readOnly
              value={(
                formValues.quantity * formValues.price +
                (showTaxFields
                  ? formValues.quantity * formValues.price * 0.08
                  : 0)
              ).toFixed(2)}
              className="input input-bordered w-[300px]"
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary ms-10 mt-10">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
