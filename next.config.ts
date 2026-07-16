import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Workspace-Root explizit auf dieses Projekt setzen (verhindert falsche
  // Inferenz durch andere Lockfiles außerhalb des Projektordners).
  outputFileTracingRoot: __dirname,
  poweredByHeader: false,
};

export default nextConfig;
