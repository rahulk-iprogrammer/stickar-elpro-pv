importScripts("https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js");

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../firebase-messaging-sw.js")
    .then(function (registration) {
      console.log("Registration successful, scope is:", registration.scope);
    })
    .catch(function (err) {
      console.log("Service worker registration failed, error:", err);
    });
}

firebase.initializeApp({
  messagingSenderId: "435204986350",
});

const messaging = firebase.messaging();

const merchant_id = 36;
const platform = 4;
const appVersion = 4.0;
const inAppTap = 0;

self.addEventListener("notificationclick", function (event) {
  const notification = event.notification;

  const params = new URLSearchParams({
    customer_id: notification.data.customer_id,
    unique_id: notification.data.unique_id,
    notification_type: 0,
    merchant_id: merchant_id,
    platform: platform,
    inAppTap: inAppTap,
  });

  fetch(`https://dev-api.technovatechnologys.com/setNotificationTapped`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  })
    .then((response) => response.json())
    .then((response) => {})
    .catch((err) => {
      console.log(err);
    });

  var urlToRedirect = event.notification.data.deep_link;
  if (urlToRedirect === "") {
    urlToRedirect = "/notifications/" + notification.data.unique_id;
  }
  // event.notification.close();
  // event.waitUntil(self.clients.openWindow(urlToRedirect));

  event.waitUntil(
    clients.matchAll().then(function (clis) {
      var client = clis.find(function (c) {
        return c.visibilityState === "visible";
      });

      if (client !== undefined) {
        client.navigate(urlToRedirect);
        client.focus();
      } else {
        clients.openWindow(urlToRedirect);
      }
      notification.close();
    })
  );
});

self.addEventListener("notificationclose", function (event) {
  console.log("Push Notification closed");
});

self.addEventListener("push", function (event) {
  var data;
  if (event.data) {
    data = JSON.parse(event.data.text());
  }

  if (data) {
    const params = new URLSearchParams({
      customer_id: data.data.customer_id,
      unique_id: data.data.unique_id,
      notification_type: 0,
      merchant_id: merchant_id,
      platform: platform,
    });

    fetch(`https://dev-api.technovatechnologys.com/setNotificationReceived`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    })
      .then((response) => response.json())
      .then((response) => {})
      .catch((err) => {
        console.log(err);
      });
  }
  if (data) {
    var options = {
      body: data.data.body,
      icon: "./logo48.png",
      badge: "./badge.png",
      vibrate: [100, 50, 100],
      data: {
        ...data.data,
      },
    };

    if (
      data.data.notification_image_url &&
      data.data.notification_image_url !== ""
    ) {
      options.image = data.data.notification_image_url;
    }

    event.waitUntil(
      self.registration.showNotification(data.data.title, options)
    );
    // if ("setAppBadge" in navigator) {
    //   navigator.clearAppBadge();
    //   console.log("clearAppBadge invoked");
    // }
  }
});
