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
import { WorkerPoolDynamicWorkerTypesResource } from '../model';
// @ts-ignore
import { WorkerPoolResource } from '../model';
// @ts-ignore
import { WorkerPoolResourceCollection } from '../model';
// @ts-ignore
import { WorkerPoolSupportedTypesResource } from '../model';
// @ts-ignore
import { WorkerPoolsSummaryResource } from '../model';
// @ts-ignore
import { WorkerResourceCollection } from '../model';
/**
 * WorkerPoolsApi - axios parameter creator
 * @export
 */
export const WorkerPoolsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new worker pool.
         * @summary Create a WorkerPoolResource
         * @param {WorkerPoolResource} [body] The WorkerPoolResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createWorkerPool: async (body?: WorkerPoolResource, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/workerpools`;
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
         * Creates a new worker pool.
         * @summary Create a WorkerPoolResource
         * @param {string} baseSpaceId ID of the space
         * @param {WorkerPoolResource} [body] The WorkerPoolResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createWorkerPoolSpaces: async (baseSpaceId: string, body?: WorkerPoolResource, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('createWorkerPoolSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/workerpools`
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
         * Deletes an existing pool.
         * @summary Delete a WorkerPoolResource by ID
         * @param {string} id ID of the WorkerPoolResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWorkerPool: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteWorkerPool', 'id', id)
            const localVarPath = `/workerpools/{id}`
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
         * Deletes an existing pool.
         * @summary Delete a WorkerPoolResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the WorkerPoolResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWorkerPoolSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('deleteWorkerPoolSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteWorkerPoolSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/workerpools/{id}`
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
         * Gets a single worker pool by ID.
         * @summary Get a WorkerPoolResource by ID
         * @param {string} id ID of the WorkerPoolResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorkerPoolById: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getWorkerPoolById', 'id', id)
            const localVarPath = `/workerpools/{id}`
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
         * Gets a single worker pool by ID.
         * @summary Get a WorkerPoolResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the WorkerPoolResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorkerPoolByIdSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getWorkerPoolByIdSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getWorkerPoolByIdSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/workerpools/{id}`
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
         * Lists the available Worker Types for the Dynamic Worker Pool
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorkerPoolDynamicWorkerTypes: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/workerpools/dynamicworkertypes`;
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
         * Lists the available Worker Types for the Dynamic Worker Pool
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorkerPoolDynamicWorkerTypesSpaces: async (baseSpaceId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getWorkerPoolDynamicWorkerTypesSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/workerpools/dynamicworkertypes`
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
         * Lists the available Worker Pool types.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorkerPoolSupportedTypes: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/workerpools/supportedtypes`;
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
         * Lists the available Worker Pool types.
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorkerPoolSupportedTypesSpaces: async (baseSpaceId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getWorkerPoolSupportedTypesSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/workerpools/supportedtypes`
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
         * Lists all worker pools, including a summary of machine information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorkerPoolsSummary: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/workerpools/summary`;
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
         * Lists all worker pools, including a summary of machine information
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorkerPoolsSummarySpaces: async (baseSpaceId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getWorkerPoolsSummarySpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/workerpools/summary`
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
         * Lists all of the machines that belong to the given worker pool.
         * @summary Get a list of WorkerResources for the given WorkerPoolResource
         * @param {string} id ID of the WorkerPool
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexWorkerPoolWorkers: async (id: string, skip?: number, take?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('indexWorkerPoolWorkers', 'id', id)
            const localVarPath = `/workerpools/{id}/workers`
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
         * Lists all of the machines that belong to the given worker pool.
         * @summary Get a list of WorkerResources for the given WorkerPoolResource
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the WorkerPool
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexWorkerPoolWorkersSpaces: async (baseSpaceId: string, id: string, skip?: number, take?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('indexWorkerPoolWorkersSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('indexWorkerPoolWorkersSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/workerpools/{id}/workers`
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
         * Lists all of the worker pools in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each environment.
         * @summary Get a list of WorkerPoolResources
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexWorkerPools: async (skip?: number, take?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/workerpools`;
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
         * Lists all of the worker pools in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each environment.
         * @summary Get a list of WorkerPoolResources
         * @param {string} baseSpaceId ID of the space
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexWorkerPoolsSpaces: async (baseSpaceId: string, skip?: number, take?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('indexWorkerPoolsSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/workerpools`
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
         * Lists the name and ID of all of the worker pools in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each pool.
         * @summary Get a list of WorkerPoolResources
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllWorkerPools: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/workerpools/all`;
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
         * Lists the name and ID of all of the worker pools in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each pool.
         * @summary Get a list of WorkerPoolResources
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllWorkerPoolsSpaces: async (baseSpaceId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('listAllWorkerPoolsSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/workerpools/all`
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
         * Takes an array of work pool IDs as the request body, uses the order of items in the array to sort the worker pools on the server. The ID of every worker pool must be specified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSortWorkerPools: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/workerpools/sortorder`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Takes an array of work pool IDs as the request body, uses the order of items in the array to sort the worker pools on the server. The ID of every worker pool must be specified.
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSortWorkerPoolsSpaces: async (baseSpaceId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('updateSortWorkerPoolsSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/workerpools/sortorder`
                .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)));
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Modifies an existing worker pool.
         * @summary Modify a WorkerPoolResource by ID
         * @param {string} id ID of the WorkerPoolResource to modify
         * @param {WorkerPoolResource} [body] The WorkerPoolResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateWorkerPool: async (id: string, body?: WorkerPoolResource, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateWorkerPool', 'id', id)
            const localVarPath = `/workerpools/{id}`
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
         * Modifies an existing worker pool.
         * @summary Modify a WorkerPoolResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the WorkerPoolResource to modify
         * @param {WorkerPoolResource} [body] The WorkerPoolResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateWorkerPoolSpaces: async (baseSpaceId: string, id: string, body?: WorkerPoolResource, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('updateWorkerPoolSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateWorkerPoolSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/workerpools/{id}`
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
 * WorkerPoolsApi - functional programming interface
 * @export
 */
export const WorkerPoolsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WorkerPoolsApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new worker pool.
         * @summary Create a WorkerPoolResource
         * @param {WorkerPoolResource} [body] The WorkerPoolResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createWorkerPool(body?: WorkerPoolResource, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkerPoolResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createWorkerPool(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Creates a new worker pool.
         * @summary Create a WorkerPoolResource
         * @param {string} baseSpaceId ID of the space
         * @param {WorkerPoolResource} [body] The WorkerPoolResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createWorkerPoolSpaces(baseSpaceId: string, body?: WorkerPoolResource, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkerPoolResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createWorkerPoolSpaces(baseSpaceId, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes an existing pool.
         * @summary Delete a WorkerPoolResource by ID
         * @param {string} id ID of the WorkerPoolResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteWorkerPool(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteWorkerPool(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes an existing pool.
         * @summary Delete a WorkerPoolResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the WorkerPoolResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteWorkerPoolSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteWorkerPoolSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets a single worker pool by ID.
         * @summary Get a WorkerPoolResource by ID
         * @param {string} id ID of the WorkerPoolResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWorkerPoolById(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkerPoolResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWorkerPoolById(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets a single worker pool by ID.
         * @summary Get a WorkerPoolResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the WorkerPoolResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWorkerPoolByIdSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkerPoolResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWorkerPoolByIdSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists the available Worker Types for the Dynamic Worker Pool
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWorkerPoolDynamicWorkerTypes(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkerPoolDynamicWorkerTypesResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWorkerPoolDynamicWorkerTypes(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists the available Worker Types for the Dynamic Worker Pool
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWorkerPoolDynamicWorkerTypesSpaces(baseSpaceId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkerPoolDynamicWorkerTypesResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWorkerPoolDynamicWorkerTypesSpaces(baseSpaceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists the available Worker Pool types.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWorkerPoolSupportedTypes(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkerPoolSupportedTypesResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWorkerPoolSupportedTypes(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists the available Worker Pool types.
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWorkerPoolSupportedTypesSpaces(baseSpaceId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkerPoolSupportedTypesResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWorkerPoolSupportedTypesSpaces(baseSpaceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all worker pools, including a summary of machine information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWorkerPoolsSummary(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkerPoolsSummaryResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWorkerPoolsSummary(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all worker pools, including a summary of machine information
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWorkerPoolsSummarySpaces(baseSpaceId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkerPoolsSummaryResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWorkerPoolsSummarySpaces(baseSpaceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all of the machines that belong to the given worker pool.
         * @summary Get a list of WorkerResources for the given WorkerPoolResource
         * @param {string} id ID of the WorkerPool
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async indexWorkerPoolWorkers(id: string, skip?: number, take?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkerResourceCollection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.indexWorkerPoolWorkers(id, skip, take, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all of the machines that belong to the given worker pool.
         * @summary Get a list of WorkerResources for the given WorkerPoolResource
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the WorkerPool
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async indexWorkerPoolWorkersSpaces(baseSpaceId: string, id: string, skip?: number, take?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkerResourceCollection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.indexWorkerPoolWorkersSpaces(baseSpaceId, id, skip, take, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all of the worker pools in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each environment.
         * @summary Get a list of WorkerPoolResources
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async indexWorkerPools(skip?: number, take?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkerPoolResourceCollection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.indexWorkerPools(skip, take, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all of the worker pools in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each environment.
         * @summary Get a list of WorkerPoolResources
         * @param {string} baseSpaceId ID of the space
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async indexWorkerPoolsSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkerPoolResourceCollection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.indexWorkerPoolsSpaces(baseSpaceId, skip, take, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists the name and ID of all of the worker pools in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each pool.
         * @summary Get a list of WorkerPoolResources
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAllWorkerPools(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<WorkerPoolResource>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAllWorkerPools(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists the name and ID of all of the worker pools in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each pool.
         * @summary Get a list of WorkerPoolResources
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAllWorkerPoolsSpaces(baseSpaceId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<WorkerPoolResource>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAllWorkerPoolsSpaces(baseSpaceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Takes an array of work pool IDs as the request body, uses the order of items in the array to sort the worker pools on the server. The ID of every worker pool must be specified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateSortWorkerPools(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateSortWorkerPools(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Takes an array of work pool IDs as the request body, uses the order of items in the array to sort the worker pools on the server. The ID of every worker pool must be specified.
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateSortWorkerPoolsSpaces(baseSpaceId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateSortWorkerPoolsSpaces(baseSpaceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Modifies an existing worker pool.
         * @summary Modify a WorkerPoolResource by ID
         * @param {string} id ID of the WorkerPoolResource to modify
         * @param {WorkerPoolResource} [body] The WorkerPoolResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateWorkerPool(id: string, body?: WorkerPoolResource, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkerPoolResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateWorkerPool(id, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Modifies an existing worker pool.
         * @summary Modify a WorkerPoolResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the WorkerPoolResource to modify
         * @param {WorkerPoolResource} [body] The WorkerPoolResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateWorkerPoolSpaces(baseSpaceId: string, id: string, body?: WorkerPoolResource, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkerPoolResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateWorkerPoolSpaces(baseSpaceId, id, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WorkerPoolsApi - factory interface
 * @export
 */
export const WorkerPoolsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WorkerPoolsApiFp(configuration)
    return {
        /**
         * Creates a new worker pool.
         * @summary Create a WorkerPoolResource
         * @param {WorkerPoolResource} [body] The WorkerPoolResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createWorkerPool(body?: WorkerPoolResource, options?: any): AxiosPromise<WorkerPoolResource> {
            return localVarFp.createWorkerPool(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a new worker pool.
         * @summary Create a WorkerPoolResource
         * @param {string} baseSpaceId ID of the space
         * @param {WorkerPoolResource} [body] The WorkerPoolResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createWorkerPoolSpaces(baseSpaceId: string, body?: WorkerPoolResource, options?: any): AxiosPromise<WorkerPoolResource> {
            return localVarFp.createWorkerPoolSpaces(baseSpaceId, body, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes an existing pool.
         * @summary Delete a WorkerPoolResource by ID
         * @param {string} id ID of the WorkerPoolResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWorkerPool(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteWorkerPool(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes an existing pool.
         * @summary Delete a WorkerPoolResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the WorkerPoolResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWorkerPoolSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteWorkerPoolSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a single worker pool by ID.
         * @summary Get a WorkerPoolResource by ID
         * @param {string} id ID of the WorkerPoolResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorkerPoolById(id: string, options?: any): AxiosPromise<WorkerPoolResource> {
            return localVarFp.getWorkerPoolById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a single worker pool by ID.
         * @summary Get a WorkerPoolResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the WorkerPoolResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorkerPoolByIdSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<WorkerPoolResource> {
            return localVarFp.getWorkerPoolByIdSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the available Worker Types for the Dynamic Worker Pool
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorkerPoolDynamicWorkerTypes(options?: any): AxiosPromise<WorkerPoolDynamicWorkerTypesResource> {
            return localVarFp.getWorkerPoolDynamicWorkerTypes(options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the available Worker Types for the Dynamic Worker Pool
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorkerPoolDynamicWorkerTypesSpaces(baseSpaceId: string, options?: any): AxiosPromise<WorkerPoolDynamicWorkerTypesResource> {
            return localVarFp.getWorkerPoolDynamicWorkerTypesSpaces(baseSpaceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the available Worker Pool types.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorkerPoolSupportedTypes(options?: any): AxiosPromise<WorkerPoolSupportedTypesResource> {
            return localVarFp.getWorkerPoolSupportedTypes(options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the available Worker Pool types.
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorkerPoolSupportedTypesSpaces(baseSpaceId: string, options?: any): AxiosPromise<WorkerPoolSupportedTypesResource> {
            return localVarFp.getWorkerPoolSupportedTypesSpaces(baseSpaceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all worker pools, including a summary of machine information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorkerPoolsSummary(options?: any): AxiosPromise<WorkerPoolsSummaryResource> {
            return localVarFp.getWorkerPoolsSummary(options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all worker pools, including a summary of machine information
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorkerPoolsSummarySpaces(baseSpaceId: string, options?: any): AxiosPromise<WorkerPoolsSummaryResource> {
            return localVarFp.getWorkerPoolsSummarySpaces(baseSpaceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all of the machines that belong to the given worker pool.
         * @summary Get a list of WorkerResources for the given WorkerPoolResource
         * @param {string} id ID of the WorkerPool
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexWorkerPoolWorkers(id: string, skip?: number, take?: number, options?: any): AxiosPromise<WorkerResourceCollection> {
            return localVarFp.indexWorkerPoolWorkers(id, skip, take, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all of the machines that belong to the given worker pool.
         * @summary Get a list of WorkerResources for the given WorkerPoolResource
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the WorkerPool
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexWorkerPoolWorkersSpaces(baseSpaceId: string, id: string, skip?: number, take?: number, options?: any): AxiosPromise<WorkerResourceCollection> {
            return localVarFp.indexWorkerPoolWorkersSpaces(baseSpaceId, id, skip, take, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all of the worker pools in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each environment.
         * @summary Get a list of WorkerPoolResources
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexWorkerPools(skip?: number, take?: number, options?: any): AxiosPromise<WorkerPoolResourceCollection> {
            return localVarFp.indexWorkerPools(skip, take, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all of the worker pools in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each environment.
         * @summary Get a list of WorkerPoolResources
         * @param {string} baseSpaceId ID of the space
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexWorkerPoolsSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any): AxiosPromise<WorkerPoolResourceCollection> {
            return localVarFp.indexWorkerPoolsSpaces(baseSpaceId, skip, take, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the name and ID of all of the worker pools in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each pool.
         * @summary Get a list of WorkerPoolResources
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllWorkerPools(options?: any): AxiosPromise<Array<WorkerPoolResource>> {
            return localVarFp.listAllWorkerPools(options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the name and ID of all of the worker pools in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each pool.
         * @summary Get a list of WorkerPoolResources
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllWorkerPoolsSpaces(baseSpaceId: string, options?: any): AxiosPromise<Array<WorkerPoolResource>> {
            return localVarFp.listAllWorkerPoolsSpaces(baseSpaceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Takes an array of work pool IDs as the request body, uses the order of items in the array to sort the worker pools on the server. The ID of every worker pool must be specified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSortWorkerPools(options?: any): AxiosPromise<void> {
            return localVarFp.updateSortWorkerPools(options).then((request) => request(axios, basePath));
        },
        /**
         * Takes an array of work pool IDs as the request body, uses the order of items in the array to sort the worker pools on the server. The ID of every worker pool must be specified.
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSortWorkerPoolsSpaces(baseSpaceId: string, options?: any): AxiosPromise<void> {
            return localVarFp.updateSortWorkerPoolsSpaces(baseSpaceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Modifies an existing worker pool.
         * @summary Modify a WorkerPoolResource by ID
         * @param {string} id ID of the WorkerPoolResource to modify
         * @param {WorkerPoolResource} [body] The WorkerPoolResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateWorkerPool(id: string, body?: WorkerPoolResource, options?: any): AxiosPromise<WorkerPoolResource> {
            return localVarFp.updateWorkerPool(id, body, options).then((request) => request(axios, basePath));
        },
        /**
         * Modifies an existing worker pool.
         * @summary Modify a WorkerPoolResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the WorkerPoolResource to modify
         * @param {WorkerPoolResource} [body] The WorkerPoolResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateWorkerPoolSpaces(baseSpaceId: string, id: string, body?: WorkerPoolResource, options?: any): AxiosPromise<WorkerPoolResource> {
            return localVarFp.updateWorkerPoolSpaces(baseSpaceId, id, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WorkerPoolsApi - interface
 * @export
 * @interface WorkerPoolsApi
 */
export interface WorkerPoolsApiInterface {
    /**
     * Creates a new worker pool.
     * @summary Create a WorkerPoolResource
     * @param {WorkerPoolResource} [body] The WorkerPoolResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApiInterface
     */
    createWorkerPool(body?: WorkerPoolResource, options?: any): AxiosPromise<WorkerPoolResource>;

    /**
     * Creates a new worker pool.
     * @summary Create a WorkerPoolResource
     * @param {string} baseSpaceId ID of the space
     * @param {WorkerPoolResource} [body] The WorkerPoolResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApiInterface
     */
    createWorkerPoolSpaces(baseSpaceId: string, body?: WorkerPoolResource, options?: any): AxiosPromise<WorkerPoolResource>;

    /**
     * Deletes an existing pool.
     * @summary Delete a WorkerPoolResource by ID
     * @param {string} id ID of the WorkerPoolResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApiInterface
     */
    deleteWorkerPool(id: string, options?: any): AxiosPromise<void>;

    /**
     * Deletes an existing pool.
     * @summary Delete a WorkerPoolResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the WorkerPoolResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApiInterface
     */
    deleteWorkerPoolSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<void>;

    /**
     * Gets a single worker pool by ID.
     * @summary Get a WorkerPoolResource by ID
     * @param {string} id ID of the WorkerPoolResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApiInterface
     */
    getWorkerPoolById(id: string, options?: any): AxiosPromise<WorkerPoolResource>;

    /**
     * Gets a single worker pool by ID.
     * @summary Get a WorkerPoolResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the WorkerPoolResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApiInterface
     */
    getWorkerPoolByIdSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<WorkerPoolResource>;

    /**
     * Lists the available Worker Types for the Dynamic Worker Pool
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApiInterface
     */
    getWorkerPoolDynamicWorkerTypes(options?: any): AxiosPromise<WorkerPoolDynamicWorkerTypesResource>;

    /**
     * Lists the available Worker Types for the Dynamic Worker Pool
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApiInterface
     */
    getWorkerPoolDynamicWorkerTypesSpaces(baseSpaceId: string, options?: any): AxiosPromise<WorkerPoolDynamicWorkerTypesResource>;

    /**
     * Lists the available Worker Pool types.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApiInterface
     */
    getWorkerPoolSupportedTypes(options?: any): AxiosPromise<WorkerPoolSupportedTypesResource>;

    /**
     * Lists the available Worker Pool types.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApiInterface
     */
    getWorkerPoolSupportedTypesSpaces(baseSpaceId: string, options?: any): AxiosPromise<WorkerPoolSupportedTypesResource>;

    /**
     * Lists all worker pools, including a summary of machine information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApiInterface
     */
    getWorkerPoolsSummary(options?: any): AxiosPromise<WorkerPoolsSummaryResource>;

    /**
     * Lists all worker pools, including a summary of machine information
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApiInterface
     */
    getWorkerPoolsSummarySpaces(baseSpaceId: string, options?: any): AxiosPromise<WorkerPoolsSummaryResource>;

    /**
     * Lists all of the machines that belong to the given worker pool.
     * @summary Get a list of WorkerResources for the given WorkerPoolResource
     * @param {string} id ID of the WorkerPool
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApiInterface
     */
    indexWorkerPoolWorkers(id: string, skip?: number, take?: number, options?: any): AxiosPromise<WorkerResourceCollection>;

    /**
     * Lists all of the machines that belong to the given worker pool.
     * @summary Get a list of WorkerResources for the given WorkerPoolResource
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the WorkerPool
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApiInterface
     */
    indexWorkerPoolWorkersSpaces(baseSpaceId: string, id: string, skip?: number, take?: number, options?: any): AxiosPromise<WorkerResourceCollection>;

    /**
     * Lists all of the worker pools in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each environment.
     * @summary Get a list of WorkerPoolResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApiInterface
     */
    indexWorkerPools(skip?: number, take?: number, options?: any): AxiosPromise<WorkerPoolResourceCollection>;

    /**
     * Lists all of the worker pools in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each environment.
     * @summary Get a list of WorkerPoolResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApiInterface
     */
    indexWorkerPoolsSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any): AxiosPromise<WorkerPoolResourceCollection>;

    /**
     * Lists the name and ID of all of the worker pools in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each pool.
     * @summary Get a list of WorkerPoolResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApiInterface
     */
    listAllWorkerPools(options?: any): AxiosPromise<Array<WorkerPoolResource>>;

    /**
     * Lists the name and ID of all of the worker pools in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each pool.
     * @summary Get a list of WorkerPoolResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApiInterface
     */
    listAllWorkerPoolsSpaces(baseSpaceId: string, options?: any): AxiosPromise<Array<WorkerPoolResource>>;

    /**
     * Takes an array of work pool IDs as the request body, uses the order of items in the array to sort the worker pools on the server. The ID of every worker pool must be specified.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApiInterface
     */
    updateSortWorkerPools(options?: any): AxiosPromise<void>;

    /**
     * Takes an array of work pool IDs as the request body, uses the order of items in the array to sort the worker pools on the server. The ID of every worker pool must be specified.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApiInterface
     */
    updateSortWorkerPoolsSpaces(baseSpaceId: string, options?: any): AxiosPromise<void>;

    /**
     * Modifies an existing worker pool.
     * @summary Modify a WorkerPoolResource by ID
     * @param {string} id ID of the WorkerPoolResource to modify
     * @param {WorkerPoolResource} [body] The WorkerPoolResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApiInterface
     */
    updateWorkerPool(id: string, body?: WorkerPoolResource, options?: any): AxiosPromise<WorkerPoolResource>;

    /**
     * Modifies an existing worker pool.
     * @summary Modify a WorkerPoolResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the WorkerPoolResource to modify
     * @param {WorkerPoolResource} [body] The WorkerPoolResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApiInterface
     */
    updateWorkerPoolSpaces(baseSpaceId: string, id: string, body?: WorkerPoolResource, options?: any): AxiosPromise<WorkerPoolResource>;

}

/**
 * WorkerPoolsApi - object-oriented interface
 * @export
 * @class WorkerPoolsApi
 * @extends {BaseAPI}
 */
export class WorkerPoolsApi extends BaseAPI implements WorkerPoolsApiInterface {
    /**
     * Creates a new worker pool.
     * @summary Create a WorkerPoolResource
     * @param {WorkerPoolResource} [body] The WorkerPoolResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApi
     */
    public createWorkerPool(body?: WorkerPoolResource, options?: any) {
        return WorkerPoolsApiFp(this.configuration).createWorkerPool(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a new worker pool.
     * @summary Create a WorkerPoolResource
     * @param {string} baseSpaceId ID of the space
     * @param {WorkerPoolResource} [body] The WorkerPoolResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApi
     */
    public createWorkerPoolSpaces(baseSpaceId: string, body?: WorkerPoolResource, options?: any) {
        return WorkerPoolsApiFp(this.configuration).createWorkerPoolSpaces(baseSpaceId, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes an existing pool.
     * @summary Delete a WorkerPoolResource by ID
     * @param {string} id ID of the WorkerPoolResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApi
     */
    public deleteWorkerPool(id: string, options?: any) {
        return WorkerPoolsApiFp(this.configuration).deleteWorkerPool(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes an existing pool.
     * @summary Delete a WorkerPoolResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the WorkerPoolResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApi
     */
    public deleteWorkerPoolSpaces(baseSpaceId: string, id: string, options?: any) {
        return WorkerPoolsApiFp(this.configuration).deleteWorkerPoolSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a single worker pool by ID.
     * @summary Get a WorkerPoolResource by ID
     * @param {string} id ID of the WorkerPoolResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApi
     */
    public getWorkerPoolById(id: string, options?: any) {
        return WorkerPoolsApiFp(this.configuration).getWorkerPoolById(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a single worker pool by ID.
     * @summary Get a WorkerPoolResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the WorkerPoolResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApi
     */
    public getWorkerPoolByIdSpaces(baseSpaceId: string, id: string, options?: any) {
        return WorkerPoolsApiFp(this.configuration).getWorkerPoolByIdSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the available Worker Types for the Dynamic Worker Pool
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApi
     */
    public getWorkerPoolDynamicWorkerTypes(options?: any) {
        return WorkerPoolsApiFp(this.configuration).getWorkerPoolDynamicWorkerTypes(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the available Worker Types for the Dynamic Worker Pool
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApi
     */
    public getWorkerPoolDynamicWorkerTypesSpaces(baseSpaceId: string, options?: any) {
        return WorkerPoolsApiFp(this.configuration).getWorkerPoolDynamicWorkerTypesSpaces(baseSpaceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the available Worker Pool types.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApi
     */
    public getWorkerPoolSupportedTypes(options?: any) {
        return WorkerPoolsApiFp(this.configuration).getWorkerPoolSupportedTypes(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the available Worker Pool types.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApi
     */
    public getWorkerPoolSupportedTypesSpaces(baseSpaceId: string, options?: any) {
        return WorkerPoolsApiFp(this.configuration).getWorkerPoolSupportedTypesSpaces(baseSpaceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all worker pools, including a summary of machine information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApi
     */
    public getWorkerPoolsSummary(options?: any) {
        return WorkerPoolsApiFp(this.configuration).getWorkerPoolsSummary(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all worker pools, including a summary of machine information
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApi
     */
    public getWorkerPoolsSummarySpaces(baseSpaceId: string, options?: any) {
        return WorkerPoolsApiFp(this.configuration).getWorkerPoolsSummarySpaces(baseSpaceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all of the machines that belong to the given worker pool.
     * @summary Get a list of WorkerResources for the given WorkerPoolResource
     * @param {string} id ID of the WorkerPool
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApi
     */
    public indexWorkerPoolWorkers(id: string, skip?: number, take?: number, options?: any) {
        return WorkerPoolsApiFp(this.configuration).indexWorkerPoolWorkers(id, skip, take, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all of the machines that belong to the given worker pool.
     * @summary Get a list of WorkerResources for the given WorkerPoolResource
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the WorkerPool
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApi
     */
    public indexWorkerPoolWorkersSpaces(baseSpaceId: string, id: string, skip?: number, take?: number, options?: any) {
        return WorkerPoolsApiFp(this.configuration).indexWorkerPoolWorkersSpaces(baseSpaceId, id, skip, take, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all of the worker pools in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each environment.
     * @summary Get a list of WorkerPoolResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApi
     */
    public indexWorkerPools(skip?: number, take?: number, options?: any) {
        return WorkerPoolsApiFp(this.configuration).indexWorkerPools(skip, take, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all of the worker pools in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each environment.
     * @summary Get a list of WorkerPoolResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApi
     */
    public indexWorkerPoolsSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any) {
        return WorkerPoolsApiFp(this.configuration).indexWorkerPoolsSpaces(baseSpaceId, skip, take, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the name and ID of all of the worker pools in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each pool.
     * @summary Get a list of WorkerPoolResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApi
     */
    public listAllWorkerPools(options?: any) {
        return WorkerPoolsApiFp(this.configuration).listAllWorkerPools(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the name and ID of all of the worker pools in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each pool.
     * @summary Get a list of WorkerPoolResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApi
     */
    public listAllWorkerPoolsSpaces(baseSpaceId: string, options?: any) {
        return WorkerPoolsApiFp(this.configuration).listAllWorkerPoolsSpaces(baseSpaceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Takes an array of work pool IDs as the request body, uses the order of items in the array to sort the worker pools on the server. The ID of every worker pool must be specified.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApi
     */
    public updateSortWorkerPools(options?: any) {
        return WorkerPoolsApiFp(this.configuration).updateSortWorkerPools(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Takes an array of work pool IDs as the request body, uses the order of items in the array to sort the worker pools on the server. The ID of every worker pool must be specified.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApi
     */
    public updateSortWorkerPoolsSpaces(baseSpaceId: string, options?: any) {
        return WorkerPoolsApiFp(this.configuration).updateSortWorkerPoolsSpaces(baseSpaceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Modifies an existing worker pool.
     * @summary Modify a WorkerPoolResource by ID
     * @param {string} id ID of the WorkerPoolResource to modify
     * @param {WorkerPoolResource} [body] The WorkerPoolResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApi
     */
    public updateWorkerPool(id: string, body?: WorkerPoolResource, options?: any) {
        return WorkerPoolsApiFp(this.configuration).updateWorkerPool(id, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Modifies an existing worker pool.
     * @summary Modify a WorkerPoolResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the WorkerPoolResource to modify
     * @param {WorkerPoolResource} [body] The WorkerPoolResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerPoolsApi
     */
    public updateWorkerPoolSpaces(baseSpaceId: string, id: string, body?: WorkerPoolResource, options?: any) {
        return WorkerPoolsApiFp(this.configuration).updateWorkerPoolSpaces(baseSpaceId, id, body, options).then((request) => request(this.axios, this.basePath));
    }
}
