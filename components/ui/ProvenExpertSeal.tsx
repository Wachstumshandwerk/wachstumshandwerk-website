"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    loadProSeal?: () => void;
    provenExpert?: {
      proSeal: (config: Record<string, unknown>) => void;
    };
  }
}

export function ProvenExpertSeal() {
  useEffect(() => {
    window.loadProSeal = function () {
      window.provenExpert?.proSeal({
        widgetId: "0ae7ed70-f609-4073-a73f-a8b5eb4393a4",
        language: "de-DE",
        usePageLanguage: false,
        bannerColor: "#444444",
        textColor: "#FFFFFF",
        showReviews: true,
        hideDate: true,
        hideName: false,
        hideOnMobile: false,
        bottom: "32px",
        stickyToSide: "right",
        googleStars: false,
        zIndex: "9999",
        displayReviewerLastName: false,
      });
    };

    function init() {
      if (document.getElementById("proSeal")) return;
      const script = document.createElement("script");
      script.id = "proSeal";
      script.src = "https://s.provenexpert.net/seals/proseal-v2.js";
      script.async = true;
      script.onload = () => window.loadProSeal?.();
      document.head.appendChild(script);
    }

    if (document.readyState === "complete") {
      init();
    } else {
      window.addEventListener("load", init);
      return () => window.removeEventListener("load", init);
    }
  }, []);

  return (
    <noscript>
      <a
        href="https://www.provenexpert.com/enver-ilhan/?utm_source=seals&utm_campaign=proseal&utm_medium=profile&utm_content=0ae7ed70-f609-4073-a73f-a8b5eb4393a4"
        target="_blank"
        title="Customer reviews & experiences for Enver Ilhan"
        className="pe-pro-seal-more-infos"
        rel="nofollow noreferrer"
      >
        More info
      </a>
    </noscript>
  );
}
