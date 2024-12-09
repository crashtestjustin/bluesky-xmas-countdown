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
import { authenticateAgent } from "./authenticateAgent.js";
import { RichText } from "@atproto/api";

dotenv.config();

export const run = async () => {
  const agent = await authenticateAgent();

  const daysUntilXmas = calculateDaysUntilXmas();

  const catchPhrase = getCatchPhrase(daysUntilXmas);

  let text;
  if (daysUntilXmas === 0) {
    text = `Merry Christmas!🎄🎉🎅🥂 ${catchPhrase}`;
  } else if (daysUntilXmas <= 7) {
    const unit =
      daysUntilXmas === 1
        ? "day"
        : "days"(
            (text = `There's only ${daysUntilXmas} ${unit} until Christmas! 👀🎄 ${catchPhrase}`)
          );
  } else if (daysUntilXmas > 60) {
    text = new RichText({
      text: `There are ${daysUntilXmas} days until #Christmas Day!🎄 ${catchPhrase}`,
    });
  } else {
    const weeksUntilXmas = (daysUntilXmas / 7).toFixed(1);
    const hoursUntilXmas = daysUntilXmas * 24;
    text = new RichText({
      text: `There are only ${daysUntilXmas} days until Christmas day! 🎉🎄 That's ${weeksUntilXmas} weeks or ${hoursUntilXmas} hours! ${catchPhrase}\n\n#christmas fans rejoice! The season is upon us!🙌`,
    });
  }
  await text.detectFacets(agent);

  await agent.post({
    text: `${text.text}`,
    facets: text.facets,
    createdAt: new Date().toISOString(),
  });
  console.log("Post posted successfully!");
};

run().catch(console.error);
