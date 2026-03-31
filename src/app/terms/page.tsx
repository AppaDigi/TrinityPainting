import { LegalLayout } from "@/components/ui/legal-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Trinity Painting & Renewal",
    description: "Please read our terms of service carefully before using our website or requesting our services.",
    alternates: {
        canonical: "/terms",
    },
};

export default function TermsPage() {
    return (
        <LegalLayout title="Terms of Service">
            <p className="lead">By accessing this website, we assume you accept these terms of service in full. Do not continue to use Trinity Painting & Renewal's website if you do not accept all of the terms and conditions stated on this page.</p>

            <h2>1. Use of Website</h2>
            <p>The information provided on this website is for general informational purposes only. While we strive to keep information accurate and up to date, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of our content.</p>

            <h2>2. Intellectual Property</h2>
            <p>Unless otherwise stated, Trinity Painting & Renewal and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved.</p>

            <h2>3. Service Requests & Estimates</h2>
            <p>Requesting an estimate through our website does not create a binding contract. A formal agreement will be provided separately if you choose to move forward with a project. We reserve the right to refuse service to anyone for any reason at any time.</p>

            <h2>4. Limitation of Liability</h2>
            <p>In no event shall Trinity Painting & Renewal, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website.</p>

            <h2>5. Governing Law</h2>
            <p>These terms will be governed by and interpreted in accordance with the laws of the State of Minnesota, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Minnesota for the resolution of any disputes.</p>

            <h2>6. Changes to Terms</h2>
            <p>We reserve the right to revise these terms of service at any time as we see fit, and by using this website you are expected to review these terms on a regular basis.</p>
        </LegalLayout>
    );
}
