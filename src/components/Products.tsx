import { motion } from 'framer-motion';
import { MessageCircle, Star, ShoppingCart } from 'lucide-react';
import groceryImage from '@/assets/grocery-category.jpg';
import beveragesImage from '@/assets/beverages-category.jpg';
import householdImage from '@/assets/household-category.jpg';
import personalCareImage from '@/assets/personal-care-category.jpg';

const Products = () => {
  const whatsappNumber = "923391261267";

  const categories = [
    {
      id: 1,
      name: 'Grocery',
      icon: '🛒',
      image: groceryImage,
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
      image: beveragesImage,
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
      image: householdImage,
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
      image: personalCareImage,
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
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gradient-smart mb-4 sm:mb-6">
            Our Products
          </h2>
          <p className="text-lg sm:text-xl text-smart-gray max-w-2xl mx-auto">
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
              className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8 border border-gray-100"
            >
              {/* Category Header with Image */}
              <div className="flex flex-col sm:flex-row items-center mb-6 sm:mb-8">
                <div className="flex items-center mb-4 sm:mb-0 sm:mr-6">
                  <div className="text-4xl sm:text-5xl lg:text-6xl mr-3 sm:mr-4">{category.icon}</div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl sm:text-3xl font-bold text-smart-gray-dark">{category.name}</h3>
                    <p className="text-sm sm:text-base text-smart-gray">Premium quality products</p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-32 h-24 sm:w-40 sm:h-30 lg:w-48 lg:h-36 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={category.image} 
                    alt={`${category.name} products`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
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
                    <div className="w-full h-36 sm:h-40 lg:h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-3 sm:mb-4 flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                      <ShoppingCart size={32} className="sm:size-40 lg:size-48 text-smart-gray group-hover:text-smart-red transition-colors" />
                    </div>

                    {/* Product Info */}
                    <div className="mb-3 sm:mb-4 flex-grow">
                      <h4 className="text-base sm:text-lg font-bold text-smart-gray-dark mb-2 group-hover:text-smart-red transition-colors line-clamp-2">
                        {product.name}
                      </h4>
                      
                      {/* Rating */}
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={`${
                                i < Math.floor(product.rating) 
                                  ? 'text-yellow-400 fill-current' 
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs sm:text-sm text-smart-gray ml-2">({product.rating})</span>
                      </div>

                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-smart-green mb-3 sm:mb-4">
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
                      className="btn-whatsapp w-full justify-center text-sm sm:text-base py-2 sm:py-3"
                    >
                      <MessageCircle size={16} className="sm:size-18" />
                      <span className="hidden sm:inline">Order Now</span>
                      <span className="sm:hidden">Order</span>
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
          className="text-center mt-12 sm:mt-16 bg-gradient-to-r from-smart-red to-smart-green rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white mx-4 sm:mx-0"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Can't find what you're looking for?</h3>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
            Contact us directly and we'll help you find exactly what you need!
          </p>
          <motion.a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Smart Mart, I'm looking for a specific product. Can you help me?")}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-white text-smart-red px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
          >
            <MessageCircle className="mr-2 sm:mr-3" size={20} />
            Ask Us Anything
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;