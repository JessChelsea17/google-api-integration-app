/// <reference types="node" />
import { AxiosAdapter, AxiosProxyConfig, AxiosRequestConfig, AxiosTransformer, CancelToken } from 'axios';
import { OAuth2Client } from 'google-auth-library/build/src/auth/oauth2client';
import { OutgoingHttpHeaders } from 'http';
import * as stream from 'stream';
import { Endpoint } from './endpoint';
export interface APIRequestParams {
    options: AxiosRequestConfig;
    params: APIRequestMethodParams;
    requiredParams: string[];
    pathParams: string[];
    context: APIRequestContext;
    mediaUrl?: string | null;
}
export interface APIRequestContext {
    google: {
        _options: GlobalOptions;
    };
    _options: GlobalOptions;
}
/**
 * This interface is a mix of the AxiosRequestConfig options
 * and our `auth: OAuth2Client|string` options.  We need to redefine
 * the interface here because the `auth` property already exists
 * on AxiosRequestConfig, and uses an entirely different type.
 */
export interface GlobalOptions {
    url?: string;
    method?: string;
    baseURL?: string;
    transformRequest?: AxiosTransformer | AxiosTransformer[];
    transformResponse?: AxiosTransformer | AxiosTransformer[];
    headers?: any;
    params?: any;
    paramsSerializer?: (params: any) => string;
    data?: any;
    timeout?: number;
    withCredentials?: boolean;
    adapter?: AxiosAdapter;
    auth?: OAuth2Client | string;
    responseType?: string;
    xsrfCookieName?: string;
    xsrfHeaderName?: string;
    onUploadProgress?: (progressEvent: any) => void;
    onDownloadProgress?: (progressEvent: any) => void;
    maxContentLength?: number;
    validateStatus?: (status: number) => boolean;
    maxRedirects?: number;
    httpAgent?: any;
    httpsAgent?: any;
    proxy?: AxiosProxyConfig | false;
    cancelToken?: CancelToken;
}
export interface APIRequestMethodParams {
    [index: string]: any;
    url?: string;
    media?: {
        body?: string | stream.Readable;
        mimeType?: string;
    };
    resource?: {
        mimeType?: string;
    };
    key?: string;
    uploadType?: string;
    auth?: OAuth2Client | string;
    headers?: OutgoingHttpHeaders;
}
export declare type APIEndpoint = Readonly<Endpoint & any>;
