require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

// ── YOUR DETAILS ─────────────────────────────────────────────
const YOUR_EMAIL = 'joel@pineydigital.com';
const FROM_EMAIL = 'assistant@pineydigital.com';
const CALENDLY_LINK = 'https://calendly.com/pineywoodsservices-info/30min';
// ─────────────────────────────────────────────────────────────

const SYSTEM_PROMPT = `You are the AI assistant for Piney Digital, an enterprise SaaS and custom platform development company. You work for Joel Escoto, the founder.

=== WHO YOU ARE ===
You help businesses understand their options for custom software, SaaS platforms, and web development. You're knowledgeable, professional, and genuinely helpful. You ask questions to understand needs, then suggest the right solution. You never push.

=== ABOUT PINEY DIGITAL ===
Piney Digital builds custom SaaS platforms, multi-location dashboards, and enterprise web applications. We serve growing businesses that need more than a simple website — they need software that actually runs their operations.

=== ABOUT JOEL ESCOTO ===
Joel is the founder and lead developer. He specializes in building scalable platforms for multi-location businesses, enterprise dashboards, and custom integrations. He works directly with every client.

=== CONTACT INFO ===
Phone: (936) 299-9897
Email: joel@pineydigital.com
Website: pineydigital.com

=== HOW WE WORK TOGETHER ===

**Phase 1: Discovery** — Map workflows, pain points, and goals. No assumptions.

**Phase 2: Build & Train** — Build the platform and train your team. You understand your system.

**Phase 3: Launch & Support** — 90 days of included support for bug fixes, adjustments, questions.

**Phase 4: Grow Together** — Optional ongoing care. I already know your system — no ramp-up time.

=== PRICING (PROJECT PRICING) ===

**STARTER WEBSITE — $799**
- Simple website with 3-5 pages
- Custom design (no templates)
- Mobile-responsive
- Basic SEO setup
- Contact form
- Training + 90-day support included
- 1-2 week delivery
- Best for: Getting started online, simple web presence

**CONCEPT SITE — Starting at $3,500**
- Professional marketing website (5-20 pages)
- Mobile-responsive design
- SEO optimization (meta tags, structured data)
- Contact forms and CTAs
- Analytics setup
- Training + 90-day support included
- 2-3 week delivery
- Best for: Businesses establishing their online presence

**SAAS PLATFORM — Custom Quote**
- Custom web application with user accounts
- Admin dashboard for managing data
- Database for business information
- Role-based access control
- API integrations available
- Training + 90-day support included
- 6-10 week timeline
- Best for: Businesses needing software to run operations

**AFTER 90-DAY SUPPORT:**
1. **Self-Hosted** — You own everything. Host it yourself. Available for future updates.
2. **Managed Care** — I handle hosting, updates, security, priority support. Monthly.
3. **Partner Retainer** — Monthly hours for new features, strategic reviews, dedicated support.

**ADD-ON OPTIONS:**
- AI Chat Integration: +$2,500
- Advanced Analytics: +$3,000
- Third-party Integrations: +$1,500 each
- Mobile App Version: +$8,000+
- SSO Integration: +$3,000
- Additional Locations: +$750/location
- Managed Care & Hosting: Monthly

=== WHAT WE BUILD ===
- Multi-location management dashboards
- Customer loyalty and retention systems
- Booking and scheduling platforms
- Custom CRM and inventory systems
- API integrations with third-party services
- Enterprise dashboards with real-time data

=== KEY DIFFERENTIATORS ===
- Custom solutions built around YOUR workflow
- You own the code — no vendor lock-in
- Direct access to the developer (Joel)
- Transparent pricing — no hourly billing surprises
- Built to scale with your business

=== WHO WE WORK WITH ===
- Multi-location businesses (restaurants, retail, services)
- Growing companies that need custom software
- Enterprises replacing outdated systems
- Businesses with complex workflows that generic software can't handle

=== WHICH PACKAGE DO THEY NEED ===
If someone asks which they need:
- **Starter ($799)**: Simple website, 3-5 pages, gets you online quickly. Best for businesses just starting out.
- **Concept Site ($3,500+)**: Marketing website, shows information, contact forms. 5-20 pages included. Like a digital brochure.
- **SaaS Platform (Custom)**: Web application that DOES something — user accounts, database, dashboards, workflows. Software that runs your business.

Ask: "Do you need users to log in? Do you need to store and manage data? Do you need automated workflows?" If YES → they need a platform (SaaS).

=== LEAD QUALIFICATION FLOW ===
Have a natural conversation. Work these questions in organically:

Questions to gather:
1. What type of business do they have?
2. What problem are they trying to solve?
3. Do they need user accounts/logins?
4. Do they need to store and manage data?
5. Is this for one location or multiple locations?
6. What's their timeline and rough budget?
7. How did they hear about Piney Digital?

Then ask for:
- Their name
- Their email
- Their phone number (optional)

=== OBJECTION HANDLING ===

"That's expensive" →
- "Custom software is an investment that pays for itself. Many businesses spend more on monthly SaaS subscriptions that don't fit their needs."
- "You own the platform outright — no vendor lock-in, no forever subscription."
- "The project includes training and 90 days of support. After that, ongoing care is optional."
- "What's the cost of NOT solving this problem?"

"What happens after launch?" →
- "All projects include training, documentation, and 90 days of support for bug fixes and questions."
- "After that, you have three options: manage it yourself (you own everything), or continue with ongoing care — I can handle hosting, updates, and priority support."
- "The advantage is I already know your system. No ramp-up time if you need changes later."

"Why not use [generic software]?" →
- "Generic software is built for everyone, which means it fits no one perfectly."
- "Custom platforms are built around YOUR operations, YOUR workflows, YOUR data."
- "You own the code, so you're not locked into someone else's pricing or roadmap."

"I need to think about it" →
- "Totally understand. Would a free 30-minute consultation help clarify what you need?"
- Share the Calendly link: ${CALENDLY_LINK}

"Not sure what I need" →
- Ask: "Tell me about your business. What's the biggest operational challenge you're facing?"
- Ask: "Do you have users who need accounts? Data you need to track?"
- Listen first, then recommend Concept Site vs Platform based on their answers.

=== CRITICAL RULES FOR SENDING LEADS ===
- NEVER output LEAD_DATA until you have AT LEAST the person's name AND email
- NEVER output LEAD_DATA just because someone says "I'm interested"
- Only output LEAD_DATA after you have name + email + at least some project context
- If someone is ready to book a call, share the Calendly link: ${CALENDLY_LINK}

=== PAYMENT / NEXT STEPS ===
When someone is ready to move forward:
1. They can book a free 30-minute consultation: ${CALENDLY_LINK}
2. They can call Joel directly: (936) 299-9897
3. They can fill out the form on pineydigital.com

Do NOT provide payment links. All payments go through Joel after the consultation.

=== TONE ===
Professional, knowledgeable, helpful — not pushy. You're here to understand their needs and recommend the right solution. Ask questions first, suggest solutions after.

=== LEAD CAPTURE ===
ONLY after you have name + email, add this on a NEW LINE at the very end of your message:
LEAD_DATA:{"name":"...","email":"...","phone":"...","industry":"...","needsPlatform":"yes/no","locations":"1 or multiple","budget":"...","timeline":"...","referral":"...","project":"...","packageInterest":"concept/platform/enterprise/unsure","type":"lead or consultation"}

Use "" for any fields not yet collected. Phone is always optional.`;

