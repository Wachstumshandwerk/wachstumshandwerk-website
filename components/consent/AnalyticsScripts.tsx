import Script from "next/script";
import { publicEnv } from "@/lib/env";

/**
 * GA4 and Meta Pixel, both gated behind Cookiebot consent via
 * type="text/plain" + data-cookieconsent. Cookiebot's uc.js (see
 * CookiebotScript) swaps the script type to executable once the
 * visitor grants the matching consent category. Renders nothing for
 * an ID that isn't set, so the site works fine before real IDs exist.
 */
export function AnalyticsScripts() {
  return (
    <>
      {publicEnv.gaId && (
        <>
          <Script
            type="text/plain"
            data-cookieconsent="statistics"
            src={`https://www.googletagmanager.com/gtag/js?id=${publicEnv.gaId}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga4-init"
            type="text/plain"
            data-cookieconsent="statistics"
            strategy="afterInteractive"
          >
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${publicEnv.gaId}');
            `}
          </Script>
        </>
      )}

      {publicEnv.metaPixelId && (
        <Script
          id="meta-pixel-init"
          type="text/plain"
          data-cookieconsent="marketing"
          strategy="afterInteractive"
        >
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${publicEnv.metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
