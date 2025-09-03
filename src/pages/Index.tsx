import { motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
      style={{ scrollBehavior: 'smooth' }}
    >
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />
      
      {/* Products Section */}
      <Products />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default Index;
