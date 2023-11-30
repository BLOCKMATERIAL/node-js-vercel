import http from 'k6/http';
import { sleep } from 'k6';


export const options = {
  vus: 100,
  duration: '10m',
  ext: {
    loadimpact: {
      projectID: 3671914,
      name: 'Post Stress Test Tunnel'
    }
  }
};

export default function() {
  const url = 'https://node-js-vercel-eight.vercel.app/home/tunnel'
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  http.post(url, JSON.stringify(PAYLOAD_INIT), params);
  sleep(1);
}



export const PAYLOAD_INIT = [
  {
    "event_id": "bb3ac5c101ae4fdd806869aae5b62130",
    "sent_at": "2023-11-30T19:28:04.570Z",
    "sdk": {
      "name": "sentry.javascript.react",
      "version": "7.83.0"
    },
    "dsn": "https://484d2aa7c6ba0c6822951d5c9881f132@o4506184016658432.ingest.sentry.io/4506308538204160",
    "trace": {
      "environment": "dev",
      "release": "1.0.7",
      "public_key": "484d2aa7c6ba0c6822951d5c9881f132",
      "trace_id": "59b9c743c7354f49871717b9d91e3535",
      "sample_rate": "1",
      "sampled": "true"
    }
  },
  {
    "type": "transaction"
  },
  {
    "contexts": {
      "trace": {
        "op": "pageload",
        "span_id": "b4b3d04d63bc23cc",
        "tags": {
          "effectiveConnectionType": "4g",
          "deviceMemory": "8 GB",
          "hardwareConcurrency": "10"
        },
        "trace_id": "59b9c743c7354f49871717b9d91e3535",
        "origin": "auto.pageload.browser"
      }
    },
    "spans": [
      {
        "description": "Main UI thread blocked",
        "op": "ui.long-task",
        "parent_span_id": "b4b3d04d63bc23cc",
        "span_id": "80f18abd3ee45467",
        "start_timestamp": 1701372472.5566,
        "timestamp": 1701372472.6106,
        "trace_id": "59b9c743c7354f49871717b9d91e3535",
        "origin": "auto.ui.browser.metrics"
      },
      {
        "description": "Main UI thread blocked",
        "op": "ui.long-task",
        "parent_span_id": "b4b3d04d63bc23cc",
        "span_id": "a9625cce945741dd",
        "start_timestamp": 1701372483.4831998,
        "timestamp": 1701372483.5681999,
        "trace_id": "59b9c743c7354f49871717b9d91e3535",
        "origin": "auto.ui.browser.metrics"
      },
      {
        "description": "Main UI thread blocked",
        "op": "ui.long-task",
        "parent_span_id": "b4b3d04d63bc23cc",
        "span_id": "be2951bebb1b577b",
        "start_timestamp": 1701372483.8274002,
        "timestamp": 1701372483.9434001,
        "trace_id": "59b9c743c7354f49871717b9d91e3535",
        "origin": "auto.ui.browser.metrics"
      },
      {
        "description": "unloadEvent",
        "op": "browser",
        "parent_span_id": "b4b3d04d63bc23cc",
        "span_id": "b5f41c181279f5ea",
        "start_timestamp": 1701372472.5412002,
        "timestamp": 1701372472.5412002,
        "trace_id": "59b9c743c7354f49871717b9d91e3535",
        "origin": "auto.browser.browser.metrics"
      },
      {
        "description": "domContentLoadedEvent",
        "op": "browser",
        "parent_span_id": "b4b3d04d63bc23cc",
        "span_id": "9b700c91ccf490bd",
        "start_timestamp": 1701372483.5682,
        "timestamp": 1701372483.5687,
        "trace_id": "59b9c743c7354f49871717b9d91e3535",
        "origin": "auto.browser.browser.metrics"
      },
      {
        "description": "connect",
        "op": "browser",
        "parent_span_id": "b4b3d04d63bc23cc",
        "span_id": "b8fb07cbf0aca2da",
        "start_timestamp": 1701372471.9799001,
        "timestamp": 1701372471.9799001,
        "trace_id": "59b9c743c7354f49871717b9d91e3535",
        "origin": "auto.browser.browser.metrics"
      },
      {
        "description": "TLS/SSL",
        "op": "browser",
        "parent_span_id": "b4b3d04d63bc23cc",
        "span_id": "b609433d0a614d94",
        "start_timestamp": 1701372471.9799001,
        "timestamp": 1701372471.9799001,
        "trace_id": "59b9c743c7354f49871717b9d91e3535",
        "origin": "auto.browser.browser.metrics"
      },
      {
        "description": "cache",
        "op": "browser",
        "parent_span_id": "b4b3d04d63bc23cc",
        "span_id": "bf89bda97d156b2f",
        "start_timestamp": 1701372471.9799001,
        "timestamp": 1701372471.9799001,
        "trace_id": "59b9c743c7354f49871717b9d91e3535",
        "origin": "auto.browser.browser.metrics"
      },
      {
        "description": "DNS",
        "op": "browser",
        "parent_span_id": "b4b3d04d63bc23cc",
        "span_id": "a77d2f9caeb9ee32",
        "start_timestamp": 1701372471.9799001,
        "timestamp": 1701372471.9799001,
        "trace_id": "59b9c743c7354f49871717b9d91e3535",
        "origin": "auto.browser.browser.metrics"
      },
      {
        "description": "request",
        "op": "browser",
        "parent_span_id": "b4b3d04d63bc23cc",
        "span_id": "8ae5aa903bf0358a",
        "start_timestamp": 1701372471.993,
        "timestamp": 1701372472.8806,
        "trace_id": "59b9c743c7354f49871717b9d91e3535",
        "origin": "auto.browser.browser.metrics"
      },
      {
        "description": "response",
        "op": "browser",
        "parent_span_id": "b4b3d04d63bc23cc",
        "span_id": "b636070aef04468c",
        "start_timestamp": 1701372472.5301,
        "timestamp": 1701372472.8806,
        "trace_id": "59b9c743c7354f49871717b9d91e3535",
        "origin": "auto.browser.browser.metrics"
      },
      {
        "data": {
          "http.response_transfer_size": 3059084,
          "http.response_content_length": 3058784,
          "http.decoded_response_content_length": 3058784,
          "resource.render_blocking_status": "non-blocking"
        },
        "description": "/static/js/main.7ed51323.js",
        "op": "resource.script",
        "parent_span_id": "b4b3d04d63bc23cc",
        "span_id": "94de29e34650388b",
        "start_timestamp": 1701372472.5453,
        "timestamp": 1701372483.4607,
        "trace_id": "59b9c743c7354f49871717b9d91e3535",
        "origin": "auto.resource.browser.metrics"
      },
      {
        "data": {
          "http.response_transfer_size": 170212,
          "http.response_content_length": 169912,
          "http.decoded_response_content_length": 169912,
          "resource.render_blocking_status": "blocking"
        },
        "description": "/static/css/main.c96dbf87.css",
        "op": "resource.link",
        "parent_span_id": "b4b3d04d63bc23cc",
        "span_id": "8c5a5306a1c43044",
        "start_timestamp": 1701372472.5455,
        "timestamp": 1701372475.6675,
        "trace_id": "59b9c743c7354f49871717b9d91e3535",
        "origin": "auto.resource.browser.metrics"
      },
      {
        "data": {
          "http.response_transfer_size": 887,
          "http.response_content_length": 587,
          "http.decoded_response_content_length": 7954,
          "resource.render_blocking_status": "blocking"
        },
        "description": "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap",
        "op": "resource.css",
        "parent_span_id": "b4b3d04d63bc23cc",
        "span_id": "a8bd7462c6371f2d",
        "start_timestamp": 1701372475.6734002,
        "timestamp": 1701372475.7195,
        "trace_id": "59b9c743c7354f49871717b9d91e3535",
        "origin": "auto.resource.browser.metrics"
      },
      {
        "description": "first-paint",
        "op": "paint",
        "parent_span_id": "b4b3d04d63bc23cc",
        "span_id": "9c0112ffeb139636",
        "start_timestamp": 1701372476.2281,
        "timestamp": 1701372476.2281,
        "trace_id": "59b9c743c7354f49871717b9d91e3535",
        "origin": "auto.resource.browser.metrics"
      },
      {
        "description": "sentry-tracing-init",
        "op": "mark",
        "parent_span_id": "b4b3d04d63bc23cc",
        "span_id": "9909a826ee385606",
        "start_timestamp": 1701372483.5625,
        "timestamp": 1701372483.5625,
        "trace_id": "59b9c743c7354f49871717b9d91e3535",
        "origin": "auto.resource.browser.metrics"
      },
      {
        "data": {
          "http.response_transfer_size": 21328,
          "http.response_content_length": 21028,
          "http.decoded_response_content_length": 21028,
          "resource.render_blocking_status": "non-blocking"
        },
        "description": "/static/media/icomoon.55bc08567405caa09799.ttf",
        "op": "resource.css",
        "parent_span_id": "b4b3d04d63bc23cc",
        "span_id": "97165682591f34f1",
        "start_timestamp": 1701372483.6124,
        "timestamp": 1701372484.5362,
        "trace_id": "59b9c743c7354f49871717b9d91e3535",
        "origin": "auto.resource.browser.metrics"
      },
      {
        "description": "first-contentful-paint",
        "op": "paint",
        "parent_span_id": "b4b3d04d63bc23cc",
        "span_id": "95c3f5488c895eef",
        "start_timestamp": 1701372483.6279001,
        "timestamp": 1701372483.6279001,
        "trace_id": "59b9c743c7354f49871717b9d91e3535",
        "origin": "auto.resource.browser.metrics"
      }
    ],
    "start_timestamp": 1701372471.9718,
    "tags": {
      "effectiveConnectionType": "4g",
      "deviceMemory": "8 GB",
      "hardwareConcurrency": "10"
    },
    "timestamp": 1701372484.5362,
    "transaction": "/login",
    "type": "transaction",
    "transaction_info": {
      "source": "url"
    },
    "measurements": {
      "fp": {
        "value": 4256.299999999814,
        "unit": "millisecond"
      },
      "fcp": {
        "value": 11656.099999999627,
        "unit": "millisecond"
      },
      "connection.rtt": {
        "value": 50,
        "unit": "millisecond"
      },
      "ttfb": {
        "value": 558.3000183105469,
        "unit": "millisecond"
      },
      "ttfb.requestTime": {
        "value": 537.100076675415,
        "unit": "millisecond"
      }
    },
    "platform": "javascript",
    "request": {
      "url": "https://business.dev.nolemon-nomelon.com/login",
      "headers": {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
      }
    },
    "event_id": "bb3ac5c101ae4fdd806869aae5b62130",
    "environment": "dev",
    "release": "1.0.7",
    "sdk": {
      "integrations": [
        "InboundFilters",
        "FunctionToString",
        "TryCatch",
        "Breadcrumbs",
        "GlobalHandlers",
        "LinkedErrors",
        "Dedupe",
        "HttpContext",
        "BrowserTracing",
        "Replay"
      ],
      "name": "sentry.javascript.react",
      "version": "7.83.0",
      "packages": [
        {
          "name": "npm:@sentry/react",
          "version": "7.83.0"
        }
      ]
    }
  }
]