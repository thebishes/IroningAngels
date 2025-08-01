import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Shirt, Clock, Award, Sparkles, Heart } from 'lucide-react';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const HomePage = () => {
  const services = [
    {
      icon: Shirt,
      title: 'Professional Ironing',
      description:
        'Expert ironing for all your garments, from shirts and blouses to trousers and dresses.',
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description:
        'Fast service with next-day options available to fit your busy schedule.',
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description:
        'We guarantee perfection with every item. If you\'re not satisfied, we\'ll re-iron for free.',
    },
    {
      icon: Sparkles,
      title: 'Special Care',
      description:
        'Specialised treatment for delicate fabrics, formal wear, and difficult-to-iron items.',
    },
  ];

  const testimonials = [
    {
      quote:
        'Ironing Angels are amazing, efficient and now my regular agency',
      author: 'Karen',
      rating: 5,
    },
    {
      quote:
        'Amazing prompt service',
      author: 'Helen and Jeff',
      rating: 5,
    },
    {
      quote:
        'I was skeptical at first, but after trying their service for my family\'s laundry, I\'m completely converted. Great value and excellent results.',
      author: 'Kelly Hall',
      rating: 4,
    },
  ];

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h1
              className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Perfect Pressed Clothes, <span className="text-primary">Every Time</span>
            </motion.h1>
            <motion.p
              className="mb-8 text-xl text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Professional ironing services that save you time and keep your clothes looking their best.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <NavLink to="/contact">
                <Button variant="primary">Get a Quote</Button>
              </NavLink>
              <Button variant="secondary">Learn More</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white/90">
        <div className="container">
          <div className="text-center mb-12">
            <motion.h2
              className="mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Services
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We offer a range of professional ironing services to meet your needs,
              with options for pickup and delivery to make your life easier.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={0.1 * index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">Why Choose Ironing Angels?</h2>
              <p className="text-gray-700 mb-6">
                At Ironing Angels, we combine expertise with care to deliver exceptional ironing services. 
                Our team of professional pressers are trained to handle all types of fabrics and garments,
                ensuring each item is treated with the attention it deserves.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                    <Heart className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Passion for Perfection</h3>
                    <p className="text-gray-600">
                      We take pride in our work and aim for perfection with every garment.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Experienced Professionals</h3>
                    <p className="text-gray-600">
                      Our team has years of experience handling all types of clothing.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Attention to Detail</h3>
                    <p className="text-gray-600">
                      We notice the small things that make a big difference in appearance.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-white/80 p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/5 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-center">Our Process</h3>
                <ol className="space-y-6">
                  <li className="flex">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 mr-4">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">Schedule Service</h4>
                      <p className="text-gray-600">
                        Book online or by phone.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 mr-4">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">We Collect Your Items</h4>
                      <p className="text-gray-600">
                        Optional pickup service from your home or office within a 10 mile range of NG18. £ Charges apply.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 mr-4">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">Professional Ironing</h4>
                      <p className="text-gray-600">
                        Expert pressing with appropriate heat for each fabric.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 mr-4">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">Ready for Collection</h4>
                      <p className="text-gray-600">
                        Pick up or delivery of your perfectly pressed clothes.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white/90">
        <div className="container">
          <div className="text-center mb-12">
            <motion.h2
              className="mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              What Our Customers Say
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Don't just take our word for it. Here's what our satisfied customers have to say about
              our services.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                rating={testimonial.rating}
                delay={0.1 * index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-primary/10 p-8 md:p-12 rounded-xl text-center">
            <motion.h2
              className="mb-4 text-primary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Ready to Save Time and Look Your Best?
            </motion.h2>
            <motion.p
              className="text-gray-700 mb-8 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join our satisfied customers and experience the Ironing Angels difference.
              Get in touch today for a free quote or to schedule your first service.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <NavLink to="/contact">
                <Button variant="primary" className="px-8 py-3 text-lg">
                  Contact Us Today
                </Button>
              </NavLink>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;