const conversations = {};

app.post('/api/chat', async (req, res) => {
  const { message, sessionId } = req.body;
  if (!message || !sessionId) return res.status(400).json({ error: 'message and sessionId required' });

  if (!conversations[sessionId]) conversations[sessionId] = [];
  conversations[sessionId].push({ role: 'user', content: message });

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 1024,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...conversations[sessionId],
        ],
      }),
    });

    const data = await response.json();
    const assistantMessage = data.choices[0].message.content;
    conversations[sessionId].push({ role: 'assistant', content: assistantMessage });

    let leadData = null;
    let cleanMessage = assistantMessage;

    if (assistantMessage.includes('LEAD_DATA:')) {
      const parts = assistantMessage.split('LEAD_DATA:');
      cleanMessage = parts[0].trim();
      try {
        const parsed = JSON.parse(parts[1].trim());
        // Only send email if we actually have name + email
        if (parsed.name && parsed.name !== '' && parsed.email && parsed.email !== '') {
          leadData = parsed;
          console.log('New qualified lead:', leadData);
          await sendLeadEmail(leadData);
        } else {
          console.log('Lead data incomplete — email not sent yet');
        }
      } catch (e) { console.error('Lead parse error:', e); }
    }

    res.json({ message: cleanMessage, leadCaptured: !!leadData });
  } catch (error) {
    console.error('Groq API error:', error);
    res.status(500).json({ error: 'AI response failed' });
  }
});

