import { Layout } from "@/components/layout/Layout";
import { useEffect } from "react";
import { useLocation } from "wouter";

export function Terms() {
  return (
    <Layout>
      <div className="container px-4 md:px-6 py-16 max-w-4xl mx-auto">
        <h1 className="text-3xl font-heading font-bold mb-8">Terms and Conditions</h1>
        <div className="prose prose-slate max-w-none">
          <p>Welcome to Nioora. By using our website and services, you agree to comply with and be bound by the following terms and conditions.</p>
          
          <h3>1. Services</h3>
          <p>Nioora provides home appliance installation, repair, and maintenance services. We act as a service platform connecting customers with verified technicians.</p>
          
          <h3>2. Booking and Payments</h3>
          <p>Service requests can be made via our website or phone. Pricing estimates provided are subject to inspection. Final charges may vary based on the diagnosis and parts required.</p>
          
          <h3>3. User Responsibilities</h3>
          <p>Users must provide accurate information regarding the service required and ensure a safe working environment for our technicians.</p>
          
          <h3>4. Liability</h3>
          <p>While we ensure high-quality service, Nioora is not liable for pre-existing damages to appliances. Our warranty covers only the specific part repaired or replaced for a stipulated period.</p>
        </div>
      </div>
    </Layout>
  );
}

export function Privacy() {
  return (
    <Layout>
      <div className="container px-4 md:px-6 py-16 max-w-4xl mx-auto">
        <h1 className="text-3xl font-heading font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none">
          <p>Nioora Private Limited ("we", "our", "us") is committed to protecting your privacy.</p>
          
          <h3>1. Information Collection</h3>
          <p>We collect personal information such as name, phone number, email address, and address when you book a service.</p>
          
          <h3>2. Use of Information</h3>
          <p>Your information is used to facilitate service delivery, communicate with you, and improve our services.</p>
          
          <h3>3. Data Security</h3>
          <p>We implement appropriate security measures to protect your data. We do not sell your personal information to third parties.</p>
        </div>
      </div>
    </Layout>
  );
}

export function Cancellation() {
  return (
    <Layout>
      <div className="container px-4 md:px-6 py-16 max-w-4xl mx-auto">
        <h1 className="text-3xl font-heading font-bold mb-8">Cancellation & Refund Policy</h1>
        <div className="prose prose-slate max-w-none">
          <h3>1. Cancellation</h3>
          <p>You can cancel your service booking free of charge up to 2 hours before the scheduled time. Cancellations made within 2 hours of the scheduled time may incur a nominal visiting fee.</p>
          
          <h3>2. Refunds</h3>
          <p>If you have paid in advance and cancel within the allowed window, a full refund will be processed within 5-7 business days. For service-related disputes, refunds are processed based on investigation and management approval.</p>
        </div>
      </div>
    </Layout>
  );
}

export function Shipping() {
  return (
    <Layout>
      <div className="container px-4 md:px-6 py-16 max-w-4xl mx-auto">
        <h1 className="text-3xl font-heading font-bold mb-8">Shipping & Exchange Policy</h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-lg font-medium text-slate-900 bg-blue-50 p-4 rounded-lg mb-6">
            Nioora is a service-based platform. We do not sell or ship physical products directly to customers.
          </p>
          
          <h3>1. Service Delivery</h3>
          <p>Our "shipping" constitutes the arrival of our technician to your provided address. We strive to arrive within the booked time slot.</p>
          
          <h3>2. Spare Parts</h3>
          <p>If spare parts are required for a repair, our technicians will procure them. The warranty and exchange policy for these parts are governed by the respective manufacturer's terms.</p>
        </div>
      </div>
    </Layout>
  );
}
