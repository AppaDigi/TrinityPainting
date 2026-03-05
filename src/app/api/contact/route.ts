import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { CustomerEmail } from '@/emails/CustomerEmail';
import { AdminEmail } from '@/emails/AdminEmail';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key_for_build');

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const {
            fullName,
            phone,
            email,
            address,
            service,
            tier,
            propertyType,
            discount,
            goals,
        } = data;

        // Send email to customer
        const customerEmailResponse = await resend.emails.send({
            from: 'Trinity Painting & Renewal <noreply@trinitypaintingmn.com>', // MUST BE A VERIFIED DOMAIN ON RESEND
            to: [email],
            subject: 'Your Project Request has been received!',
            react: CustomerEmail({ fullName }),
        });

        // Send email to dustin@trinitypaintingmn.com
        const adminEmailResponse = await resend.emails.send({
            from: 'Website Lead <noreply@trinitypaintingmn.com>',
            to: ['dustin@trinitypaintingmn.com'], // The recipient
            subject: `New Lead: ${fullName} - ${service}`,
            react: AdminEmail({
                fullName,
                phone,
                email,
                address,
                service,
                tier,
                propertyType,
                discount,
                goals,
            }),
        });

        return NextResponse.json({ success: true, customerEmailResponse, adminEmailResponse });
    } catch (error) {
        console.error('Failed to send emails via Resend:', error);
        return NextResponse.json(
            { error: 'There was an error sending the message.' },
            { status: 500 }
        );
    }
}
