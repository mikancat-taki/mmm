import express, { Request, Response } from 'express';
import httpProxy from 'http-proxy';
import { ProxyConfig } from '../config';

const app = express();
const proxy = httpProxy.createProxyServer({});

app.use((req: Request, res: Response) => {
    const targetUrl = ProxyConfig.getTargetUrl(req);
    
    proxy.web(req, res, { target: targetUrl }, (error) => {
        res.status(500).send('Proxy error: ' + error.message);
    });
});

const PORT = ProxyConfig.port || 3000;

app.listen(PORT, () => {
    console.log(`Proxy server is running on port ${PORT}`);
});