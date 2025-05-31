       </motion.h1>
            <motion.p
              className="text-xl text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Have questions or ready to schedule your service? Contact us today!
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-white/95 rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <motion.div
                  className="bg-success/10 text-success p-4 rounded-lg mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-medium">Thank you for contacting us!</p>
                  <p>We'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form 
                  action="https://formsubmit.co/thebishes@gmail.com"
                  method="POST"
                  onSubmit={() => setIsSubmitted(true)}
                >
                  <input type="hidden" name="_next" value="https://ironingangels.uk/contact" />
                  <input type="hidden" name="_subject" value="New Contact Form Submission" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />

                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                      placeholder="(+44) 07901 611906"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                      required
                    >
                      <option value="regular">Regular Ironing Service</option>
                      <option value="express">Express Service (24h)</option>
                      <option value="subscription">Weekly Subscription</option>
                      <option value="special">Special Items</option>
                      <option value="other">Other (Please specify)</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                      placeholder="Tell us about your ironing needs..."
                      required
                    ></textarea>
                  </div>
                  
                  <Button type="submit" variant="primary" className="w-full">
                    <span className="flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </span>
                  </Button>
                </form>
              )}
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/95 rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Phone</h3>
                      <p className="text-gray-700">+44 07901 611906</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Email</h3>
                      <p className="text-gray-700">contact@ironingangels.uk</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Location</h3>
                      <p className="text-gray-700">
                        Topaz Grove<br />
                        Mansfield, NG18 4XE
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Business Hours</h3>
                      <div className="text-gray-700">
                        <p>Monday - Friday: 8am - 6pm</p>
                        <p>Saturday: 9am - 2pm</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/95 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-lg mb-2">How do I schedule a pickup?</h3>
                    <p className="text-gray-700">
                      You can schedule a pickup through our website, by phone, or via email. We offer
                      flexible time slots to fit your schedule.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">What's your turnaround time?</h3>
                    <p className="text-gray-700">
                      Our standard turnaround is 48 hours, but we also offer same-day and next-day 
                      express services for an additional fee.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Do you have a minimum order?</h3>
                    <p className="text-gray-700">
                      We have a minimum order of 5 items for pickup/delivery service, but no minimum
                      for drop-off at our location.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;