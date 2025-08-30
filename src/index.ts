import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { config } from './config';
import { Request, Response } from './types';

const app = express();
const PORT = config.port || 3000;

// Middleware to handle requests
app.use((req: Request, res: Response, next) => {
    console.log(`Received request: ${req.method} ${req.url}`);
    next();
});

// Proxy setup
app.use('/api', createProxyMiddleware({
    target: config.targetUrl,
    changeOrigin: true,
    pathRewrite: {
        '^/api': '', // remove /api prefix when forwarding
    },
    onProxyReq: (proxyReq, req) => {
        // You can modify the request here if needed
    },
    onProxyRes: (proxyRes, req, res) => {
        // You can modify the response here if needed
    },
}));

app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});