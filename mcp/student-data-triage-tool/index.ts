import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";

const requiredEnv = ["GITHUB_APP_PRIVATE_KEY"] as const;

function readConfig() {
  const missing = requiredEnv.filter((name) => !process.env[name]);
  if (missing.length > 0) {
    throw new Error(`Missing required env vars for student-data-triage-tool: ${missing.join(", ")}`);
  }
  return Object.fromEntries(requiredEnv.map((name) => [name, process.env[name] ?? ""]));
}

const server = new Server({ name: "student-data-triage-tool", version: "1.0.0" }, { capabilities: { tools: {} } });

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "fetch_context",
      description: "Fetch relevant context from the external integration",
      inputSchema: {
        type: "object",
        properties: {
          query: { type: "string" },
          contextType: { type: "string", enum: ["workflow", "history", "reference"] },
        },
        required: ["query"],
      },
    },
    {
      name: "submit_result",
      description: "Submit a workflow result to the external system (requires human approval before calling)",
      inputSchema: {
        type: "object",
        properties: {
          result: { type: "string" },
          requiresHumanApproval: { type: "boolean", default: true },
        },
        required: ["result"],
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  readConfig();
  const { name, arguments: args } = request.params;

  if (name === "fetch_context") {
    // TODO: implement external API call using config env vars
    return { content: [{ type: "text", text: `[fetch_context] TODO: fetch for query: ${args?.query}` }] };
  }

  if (name === "submit_result") {
    if (args?.requiresHumanApproval !== false) {
      return { content: [{ type: "text", text: "[submit_result] Blocked: human approval required before submitting." }] };
    }
    // TODO: implement submission
    return { content: [{ type: "text", text: "[submit_result] TODO: implement submission" }] };
  }

  throw new Error(`Unknown tool: ${name}`);
});

const transport = new StdioServerTransport();
await server.connect(transport);
