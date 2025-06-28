import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Shirt, Baby, Package } from 'lucide-react';
import Button from '../components/Button';

const PricingPage = () => {
  const pricingTiers = [
    {
      icon: Package,
      title: 'Adult Clothes',
      price: 'from £15',
      description: 'Perfect for adults or teens over 12 years old',
      features: [
        '10 items £15',
        '20 items £20',
        '30 items £30',
        '30 items + @ 90p per item',
        'Work shirts and work attire £1.75 per itemn',
        'Pick up and drop off available £',
      ],
    },
    {
      icon: Baby,
      title: 'Childrens and Bedding',
      price: 'from 50p',
      description: 'Childrens items and bedding service',
      features: [
        '50p per child item',
        '75p per item school uniform',
        'Single bed set £3',
        'Double bed set £5',
        'King bed set £8',
        'Super King bed set £9'
      ],
    },
    {
      icon: Shirt,
      title: 'Monthly Subscription',
      price: '£80/month',
      description: 'Best value for families and regular customers',
      features: [
        '100 items monthly (average 25 weekly)',
        '48-hour turnaround',
        'Collection & Delivery within 5 miles of NG18',
        'Priority booking slots',
        'Minimum 3 month term',
      ],
    },
  ];

  return (
    <div className="pt-16 md:pt-20">
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <motion.h1
              className="mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Simple, Transparent Pricing
            </motion.h1>
            <motion.p
              className="text-xl text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Choose the perfect plan for your ironing needs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                className="bg-white/95 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <tier.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{tier.title}</h3>
                  <div className="text-4xl font-bold text-primary mb-4">{tier.price}</div>
                  <p className="text-gray-600 mb-6">{tier.description}</p>
                  <ul className="text-left space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg
                          className="w-5 h-5 text-primary mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <NavLink to="/contact" className="w-full">
                    <Button
                      variant={index === 1 ? 'primary' : 'secondary'}
                      className="w-full"
                    >
                      Get Started
                    </Button>
                  </NavLink>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-8">
              Need a custom plan? Contact us for personalised pricing tailored to your needs.
            </p>
            <NavLink to="/contact">
              <Button variant="accent">Contact Us</Button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;