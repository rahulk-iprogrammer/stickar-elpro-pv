// import { openAlertBox } from "./common/AlertMessage/AlertMessage";

export default {
  onUpdate: (registration) => {
    registration.unregister();
    window.location.reload();
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: "SKIP_WAITING" });
      window.location.reload();
      registration.skipWaiting(() => window.location.reload());
    }
    registration.skipWaiting();
  },
  onSuccess: (registration) => {
    console.info("service worker on success state");
  },
};
