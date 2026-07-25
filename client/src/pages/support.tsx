import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Headset, MessageSquare, Clock } from "lucide-react";
import { Link } from "wouter";

export default function Support() {
  return (
    <Layout>
      <div className="bg-primary text-white py-16">
        <div className="container px-4 md:px-6 text-center">
          <Headset className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">Customer Support</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            We are dedicated to providing priority support to ensure your experience is seamless.
          </p>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">How can we help you today?</h2>
            <p className="text-slate-600">
              Our support team is available to assist you with booking queries, service status, and post-service feedback.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">Need Quick Assistance?</h3>
              <p className="text-slate-600 mb-6">
                Send us an email with your query and we will get back to you within 24 hours.
              </p>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=niooraservice@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full">Email Support</Button>
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Headset className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">Urgent Issue?</h3>
              <p className="text-slate-600 mb-6">
                Call our support line for immediate assistance during business hours.
              </p>
              <a href="tel:+916374105733">
                <Button className="w-full">Call Now</Button>
              </a>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-slate-500 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Support Hours</h3>
                <p className="text-slate-600">
                  Monday to Saturday: 9:00 AM - 8:00 PM<br/>
                  Sunday: Closed (Emergency services may be available based on availability)
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
