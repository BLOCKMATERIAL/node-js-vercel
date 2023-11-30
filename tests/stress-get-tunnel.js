import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 100,
  duration: '60s',
  ext: {
    loadimpact: {
      projectID: 3671914,
      name: 'Init Stress Test Tunnel'
    }
  }
};

export default function() {
  const url = 'https://node-js-vercel-eight.vercel.app/home/tunnel'
  http.get(url);
  sleep(1);
}