console.log('sw file in public folder');

self.addEventListener('push', function(event) {
    console.log('Push Notification received', event);
  
    var data;
  
    if (event.data) {
      data = JSON.parse(event.data.text());
    }
  
    var options = {
      body: data.notification.body,
      icon: './logo48.png',
      badge: './logo48.png',
      data: {
        url: '/notifications'
      }
    };
  
    event.waitUntil(
      this.registration.showNotification(data.notification.title, options)
    );
});

this.addEventListener('notificationclose', e => {
    console.log('notification closed', e);
});

self.addEventListener('notificationclose', e => {
    console.log('notification closed', e);
});