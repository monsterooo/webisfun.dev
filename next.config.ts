import { withContentCollections } from "@content-collections/next";
import type { NextConfig } from "next";
import "./env.mjs";

const nextConfig: NextConfig = {};

export default withContentCollections(nextConfig);
