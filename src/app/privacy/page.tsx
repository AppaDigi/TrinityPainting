import { LegalLayout } from "@/components/ui/legal-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Trinity Painting & Renewal",
    description: "Our privacy policy outlines how we collect, use, and protect your personal information.",
    alternates: {
        canonical: "/privacy",
    },
};

export default function PrivacyPage() {
    return (
        <LegalLayout title="Privacy Policy">
            <p className="lead">At Trinity Painting & Renewal, we are committed to protecting your privacy and ensuring a secure experience for our clients.</p>
            
            <h2>1. Information We Collect</h2>
            <p>We collect information that you provide directly to us when you request an estimate, sign up for our newsletter, or communicate with us. This may include:</p>
            <ul>
                <li>Name, email address, and phone number</li>
                <li>Project address and property details</li>
                <li>Strategic project goals and preferences</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, including:</p>
            <ul>
                <li>Providing accurate project estimates</li>
                <li>Communicating about your project and our services</li>
                <li>Sending administrative information or marketing communications (with your consent)</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except to trusted partners who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.</p>

            <h2>4. Data Security</h2>
            <p>We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.</p>

            <h2>5. Contact Us</h2>
            <p>If you have any questions regarding this privacy policy, you may contact us using the information below:</p>
            <p>
                <strong>Trinity Painting & Renewal</strong><br />
                403 Cardinal Street<br />
                Mora, MN 55051<br />
                dustin@trinitypaintingmn.com
            </p>
        </LegalLayout>
    );
}
