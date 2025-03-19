import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
    trailingSlash: true,  // Для работы с GitHub Pages
    output: 'export', // Это указывает Next.js, что вы хотите экспортировать статический сайт.
}

export default nextConfig;
