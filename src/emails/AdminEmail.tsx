import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
    Hr,
} from "@react-email/components";
import * as React from "react";

interface AdminEmailProps {
    fullName: string;
    phone: string;
    email: string;
    address: string;
    service: string;
    tier: string;
    propertyType: string;
    discount: string;
    goals: string;
}

export const AdminEmail = ({
    fullName,
    phone,
    email,
    address,
    service,
    tier,
    propertyType,
    discount,
    goals,
}: AdminEmailProps) => (
    <Html>
        <Head />
        <Preview>New Lead: {fullName}</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section style={headerSection}>
                    <Heading style={headerTitle}>New Project Request</Heading>
                </Section>
                <Section style={contentSection}>
                    <Text style={label}>Name</Text>
                    <Text style={value}>{fullName}</Text>

                    <Text style={label}>Phone</Text>
                    <Text style={value}>{phone}</Text>

                    <Text style={label}>Email</Text>
                    <Text style={value}>{email}</Text>

                    <Text style={label}>Address</Text>
                    <Text style={value}>{address}</Text>

                    <Hr style={hr} />

                    <Text style={label}>Primary Service</Text>
                    <Text style={value}>{service}</Text>

                    <Text style={label}>Stewardship Tier</Text>
                    <Text style={value}>{tier}</Text>

                    <Text style={label}>Property Type</Text>
                    <Text style={value}>{propertyType}</Text>

                    <Text style={label}>Discount</Text>
                    <Text style={value}>{discount || "None"}</Text>

                    <Hr style={hr} />

                    <Text style={label}>Project Goals & Details</Text>
                    <Text style={value}>{goals}</Text>
                </Section>
            </Container>
        </Body>
    </Html>
);

export default AdminEmail;

const main = {
    backgroundColor: "#f9fafb",
    fontFamily: "Arial, sans-serif",
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
    padding: "30px",
    textAlign: "center" as const,
};

const headerTitle = {
    color: "#d4af37",
    fontSize: "24px",
    margin: "0",
};

const contentSection = {
    padding: "30px",
};

const label = {
    fontSize: "12px",
    textTransform: "uppercase" as const,
    color: "#64748b",
    margin: "0 0 4px 0",
    fontWeight: "bold",
    letterSpacing: "0.05em",
};

const value = {
    fontSize: "16px",
    color: "#0f172a",
    margin: "0 0 20px 0",
};

const hr = {
    borderColor: "#e2e8f0",
    margin: "20px 0",
};
