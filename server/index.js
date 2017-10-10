const webpush = require('web-push');

webpush.setGCMAPIKey('<Your API key>');

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
	"endpoint": "https://android.googleapis.com/gcm/send/…",
	"keys": {
		"p256dh": "…",
		"auth":"…"
	}
};

const notification = {"notification":{"title":"foobarx","body":"foobario","tag":"foo","icon":"assets/launcher-icon-3x.png"}};
webpush.sendNotification(pushSubscription, JSON.stringify(notification))
.catch(err => console.log(err));