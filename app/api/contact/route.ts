import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, need, bizType, status, goals, notes, linkedin } = body;

    // Validate required fields
    if (!name || !email || !company || !need) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Build email body
    const emailContent = `
New lead from miniermartech.com contact form:

Name: ${name}
Email: ${email}
Company: ${company}
LinkedIn: ${linkedin || "Not provided"}

What brings them here: ${need}
Business Type: ${bizType || "Not specified"}
Current Outbound Status: ${status || "Not specified"}

Goals:
${goals}

Additional Notes:
${notes || "None"}

---
This email was sent from the miniermartech.com contact form.
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Lead: ${name} from ${company}`,
      text: emailContent,
    });

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}
