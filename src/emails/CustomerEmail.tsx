import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
    Button,
} from "@react-email/components";
import * as React from "react";

interface CustomerEmailProps {
    fullName: string;
}

export const CustomerEmail = ({ fullName }: CustomerEmailProps) => (
    <Html>
        <Head />
        <Preview>Your Request has been received by Trinity Painting & Renewal!</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section style={headerSection}>
                    <Heading style={headerTitle}>TRINITY</Heading>
                    <Text style={headerSubtitle}>PAINTING & RENEWAL</Text>
                </Section>
                <Section style={contentSection}>
                    <Heading style={title}>We&apos;ve Received Your Request</Heading>
                    <Text style={text}>
                        Hello {fullName},
                    </Text>
                    <Text style={text}>
                        Thank you for reaching out to Trinity Painting & Renewal. We have successfully received your project request and one of our dedicated professionals will be reviewing it shortly.
                        We strive to provide honest, transparent estimates rooted in biblical stewardship.
                    </Text>
                    <Text style={text}>
                        Our team typically responds within 24 business hours. If you need immediate assistance or have urgent details to share regarding your project, please don&apos;t hesitate to reach out to us directly.
                    </Text>
                    <Section style={buttonContainer}>
                        <Button style={button} href="tel:7632252393">
                            CALL OR TEXT (763) 225-2393
                        </Button>
                    </Section>
                    <Text style={footerText}>
                        God-honoring craftsmanship for your home.
                        <br />
                        - The Trinity Painting Team
                    </Text>
                </Section>
            </Container>
        </Body>
    </Html>
);

export default CustomerEmail;

const main = {
    backgroundColor: "#f9fafb",
    fontFamily: "Georgia, 'Times New Roman', Times, serif",
};

const container = {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "0",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
};

const headerSection = {
    backgroundColor: "#1e293b",
    padding: "40px",
    textAlign: "center" as const,
};

const headerTitle = {
    color: "#ffffff",
    fontSize: "32px",
    margin: "0",
    letterSpacing: "0.05em",
};

const headerSubtitle = {
    color: "#d4af37",
    fontSize: "12px",
    letterSpacing: "0.2em",
    margin: "4px 0 0 0",
};

const contentSection = {
    padding: "40px",
    backgroundColor: "#ffffff",
};

const title = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#0f172a",
    margin: "0 0 20px 0",
};

const text = {
    fontSize: "16px",
    lineHeight: "26px",
    color: "#334155",
    margin: "0 0 20px 0",
};

const buttonContainer = {
    textAlign: "center" as const,
    margin: "32px 0",
};

const button = {
    backgroundColor: "#d4af37",
    borderRadius: "8px",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "inline-block",
    padding: "16px 32px",
    letterSpacing: "0.1em",
};

const footerText = {
    fontSize: "14px",
    color: "#64748b",
    marginTop: "40px",
    fontStyle: "italic",
};
