import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

const handleRequest = (request) => {
  let message = "Unable to comply...";
  if (request.method === "GET") {
    message = "Retrieving data...";
  } else if (request.method === "POST") {
    message = "Posting data...";
  }
  return new Response(message);
};

serve(handleRequest, { port: 7777 });
