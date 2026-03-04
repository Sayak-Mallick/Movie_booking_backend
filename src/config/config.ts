import { config as conf } from "dotenv";

conf();

const _config = {
    port: process.env.PORT || 5000,
    dbUrl: process.env.MONGODB_URI,
    dbName: process.env.DB_NAME,
    env: process.env.NODE_ENV,
    jwtSecret: process.env.JWT_SECRET,
};

export const config = Object.freeze(_config);