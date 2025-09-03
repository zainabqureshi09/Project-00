import { motion } from 'framer-motion';
import { MessageCircle, Facebook, Instagram, Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/923391261267',
      color: 'hover:text-green-500'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: '#',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: '#',
      color: 'hover:text-pink-500'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' },
    { name: 'About Us', href: '#about' },
  ];

  return (
    <footer className="bg-gradient-to-br from-smart-gray-dark via-smart-red-dark to-smart-green-dark text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container-smart section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-smart-red to-smart-green rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">SM</span>
              </div>
              <div>
                <h3 className="text-2xl font-black">Smart Mart</h3>
                <p className="text-white/80 text-sm">Your Smart Shopping Partner</p>
              </div>
            </div>
            
            <p className="text-white/90 text-lg mb-6 leading-relaxed">
              Experience the future of shopping with Smart Mart. We bring you quality products, 
              competitive prices, and the convenience of instant WhatsApp ordering. 
              Your satisfaction is our priority.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={16} className="mr-3 text-smart-green" />
                <span className="text-white/90">+92 333 1261267</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-3 text-smart-red" />
                <span className="text-white/90">smartmartchain@gmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="mr-3 text-smart-green mt-1" />
                <span className="text-white/90">Shop No. C-4-5-6, Azeem Market, Nazimabad No. 2, Karachi</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-smart-red transition-all duration-300 mr-0 group-hover:mr-3"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6">Stay Connected</h4>
            
            {/* Social Icons */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white/80 ${social.color} transition-all duration-300 hover:bg-white/20`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/923391261267?text=Hello%20Smart%20Mart!"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
            >
              <MessageCircle size={20} className="mr-2" />
              Chat with Us
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-white/20 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-white/80 text-sm mb-4 md:mb-0">
              <span>© {currentYear} Smart Mart. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="mx-2"
              >
                <Heart size={16} className="text-red-400 fill-current" />
              </motion.div>
              <span>in Karachi</span>
            </div>
            
            <div className="flex items-center text-white/60 text-sm space-x-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <span>All Rights Reserved</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Gradient Orbs */}
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-smart-red/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-smart-green/20 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;