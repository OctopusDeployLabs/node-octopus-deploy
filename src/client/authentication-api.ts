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
// @ts-ignore
import { AuthenticationResource } from '../model';
// @ts-ignore
import { LoginInitiatedResource } from '../model';
/**
 * AuthenticationApi - axios parameter creator
 * @export
 */
export const AuthenticationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Given a url query string, determines whether an external server (.e.g Okta) has initiated login and if so the provider\'s name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createLoginInitiated: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/authentication/checklogininitiated`;
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
         * Provides the details of the enabled authentication providers.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAuthentication: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/authentication`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
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
 * AuthenticationApi - functional programming interface
 * @export
 */
export const AuthenticationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthenticationApiAxiosParamCreator(configuration)
    return {
        /**
         * Given a url query string, determines whether an external server (.e.g Okta) has initiated login and if so the provider\'s name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createLoginInitiated(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoginInitiatedResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createLoginInitiated(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Provides the details of the enabled authentication providers.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAuthentication(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthenticationResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAuthentication(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthenticationApi - factory interface
 * @export
 */
export const AuthenticationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthenticationApiFp(configuration)
    return {
        /**
         * Given a url query string, determines whether an external server (.e.g Okta) has initiated login and if so the provider\'s name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createLoginInitiated(options?: any): AxiosPromise<LoginInitiatedResource> {
            return localVarFp.createLoginInitiated(options).then((request) => request(axios, basePath));
        },
        /**
         * Provides the details of the enabled authentication providers.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAuthentication(options?: any): AxiosPromise<AuthenticationResource> {
            return localVarFp.getAuthentication(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthenticationApi - interface
 * @export
 * @interface AuthenticationApi
 */
export interface AuthenticationApiInterface {
    /**
     * Given a url query string, determines whether an external server (.e.g Okta) has initiated login and if so the provider\'s name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApiInterface
     */
    createLoginInitiated(options?: any): AxiosPromise<LoginInitiatedResource>;

    /**
     * Provides the details of the enabled authentication providers.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApiInterface
     */
    getAuthentication(options?: any): AxiosPromise<AuthenticationResource>;

}

/**
 * AuthenticationApi - object-oriented interface
 * @export
 * @class AuthenticationApi
 * @extends {BaseAPI}
 */
export class AuthenticationApi extends BaseAPI implements AuthenticationApiInterface {
    /**
     * Given a url query string, determines whether an external server (.e.g Okta) has initiated login and if so the provider\'s name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public createLoginInitiated(options?: any) {
        return AuthenticationApiFp(this.configuration).createLoginInitiated(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Provides the details of the enabled authentication providers.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public getAuthentication(options?: any) {
        return AuthenticationApiFp(this.configuration).getAuthentication(options).then((request) => request(this.axios, this.basePath));
    }
}
