import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, checkIn, checkOut, guests, propertyId, message } = body;

    // Validate payload
    if (!name || !email || !phone || !checkIn || !checkOut || !guests || !propertyId) {
      return NextResponse.json(
        { error: "Missing required booking details. Please verify all inputs." },
        { status: 400 }
      );
    }

    // Configure SMTP Transporter
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || "465");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
      console.error("Missing SMTP environment configuration details.");
      return NextResponse.json(
        { error: "Internal SMTP mailer is misconfigured. Please try again later." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: true, // true for port 465 (SSL)
      auth: {
        user,
        pass,
      },
    });

    // Construct high-end HTML email body
    const formattedPropertyId = propertyId.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase());
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Booking Request</title>
          <style>
            body {
              font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
              color: #0c213c;
              background-color: #f4f8fc;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 40px auto;
              background-color: #ffffff;
              border: 1px solid #c9dbf0;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 4px 12px rgba(12, 33, 60, 0.05);
            }
            .header {
              background-color: #0e4a86;
              color: #ffffff;
              padding: 30px;
              text-align: center;
            }
            .header h1 {
              font-family: Georgia, serif;
              font-size: 28px;
              margin: 0;
              font-weight: 300;
              letter-spacing: 1px;
            }
            .header p {
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 2px;
              color: #9abce4;
              margin: 5px 0 0 0;
            }
            .content {
              padding: 40px 30px;
            }
            .intro {
              font-size: 16px;
              font-weight: 300;
              line-height: 1.6;
              margin-bottom: 30px;
              color: #0c3c6f;
            }
            .grid-table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 30px;
            }
            .grid-table th, .grid-table td {
              padding: 14px 16px;
              text-align: left;
              border-bottom: 1px solid #e7eff8;
            }
            .grid-table th {
              background-color: #f4f8fc;
              font-size: 11px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 1px;
              color: #6496d3;
              width: 35%;
            }
            .grid-table td {
              font-size: 14px;
              color: #0c213c;
            }
            .message-box {
              background-color: #f4f8fc;
              border-left: 3px solid #1d5b9d;
              padding: 20px;
              border-radius: 0 4px 4px 0;
              font-style: italic;
              font-size: 14px;
              line-height: 1.6;
              color: #0d2a4e;
              margin-top: 20px;
            }
            .footer {
              background-color: #061e38;
              color: #9abce4;
              padding: 20px;
              text-align: center;
              font-size: 11px;
            }
            .footer p {
              margin: 5px 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>PrivaVillas</h1>
              <p>Exclusive Santorini Escapes</p>
            </div>
            <div class="content">
              <p class="intro">A new luxury booking inquiry has been registered. Below are the traveler details and requests:</p>
              
              <table class="grid-table">
                <tr>
                  <th>Selected Property</th>
                  <td><strong>${formattedPropertyId}</strong> (ID: ${propertyId})</td>
                </tr>
                <tr>
                  <th>Guest Name</th>
                  <td>${name}</td>
                </tr>
                <tr>
                  <th>Email Address</th>
                  <td>${email}</td>
                </tr>
                <tr>
                  <th>Phone Number</th>
                  <td>${phone}</td>
                </tr>
                <tr>
                  <th>Check In Date</th>
                  <td>${checkIn}</td>
                </tr>
                <tr>
                  <th>Check Out Date</th>
                  <td>${checkOut}</td>
                </tr>
                <tr>
                  <th>Number of Guests</th>
                  <td>${guests} guests</td>
                </tr>
              </table>

              ${message ? `
                <div style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #6496d3; margin-bottom: 8px;">Concierge Custom Requests</div>
                <div class="message-box">
                  "${message}"
                </div>
              ` : ""}
            </div>
            <div class="footer">
              <p>This is an automated request generated by PrivaVillas Booking System.</p>
              <p>&copy; ${new Date().getFullYear()} PrivaVillas Ltd. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const mailOptions = {
      from: `"PrivaVillas Concierge" <${user}>`,
      to: user, // Send to self/owner
      replyTo: email, // Reply goes to client
      subject: `New Premium Booking Request - ${formattedPropertyId}`,
      html: emailHtml,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Nodemailer error processing booking request:", error);
    return NextResponse.json(
      { error: "An unexpected server error occurred while sending the inquiry. Please try again." },
      { status: 500 }
    );
  }
}
