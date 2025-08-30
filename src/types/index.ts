interface HttpRequest {
    method: string;
    url: string;
    headers: Record<string, string>;
    body?: string;
}

interface HttpResponse {
    statusCode: number;
    headers: Record<string, string>;
    body?: string;
}

interface ProxyConfig {
    targetUrl: string;
    port: number;
    timeout?: number;
}

export type { HttpRequest, HttpResponse, ProxyConfig };