import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

let count = 0;

const handleRequest = (request) => {
  const url = new URL(request.url);
  const path = url.pathname;
  let message = "hello";
  if (path === "/count") {
    count++;
    if (count > 5) {
      message = "Kaboom!";
    } else if (count > 0) {
      message = 6 - count;
    }
  }

  return new Response(message);
};

serve(handleRequest, { port: 7777 });
