import Script from "next/script";
import { publicEnv } from "@/lib/env";

/**
 * Renders nothing until NEXT_PUBLIC_COOKIEBOT_ID is set. Cookiebot's
 * auto-blocking mode then intercepts any script with
 * type="text/plain" data-cookieconsent="..." until consent is given.
 */
export function CookiebotScript() {
  if (!publicEnv.cookiebotId) return null;

  return (
    <Script
      id="Cookiebot"
      src="https://consent.cookiebot.com/uc.js"
      data-cbid={publicEnv.cookiebotId}
      data-blockingmode="auto"
      strategy="beforeInteractive"
    />
  );
}
