const express = require("express");
const router = express.Router();



router.get("/", async (req, res, next) => {
    return res.status(200).json({
      title: "Check Up",
      message: "The app is working properly!",
    });
  });

router.get("/tunnel", async (req, res, next) => {
  return res.status(200).json({
    title: "/tunnel",
    message: "The route is working properly!",
  });
});

router.post('/tunnel', async (req, res) => {
    try {
        const envelope = req.body;

        const pieces = envelope.split('\n');

        const header = JSON.parse(pieces[0]);

        const { host, pathname, username } = new URL(header.dsn);

        const projectId = pathname.slice(1);

        const url = `https://${host}/api/${projectId}/envelope/?sentry_key=${username}`;

        const options = {
            'headers': {
                'Content-Type': 'application/x-sentry-envelope'
            }
        };

        const response = await axios.post(url, envelope, options);

        res.status(201).json({ message: "Success", data: response?.data })
    } catch (e) {
        const error = e?.response || e?.message;
        res.status(400).json({ message: 'invalid request', error: error });
    }
});

module.exports = router;
