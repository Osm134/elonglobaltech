
import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";

export default function TermsOfUse() {
  return (
    <>
      <Helmet>
        <title>Terms of Use — Elyon Global Technologies</title>

        <meta
          name="description"
          content="Terms of Use for Elyon Global Technologies."
        />

        <link
          rel="canonical"
          href="https://elyonglobaltech.com/terms-of-use"
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
              Terms of Use
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
              {/* 1. Acceptance of Terms */}
              <TermsSection number="1" title="Acceptance of Terms">
                <p>
                  Welcome to Elyon Global Technologies ("Company," "we,"
                  "our," or "us"). These Terms of Use ("Terms") govern your
                  access to and use of our website,
                  {" "}
                  <a
                    href="https://www.elyonglobaltech.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                    style={{ color: "#B4860B" }}
                  >
                    www.elyonglobaltech.com
                  </a>
                  {" "}
                  (the "Website"), and the services offered through it.
                </p>

                <p>
                  By accessing or using the Website, you acknowledge that you
                  have read, understood, and agree to be bound by these Terms.
                  If you do not agree to these Terms, please do not use the
                  Website.
                </p>

                <p>
                  You agree to use this Website only for lawful purposes and
                  in accordance with these Terms.
                </p>

                <p>You agree not to:</p>

                <BulletList
                  items={[
                    "Violate any applicable law or regulation.",
                    "Upload malicious software or harmful code.",
                    "Attempt to gain unauthorized access to our systems.",
                    "Interfere with the Website's functionality or security.",
                    "Use automated tools to scrape or extract data without our written permission.",
                    "Submit false, misleading, or fraudulent information.",
                    "Impersonate another person or organization.",
                  ]}
                />
              </TermsSection>

              {/* 2. About Us */}
              <TermsSection number="2" title="About Us">
                <p>
                  Elyon Global Technologies is a staffing, recruitment,
                  consulting, and workforce solutions company providing
                  services including, but not limited to:
                </p>

                <BulletList
                  items={[
                    "IT Staffing",
                    "Non-IT Staffing",
                    "Executive Search",
                    "Recruitment Process Support",
                    "Workforce Solutions",
                    "Talent Acquisition",
                    "Recruitment Consulting",
                    "Professional Consulting Services",
                  ]}
                />
              </TermsSection>

              {/* 3. Eligibility */}
              <TermsSection number="3" title="Eligibility">
                <p>
                  You must be at least 18 years old and legally capable of
                  entering into binding agreements to use this Website.
                </p>

                <p>
                  By using the Website, you represent and warrant that you
                  meet these requirements.
                </p>
              </TermsSection>

              {/* 4. Website Use */}
              <TermsSection number="4" title="Website Use">
                <p>
                  You agree to use this Website only for lawful purposes and
                  in accordance with these Terms.
                </p>

                <p>You agree not to:</p>

                <BulletList
                  items={[
                    "Violate any applicable law or regulation.",
                    "Upload malicious software or harmful code.",
                    "Attempt to gain unauthorized access to our systems.",
                    "Interfere with the Website's functionality or security.",
                    "Use automated tools to scrape or extract data without our written permission.",
                    "Submit false, misleading, or fraudulent information.",
                    "Impersonate another person or organization.",
                  ]}
                />
              </TermsSection>

              {/* 5. Job Applications */}
              <TermsSection number="5" title="Job Applications">
                <p>
                  Candidates may submit resumes, employment histories, and
                  other information through our Website.
                </p>

                <p>By submitting an application, you:</p>

                <BulletList
                  items={[
                    "Confirm that the information provided is accurate and complete.",
                    "Authorize us to review your qualifications for current and future employment opportunities.",
                    "Understand that submission of an application does not guarantee employment or placement.",
                    "Acknowledge that hiring decisions are made by our clients or by Elyon Global Technologies, as applicable.",
                  ]}
                />
              </TermsSection>

              {/* 6. Client Services */}
              <TermsSection number="6" title="Client Services">
                <p>
                  Organizations requesting staffing or consulting services
                  agree to provide accurate information regarding their
                  workforce requirements.
                </p>

                <p>
                  The scope, fees, timelines, and deliverables for staffing or
                  consulting engagements will be governed by separate written
                  agreements between the parties.
                </p>
              </TermsSection>

              {/* 7. Intellectual Property */}
              <TermsSection number="7" title="Intellectual Property">
                <p>
                  All content on this Website, including but not limited to:
                </p>

                <BulletList
                  items={[
                    "Text",
                    "Graphics",
                    "Logos",
                    "Icons",
                    "Images",
                    "Software",
                    "Layouts",
                    "Designs",
                    "Documents",
                    "Branding",
                  ]}
                />

                <p>
                  is owned by or licensed to Elyon Global Technologies and is
                  protected by applicable intellectual property laws.
                </p>

                <p>
                  You may not reproduce, modify, distribute, publish, or
                  commercially exploit any content without our prior written
                  consent.
                </p>
              </TermsSection>

              {/* 8. User Content */}
              <TermsSection number="8" title="User Content">
                <p>
                  If you submit resumes, comments, inquiries, or other
                  materials through the Website, you grant Elyon Global
                  Technologies a non-exclusive, worldwide, royalty-free license
                  to use, store, process, and share such information as
                  necessary to provide recruitment and consulting services,
                  subject to our Privacy Policy.
                </p>

                <p>
                  You remain responsible for ensuring that any content you
                  submit is lawful and does not infringe the rights of others.
                </p>
              </TermsSection>

              {/* 9. Privacy */}
              <TermsSection number="9" title="Privacy">
                <p>
                  Your use of the Website is also governed by our Privacy
                  Policy, which explains how we collect, use, and protect your
                  personal information.
                </p>

                <Link
                  to="/privacy-policy"
                  className="inline-block mt-2 font-semibold underline underline-offset-4"
                  style={{ color: "#B4860B" }}
                >
                  View Privacy Policy
                </Link>
              </TermsSection>

              {/* 10. Third-Party Links */}
              <TermsSection number="10" title="Third-Party Links">
                <p>
                  Our Website may contain links to third-party websites for
                  your convenience.
                </p>

                <p>
                  We do not control or endorse these websites and are not
                  responsible for their content, policies, or practices.
                  Accessing third-party websites is at your own risk.
                </p>
              </TermsSection>

              {/* 11. Disclaimer of Warranties */}
              <TermsSection number="11" title="Disclaimer of Warranties">
                <p>
                  The Website and its content are provided on an "as is" and
                  "as available" basis.
                </p>

                <p>
                  To the fullest extent permitted by law, Elyon Global
                  Technologies disclaims all warranties, whether express or
                  implied, including warranties of merchantability, fitness for
                  a particular purpose, and non-infringement.
                </p>

                <p>We do not guarantee that:</p>

                <BulletList
                  items={[
                    "The Website will operate without interruption or errors.",
                    "Job opportunities or staffing requests will always be available.",
                    "Information on the Website is complete, accurate, or current.",
                    "The Website will be free of viruses or other harmful components.",
                  ]}
                />
              </TermsSection>

              {/* 12. Limitation of Liability */}
              <TermsSection number="12" title="Limitation of Liability">
                <p>
                  To the fullest extent permitted by applicable law, Elyon
                  Global Technologies, its directors, officers, employees,
                  affiliates, and agents shall not be liable for any indirect,
                  incidental, consequential, special, or punitive damages
                  arising out of or related to your use of the Website or
                  services.
                </p>

                <p>
                  Our total liability for any claim arising under these Terms
                  shall not exceed the amount, if any, paid by you directly to
                  Elyon Global Technologies for the applicable services giving
                  rise to the claim.
                </p>
              </TermsSection>

              {/* 13. Indemnification */}
              <TermsSection number="13" title="Indemnification">
                <p>
                  You agree to indemnify, defend, and hold harmless Elyon
                  Global Technologies and its affiliates, employees, officers,
                  directors, and representatives from any claims, liabilities,
                  damages, losses, costs, or expenses arising from:
                </p>

                <BulletList
                  items={[
                    "Your use of the Website.",
                    "Your violation of these Terms.",
                    "Your infringement of any third-party rights.",
                    "Any information or materials you submit through the Website.",
                  ]}
                />
              </TermsSection>

              {/* 14. Suspension or Termination */}
              <TermsSection number="14" title="Suspension or Termination">
                <p>
                  We reserve the right to suspend or terminate your access to
                  the Website, without prior notice, if we believe you have
                  violated these Terms or applicable laws.
                </p>
              </TermsSection>

              {/* 15. Governing Law and Jurisdiction */}
              <TermsSection
                number="15"
                title="Governing Law and Jurisdiction"
              >
                <p>
                  These Terms shall be governed by and construed in accordance
                  with the laws of India, without regard to conflict of law
                  principles.
                </p>

                <p>
                  Any disputes arising out of or relating to these Terms or
                  your use of the Website shall be subject to the exclusive
                  jurisdiction of the courts located in Hyderabad, Telangana,
                  India.
                </p>
              </TermsSection>

              {/* 16. Changes to These Terms */}
              <TermsSection number="16" title="Changes to These Terms">
                <p>
                  We may revise these Terms from time to time.
                </p>

                <p>
                  Any changes will become effective upon posting on this
                  Website. Continued use of the Website after changes are
                  posted constitutes your acceptance of the revised Terms.
                </p>
              </TermsSection>

              {/* 17. Contact Information */}
              <TermsSection number="17" title="Contact Information">
                <p>
                  For questions regarding these Terms of Use, please contact
                  us:
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
              </TermsSection>

              {/* Acknowledgment */}
              <section
                className="p-8 border-l-4"
                style={{
                  background: "#F0F4F8",
                  borderColor: "#D4A017",
                }}
              >
                <h2
                  className="text-xl md:text-2xl font-bold mb-4"
                  style={{
                    color: "#0A1628",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Acknowledgment
                </h2>

                <p
                  className="text-sm md:text-base leading-8"
                  style={{ color: "#4A5568" }}
                >
                  By accessing or using this Website, you acknowledge that you
                  have read, understood, and agree to be bound by these Terms
                  of Use.
                </p>
              </section>

              {/* Back */}
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
   SECTION COMPONENT
========================================================= */

function TermsSection({
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

