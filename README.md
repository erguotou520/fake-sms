# fake-sms

Mock SMS server for testing SMS-based applications. Compatible for `Casdoor` [go-sms-sender](https://github.com/casdoor/go-sms-sender) by default.

## Usage

1. Login to fake-sms to get a token

```bash
curl -X POST http://localhost:7878/login -d '{"username": "admin", "password": "Pa$$wo2d"}'
# copy the token from the response
```

2. Create a new Application

```bash
curl -X POST http://localhost:7878/apps -H "Authorization: Bearer $TOKEN" -d '{"name": "TestApp"}'
# copy the app id and app secret from the response
```

3. Save the app id and app secret in your SMS provider's database, like below:

| Provider Name | App ID  | App Secret | Template |
|--------------|---------|------------| ---------|
| Infobip SMS | jOFwCWm0aYV21brgWnqbQ3lALXmoPAkX  | HgD7lCijmU68Nf6BDL3TNSwA27FQdf1JTxR40K0Gz07OmfuaxlcwZTX4R5PDJOzz  | Hello, your code is {code} |

4. Use [casdoor/go-sms-sender](https://github.com/casdoor/go-sms-sender) based server to send SMS messages

5. Check the SMS messages sent by the server in the fake-sms's shared message dashboard or App client

## Clients

- [Chrome extension]()
- [Shared message dashboard]()
- [Android app]()
- [iOS app]()

## Development

We use `bun` to develop the server, so you need to install it first:

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
bun start
```

## License

[MIT](https://github.com/erguotou/fake-sms/blob/main/LICENSE)
