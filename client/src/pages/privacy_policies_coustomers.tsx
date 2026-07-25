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
          <p style={{ color: subtextColor, marginBottom: '30px' }}>Effective Date: January 15, 2026</p>

          <div style={{ color: subtextColor, lineHeight: '1.8' }}>
            <h3 style={{ color: primaryColor, fontSize: '20px', fontWeight: 'bold' }}>1. Information We Collect</h3>
            <p>
              • <strong>Personal Details:</strong> Your Name, Email Address, and Phone Number (verified via OTP) to manage your account.<br />
              • <strong>Service Address:</strong> Collected and stored to allow our service partners to reach your location.<br />
              • <strong>Location Data:</strong> We collect precise location data when the app is in use to simplify address entry and find nearby technicians.<br />
              • <strong>Device Identifiers (FCM Tokens):</strong> We collect unique Firebase Cloud Messaging (FCM) tokens to send you real-time push notifications regarding your service status and technician arrival.
            </p>

            <h3 style={{ color: primaryColor, fontSize: '20px', fontWeight: 'bold', marginTop: '30px' }}>2. Use of Data</h3>
            <p>
              Your information is used solely to facilitate the home appliance services provided by Nioora. This includes connecting you with technicians, providing service history, and ensuring secure authentication.
            </p>

            <h3 style={{ color: primaryColor, fontSize: '20px', fontWeight: 'bold', marginTop: '30px' }}>3. Data Sharing</h3>
            <p>
              We share your contact details and service address <strong>only</strong> with the specific service partner who accepts your booking. Nioora Private Limited does not sell or lease your personal data to third-party advertisers.
            </p>

            <h3 style={{ color: primaryColor, fontSize: '20px', fontWeight: 'bold', marginTop: '30px' }}>4. Data Security & Deletion</h3>
            <p>
              Your data is stored using encrypted Google Firebase services. In compliance with Play Store mandates:
              <br />
              • You can request to <strong>delete your account</strong> and all associated personal data at any time via the Profile section of the app.
              <br />
              • Alternatively, you can email <strong>support@nioora.com</strong> with the subject "Data Deletion Request." All data will be purged from our active systems within 30 days.
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