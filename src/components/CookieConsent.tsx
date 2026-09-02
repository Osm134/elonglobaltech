import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type ConsentChoice = "accepted" | "rejected";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("elyon_cookie_consent");

      // Show banner only when the user has not made a choice
      if (!consent) {
        setVisible(true);
      }
    } catch (error) {
      // If localStorage is unavailable, still allow the website to work
      console.warn("Cookie consent storage unavailable:", error);
      setVisible(true);
    }
  }, []);

  const saveConsent = (choice: ConsentChoice) => {
    try {
      localStorage.setItem("elyon_cookie_consent", choice);
    } catch (error) {
      console.warn("Unable to save cookie preference:", error);
    }

    // IMPORTANT:
    // Always close the banner after either choice.
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6">
      <div
        className="max-w-6xl mx-auto border shadow-2xl"
        style={{
          background: "#0A1628",
          borderColor: "rgba(255,255,255,0.12)",
        }}
      >
        <div className="p-5 md:p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

            {/* Cookie information */}
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">🍪</span>

                <h2
                  className="text-base font-bold text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  We use cookies
                </h2>
              </div>

              <p
                className="text-sm leading-6"
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                We use cookies and similar technologies to support website
                functionality, remember preferences, and understand how our
                website is used. You can choose whether to accept optional
                cookies.
              </p>

              <div className="mt-3 flex flex-wrap gap-4">
                <Link
                  to="/privacy-policy"
                  className="text-xs underline underline-offset-4"
                  style={{
                    color: "#D4A017",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  Privacy Policy
                </Link>

                <Link
                  to="/terms-of-use"
                  className="text-xs underline underline-offset-4"
                  style={{
                    color: "#D4A017",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  Terms of Use
                </Link>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">

              {/* REJECT */}
              <button
                type="button"
                onClick={() => saveConsent("rejected")}
                className="px-5 py-3 text-xs font-semibold border transition-colors hover:bg-white/10"
                style={{
                  borderColor: "rgba(255,255,255,0.25)",
                  color: "rgba(255,255,255,0.85)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                Reject Optional
              </button>

              {/* ACCEPT */}
              <button
                type="button"
                onClick={() => saveConsent("accepted")}
                className="px-5 py-3 text-xs font-bold transition-opacity hover:opacity-90"
                style={{
                  background: "#D4A017",
                  color: "#0A1628",
                  fontFamily: "var(--font-heading)",
                }}
              >
                Accept All
              </button>
            </div>
          </div>
        </div>

        {/* Gold accent */}
        <div
          className="h-0.5 w-full"
          style={{ background: "#D4A017" }}
        />
      </div>
    </div>
  );
}