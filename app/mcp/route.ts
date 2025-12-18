import { createMcpHandler } from "mcp-handler";
import { demoWidget, demoTool } from "./demo";

const handler = createMcpHandler(async (server) => {
  await demoTool(server, await demoWidget(server));
});

export const GET = handler;
export const POST = handler;
