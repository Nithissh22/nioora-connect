import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      subtitle: "Call for priority support",
      content: "+91 6374105733",
      href: "tel:+916374105733",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      subtitle: "For general inquiries",
      content: "niooraservice@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=niooraservice@gmail.com",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      subtitle: "We're available",
      content: "Mon - Sat: 9:00 AM - 8:00 PM",
      href: null,
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: MapPin,
      title: "Company",
      subtitle: "Service Provider",
      content: "Nioora Private Limited",
      href: null,
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Get in touch with Nioora for any inquiries or support needs. We're here to help!
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-20 container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-heading font-bold mb-4 text-slate-900"
            >
              Reach Out to Us
            </motion.h2>
            <p className="text-lg text-slate-600">
              Multiple ways to connect with our support team
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {contactInfo.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                      <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group border border-slate-100 bg-white overflow-hidden">
                        <CardContent className="p-8">
                          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                            <Icon className="w-7 h-7" />
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                          <p className="text-sm text-slate-500 mb-4">{item.subtitle}</p>
                          <p className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">
                            {item.content}
                          </p>
                        </CardContent>
                      </Card>
                    </a>
                  ) : (
                    <Card className="h-full border border-slate-100 bg-white overflow-hidden">
                      <CardContent className="p-8">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center mb-6`}>
                          <Icon className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-slate-500 mb-4">{item.subtitle}</p>
                        <p className="text-lg font-semibold text-slate-900">
                          {item.content}
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h4 className="text-lg font-bold text-slate-900 mb-2">Quick Response</h4>
              <p className="text-slate-600">
                We respond to all inquiries within 2-4 business hours
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <h4 className="text-lg font-bold text-slate-900 mb-2">Expert Support</h4>
              <p className="text-slate-600">
                Trained professionals ready to assist with any questions
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <h4 className="text-lg font-bold text-slate-900 mb-2">24/7 Access</h4>
              <p className="text-slate-600">
                Email us anytime and we'll get back to you promptly
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
