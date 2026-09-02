
import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — Elyon Global Technologies</title>

        <meta
          name="description"
          content="Privacy Policy of Elyon Global Technologies."
        />

        <link
          rel="canonical"
          href="https://elyonglobaltech.com/privacy-policy"
        />
      </Helmet>

      <main className="bg-white">
        {/* =========================================================
            HERO
        ========================================================= */}
        <section
          className="relative py-20 overflow-hidden"
          style={{ background: "#0A1628" }}
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(212,160,23,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{
                color: "#D4A017",
                fontFamily: "var(--font-heading)",
              }}
            >
              Legal
            </p>

            <h1
              className="text-4xl md:text-5xl font-extrabold text-white mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Privacy Policy
            </h1>

            <p
              className="text-sm md:text-base"
              style={{
                color: "rgba(255,255,255,0.65)",
                fontFamily: "var(--font-sans)",
              }}
            >
              Effective Date: July 23, 2026
            </p>
          </div>
        </section>

        {/* =========================================================
            CONTENT
        ========================================================= */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <article
              className="space-y-12"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {/* Introduction */}
              <section>
                <h2
                  className="text-2xl md:text-3xl font-extrabold mb-6"
                  style={{
                    color: "#0A1628",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Privacy Policy of Elyon Global Technologies
                </h2>

                <div
                  className="space-y-5 text-sm md:text-base leading-8"
                  style={{ color: "#4A5568" }}
                >
                  <p>
                    Welcome to Elyon Global Technologies ("Company," "we,"
                    "our," or "us").
                  </p>

                  <p>
                    We respect your privacy and are committed to protecting the
                    personal information you share with us.
                  </p>

                  <p>
                    This Privacy Policy explains how we collect, use, disclose,
                    and safeguard your information when you visit{" "}
                    <a
                      href="https://www.elyonglobaltech.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                      style={{ color: "#B4860B" }}
                    >
                      www.elyonglobaltech.com
                    </a>
                    , use our services, apply for employment opportunities, or
                    communicate with us.
                  </p>

                  <p>
                    By using our website, you agree to the terms of this
                    Privacy Policy.
                  </p>
                </div>
              </section>

              {/* 1. Information We Collect */}
              <PrivacySection number="1" title="Information We Collect">
                <p>
                  We may collect the following categories of information:
                </p>

                <SubHeading>Personal Information</SubHeading>

                <p>
                  When you contact us, submit your resume, request staffing
                  services, or apply for jobs, we may collect:
                </p>

                <BulletList
                  items={[
                    "Full Name",
                    "Email Address",
                    "Phone Number",
                    "Mailing Address",
                    "Resume/CV",
                    "Employment History",
                    "Educational Qualifications",
                    "Skills and Certifications",
                    "LinkedIn Profile",
                    "References (if provided)",
                    "Work Authorization Status",
                    "Salary Expectations",
                    "Other employment-related information",
                  ]}
                />

                <SubHeading>Business Information</SubHeading>

                <p>For clients and business partners, we may collect:</p>

                <BulletList
                  items={[
                    "Company Name",
                    "Business Address",
                    "Contact Details",
                    "Billing Information",
                    "Tax Information",
                    "Vendor Documentation",
                  ]}
                />

                <SubHeading>Technical Information</SubHeading>

                <p>
                  When you browse our website, we may automatically collect:
                </p>

                <BulletList
                  items={[
                    "IP Address",
                    "Browser Type",
                    "Device Information",
                    "Operating System",
                    "Date and Time of Visit",
                    "Pages Visited",
                    "Referring Website",
                    "Website Usage Statistics",
                  ]}
                />
              </PrivacySection>

              {/* 2. How We Use Your Information */}
              <PrivacySection
                number="2"
                title="How We Use Your Information"
              >
                <p>We use your information to:</p>

                <BulletList
                  items={[
                    "Provide recruitment and staffing services",
                    "Match candidates with employers",
                    "Process employment applications",
                    "Communicate regarding job opportunities",
                    "Respond to inquiries",
                    "Provide consulting services",
                    "Improve our website",
                    "Send newsletters or marketing communications (where permitted)",
                    "Meet legal and regulatory obligations",
                    "Prevent fraud and protect our business",
                  ]}
                />
              </PrivacySection>

              {/* 3. Recruitment Services */}
              <PrivacySection number="3" title="Recruitment Services">
                <p>If you submit your resume:</p>

                <p>We may:</p>

                <BulletList
                  items={[
                    "Review your qualifications",
                    "Contact you regarding employment opportunities",
                    "Share your resume with prospective employers only with appropriate authorization or as required for recruitment purposes",
                    "Maintain your profile in our recruitment database for future opportunities",
                  ]}
                />

                <p>
                  You may request removal of your information at any time by
                  contacting us.
                </p>
              </PrivacySection>

              {/* 4. Cookies and Tracking Technologies */}
              <PrivacySection
                number="4"
                title="Cookies and Tracking Technologies"
              >
                <p>Our website may use:</p>

                <BulletList
                  items={[
                    "Cookies",
                    "Analytics tools",
                    "Session cookies",
                    "Performance cookies",
                  ]}
                />

                <p>These technologies help us:</p>

                <BulletList
                  items={[
                    "Improve website performance",
                    "Understand visitor behavior",
                    "Enhance user experience",
                  ]}
                />

                <p>
                  You may disable cookies through your browser settings.
                </p>
              </PrivacySection>

              {/* 5. How We Share Information */}
              <PrivacySection
                number="5"
                title="How We Share Information"
              >
                <p>
                  <strong>We do not sell your personal information.</strong>
                </p>

                <p>We may share information with:</p>

                <BulletList
                  items={[
                    "Hiring clients",
                    "Business partners",
                    "Background verification providers",
                    "Payroll providers",
                    "Cloud hosting providers",
                    "Government authorities when legally required",
                    "Legal advisors",
                    "Service providers assisting our operations",
                  ]}
                />

                <p>
                  All third parties are expected to maintain appropriate
                  confidentiality and security.
                </p>
              </PrivacySection>

              {/* 6. Data Security */}
              <PrivacySection number="6" title="Data Security">
                <p>
                  We implement reasonable administrative, technical, and
                  organizational safeguards designed to protect your personal
                  information from unauthorized access, disclosure, alteration,
                  or destruction.
                </p>

                <p>
                  However, no method of electronic transmission or storage is
                  completely secure, and we cannot guarantee absolute
                  security.
                </p>
              </PrivacySection>

              {/* 7. Data Retention */}
              <PrivacySection number="7" title="Data Retention">
                <p>
                  We retain personal information only as long as necessary to:
                </p>

                <BulletList
                  items={[
                    "Provide our services",
                    "Maintain recruitment records",
                    "Comply with legal obligations",
                    "Resolve disputes",
                    "Enforce agreements",
                  ]}
                />

                <p>
                  When no longer required, personal information is securely
                  deleted or anonymized.
                </p>
              </PrivacySection>

              {/* 8. Your Privacy Rights */}
              <PrivacySection number="8" title="Your Privacy Rights">
                <p>
                  Depending on your jurisdiction, you may have the right to:
                </p>

                <BulletList
                  items={[
                    "Access your personal information",
                    "Correct inaccurate information",
                    "Request deletion",
                    "Withdraw consent",
                    "Restrict processing",
                    "Object to processing",
                    "Request data portability",
                  ]}
                />

                <p>
                  To exercise these rights, contact us using the information
                  below.
                </p>
              </PrivacySection>

              {/* 9. International Data Transfers */}
              <PrivacySection
                number="9"
                title="International Data Transfers"
              >
                <p>
                  As a global staffing and consulting company, we may process
                  and transfer personal information across countries where we
                  operate or where our clients are located.
                </p>

                <p>
                  We take reasonable measures to ensure that such transfers
                  comply with applicable data protection laws.
                </p>
              </PrivacySection>

              {/* 10. Third-Party Websites */}
              <PrivacySection number="10" title="Third-Party Websites">
                <p>
                  Our website may contain links to third-party websites.
                </p>

                <p>
                  We are not responsible for their privacy practices or
                  content. Users should review the privacy policies of those
                  websites independently.
                </p>
              </PrivacySection>

              {/* 11. Children's Privacy */}
              <PrivacySection number="11" title="Children's Privacy">
                <p>
                  Our website and services are intended for individuals aged
                  18 years or older.
                </p>

                <p>
                  We do not knowingly collect personal information from
                  children.
                </p>
              </PrivacySection>

              {/* 12. Marketing Communications */}
              <PrivacySection
                number="12"
                title="Marketing Communications"
              >
                <p>If you subscribe to our communications, we may send:</p>

                <BulletList
                  items={[
                    "Job opportunities",
                    "Company updates",
                    "Industry insights",
                    "Recruitment news",
                  ]}
                />

                <p>
                  You may unsubscribe at any time using the unsubscribe link or
                  by contacting us.
                </p>
              </PrivacySection>

              {/* 13. Changes to This Privacy Policy */}
              <PrivacySection
                number="13"
                title="Changes to This Privacy Policy"
              >
                <p>We may update this Privacy Policy periodically.</p>

                <p>
                  Changes become effective upon posting on this page. We
                  encourage users to review this policy regularly.
                </p>
              </PrivacySection>

              {/* 14. Contact Us */}
              <PrivacySection number="14" title="Contact Us">
                <p>
                  If you have questions regarding this Privacy Policy or wish
                  to exercise your privacy rights, please contact us:
                </p>

                <div className="mt-6 p-6 border border-slate-200 bg-slate-50 space-y-3">
                  <p>
                    <strong>Elyon Global Technologies</strong>
                  </p>

                  <p>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://elyonglobaltech.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                      style={{ color: "#B4860B" }}
                    >
                      https://elyonglobaltech.com
                    </a>
                  </p>

                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:admin@elyonglobaltech.com"
                      className="underline"
                      style={{ color: "#B4860B" }}
                    >
                      admin@elyonglobaltech.com
                    </a>
                  </p>

                  <p>
                    <strong>Phone:</strong> +91-9441454411
                  </p>

                  <div>
                    <strong>Office Address:</strong>

                    <p className="mt-1 leading-7">
                      Office 18 &amp; 19, Archana Enclave
                      <br />
                      East Marredpally
                      <br />
                      Secunderabad – 500026
                      <br />
                      Telangana, India
                    </p>
                  </div>
                </div>
              </PrivacySection>

              {/* 15. Consent */}
              <section
                className="p-8 border-l-4"
                style={{
                  background: "#F0F4F8",
                  borderColor: "#D4A017",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex items-center justify-center w-9 h-9 shrink-0 text-xs font-bold"
                    style={{
                      background: "#0A1628",
                      color: "#D4A017",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    15
                  </div>

                  <div>
                    <h2
                      className="text-xl md:text-2xl font-bold mb-4"
                      style={{
                        color: "#0A1628",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      Consent
                    </h2>

                    <p
                      className="text-sm md:text-base leading-8"
                      style={{ color: "#4A5568" }}
                    >
                      By accessing or using our website, submitting your
                      information, applying for employment opportunities, or
                      engaging our services, you acknowledge that you have
                      read, understood, and agree to this Privacy Policy.
                    </p>
                  </div>
                </div>
              </section>

              {/* Back to Home */}
              <div className="pt-4">
                <Link
                  to="/"
                  className="inline-flex items-center px-6 py-3 text-sm font-bold transition-opacity hover:opacity-90"
                  style={{
                    background: "#D4A017",
                    color: "#0A1628",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Back to Home
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

/* =========================================================
   PRIVACY SECTION
========================================================= */

function PrivacySection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex items-start gap-4 mb-5">
        <div
          className="flex items-center justify-center w-9 h-9 shrink-0 text-xs font-bold"
          style={{
            background: "#0A1628",
            color: "#D4A017",
            fontFamily: "var(--font-heading)",
          }}
        >
          {number}
        </div>

        <h2
          className="text-xl md:text-2xl font-bold pt-1"
          style={{
            color: "#0A1628",
            fontFamily: "var(--font-heading)",
          }}
        >
          {title}
        </h2>
      </div>

      <div
        className="ml-0 md:ml-[52px] space-y-5 text-sm md:text-base leading-8"
        style={{ color: "#4A5568" }}
      >
        {children}
      </div>
    </section>
  );
}

/* =========================================================
   SUB HEADING
========================================================= */

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-base md:text-lg font-bold pt-2"
      style={{
        color: "#0A1628",
        fontFamily: "var(--font-heading)",
      }}
    >
      {children}
    </h3>
  );
}

/* =========================================================
   BULLET LIST
========================================================= */

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 list-disc pl-6">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
