/** @type {import('next').NextConfig} */
const nextConfig = {
  domains: ["randomuser.me/api", "groundworkcounseling.com"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/portraits/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/wikipedia/**",
      },
    ],
  },
};

export default nextConfig;
