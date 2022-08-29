import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

const handleRequest = (request) => {
  const url = new URL(request.url);
  const path = url.pathname;
  let message = "Nothing to see here.";
  if (path.includes("secret")) {
    message = "The recipe is: ...";
  }
  return new Response(message);
};

serve(handleRequest, { port: 7777 });
