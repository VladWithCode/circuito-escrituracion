import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [new URL("https://lh3.googleusercontent.com/aida-public")],
    },
    output: "standalone",
    basePath: isProduction ? "/terrenos/circuito-emperador-i" : "",
};

export default nextConfig;
