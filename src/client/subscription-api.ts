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
import { SubscriptionResource } from '../model';
// @ts-ignore
import { SubscriptionResourceCollection } from '../model';
/**
 * SubscriptionApi - axios parameter creator
 * @export
 */
export const SubscriptionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new subscription
         * @summary Create a SubscriptionResource
         * @param {SubscriptionResource} [body] The SubscriptionResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSubscription: async (body?: SubscriptionResource, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/subscriptions`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a new subscription
         * @summary Create a SubscriptionResource
         * @param {string} baseSpaceId ID of the space
         * @param {SubscriptionResource} [body] The SubscriptionResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSubscriptionSpaces: async (baseSpaceId: string, body?: SubscriptionResource, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('createSubscriptionSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/subscriptions`
                .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)));
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes an existing subscription.
         * @summary Delete a SubscriptionResource by ID
         * @param {string} id ID of the SubscriptionResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSubscription: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteSubscription', 'id', id)
            const localVarPath = `/subscriptions/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
         * Deletes an existing subscription.
         * @summary Delete a SubscriptionResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the SubscriptionResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSubscriptionSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('deleteSubscriptionSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteSubscriptionSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/subscriptions/{id}`
                .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
         * Get a subscription
         * @summary Get a SubscriptionResource by ID
         * @param {string} id ID of the SubscriptionResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSubscriptionById: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getSubscriptionById', 'id', id)
            const localVarPath = `/subscriptions/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
        /**
         * Get a subscription
         * @summary Get a SubscriptionResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the SubscriptionResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSubscriptionByIdSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getSubscriptionByIdSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getSubscriptionByIdSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/subscriptions/{id}`
                .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
        /**
         * Lists all of the subscriptions in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
         * @summary Get a list of SubscriptionResources
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexSubscriptions: async (skip?: number, take?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/subscriptions`;
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

            if (skip !== undefined) {
                localVarQueryParameter['skip'] = skip;
            }

            if (take !== undefined) {
                localVarQueryParameter['take'] = take;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists all of the subscriptions in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
         * @summary Get a list of SubscriptionResources
         * @param {string} baseSpaceId ID of the space
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexSubscriptionsSpaces: async (baseSpaceId: string, skip?: number, take?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('indexSubscriptionsSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/subscriptions`
                .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)));
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

            if (skip !== undefined) {
                localVarQueryParameter['skip'] = skip;
            }

            if (take !== undefined) {
                localVarQueryParameter['take'] = take;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists all the subscriptions in the supplied Octopus Deploy Space.
         * @summary Get a list of SubscriptionResources
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllSubscriptions: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/subscriptions/all`;
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
        /**
         * Lists all the subscriptions in the supplied Octopus Deploy Space.
         * @summary Get a list of SubscriptionResources
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllSubscriptionsSpaces: async (baseSpaceId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('listAllSubscriptionsSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/subscriptions/all`
                .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)));
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
        /**
         * Updates an existing subscription
         * @summary Modify a SubscriptionResource by ID
         * @param {string} id ID of the SubscriptionResource to modify
         * @param {SubscriptionResource} [body] The SubscriptionResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSubscription: async (id: string, body?: SubscriptionResource, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateSubscription', 'id', id)
            const localVarPath = `/subscriptions/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            await setApiKeyToObject(localVarHeaderParameter, "X-Octopus-ApiKey", configuration)

            // authentication APIKeyQuery required
            await setApiKeyToObject(localVarQueryParameter, "ApiKey", configuration)

            // authentication NugetApiKeyHeader required
            await setApiKeyToObject(localVarHeaderParameter, "X-NuGet-ApiKey", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates an existing subscription
         * @summary Modify a SubscriptionResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the SubscriptionResource to modify
         * @param {SubscriptionResource} [body] The SubscriptionResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSubscriptionSpaces: async (baseSpaceId: string, id: string, body?: SubscriptionResource, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('updateSubscriptionSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateSubscriptionSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/subscriptions/{id}`
                .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            await setApiKeyToObject(localVarHeaderParameter, "X-Octopus-ApiKey", configuration)

            // authentication APIKeyQuery required
            await setApiKeyToObject(localVarQueryParameter, "ApiKey", configuration)

            // authentication NugetApiKeyHeader required
            await setApiKeyToObject(localVarHeaderParameter, "X-NuGet-ApiKey", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SubscriptionApi - functional programming interface
 * @export
 */
