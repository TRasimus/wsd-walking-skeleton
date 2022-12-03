import { Client } from "https://deno.land/x/postgres@v0.16.1/mod.ts";

const client = new Client();

const create = async (name, rating) => {
  await client.connect();
  await client.queryObject(
    "INSERT INTO songs (name, rating) VALUES ($name, $rating);",
    {
      name: name,
      rating: rating,
    },
  );
  await client.end();
};

const findAll = async () => {
  await client.connect();
  const result = await client.queryObject("SELECT * FROM songs;");
  await client.end();
  return result.rows;
};

const deleteById = async (id) => {
  await client.connect();
  await client.queryObject(
    "DELETE FROM songs WHERE id = $id;",
    { id: id },
  );
  await client.end();
};

export { create, deleteById, findAll };
