import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, X } from "lucide-react";


const products = [
  { id: 1, name: 'Ramo de flores', price: 50000, description: 'Ramo de flores frescas.', image: 'https://i.pinimg.com/736x/a1/b5/8e/a1b58e78e3e909a8afd7db4f3743a9a7.jpg' },
  { id: 2, name: 'Vestido de novia', price: 150000, description: 'Elegante vestido de novia.', image: 'https://i.pinimg.com/originals/a0/87/be/a087beefecfdda79021774454f33169b.jpg' },
  { id: 3, name: 'Anillo de compromiso', price: 80000, description: 'Anillo de compromiso de lujo.', image: 'https://i.pinimg.com/originals/4c/3f/33/4c3f33068fa9f194714c66df52cc8a19.jpg' },
  { id: 4, name: 'Tarta de bodas', price: 60000, description: 'Deliciosa tarta de bodas.', image: 'https://i.pinimg.com/originals/bf/68/da/bf68da4bec0699fa34bd3c0bb74718ff.png' },
  { id: 5, name: 'Velas decorativas', price: 25000, description: 'Velas aromáticas para la celebración.', image: 'https://monsterscandles.com/cdn/shop/files/vela_la_novia_cadaver_monsters_candles_3.webp?v=1721915437' },
  { id: 6, name: 'Zapatos de novia', price: 120000, description: 'Zapatos elegantes para la novia.', image: 'https://cdn0.bodas.net/usuarios/fotos/9/8/4/3/cfb_1751250.jpg' },
  { id: 7, name: 'Bouquet de flores', price: 70000, description: 'Bouquet ideal para el gran día.', image: 'https://i.etsystatic.com/12011304/r/il/0d4b30/1092928387/il_fullxfull.1092928387_jcw1.jpg' },
  { id: 8, name: 'Copa de vino personalizada', price: 30000, description: 'Copa grabada para recuerdos.', image: 'https://i.etsystatic.com/20087442/r/il/0b0d43/3175016252/il_fullxfull.3175016252_3crr.jpg' },
  { id: 9, name: 'Recuerdos para invitados', price: 15000, description: 'Pequeños recuerdos para tus invitados.', image: 'https://i.pinimg.com/originals/8c/79/bb/8c79bb1405748376e601a7f1238224eb.jpg' },
  { id: 10, name: 'Decoración de mesa', price: 45000, description: 'Decoración elegante para mesas.', image: 'https://2.bp.blogspot.com/-MPWNoLZRS2o/UN9vRLRVvAI/AAAAAAAAbx4/xbNcJbq5c0c/s1600/Altar++Boda+para+Figuras+de+la+Novia+Cadaver5.jpg' },
];


const ProductDetails = () => {
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const productId = parseInt(searchParams.get('id'));
    const foundProduct = products.find(p => p.id === productId);
    setProduct(foundProduct);
  }, [searchParams]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setShowCart(true);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const CartModal = () => (
    <Dialog open={showCart} onOpenChange={setShowCart}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Carrito de Compras</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-2 border rounded">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">${item.price} COP</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeFromCart(item.id)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <div className="pt-4 border-t">
            <p className="font-semibold">
              Total: ${cart.reduce((sum, item) => sum + item.price, 0)} COP
            </p>
            <Button 
              className="w-full mt-4"
              onClick={() => {
                setShowCart(false);
                setIsPaymentModalOpen(true);
              }}
            >
              Proceder al pago
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  const PaymentModal = () => (
    <Dialog open={isPaymentModalOpen} onOpenChange={setIsPaymentModalOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Información de Pago</DialogTitle>
        </DialogHeader>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Número de Tarjeta</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Fecha de Expiración</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">CVV</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="123"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Nombre en la Tarjeta</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="John Doe"
            />
          </div>
          <Button className="w-full">
            Pagar ${cart.reduce((sum, item) => sum + item.price, 0)} COP
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full rounded-lg object-cover"
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg">{product.description}</p>
              <p className="text-2xl font-bold">${product.price} COP</p>
              <div className="space-x-4">
                <Button 
                  onClick={() => addToCart(product)}
                  className="flex items-center gap-2"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Agregar al carrito
                </Button>
                <Button 
                  onClick={() => setIsPaymentModalOpen(true)}
                >
                  Comprar ahora
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CartModal />
      <PaymentModal />
    </div>
  );
};

export default ProductDetails;