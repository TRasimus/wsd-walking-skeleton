import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

const handleRequest = (request) => {
  console.log(`Request to ${request.url}`);
  return new Response("I will learn how to write web applications!");
};

console.log("Launching server on port 31337");
serve(handleRequest, { port: 31337 });
