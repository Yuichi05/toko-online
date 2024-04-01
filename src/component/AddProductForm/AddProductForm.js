import React, { useState } from "react";
import "./AddProductForm.css";

const AddProductForm = ({ onAddProduct }) => {
  const [formData, setFormData] = useState({
    nama: "",
    harga: "",
    berat: "",
    gambar: "",
    terjual: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(formData);
  };

  return (
    <div className="container">
      <section className="form">
        <div className="form-left">
          <img
            src="https://picsum.photos/200/300"
            alt="img-form"
            className="form-image"
          />
        </div>
        <div className="form-right">
          <h1 className="form-title">Add Product</h1>
          <form action="">
            <div className="form-inputgroup">
              <label htmlFor="" className="form-label">
                Nama
              </label>
              <input
                type="text"
                name="nama"
                id="nama"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-inputgroup">
              <label htmlFor="" className="form-label">
                Harga
              </label>
              <input
                type="number"
                name="harga"
                id="harga"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-inputgroup">
              <label htmlFor="" className="form-label">
                Berat
              </label>
              <input
                type="text"
                name="berat"
                id="berat"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-inputgroup">
              <label htmlfor="" className="form-label">
                Gambar
              </label>
              <input
                type="text"
                name="gambar"
                id="gambar"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-inputgroup">
              <label htmlFor="" className="form-label">
                Terjual
              </label>
              <input
                type="number"
                name="terjual"
                id="terjual"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <button className="form-button" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddProductForm;
