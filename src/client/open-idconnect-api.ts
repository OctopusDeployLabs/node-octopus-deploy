/* tslint:disable */
/* eslint-disable */
// Octopus REST API v2020.6.4722

import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
/**
 * OpenIDConnectApi - axios parameter creator
 * @export
 */
export const OpenIDConnectApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOctopusIDUserAuthenticated: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/users/authenticatedToken/OctopusID`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            await setApiKeyToObject(localVarHeaderParameter, "X-Octopus-ApiKey", configuration)

            // authentication APIKeyQuery required
            await setApiKeyToObject(localVarQueryParameter, "ApiKey", configuration)

            // authentication NugetApiKeyHeader required
            await setApiKeyToObject(localVarHeaderParameter, "X-NuGet-ApiKey", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOctopusIDUserAuthentication: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/users/authenticate/OctopusID`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            await setApiKeyToObject(localVarHeaderParameter, "X-Octopus-ApiKey", configuration)

            // authentication APIKeyQuery required
            await setApiKeyToObject(localVarQueryParameter, "ApiKey", configuration)

            // authentication NugetApiKeyHeader required
            await setApiKeyToObject(localVarHeaderParameter, "X-NuGet-ApiKey", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OpenIDConnectApi - functional programming interface
 * @export
 */
export const OpenIDConnectApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OpenIDConnectApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOctopusIDUserAuthenticated(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOctopusIDUserAuthenticated(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOctopusIDUserAuthentication(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOctopusIDUserAuthentication(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * OpenIDConnectApi - factory interface
 * @export
 */
export const OpenIDConnectApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OpenIDConnectApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOctopusIDUserAuthenticated(options?: any): AxiosPromise<void> {
            return localVarFp.createOctopusIDUserAuthenticated(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOctopusIDUserAuthentication(options?: any): AxiosPromise<void> {
            return localVarFp.createOctopusIDUserAuthentication(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OpenIDConnectApi - interface
 * @export
 * @interface OpenIDConnectApi
 */
export interface OpenIDConnectApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OpenIDConnectApiInterface
     */
    createOctopusIDUserAuthenticated(options?: any): AxiosPromise<void>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OpenIDConnectApiInterface
     */
    createOctopusIDUserAuthentication(options?: any): AxiosPromise<void>;

}

/**
 * OpenIDConnectApi - object-oriented interface
 * @export
 * @class OpenIDConnectApi
 * @extends {BaseAPI}
 */
export class OpenIDConnectApi extends BaseAPI implements OpenIDConnectApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OpenIDConnectApi
     */
    public createOctopusIDUserAuthenticated(options?: any) {
        return OpenIDConnectApiFp(this.configuration).createOctopusIDUserAuthenticated(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OpenIDConnectApi
     */
    public createOctopusIDUserAuthentication(options?: any) {
        return OpenIDConnectApiFp(this.configuration).createOctopusIDUserAuthentication(options).then((request) => request(this.axios, this.basePath));
    }
}