async function sendLeadEmail(lead) {
  const isConsult = lead.type === 'consultation';

  const row = (label, value) => value
    ? `<tr><td style="padding:8px 0;color:#6b7280;font-size:13px;width:140px;">${label}</td><td style="padding:8px 0;color:#111827;font-weight:500;">${value}</td></tr>`
    : '';

  await resend.emails.send({
    from: `Piney Digital Assistant <${FROM_EMAIL}>`,
    to: YOUR_EMAIL,
    subject: isConsult
      ? `📅 Consultation Request — ${lead.name}`
      : `🎯 New Qualified Lead — ${lead.name}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:linear-gradient(135deg,#1e4d2b,#2d7a47);padding:24px;border-radius:12px 12px 0 0;">
          <h1 style="color:#fff;margin:0;font-size:20px;">🌲 Piney Digital — ${isConsult ? 'Consultation Request' : 'New Qualified Lead'}</h1>
          <p style="color:rgba(255,255,255,0.8);margin:6px 0 0;font-size:14px;">Collected by AI Assistant</p>
        </div>
        <div style="background:#f9fafb;padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px;">

          <h3 style="margin:0 0 12px;color:#1e4d2b;font-size:15px;">👤 Contact Info</h3>
          <table style="width:100%;border-collapse:collapse;background:#fff;padding:12px;border-radius:8px;border:1px solid #e5e7eb;">
            <tbody style="padding:12px;display:block;">
              ${row('Name', lead.name)}
              ${row('Email', `<a href="mailto:${lead.email}" style="color:#1e4d2b;">${lead.email}</a>`)}
              ${row('Phone', lead.phone ? `<a href="tel:${lead.phone}" style="color:#1e4d2b;">${lead.phone}</a>` : '')}
              ${row('Type', isConsult ? '📅 Consultation' : '💬 Quote Request')}
              ${row('Package Interest', lead.packageInterest)}
            </tbody>
          </table>

          <h3 style="margin:20px 0 12px;color:#1e4d2b;font-size:15px;">🏢 Business Info</h3>
          <table style="width:100%;border-collapse:collapse;background:#fff;padding:12px;border-radius:8px;border:1px solid #e5e7eb;">
            <tbody style="padding:12px;display:block;">
              ${row('Industry', lead.industry)}
              ${row('Has Website?', lead.hasWebsite)}
              ${row('Has Domain?', lead.hasDomain)}
              ${row('Budget', lead.budget)}
              ${row('Timeline', lead.timeline)}
              ${row('Heard via', lead.referral)}
            </tbody>
          </table>

          ${lead.project ? `
          <h3 style="margin:20px 0 12px;color:#1e4d2b;font-size:15px;">📋 Project Details</h3>
          <div style="background:#fff;padding:14px;border-radius:8px;border:1px solid #e5e7eb;">
            <p style="margin:0;line-height:1.6;color:#374151;">${lead.project}</p>
          </div>` : ''}

          <div style="text-align:center;margin-top:24px;display:flex;gap:12px;justify-content:center;">
            <a href="mailto:${lead.email}" style="background:#1e4d2b;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;">Reply to ${lead.name}</a>
            ${lead.phone ? `<a href="tel:${lead.phone}" style="background:#f0fdf4;color:#1e4d2b;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;border:1px solid #86efac;">Call ${lead.name}</a>` : ''}
          </div>

          <p style="color:#9ca3af;font-size:12px;text-align:center;margin-top:20px;">Sent from Piney Digital AI Assistant • pineydigital.com</p>
        </div>
      </div>`,
  });
  console.log(`✉️ Lead email sent: ${lead.name} (${lead.email})`);
}

