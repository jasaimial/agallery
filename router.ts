
import * as http from 'http';

type HttpMethod = 'PUT' | 'GET' | 'POST' | 'DELETE';
type RequestHandler = (request: http.IncomingMessage, respone: http.ServerResponse, params?: any) => void;
type RouteMap = { [path: string]: RequestHandler };
type Routes = { [method in HttpMethod]: RouteMap };

export class Router {
    private _routes: Routes;

    constructor() {
        this._routes = {
            PUT: {},
            GET: {},
            POST: {},
            DELETE: {}
        };
    }

    public put(path: string, handler: RequestHandler): void {
        this._routes.GET[path] = handler;
    }

    public get(path: string, handler: RequestHandler): void {
        this._routes.GET[path] = handler;
    }

    public post(path: string, handler: RequestHandler): void {
        this._routes.GET[path] = handler;
    }

    public delete(path: string, handler: RequestHandler): void {
        this._routes.GET[path] = handler;
    }

    public handleRequest(request: http.IncomingMessage, response: http.ServerResponse): void {
        const { method, url } = request;
        const handler = this._routes[method as HttpMethod][url as string];

        if(handler) {
            handler(request, response);
        } else {
            response.statusCode = 404;
            response.end('Page does not exist.');
        }
    }

}