import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Clock, QrCode } from 'lucide-react';

const Contact = () => {
  const contactInfo = {
    phone: "+92 333 1261267",
    whatsapp: "923391261267",
    email: "smartmartchain@gmail.com",
    address: "Shop No. C-4-5-6, Azeem Market, Nazimabad No. 2, Karachi"
  };

  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent("Hello Smart Mart, I want to get in touch with you.")}`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-gray-50">
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
            Get in Touch
          </h2>
          <p className="text-xl text-smart-gray max-w-2xl mx-auto">
            We're here to help! Reach out to us through any of these channels 
            and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-smart-gray-dark mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 bg-gradient-to-r from-smart-red/5 to-smart-green/5 rounded-xl border border-smart-red/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-smart-red to-smart-red-light rounded-xl flex items-center justify-center mr-4">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-smart-gray font-medium">Phone Number</p>
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="text-lg font-bold text-smart-gray-dark hover:text-smart-red transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 bg-gradient-to-r from-smart-green/5 to-smart-red/5 rounded-xl border border-smart-green/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-smart-green to-smart-green-light rounded-xl flex items-center justify-center mr-4">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-smart-gray font-medium">Email Address</p>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-lg font-bold text-smart-gray-dark hover:text-smart-green transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start p-4 bg-gradient-to-r from-smart-red/5 to-smart-green/5 rounded-xl border border-smart-gray/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-smart-gray to-smart-gray-dark rounded-xl flex items-center justify-center mr-4 mt-1">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-smart-gray font-medium">Store Address</p>
                    <p className="text-lg font-bold text-smart-gray-dark leading-relaxed">
                      {contactInfo.address}
                    </p>
                  </div>
                </motion.div>

                {/* Business Hours */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 bg-gradient-to-r from-smart-green/5 to-smart-red/5 rounded-xl border border-smart-green/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-smart-green to-smart-green-light rounded-xl flex items-center justify-center mr-4">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-smart-gray font-medium">Business Hours</p>
                    <p className="text-lg font-bold text-smart-gray-dark">
                      Mon - Sun: 8:00 AM - 10:00 PM
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Quick Contact & QR Code */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* WhatsApp Contact */}
            <div className="bg-gradient-to-br from-smart-green to-smart-green-light rounded-3xl shadow-xl p-8 text-white">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">WhatsApp Us Now!</h3>
                <p className="text-white/90 mb-6 text-lg">
                  Get instant responses and place your orders directly through WhatsApp
                </p>
                <motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center bg-white text-smart-green px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MessageCircle className="mr-3" size={24} />
                  Start WhatsApp Chat
                </motion.a>
              </div>
            </div>

            {/* QR Code Section */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="text-center">
                <h4 className="text-xl font-bold text-smart-gray-dark mb-4">Quick Access QR</h4>
                <div className="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <QrCode size={80} className="text-smart-gray" />
                </div>
                <p className="text-smart-gray text-sm">
                  Scan this QR code to visit our main website and explore more products
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-smart-gray-dark mb-6 text-center">Find Our Store</h3>
            <div className="w-full h-64 bg-gradient-to-br from-smart-red/10 to-smart-green/10 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-smart-gray mx-auto mb-4" />
                <p className="text-smart-gray font-medium">Interactive Map Coming Soon</p>
                <p className="text-sm text-smart-gray mt-2">
                  Visit us at: {contactInfo.address}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;