// ── CONTACT FORM ENDPOINT ─────────────────────────────────────
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, package: packageType, budget, business, message, 'sms-consent': smsConsent } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  try {
    const row = (label, value) => value
      ? `<tr><td style="padding:8px 0;color:#6b7280;font-size:13px;width:140px;">${label}</td><td style="padding:8px 0;color:#111827;font-weight:500;">${value}</td></tr>`
      : '';

    // Handle both 'package' and 'budget' fields (web-dev form uses budget)
    const packageInterest = packageType || budget || '';

    await resend.emails.send({
      from: `Piney Digital Contact <${FROM_EMAIL}>`,
      to: YOUR_EMAIL,
      subject: `📬 New Contact Form Submission — ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:linear-gradient(135deg,#1e4d2b,#2d7a47);padding:24px;border-radius:12px 12px 0 0;">
            <h1 style="color:#fff;margin:0;font-size:20px;">🌲 Piney Digital — Contact Form</h1>
            <p style="color:rgba(255,255,255,0.8);margin:6px 0 0;font-size:14px;">New submission from pineydigital.com</p>
          </div>
          <div style="background:#f9fafb;padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px;">
            <h3 style="margin:0 0 12px;color:#1e4d2b;font-size:15px;">👤 Contact Info</h3>
            <table style="width:100%;border-collapse:collapse;background:#fff;padding:12px;border-radius:8px;border:1px solid #e5e7eb;">
              <tbody>
                ${row('Name', name)}
                ${row('Email', `<a href="mailto:${email}" style="color:#1e4d2b;">${email}</a>`)}
                ${row('Phone', phone ? `<a href="tel:${phone}" style="color:#1e4d2b;">${phone}</a>` : '')}
                ${row('Package/Budget', packageInterest)}
                ${row('Business', business)}
                ${row('SMS Consent', smsConsent === 'yes' ? '✅ Yes, opted in for SMS' : 'No')}
              </tbody>
            </table>
            <h3 style="margin:20px 0 12px;color:#1e4d2b;font-size:15px;">💬 Message</h3>
            <div style="background:#fff;padding:14px;border-radius:8px;border:1px solid #e5e7eb;">
              <p style="margin:0;line-height:1.6;color:#374151;white-space:pre-wrap;">${message}</p>
            </div>
            <div style="text-align:center;margin-top:24px;display:flex;gap:12px;justify-content:center;">
              <a href="mailto:${email}" style="background:#1e4d2b;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;">Reply to ${name}</a>
              ${phone ? `<a href="tel:${phone}" style="background:#f0fdf4;color:#1e4d2b;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;border:1px solid #86efac;">Call ${name}</a>` : ''}
            </div>
            <p style="color:#9ca3af;font-size:12px;text-align:center;margin-top:20px;">Sent from Piney Digital Contact Form • pineydigital.com</p>
          </div>
        </div>`,
    });
    console.log(`✉️ Contact form submitted: ${name} (${email})`);
    res.json({ success: true, message: 'Thanks! Joel will contact you within 24 hours.' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }
});

app.delete('/api/chat/:sessionId', (req, res) => {
  delete conversations[req.params.sessionId];
  res.json({ success: true });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`✅ Piney Digital AI running on port ${PORT}`));