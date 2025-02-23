import axios, { AxiosError } from "axios";

const REPOSITORIES = [
  { owner: "hougesen", name: "hey-api-webhook-demo", webhook_id: "" },
];

export default {
  async fetch(request, env, ctx): Promise<Response> {
    switch (request.method.toUpperCase()) {
      case "POST":
      case "PUT":
      case "PATCH": {
        try {
          const body = await request.json();

          if (typeof body !== "object" || !body) {
            return new Response(
              JSON.stringify({ message: "Body must be an object" }),
              {
                status: 400,
                headers: new Headers({ "Content-Type": "application/json" }),
              },
            );
          }

          if ("schema" in body === false) {
            return new Response(
              JSON.stringify({ message: "Schema is missing body" }),
              {
                status: 400,
                headers: new Headers({ "Content-Type": "application/json" }),
              },
            );
          }

          const statuses: Array<{
            owner: string;
            name: string;
            success: boolean;
            status_code?: number;
          }> = [];

          for (const repo of REPOSITORIES) {
            const r = await axios
              .post(
                `https://api.github.com/repos/${repo.owner}/${repo.name}/actions/workflows/${repo.webhook_id}/dispatches`,
                {},
                {
                  headers: {
                    Authorization: `Bearer ${env.GITHUB_API_KEY}`,
                    "user-agent": "MadsHougesen +http://mhouge.dk",
                    "X-GitHub-Api-Version": "2022-11-28",
                  },
                },
              )
              .then((res) => ({
                owner: repo.owner,
                name: repo.name,
                status_code: res?.status,
                success: true,
              }))
              .catch((error) => {
                if (error instanceof AxiosError) {
                  return {
                    owner: repo.owner,
                    name: repo.name,
                    status_code: error?.response?.status ?? error?.status,
                    success: false,
                  };
                }

                return {
                  owner: repo.owner,
                  name: repo.name,
                  success: false,
                };
              });

            statuses.push(r);
          }

          return new Response(JSON.stringify(statuses), {
            status: 200,
            headers: new Headers({ "Content-Type": "application/json" }),
          });
        } catch (error) {
          return new Response(
            JSON.stringify({ message: "Unable to decode body" }),
            {
              status: 400,
              headers: new Headers({ "Content-Type": "application/json" }),
            },
          );
        }
      }

      case "OPTIONS": {
        return new Response("", {
          status: 204,
          headers: new Headers({
            "Access-Control-Allow-Methods": "PUT,POST,PATCH,OPTIONS",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Expose-Headers": "*",
          }),
        });
      }

      default: {
        return new Response(JSON.stringify({ message: "Method not allowed" }), {
          status: 405,
          headers: new Headers({ "Content-Type": "application/json" }),
        });
      }
    }
  },
} satisfies ExportedHandler<Env>;
