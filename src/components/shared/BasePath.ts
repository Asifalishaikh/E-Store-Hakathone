const BASE_PATH_API = process.env.NODE_ENV === "development"?
    "http://localhost:3000"
    :"https://vercel.com/asifalishaikh/e-store-hakathone"

export default BASE_PATH_API