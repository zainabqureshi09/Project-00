import { motion } from 'framer-motion';
import { Shield, Truck, Clock, Users, Star, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'We guarantee the highest quality products sourced from trusted suppliers.',
      color: 'from-smart-red to-smart-red-light'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery service across Karachi and surrounding areas.',
      color: 'from-smart-green to-smart-green-light'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support through WhatsApp and phone.',
      color: 'from-smart-red to-smart-green'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We value every customer relationship.',
      color: 'from-smart-green to-smart-red'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Happy Customers' },
    { number: '5+', label: 'Years Experience' },
    { number: '1000+', label: 'Products Available' },
    { number: '99%', label: 'Customer Satisfaction' }
  ];

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
    <section id="about" className="section-padding bg-gradient-to-b from-gray-50 to-white">
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
            About Smart Mart
          </h2>
          <p className="text-xl text-smart-gray max-w-3xl mx-auto">
            We're more than just a store - we're your neighborhood partner in smart shopping. 
            Established with a vision to make quality products accessible to everyone in Karachi.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="text-3xl md:text-4xl font-black text-gradient-smart mb-2">
                {stat.number}
              </div>
              <div className="text-smart-gray font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16 border border-gray-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-smart-gray-dark mb-6">Our Story</h3>
              <p className="text-lg text-smart-gray leading-relaxed mb-6">
                Founded in the heart of Nazimabad, Smart Mart began as a small family business with 
                a big dream - to provide quality products at affordable prices to our community. 
                Over the years, we've grown not just in size, but in our commitment to excellence.
              </p>
              <p className="text-lg text-smart-gray leading-relaxed mb-6">
                Today, we're proud to serve thousands of families across Karachi, offering everything 
                from daily essentials to specialty items, all backed by our promise of quality and 
                customer satisfaction.
              </p>
              <div className="flex items-center">
                <Award className="text-smart-red mr-3" size={24} />
                <span className="font-semibold text-smart-gray-dark">
                  Recognized as "Best Local Store 2023" by Karachi Business Council
                </span>
              </div>
            </div>
            
            {/* Image Placeholder */}
            <div className="w-full h-80 bg-gradient-to-br from-smart-red/10 to-smart-green/10 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-smart-red to-smart-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-3xl">SM</span>
                </div>
                <p className="text-smart-gray font-medium">Smart Mart Store</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}>
                <feature.icon className="text-white" size={28} />
              </div>
              <h4 className="text-xl font-bold text-smart-gray-dark mb-4 group-hover:text-smart-red transition-colors">
                {feature.title}
              </h4>
              <p className="text-smart-gray leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16 bg-gradient-to-r from-smart-red to-smart-green rounded-3xl p-12 text-white"
        >
          <Star className="text-yellow-300 mx-auto mb-6" size={48} />
          <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
          <p className="text-xl opacity-95 max-w-3xl mx-auto leading-relaxed">
            "To be the most trusted and convenient shopping destination in Karachi, 
            providing quality products, exceptional service, and innovative solutions 
            that make everyday shopping a delightful experience for our customers."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;