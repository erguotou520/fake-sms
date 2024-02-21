# fake-sms

Mock SMS server for testing SMS-based applications. It can be used to reduce enterprise costs in the test environment.

`fake-sms` is compatible for `Casdoor` [go-sms-sender](https://github.com/casdoor/go-sms-sender) by default.

Try it out at [https://fake-sms.erguotou.me](https://fake-sms.erguotou.me)

## ✨ Features

- Easy to use: Just create an application on our platform and configure the appId and appSecret in the `Casdoor` compatible SMS provider.
- ⏱️ Real-time: SMS content is pushed through websocket in real time.
- Cost-saving: No need to send real SMS messages in the test environment.

## How to Use

1. Login/Register on [https://fake-sms.erguotou.me](https://fake-sms.erguotou.me)

2. Create a new Application

3. Click the `Setting` icon on the bottom of your application, and save the `appId` and `appSecret` into your SMS provider's database, like below:

| Provider Name | App ID  | App Secret | Template |
|--------------|---------|------------| ---------|
| Infobip SMS | jOFwCWm0aYV21brgWnqbQ3lALXmoPAkX  | HgD7lCijmU68Nf6BDL3TNSwA27FQdf1JTxR40K0Gz07OmfuaxlcwZTX4R5PDJOzz  | Hello, your code is {code} |

> Note: The `Provider Name` must be `Infobip SMS` for now.

4. Use [casdoor/go-sms-sender](https://github.com/casdoor/go-sms-sender) based server to send SMS messages

5. Click the `Chat` icon on the bottom of your application which will show a shared message dashboard. Check the SMS messages sent by the server in the shared message dashboard.

## Clients

- [Chrome extension](https://ext.fake-sms.erguotou.me/chrome-mv3-prod). Download the zip file and extract it, then go to `chrome://extensions/` in your browser, enable developer mode, and load the extracted folder as an unpacked extension.
- [Microsoft Edge extension](https://ext.fake-sms.erguotou.me/edge-mv3-prod). Download the zip file and extract it, then go to `edge://extensions/` in your browser, enable developer mode, and load the extracted folder as an unpacked extension.
- [Shared message dashboard](https://fake-sms.erguotou.me/#/messages). If you just want to listen to your own phone messages, use the link [https://fake-sms.erguotou.me/#/messages?type=phones&topics=13800138000](https://fake-sms.erguotou.me/#/messages?type=phones&topics=13800138000)

## Development

We use `bun` to develop this project, so you need to install it first:

```bash
curl -fsSL https://bun.sh/install | bash
```

### Install dependencies

```bash 
bun install
```

### Run the server

```bash
cd packages/server
bun dev
```

### Run the web

```bash
cd packages/web
bun dev
```

### Run the extension

```bash
cd packages/chrome-ext
bun dev
```

## License

[MIT](./LICENSE)
