import { Layout } from "@/components/layout/Layout";

const primaryColor = "#2D3748";
const subtextColor = "#718096";
const accentColor = "#F6AD55";

export default function PoliciesPage() {
  return (
    <Layout>
      <div className="container px-4 py-16 max-w-4xl mx-auto" style={{ fontFamily: 'sans-serif' }}>
        
        {/* PRIVACY POLICY SECTION */}
        <section className="mb-16">
          <div style={{ backgroundColor: primaryColor, padding: '12px', borderRadius: '12px', display: 'inline-flex', marginBottom: '20px' }}>
             <span style={{ color: '#fff', fontWeight: 'bold' }}>DPDP Act 2023 Compliant</span>
          </div>
          
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: primaryColor, marginBottom: '10px' }}>Privacy Policy</h1>
          <p style={{ color: subtextColor, marginBottom: '30px' }}>Effective Date: January 20, 2026</p>

          <div style={{ color: subtextColor, lineHeight: '1.8' }}>
            <h3 style={{ color: primaryColor, fontSize: '20px', fontWeight: 'bold' }}>1. Information We Collect</h3>
            <p>
              To provide a secure platform for our partners, we collect:<br />
              • <strong>Identity Data:</strong> Aadhaar and PAN for mandatory KYC verification.<br />
              • <strong>Professional Data:</strong> Educational and technical certificates to verify your skills.<br />
              • <strong>Financial Data:</strong> Bank details, stored strictly for <strong>emergency refunds</strong>, payouts, and identity verification.
            </p>

            <h3 style={{ color: primaryColor, fontSize: '20px', fontWeight: 'bold', marginTop: '30px' }}>2. Background Location Tracking</h3>
            <p>
              Nioora Partner collects <strong>Location Data</strong> even when the app is closed or not in use. This is required to:<br />
              • Assign you jobs that are close to your current location.<br />
              • Provide the customer with an Estimated Time of Arrival (ETA).<br />
              • Verify that you have reached the customer's site accurately.
            </p>

            <h3 style={{ color: primaryColor, fontSize: '20px', fontWeight: 'bold', marginTop: '30px' }}>3. Data Security</h3>
            <p>
              We use industry-standard encryption to protect your sensitive documents and professional records. We do not sell your personal data to third parties. All data is processed securely through encrypted channels.
            </p>

            <h3 style={{ color: primaryColor, fontSize: '20px', fontWeight: 'bold', marginTop: '30px' }}>4. Data Retention & Deletion</h3>
            <p>
              We retain your professional records and transaction history for as long as required by Indian tax and audit regulations.<br />
              • You may request <strong>account deletion</strong> through the Profile section of the app.<br />
              • Upon account closure, data is handled according to legal retention mandates before being purged from our active systems.
            </p>
          </div>
        </section>

        {/* Mandatory Grievance Officer Section for India */}
        <footer style={{ borderTop: '1px solid #eee', paddingTop: '30px', marginTop: '20px' }}>
          <h3 style={{ color: primaryColor, fontSize: '18px', fontWeight: 'bold' }}>Grievance Officer</h3>
          <p style={{ color: subtextColor, fontSize: '14px' }}>
            In accordance with the IT Act and DPDP Act 2023, the details of the Grievance Officer are:<br />
            <strong>Name:</strong> Rogithprathap T M<br />
            <strong>Email:</strong> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=niooraservice@gmail.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">niooraservice@gmail.com</a>
          </p>
        </footer>

      </div>
    </Layout>
  );
}

/** * CRITICAL NAMED EXPORTS: 
 * These satisfy the imports in your App.tsx to prevent runtime errors.
 */
export const Privacy = PoliciesPage;
export const Terms = PoliciesPage;
export const Cancellation = PoliciesPage;
export const Shipping = PoliciesPage;