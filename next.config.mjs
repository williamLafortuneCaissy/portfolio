/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    images: {
        unoptimized: true,
    },
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,
    
    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
    
    // Optional: Change the output directory `out` -> `docs`
    distDir: process.env.NODE_ENV === 'production' ? 'docs' : '.next',
};

export default nextConfig;
