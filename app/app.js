import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

const handleRequest = (request) => {
  const url = new URL(request.url);
  const params = url.searchParams;

  const one = Number(params.get("one"));
  const two = Number(params.get("two"));

  return new Response(`Sum: ${one + two}`);
};

let port = 7777;
if (Deno.args.length > 0) {
  const lastArgument = Deno.args[Deno.args.length - 1];
  port = Number(lastArgument);
}

serve(handleRequest, { port: port });
