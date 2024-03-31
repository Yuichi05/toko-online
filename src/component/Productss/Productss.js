import React from "react";
import Products from "../Products/Products.js";
import kurs from "../kursi.jpg";
import hp from "../hp.png";
import ssd from "../ssd.jpg";
import "./Productss.css";

const Productss = () => {
  const datas = [
    {
      gambar: kurs,
      produk: "Kursi gaming Fantech",
      harga: 2.350000,
      // beli: "Anda telah membeli Kursi gaming Fantech",
    },
    {
      gambar: hp,
      produk: "Poco X6 Pro",
      harga: 4.999000,
      // beli: "Anda telah membeli Poco X6 Pro",
    },
    {
      gambar: ssd,
      produk: "SSD Seagate 1TB Gen 4",
      harga: 2.450000,
      // beli: "Anda telah membeli SSD Seagate 1TB Gen 4",
    },
  ];
  return (
    <div>
      <h2>Newest item</h2>
      <div className="item-container">
        {datas.map((data, index) => {
          return (
            <Products
              produk={data.produk}
              harga={data.harga}
              gambar={data.gambar}
              // beli={data.beli}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Productss;