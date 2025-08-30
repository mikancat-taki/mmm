import { config } from 'dotenv';

config();

const defaultConfig = {
    port: process.env.PORT || 3000,
    targetUrl: process.env.TARGET_URL || 'http://localhost:4000',
    timeout: process.env.TIMEOUT ? parseInt(process.env.TIMEOUT, 10) : 5000,
};

export default defaultConfig;