function createRedirect(dest, ...sources){
  return sources.map(e => ({
    destination: dest,
    source: e,
    permanent: true
  }));
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  redirects: async () => {
    return [
      ...createRedirect("https://discord.gg/BMBUcJvV4Q", "/support", "/discord", "/invite", "/join"),
    ]
  }
}

module.exports = nextConfig
