/** @type {import('next').NextConfig} */
const nextConfig = {
	// reactStrictMode: true,
	poweredByHeader: false, // чтобы не было видно что сайт сделан на NextJS
	optimizeFonts: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		APP_SERVER_URL: process.env.APP_SERVER_URL
	},
	experimental: {
		appDir: true
	},
	// чтобы при наборе в браузере адреса "http://localhost:3000/api" не открывалась папка "api" в папке "pages"
	// а открывался api на сервере, который находится по адресу "http://localhost:4200/api", т.е. на бекенде
	async rewrites() {
		return [
			{
				source: "/api/:path*", // аторизация, получение данных с сервера
				destination: "http://localhost:4200/api/:path*"
			},
			{
				source: "/uploads/:path*", // картинки, видео и т.д., статичная папка на бекенде
				destination: "http://localhost:4200/uploads/:path*"
			}
		];
	}
};

module.exports = nextConfig;
