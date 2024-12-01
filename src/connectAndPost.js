import fetch, { Headers, Response, Request } from "node-fetch"; // Polyfill fetch, Headers, Response, and Request
import { FormData } from "formdata-node"; // Polyfill FormData

// Polyfill fetch, Headers, FormData, Request, and Response for the Node.js environment
globalThis.Headers = Headers;
globalThis.fetch = fetch;
globalThis.FormData = FormData;
globalThis.Response = Response;
globalThis.Request = Request;

import { AtpAgent } from "@atproto/api";
import dotenv from "dotenv";
import { calculateDaysUntilXmas } from "./daysUntilXmas.js";
import cron from "node-cron";
import { getCatchPhrase } from "./getCatchPhrase.js";

dotenv.config();

export const run = async () => {
  const agent = new AtpAgent({
    service: "https://bsky.social",
  });
  await agent.login({
    identifier: process.env.BLUESKY_USERNAME,
    password: process.env.BLUESKY_PASSWORD,
  });

  console.log("connected successfully");

  const daysUntilXmas = calculateDaysUntilXmas();

  const catchPhrase = getCatchPhrase(daysUntilXmas);

  let text;
  if (daysUntilXmas === 0) {
    text = `Merry Christmas!🎄🎉🎅🥂 ${catchPhrase}`;
  } else if (daysUntilXmas === 1) {
    text = `Only ${daysUntilXmas} day until Christmas!🎄 ${catchPhrase}`;
  } else if (daysUntilXmas <= 7) {
    text = `There's only ${daysUntilXmas} days until Christmas! 👀🎄 ${catchPhrase}`;
  } else if (daysUntilXmas > 60) {
    text = `There are ${daysUntilXmas} days until Christmas Day!🎄 ${catchPhrase}`;
  } else {
    const weeksUntikXmas = (daysUntilXmas / 7).toFixed(1);
    const hoursUntilXmas = daysUntilXmas * 24;
    text = `There are only ${daysUntilXmas} days until Christmas day! 🎉🎄 That's ${weeksUntikXmas} weeks or ${hoursUntilXmas} hours! ${catchPhrase}`;
  }

  await agent.post({
    text: `${text}`,
    createdAt: new Date().toISOString(),
  });
  console.log("Post posted successfully!");
};

run().catch(console.error);

// const hourPastMidnight = 3;

//schedule daily post
// cron.schedule(`0 ${hourPastMidnight} * * *`, () => {
//   console.log(`Cron job triggered at: ${new Date().toISOString()}`);
//   run().catch(console.error);
// });

// console.log(
//   `Chron job scheduled. Waiting for ${hourPastMidnight} hours past midnight`
// );
