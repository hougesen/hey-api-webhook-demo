import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  client: "@hey-api/client-axios",
  experimentalParser: true,
  input: "schema.json",
  output: {
    path: "bindings",
    clean: true,
  },
  plugins: [{ name: "@hey-api/sdk" }],
});
