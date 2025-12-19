import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/data";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Shield, Star, Phone } from "lucide-react";
import heroImage from "@assets/generated_images/professional_home_service_technician_working.png";
import technicianImage from "@assets/generated_images/modern_home_living_room_electronics.png";

export default function Home() {
  const featuredServices = services.slice(0, 8); // Show first 8

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge variant="outline" className="px-4 py-1.5 text-sm bg-blue-50 text-primary border-blue-100 mb-4">
                  #1 Trusted Home Service Partner
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight tracking-tight text-slate-900">
                  Reliable Home & <br/>
                  <span className="text-primary">Appliance Services</span>, <br/>
                  Simplified.
                </h1>
                <p className="text-lg text-slate-600 md:text-xl max-w-[600px] mt-4">
                  Expert installation, repair, and maintenance for all your home needs. 
                  Fast, transparent, and stress-free.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Link href="/contact">
                    <Button size="lg" className="rounded-full px-8 h-12 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
                      Book a Service
                    </Button>
                  </Link>
                  <Link href="/support">
                    <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base border-slate-300 hover:bg-slate-50">
                      Contact Support
                    </Button>
                  </Link>
                </div>
                
                <div className="flex items-center gap-6 mt-10 text-sm font-medium text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Verified Experts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>On-Time Service</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5 aspect-[4/3]">
                 <img 
                   src={heroImage} 
                   alt="Professional Technician" 
                   className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase">Service Guarantee</p>
                    <p className="font-bold text-slate-900">100% Satisfaction</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Decor */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50/50 blur-3xl opacity-50 rounded-bl-[100px]"></div>
      </section>

      {/* Stats / Features Strip */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <div className="w-12 h-12 bg-blue-100 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Response</h3>
              <p className="text-slate-600">Quick diagnosis and efficient service completion.</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-blue-100 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Trusted Experts</h3>
              <p className="text-slate-600">Verified professionals handling your appliances safely.</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-blue-100 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p className="text-slate-600">Top-notch service quality with transparent pricing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-slate-50/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">Our Core Services</h2>
              <p className="text-slate-600 text-lg">
                From installation to repair, we handle a wide range of appliances and electronics.
              </p>
            </div>
            <Link href="/services">
              <Button variant="outline" className="gap-2">
                View All Services
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href="/contact">
                  <Card className="h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer border-slate-200/60 bg-white">
                    <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-blue-50 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                        <service.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">{service.name}</h3>
                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{service.category}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Why Us */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-20 bg-[url(@assets/generated_images/abstract_blue_technology_background.png)] bg-cover bg-center"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Why Choose Nioora?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/20 p-3 rounded-xl h-fit">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Customer First Approach</h4>
                    <p className="text-slate-300">We prioritize your convenience and satisfaction above all else. Our support team is always ready to help.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/20 p-3 rounded-xl h-fit">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Transparent Pricing</h4>
                    <p className="text-slate-300">No hidden costs. You get a clear diagnosis and a fair quote before we start any work.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/20 p-3 rounded-xl h-fit">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">End-to-End Assistance</h4>
                    <p className="text-slate-300">Our trained team handles everything from booking to completion, ensuring a smooth experience.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                 <img src={technicianImage} alt="Service Quality" className="w-full opacity-90" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-20 bg-primary/5">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Experience the best home service in town. Book a technician today or contact our support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8">Book Now</Button>
            </Link>
             <a href="tel:+916374105733">
              <Button variant="outline" size="lg" className="rounded-full px-8 gap-2 bg-white">
                <Phone className="w-4 h-4" /> Call +91 6374105733
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