export const SubscriptionApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SubscriptionApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new subscription
         * @summary Create a SubscriptionResource
         * @param {SubscriptionResource} [body] The SubscriptionResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createSubscription(body?: SubscriptionResource, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubscriptionResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createSubscription(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Creates a new subscription
         * @summary Create a SubscriptionResource
         * @param {string} baseSpaceId ID of the space
         * @param {SubscriptionResource} [body] The SubscriptionResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createSubscriptionSpaces(baseSpaceId: string, body?: SubscriptionResource, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubscriptionResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createSubscriptionSpaces(baseSpaceId, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes an existing subscription.
         * @summary Delete a SubscriptionResource by ID
         * @param {string} id ID of the SubscriptionResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteSubscription(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSubscription(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes an existing subscription.
         * @summary Delete a SubscriptionResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the SubscriptionResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteSubscriptionSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSubscriptionSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a subscription
         * @summary Get a SubscriptionResource by ID
         * @param {string} id ID of the SubscriptionResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSubscriptionById(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubscriptionResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSubscriptionById(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a subscription
         * @summary Get a SubscriptionResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the SubscriptionResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSubscriptionByIdSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubscriptionResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSubscriptionByIdSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all of the subscriptions in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
         * @summary Get a list of SubscriptionResources
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async indexSubscriptions(skip?: number, take?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubscriptionResourceCollection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.indexSubscriptions(skip, take, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all of the subscriptions in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
         * @summary Get a list of SubscriptionResources
         * @param {string} baseSpaceId ID of the space
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async indexSubscriptionsSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubscriptionResourceCollection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.indexSubscriptionsSpaces(baseSpaceId, skip, take, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all the subscriptions in the supplied Octopus Deploy Space.
         * @summary Get a list of SubscriptionResources
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAllSubscriptions(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<SubscriptionResource>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAllSubscriptions(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all the subscriptions in the supplied Octopus Deploy Space.
         * @summary Get a list of SubscriptionResources
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAllSubscriptionsSpaces(baseSpaceId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<SubscriptionResource>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAllSubscriptionsSpaces(baseSpaceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates an existing subscription
         * @summary Modify a SubscriptionResource by ID
         * @param {string} id ID of the SubscriptionResource to modify
         * @param {SubscriptionResource} [body] The SubscriptionResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateSubscription(id: string, body?: SubscriptionResource, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubscriptionResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateSubscription(id, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates an existing subscription
         * @summary Modify a SubscriptionResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the SubscriptionResource to modify
         * @param {SubscriptionResource} [body] The SubscriptionResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateSubscriptionSpaces(baseSpaceId: string, id: string, body?: SubscriptionResource, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubscriptionResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateSubscriptionSpaces(baseSpaceId, id, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SubscriptionApi - factory interface
 * @export
 */
export const SubscriptionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SubscriptionApiFp(configuration)
    return {
        /**
         * Creates a new subscription
         * @summary Create a SubscriptionResource
         * @param {SubscriptionResource} [body] The SubscriptionResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSubscription(body?: SubscriptionResource, options?: any): AxiosPromise<SubscriptionResource> {
            return localVarFp.createSubscription(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a new subscription
         * @summary Create a SubscriptionResource
         * @param {string} baseSpaceId ID of the space
         * @param {SubscriptionResource} [body] The SubscriptionResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSubscriptionSpaces(baseSpaceId: string, body?: SubscriptionResource, options?: any): AxiosPromise<SubscriptionResource> {
            return localVarFp.createSubscriptionSpaces(baseSpaceId, body, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes an existing subscription.
         * @summary Delete a SubscriptionResource by ID
         * @param {string} id ID of the SubscriptionResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSubscription(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteSubscription(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes an existing subscription.
         * @summary Delete a SubscriptionResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the SubscriptionResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSubscriptionSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteSubscriptionSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a subscription
         * @summary Get a SubscriptionResource by ID
         * @param {string} id ID of the SubscriptionResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSubscriptionById(id: string, options?: any): AxiosPromise<SubscriptionResource> {
            return localVarFp.getSubscriptionById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a subscription
         * @summary Get a SubscriptionResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the SubscriptionResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSubscriptionByIdSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<SubscriptionResource> {
            return localVarFp.getSubscriptionByIdSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all of the subscriptions in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
         * @summary Get a list of SubscriptionResources
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexSubscriptions(skip?: number, take?: number, options?: any): AxiosPromise<SubscriptionResourceCollection> {
            return localVarFp.indexSubscriptions(skip, take, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all of the subscriptions in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
         * @summary Get a list of SubscriptionResources
         * @param {string} baseSpaceId ID of the space
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexSubscriptionsSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any): AxiosPromise<SubscriptionResourceCollection> {
            return localVarFp.indexSubscriptionsSpaces(baseSpaceId, skip, take, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all the subscriptions in the supplied Octopus Deploy Space.
         * @summary Get a list of SubscriptionResources
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllSubscriptions(options?: any): AxiosPromise<Array<SubscriptionResource>> {
            return localVarFp.listAllSubscriptions(options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all the subscriptions in the supplied Octopus Deploy Space.
         * @summary Get a list of SubscriptionResources
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllSubscriptionsSpaces(baseSpaceId: string, options?: any): AxiosPromise<Array<SubscriptionResource>> {
            return localVarFp.listAllSubscriptionsSpaces(baseSpaceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates an existing subscription
         * @summary Modify a SubscriptionResource by ID
         * @param {string} id ID of the SubscriptionResource to modify
         * @param {SubscriptionResource} [body] The SubscriptionResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSubscription(id: string, body?: SubscriptionResource, options?: any): AxiosPromise<SubscriptionResource> {
            return localVarFp.updateSubscription(id, body, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates an existing subscription
         * @summary Modify a SubscriptionResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the SubscriptionResource to modify
         * @param {SubscriptionResource} [body] The SubscriptionResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSubscriptionSpaces(baseSpaceId: string, id: string, body?: SubscriptionResource, options?: any): AxiosPromise<SubscriptionResource> {
            return localVarFp.updateSubscriptionSpaces(baseSpaceId, id, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SubscriptionApi - interface
 * @export
 * @interface SubscriptionApi
 */
export interface SubscriptionApiInterface {
    /**
     * Creates a new subscription
     * @summary Create a SubscriptionResource
     * @param {SubscriptionResource} [body] The SubscriptionResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionApiInterface
     */
    createSubscription(body?: SubscriptionResource, options?: any): AxiosPromise<SubscriptionResource>;

    /**
     * Creates a new subscription
     * @summary Create a SubscriptionResource
     * @param {string} baseSpaceId ID of the space
     * @param {SubscriptionResource} [body] The SubscriptionResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionApiInterface
     */
    createSubscriptionSpaces(baseSpaceId: string, body?: SubscriptionResource, options?: any): AxiosPromise<SubscriptionResource>;

    /**
     * Deletes an existing subscription.
     * @summary Delete a SubscriptionResource by ID
     * @param {string} id ID of the SubscriptionResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionApiInterface
     */
    deleteSubscription(id: string, options?: any): AxiosPromise<void>;

    /**
     * Deletes an existing subscription.
     * @summary Delete a SubscriptionResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the SubscriptionResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionApiInterface
     */
    deleteSubscriptionSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<void>;

    /**
     * Get a subscription
     * @summary Get a SubscriptionResource by ID
     * @param {string} id ID of the SubscriptionResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionApiInterface
     */
    getSubscriptionById(id: string, options?: any): AxiosPromise<SubscriptionResource>;

    /**
     * Get a subscription
     * @summary Get a SubscriptionResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the SubscriptionResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionApiInterface
     */
    getSubscriptionByIdSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<SubscriptionResource>;

    /**
     * Lists all of the subscriptions in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of SubscriptionResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionApiInterface
     */
    indexSubscriptions(skip?: number, take?: number, options?: any): AxiosPromise<SubscriptionResourceCollection>;

    /**
     * Lists all of the subscriptions in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of SubscriptionResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionApiInterface
     */
    indexSubscriptionsSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any): AxiosPromise<SubscriptionResourceCollection>;

    /**
     * Lists all the subscriptions in the supplied Octopus Deploy Space.
     * @summary Get a list of SubscriptionResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionApiInterface
     */
    listAllSubscriptions(options?: any): AxiosPromise<Array<SubscriptionResource>>;

    /**
     * Lists all the subscriptions in the supplied Octopus Deploy Space.
     * @summary Get a list of SubscriptionResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionApiInterface
     */
    listAllSubscriptionsSpaces(baseSpaceId: string, options?: any): AxiosPromise<Array<SubscriptionResource>>;

    /**
     * Updates an existing subscription
     * @summary Modify a SubscriptionResource by ID
     * @param {string} id ID of the SubscriptionResource to modify
     * @param {SubscriptionResource} [body] The SubscriptionResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionApiInterface
     */
    updateSubscription(id: string, body?: SubscriptionResource, options?: any): AxiosPromise<SubscriptionResource>;

    /**
     * Updates an existing subscription
     * @summary Modify a SubscriptionResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the SubscriptionResource to modify
     * @param {SubscriptionResource} [body] The SubscriptionResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionApiInterface
     */
    updateSubscriptionSpaces(baseSpaceId: string, id: string, body?: SubscriptionResource, options?: any): AxiosPromise<SubscriptionResource>;

}

/**
 * SubscriptionApi - object-oriented interface
 * @export
 * @class SubscriptionApi
 * @extends {BaseAPI}
 */
export class SubscriptionApi extends BaseAPI implements SubscriptionApiInterface {
    /**
     * Creates a new subscription
     * @summary Create a SubscriptionResource
     * @param {SubscriptionResource} [body] The SubscriptionResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionApi
     */
    public createSubscription(body?: SubscriptionResource, options?: any) {
        return SubscriptionApiFp(this.configuration).createSubscription(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a new subscription
     * @summary Create a SubscriptionResource
     * @param {string} baseSpaceId ID of the space
     * @param {SubscriptionResource} [body] The SubscriptionResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionApi
     */
    public createSubscriptionSpaces(baseSpaceId: string, body?: SubscriptionResource, options?: any) {
        return SubscriptionApiFp(this.configuration).createSubscriptionSpaces(baseSpaceId, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes an existing subscription.
     * @summary Delete a SubscriptionResource by ID
     * @param {string} id ID of the SubscriptionResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionApi
     */
    public deleteSubscription(id: string, options?: any) {
        return SubscriptionApiFp(this.configuration).deleteSubscription(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes an existing subscription.
     * @summary Delete a SubscriptionResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the SubscriptionResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionApi
     */
    public deleteSubscriptionSpaces(baseSpaceId: string, id: string, options?: any) {
        return SubscriptionApiFp(this.configuration).deleteSubscriptionSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a subscription
     * @summary Get a SubscriptionResource by ID
     * @param {string} id ID of the SubscriptionResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionApi
     */
    public getSubscriptionById(id: string, options?: any) {
        return SubscriptionApiFp(this.configuration).getSubscriptionById(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a subscription
     * @summary Get a SubscriptionResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the SubscriptionResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionApi
     */
    public getSubscriptionByIdSpaces(baseSpaceId: string, id: string, options?: any) {
        return SubscriptionApiFp(this.configuration).getSubscriptionByIdSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all of the subscriptions in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of SubscriptionResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionApi
     */
    public indexSubscriptions(skip?: number, take?: number, options?: any) {
        return SubscriptionApiFp(this.configuration).indexSubscriptions(skip, take, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all of the subscriptions in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of SubscriptionResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionApi
     */
    public indexSubscriptionsSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any) {
        return SubscriptionApiFp(this.configuration).indexSubscriptionsSpaces(baseSpaceId, skip, take, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all the subscriptions in the supplied Octopus Deploy Space.
     * @summary Get a list of SubscriptionResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionApi
     */
    public listAllSubscriptions(options?: any) {
        return SubscriptionApiFp(this.configuration).listAllSubscriptions(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all the subscriptions in the supplied Octopus Deploy Space.
     * @summary Get a list of SubscriptionResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionApi
     */
    public listAllSubscriptionsSpaces(baseSpaceId: string, options?: any) {
        return SubscriptionApiFp(this.configuration).listAllSubscriptionsSpaces(baseSpaceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates an existing subscription
     * @summary Modify a SubscriptionResource by ID
     * @param {string} id ID of the SubscriptionResource to modify
     * @param {SubscriptionResource} [body] The SubscriptionResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionApi
     */
    public updateSubscription(id: string, body?: SubscriptionResource, options?: any) {
        return SubscriptionApiFp(this.configuration).updateSubscription(id, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates an existing subscription
     * @summary Modify a SubscriptionResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the SubscriptionResource to modify
     * @param {SubscriptionResource} [body] The SubscriptionResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionApi
     */
    public updateSubscriptionSpaces(baseSpaceId: string, id: string, body?: SubscriptionResource, options?: any) {
        return SubscriptionApiFp(this.configuration).updateSubscriptionSpaces(baseSpaceId, id, body, options).then((request) => request(this.axios, this.basePath));
    }
}
