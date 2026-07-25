import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useServices, ServiceIcon } from "@/hooks/use-services";

export default function Services() {
  const { data, isLoading: loading } = useServices();
  const services = data?.services || [];
  const categories = data?.categories || [];
  const [activeCategory, setActiveCategory] = useState("All");
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const filteredServices = activeCategory === "All"
    ? services
    : services.filter((service) => service.category === activeCategory);

  const handleServiceClick = (serviceName: string) => {
    setSelectedService(serviceName);
    setShowComingSoon(true);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">Our Services</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive installation, repair, and maintenance solutions for all your home needs.
              Professional technicians ready to assist.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-20 container px-4 md:px-6">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {categories.map((cat, idx) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105" 
                  : "bg-white border-2 border-slate-200 text-slate-600 hover:border-primary hover:text-primary hover:shadow-md"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Services Grid */}
        {loading ? (
          <div className="text-center py-20 text-slate-600">Loading services...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ delay: idx * 0.02 }}
                  key={service.id}
                  onClick={() => handleServiceClick(service.name)}
                >
                  <Card className="h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group border border-slate-100 bg-white overflow-hidden">
                    <CardContent className="p-8 flex flex-col items-center text-center gap-4 h-full justify-between">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <ServiceIcon name={service.icon} className="w-8 h-8" />
                      </div>
                      <div className="flex-grow flex flex-col justify-center">
                        <h3 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-primary transition-colors line-clamp-2">
                          {service.name}
                        </h3>
                        <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">{service.category}</p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <span className="inline-flex items-center gap-1 text-sm font-bold text-primary">
                          View Details →
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* No services message */}
        {!loading && filteredServices.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-600 text-lg">No services found in this category.</p>
          </div>
        )}
      </div>

      {/* Coming Soon Modal */}
      <AnimatePresence>
        {showComingSoon && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowComingSoon(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
            >
              {/* Close Button */}
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setShowComingSoon(false)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </button>
              </div>

              {/* Content */}
              <div className="bg-gradient-to-br from-primary to-blue-600 text-white p-8 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-heading font-bold mb-3">Coming Soon</h2>
                <p className="text-blue-100 mb-6">
                  {selectedService} service will be available shortly!
                </p>
              </div>

              <div className="p-8 text-center">
                <p className="text-slate-600 mb-6">
                  We're working hard to bring this service to you. Stay tuned for updates!
                </p>
                <button
                  onClick={() => setShowComingSoon(false)}
                  className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Got it
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
