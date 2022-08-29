import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

const handleRequest = (request) => {
  const method = request.method;
  const url = new URL(request.url);
  const path = url.pathname;
  const message = `${method} request made to path ${path}`;
  return new Response(message);
};

serve(handleRequest, { port: 7777 });
