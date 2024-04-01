import React, { useState } from "react";
import Products from "../Products/Products.js";
import "./Productss.css";
import AddProductForm from "../AddProductForm/AddProductForm.js";

const Fruits = () => {
  const [datas, setDatas] = useState([
    {
      nama: "Apel",
      harga: 5000,
      berat: "200g",
      gambar: "https://umsu.ac.id/artikel/wp-content/uploads/2023/07/Apel.jpg",
      terjual: 73,
      beli: "Anda Membeli Buah Apel",
    },
    {
      nama: "Jeruk",
      harga: 7000,
      berat: "250g",
      gambar:
        "https://www.ruparupa.com/blog/wp-content/uploads/2021/10/Screen-Shot-2021-10-26-at-14.57.25-1024x653.png",
      terjual: 623,
      beli: "Anda Membeli Buah Jeruk",
    },
    {
      nama: "Pisang",
      harga: 3000,
      berat: "150g",
      gambar:
        "https://static.honestdocs.id/system/blog_articles/main_hero_images/000/004/500/original/iStock-636739634_%281%29.jpg",
      terjual: 378,
      beli: "Anda Membeli Buah Pisang",
    },
    {
      nama: "Anggur",
      harga: 10000,
      berat: "300g",
      gambar:
        "https://res.cloudinary.com/dk0z4ums3/image/upload/v1693464270/attached_image/8-manfaat-anggur-merah-untuk-kesehatan.jpg",
      terjual: 415,
      beli: "Anda Membeli Buah Anggur",
    },
    {
      nama: "Mangga",
      harga: 8000,
      berat: "180g",
      gambar:
        "https://www.astronauts.id/blog/wp-content/uploads/2023/04/Manfaat-Kesehatan-Buah-Mangga-yang-Mungkin-Belum-Kamu-Ketahui.jpg",
      terjual: 943,
      beli: "Anda Membeli Buah Mangga",
    },
    {
      nama: "Strawberry",
      harga: 12000,
      berat: "100g",
      gambar:
        "https://www.puribundamalang.com/assets/images/photo/fakta-unik-strawberry123052019162904.jpg",
      terjual: 28,
      beli: "Anda Membeli Buah Strawberry",
    },
    {
      nama: "Semangka",
      harga: 15000,
      berat: "5000g",
      gambar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Watermeloen.jpg/800px-Watermeloen.jpg",
      terjual: 253,
      beli: "Anda Membeli Buah Semangka",
    },
    {
      nama: "Nanas",
      harga: 6000,
      berat: "700g",
      gambar:
        "https://awsimages.detik.net.id/community/media/visual/2022/07/04/diet-nanas-bikin-bb-turun-1-kg-seminggu-apa-aman-untuk-kesehatan-3.jpeg?w=1200",
      terjual: 154,
      beli: "Anda Membeli Buah Nanas",
    },
    {
      nama: "Kiwi",
      harga: 10000,
      berat: "120g",
      gambar:
        "https://duniasegar.com/wp-content/uploads/2020/07/30034.edt_-1202x800.jpg",
      terjual: 64,
      beli: "Anda Membeli Buah Kiwi",
    },
    {
      nama: "Durian",
      harga: 20000,
      berat: "1000g",
      gambar:
        "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/03/17/manfaat-biji-durian-1952951229.jpeg",
      terjual: 86,
      beli: "Anda Membeli Buah Durian",
    },
  ]);

  const addProduct = (product) => {
    setDatas([...datas, product]);
  };

  console.log(datas);

  return (
    <div>
      <h2>Trending Fruits</h2>
      <div className="item-container">
        {datas.map((data, index) => {
          return (
            <Products
              nama={data.nama}
              harga={data.harga}
              berat={data.berat}
              gambar={data.gambar}
              terjual={data.terjual}
              beli={() => alert(data.beli)}
            />
          );
        })}
      </div>
      <AddProductForm onAddProduct={addProduct} />
    </div>
  );
};

export default Fruits;
