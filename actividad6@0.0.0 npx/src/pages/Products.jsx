import React, { useState } from 'react'; // Importar React y useState en una sola línea
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Ramo de flores',
    price: 50000,
    image: 'https://i.pinimg.com/736x/a1/b5/8e/a1b58e78e3e909a8afd7db4f3743a9a7.jpg',
  },
  {
    id: 2,
    name: 'Vestido de novia',
    price: 150000,
    image: 'https://i.pinimg.com/originals/a0/87/be/a087beefecfdda79021774454f33169b.jpg',
  },
  {
    id: 3,
    name: 'Anillo de compromiso',
    price: 80000,
    image: 'https://i.pinimg.com/originals/4c/3f/33/4c3f33068fa9f194714c66df52cc8a19.jpg',
  },
  {
    id: 4,
    name: 'Tarta de bodas',
    price: 60000,
    image: 'https://i.pinimg.com/originals/bf/68/da/bf68da4bec0699fa34bd3c0bb74718ff.png',
  },
  {
    id: 5,
    name: 'Velas decorativas',
    price: 25000,
    image: 'https://monsterscandles.com/cdn/shop/files/vela_la_novia_cadaver_monsters_candles_3.webp?v=1721915437',
  },
  {
    id: 6,
    name: 'Zapatos de novia',
    price: 120000,
    image: 'https://cdn0.bodas.net/usuarios/fotos/9/8/4/3/cfb_1751250.jpg',
  },
  {
    id: 7,
    name: 'Bouquet de flores',
    price: 70000,
    image: 'https://i.etsystatic.com/12011304/r/il/0d4b30/1092928387/il_fullxfull.1092928387_jcw1.jpg',
  },
  {
    id: 8,
    name: 'Copa de vino personalizada',
    price: 30000,
    image: 'https://i.etsystatic.com/20087442/r/il/0b0d43/3175016252/il_fullxfull.3175016252_3crr.jpg',
  },
  {
    id: 9,
    name: 'Recuerdos para invitados',
    price: 15000,
    image: 'https://i.pinimg.com/originals/8c/79/bb/8c79bb1405748376e601a7f1238224eb.jpg',
  },
  {
    id: 10,
    name: 'Decoración de mesa',
    price: 45000,
    image: 'https://2.bp.blogspot.com/-MPWNoLZRS2o/UN9vRLRVvAI/AAAAAAAAbx4/xbNcJbq5c0c/s1600/Altar++Boda+para+Figuras+de+la+Novia+Cadaver5.jpg',
  },
];

const Products = () => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div>
        <h1>Productos</h1>
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginBottom: '20px', padding: '10px', width: '100%', maxWidth: '300px', display: 'block', margin: '0 auto' }}
        />
        <div className="product-list">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/products?id=${product.id}`} style={{ textDecoration: 'none', color: '#333' }}>
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p className="product-price">${product.price} COP</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Products;