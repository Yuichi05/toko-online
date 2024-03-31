import "./Products.css";
const Products = (props) => {
  const { produk, harga, beli, gambar } = props;

  const handleClick = () => {
    beli(produk);
  };
  return (
    <div class="card">
      <img src={gambar} alt="foto-barang" />
      <div class="text-label">
        <h3>Nama Produk : {produk}</h3>
      </div>
      <h5>Harga : <span class="spn">{harga.toFixed(6)}</span></h5>
      <button onClick={handleClick}>Beli</button>
    </div>
  );
};

export default Products;
