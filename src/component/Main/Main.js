import Products from "../Products/Products.js";
import kurs from "../kursi.jpg";
import hp from "../hp.png";
import ssd from "../ssd.jpg";
import "./Main.css";

const Main = () => {
  return (
    <div className="content">
      <Products 
        gambar={kurs}
        produk="Kursi gaming Fantech"
        harga={2.350000}
        beli={(produk) => alert("Selamat Anda telah membeli " + produk + " ini!!!")}
          />
          <Products 
        gambar={hp}
        produk="Poco X6 Pro"
        harga={4.999000}
        beli={(produk) => alert("Selamat Anda telah membeli " + produk + " ini!!!")}
          />
          <Products 
        gambar={ssd}
        produk="SSD Seagate 1TB Gen 4"
        harga={2.450000}
        beli={(produk) => alert("Selamat Anda telah membeli " + produk + " ini!!!")}
      />
    </div>
  );
};

export default Main;
