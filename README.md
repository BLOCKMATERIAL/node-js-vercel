## Purpose of Sentry.io Tunnel

One of the primary reasons for utilizing the Sentry.io tunnel service is to overcome potential issues caused by ad blockers. When ad blockers are enabled, they can interfere with the functioning of Sentry.io, potentially preventing it from capturing error data effectively. By routing requests through the Sentry.io tunnel, you mitigate the risk of interference from ad blockers, ensuring that Sentry.io can operate reliably and capture essential error and exception data from your application.

### Overview

This project is a Node.js tunnel service designed specifically for use with [Sentry.io](https://sentry.io/). It facilitates tunneling requests to Sentry.io for the project `nn-business`. Deployment is handled through Versel, and package management is done using Bun.


### Sentry Initialization Example

Here's an example of how to initialize Sentry in your JavaScript application, including specifying the tunnel URL:

```javascript
Sentry.init({
  dsn: 'example',
  tunnel: 'https://example.com/home/tunnel',
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  environment: process.env.REACT_APP_TYPE,
  release: APP_VERSION,
  tracesSampleRate: 1.0, 
  replaysSessionSampleRate: 0.1, 
  replaysOnErrorSampleRate: 1.0,
```

### Available Commands

- `start`: Run the server using `node index.js`.
- `test`: Currently, there are no specified tests.

### Endpoints

- **GET `/`**: Returns a JSON response indicating the health of the application.
- **GET `/tunnel`**: Returns a JSON response indicating the health of the `/tunnel` route.
- **POST `/tunnel`**: Endpoint for tunneling requests to Sentry.io. It parses the envelope, verifies the Sentry host, checks the project ID against known projects, and forwards the envelope to the appropriate Sentry project.

### Tests

Tests for the project are located in the `tests` directory:
- `tests/stress-get-tunnel.js`
- `tests/stress-post-tunnel.js`

These tests are designed for k6.
