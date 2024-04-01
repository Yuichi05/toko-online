import "./Products.css";
const Products = (props) => {
  const { nama, harga, beli, gambar, berat, terjual } = props;

  const handleClick = () => {
    beli(nama);
  };
  return (
    <div class="card">
      <img src={gambar} alt="foto-barang" />
      <div class="text-label">
        <h3>Nama Buah : {nama}</h3>
      </div>
      <h5>
        Harga : <span class="spn">{harga}</span>
      </h5>
      <h5>
        Berat : <span class="spn">{berat}</span>
      </h5>
      <h5>
        Terjual : <span class="spn">{terjual}</span>
      </h5>
      <button onClick={handleClick}>Beli</button>
    </div>
  );
};

export default Products;
