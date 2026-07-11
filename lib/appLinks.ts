// Central place to manage the mobile app store links.
// Update these two URLs whenever the store listings change.
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.developerodin.zuhouze&pcampaignid=web_share";
export const APP_STORE_URL =
  "https://apps.apple.com/in/app/zuhouze/id6753673142";

// Picks the correct store based on the visitor's device.
// iOS -> App Store, Android -> Play Store, everything else -> Play Store.
export function getAppDownloadUrl(): string {
  if (typeof navigator === "undefined") return PLAY_STORE_URL;

  const ua =
    navigator.userAgent ||
    (navigator as unknown as { vendor?: string }).vendor ||
    "";

  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    // iPadOS reports as MacIntel with touch support
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  if (isIOS) return APP_STORE_URL;
  if (/android/i.test(ua)) return PLAY_STORE_URL;

  return PLAY_STORE_URL;
}

// Opens the resolved store link in a new tab.
export function openAppDownload(): void {
  if (typeof window === "undefined") return;
  window.open(getAppDownloadUrl(), "_blank", "noopener,noreferrer");
}
