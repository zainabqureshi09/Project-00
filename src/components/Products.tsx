import { motion } from 'framer-motion';
import { MessageCircle, Star, ShoppingCart } from 'lucide-react';

const Products = () => {
  const whatsappNumber = "923391261267";

  const categories = [
    {
      id: 1,
      name: 'Grocery',
      icon: '🛒',
      products: [
        { name: 'Basmati Rice 5kg', price: 'Rs. 1,200', rating: 4.8 },
        { name: 'Cooking Oil 1L', price: 'Rs. 450', rating: 4.6 },
        { name: 'Sugar 1kg', price: 'Rs. 180', rating: 4.7 },
        { name: 'Wheat Flour 10kg', price: 'Rs. 850', rating: 4.5 },
      ]
    },
    {
      id: 2,
      name: 'Beverages',
      icon: '🥤',
      products: [
        { name: 'Coca Cola 1.5L', price: 'Rs. 120', rating: 4.5 },
        { name: 'Fresh Juice 1L', price: 'Rs. 200', rating: 4.7 },
        { name: 'Mineral Water 500ml', price: 'Rs. 25', rating: 4.6 },
        { name: 'Energy Drink 250ml', price: 'Rs. 80', rating: 4.3 },
      ]
    },
    {
      id: 3,
      name: 'Household',
      icon: '🏠',
      products: [
        { name: 'Washing Powder 1kg', price: 'Rs. 320', rating: 4.4 },
        { name: 'Dish Soap 500ml', price: 'Rs. 150', rating: 4.6 },
        { name: 'Toilet Paper 12 Rolls', price: 'Rs. 280', rating: 4.5 },
        { name: 'Air Freshener 300ml', price: 'Rs. 180', rating: 4.2 },
      ]
    },
    {
      id: 4,
      name: 'Personal Care',
      icon: '🧴',
      products: [
        { name: 'Shampoo 400ml', price: 'Rs. 350', rating: 4.7 },
        { name: 'Toothpaste 100g', price: 'Rs. 85', rating: 4.8 },
        { name: 'Face Wash 150ml', price: 'Rs. 220', rating: 4.5 },
        { name: 'Body Lotion 200ml', price: 'Rs. 190', rating: 4.6 },
      ]
    },
  ];

  const createWhatsAppUrl = (productName: string) => {
    const message = `Hello Smart Mart, I want to order ${productName}.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="products" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-smart">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gradient-smart mb-6">
            Our Products
          </h2>
          <p className="text-xl text-smart-gray max-w-2xl mx-auto">
            Discover our wide range of quality products across different categories. 
            Order instantly via WhatsApp with just one click!
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
            >
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className="text-6xl mr-4">{category.icon}</div>
                <div>
                  <h3 className="text-3xl font-bold text-smart-gray-dark">{category.name}</h3>
                  <p className="text-smart-gray">Premium quality products</p>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.products.map((product, productIndex) => (
                  <motion.div
                    key={productIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: productIndex * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="product-card group cursor-pointer"
                  >
                    {/* Product Image Placeholder */}
                    <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-4 flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                      <ShoppingCart size={48} className="text-smart-gray group-hover:text-smart-red transition-colors" />
                    </div>

                    {/* Product Info */}
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-smart-gray-dark mb-2 group-hover:text-smart-red transition-colors">
                        {product.name}
                      </h4>
                      
                      {/* Rating */}
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={`${
                                i < Math.floor(product.rating) 
                                  ? 'text-yellow-400 fill-current' 
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-smart-gray ml-2">({product.rating})</span>
                      </div>

                      <div className="text-2xl font-bold text-smart-green mb-4">
                        {product.price}
                      </div>
                    </div>

                    {/* Order Button */}
                    <motion.a
                      href={createWhatsAppUrl(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-whatsapp w-full justify-center"
                    >
                      <MessageCircle size={18} />
                      Order Now
                    </motion.a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-16 bg-gradient-to-r from-smart-red to-smart-green rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Can't find what you're looking for?</h3>
          <p className="text-xl mb-8 opacity-90">
            Contact us directly and we'll help you find exactly what you need!
          </p>
          <motion.a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Smart Mart, I'm looking for a specific product. Can you help me?")}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-white text-smart-red px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle className="mr-3" size={24} />
            Ask Us Anything
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;