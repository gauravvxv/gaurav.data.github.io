/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',            // Export static HTML for GitHub Pages
  images: { unoptimized: true }, // Disable image optimization (not supported on GitHub Pages)
  basePath: '',                // Leave empty for user site (not a project subpath)
  assetPrefix: './',           // Ensures assets load correctly
};

export default nextConfig;
