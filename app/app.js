import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

const handleRequest = (request) => {
  const method = request.method;
  const message = `You made a request with method ${method}`;
  return new Response(message);
};

serve(handleRequest, { port: 7777 });
