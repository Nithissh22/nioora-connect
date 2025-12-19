import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Target, Heart, Users } from "lucide-react";
import aboutImage from "@assets/generated_images/professional_home_service_technician_working.png";

export default function About() {
  return (
    <Layout>
      <div className="bg-slate-50 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">About Us</h4>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
                Redefining Home Service Excellence
              </h1>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Nioora is a customer-first service platform dedicated to simplifying your home maintenance needs. 
                Whether it's installation, repair, or regular maintenance, our expert team is here to ensure 
                your appliances and electronics run smoothly.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our goal is to make services reliable, transparent, fast, and stress-free. We bridge the gap 
                between quality technicians and customers who need trusted solutions quickly.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img src={aboutImage} alt="Our Team" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
                <p className="font-heading font-bold text-4xl text-primary mb-1">100%</p>
                <p className="text-slate-600 font-medium">Commitment to Quality & Safety</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">Our Mission & Values</h2>
            <p className="text-slate-600">
              We focus on solving real problems quickly while maintaining honesty, safety, and professionalism.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Our Aim</h3>
                <p className="text-slate-600">
                  To provide trusted, on-time, and high-quality service with clear communication and priority support for every customer.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Customer First</h3>
                <p className="text-slate-600">
                  Customer satisfaction is our top focus. We listen, diagnose issues accurately, and provide efficient solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Professional Team</h3>
                <p className="text-slate-600">
                  We work with reliable service partners and verified technicians to ensure safety and quality work.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
