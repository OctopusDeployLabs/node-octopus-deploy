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
import { RunbookRunResource } from '../model';
// @ts-ignore
import { RunbookRunResourceCollection } from '../model';
/**
 * RunbookRunsApi - axios parameter creator
 * @export
 */
export const RunbookRunsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new runbookRun.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRunbookRunCreate: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/runbookRuns`;
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
         * Creates a new runbookRun.
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRunbookRunCreateSpaces: async (baseSpaceId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('createRunbookRunCreateSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/runbookRuns`
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes a runbookRun.
         * @summary Delete a RunbookRunResource by ID
         * @param {string} id ID of the RunbookRunResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRunbookRun: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteRunbookRun', 'id', id)
            const localVarPath = `/runbookRuns/{id}`
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
         * Deletes a runbookRun.
         * @summary Delete a RunbookRunResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the RunbookRunResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRunbookRunSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('deleteRunbookRunSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteRunbookRunSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/runbookRuns/{id}`
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
         * Gets a runbookRun by ID.
         * @summary Get a RunbookRunResource by ID
         * @param {string} id ID of the RunbookRunResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRunbookRunById: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getRunbookRunById', 'id', id)
            const localVarPath = `/runbookRuns/{id}`
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
         * Gets a runbookRun by ID.
         * @summary Get a RunbookRunResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the RunbookRunResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRunbookRunByIdSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getRunbookRunByIdSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getRunbookRunByIdSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/runbookRuns/{id}`
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
         * Lists all of the runbookRuns in the supplied Octopus Deploy Space, from projects, snapshots and environments accessible by the current user. The results will be sorted from most recent to least recent runbookRun.
         * @summary Get a list of RunbookRunResources
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexRunbookRuns: async (skip?: number, take?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/runbookRuns`;
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
         * Lists all of the runbookRuns in the supplied Octopus Deploy Space, from projects, snapshots and environments accessible by the current user. The results will be sorted from most recent to least recent runbookRun.
         * @summary Get a list of RunbookRunResources
         * @param {string} baseSpaceId ID of the space
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexRunbookRunsSpaces: async (baseSpaceId: string, skip?: number, take?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('indexRunbookRunsSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/runbookRuns`
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
    }
};

/**
 * RunbookRunsApi - functional programming interface
 * @export
 */
export const RunbookRunsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RunbookRunsApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new runbookRun.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createRunbookRunCreate(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RunbookRunResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRunbookRunCreate(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Creates a new runbookRun.
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createRunbookRunCreateSpaces(baseSpaceId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RunbookRunResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRunbookRunCreateSpaces(baseSpaceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes a runbookRun.
         * @summary Delete a RunbookRunResource by ID
         * @param {string} id ID of the RunbookRunResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteRunbookRun(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRunbookRun(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes a runbookRun.
         * @summary Delete a RunbookRunResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the RunbookRunResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteRunbookRunSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRunbookRunSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets a runbookRun by ID.
         * @summary Get a RunbookRunResource by ID
         * @param {string} id ID of the RunbookRunResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRunbookRunById(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RunbookRunResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRunbookRunById(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets a runbookRun by ID.
         * @summary Get a RunbookRunResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the RunbookRunResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRunbookRunByIdSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RunbookRunResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRunbookRunByIdSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all of the runbookRuns in the supplied Octopus Deploy Space, from projects, snapshots and environments accessible by the current user. The results will be sorted from most recent to least recent runbookRun.
         * @summary Get a list of RunbookRunResources
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async indexRunbookRuns(skip?: number, take?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RunbookRunResourceCollection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.indexRunbookRuns(skip, take, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all of the runbookRuns in the supplied Octopus Deploy Space, from projects, snapshots and environments accessible by the current user. The results will be sorted from most recent to least recent runbookRun.
         * @summary Get a list of RunbookRunResources
         * @param {string} baseSpaceId ID of the space
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async indexRunbookRunsSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RunbookRunResourceCollection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.indexRunbookRunsSpaces(baseSpaceId, skip, take, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RunbookRunsApi - factory interface
 * @export
 */
export const RunbookRunsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RunbookRunsApiFp(configuration)
    return {
        /**
         * Creates a new runbookRun.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRunbookRunCreate(options?: any): AxiosPromise<RunbookRunResource> {
            return localVarFp.createRunbookRunCreate(options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a new runbookRun.
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRunbookRunCreateSpaces(baseSpaceId: string, options?: any): AxiosPromise<RunbookRunResource> {
            return localVarFp.createRunbookRunCreateSpaces(baseSpaceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a runbookRun.
         * @summary Delete a RunbookRunResource by ID
         * @param {string} id ID of the RunbookRunResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRunbookRun(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteRunbookRun(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a runbookRun.
         * @summary Delete a RunbookRunResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the RunbookRunResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRunbookRunSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteRunbookRunSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a runbookRun by ID.
         * @summary Get a RunbookRunResource by ID
         * @param {string} id ID of the RunbookRunResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRunbookRunById(id: string, options?: any): AxiosPromise<RunbookRunResource> {
            return localVarFp.getRunbookRunById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a runbookRun by ID.
         * @summary Get a RunbookRunResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the RunbookRunResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRunbookRunByIdSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<RunbookRunResource> {
            return localVarFp.getRunbookRunByIdSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all of the runbookRuns in the supplied Octopus Deploy Space, from projects, snapshots and environments accessible by the current user. The results will be sorted from most recent to least recent runbookRun.
         * @summary Get a list of RunbookRunResources
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexRunbookRuns(skip?: number, take?: number, options?: any): AxiosPromise<RunbookRunResourceCollection> {
            return localVarFp.indexRunbookRuns(skip, take, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all of the runbookRuns in the supplied Octopus Deploy Space, from projects, snapshots and environments accessible by the current user. The results will be sorted from most recent to least recent runbookRun.
         * @summary Get a list of RunbookRunResources
         * @param {string} baseSpaceId ID of the space
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexRunbookRunsSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any): AxiosPromise<RunbookRunResourceCollection> {
            return localVarFp.indexRunbookRunsSpaces(baseSpaceId, skip, take, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RunbookRunsApi - interface
 * @export
 * @interface RunbookRunsApi
 */
export interface RunbookRunsApiInterface {
    /**
     * Creates a new runbookRun.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunbookRunsApiInterface
     */
    createRunbookRunCreate(options?: any): AxiosPromise<RunbookRunResource>;

    /**
     * Creates a new runbookRun.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunbookRunsApiInterface
     */
    createRunbookRunCreateSpaces(baseSpaceId: string, options?: any): AxiosPromise<RunbookRunResource>;

    /**
     * Deletes a runbookRun.
     * @summary Delete a RunbookRunResource by ID
     * @param {string} id ID of the RunbookRunResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunbookRunsApiInterface
     */
    deleteRunbookRun(id: string, options?: any): AxiosPromise<void>;

    /**
     * Deletes a runbookRun.
     * @summary Delete a RunbookRunResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the RunbookRunResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunbookRunsApiInterface
     */
    deleteRunbookRunSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<void>;

    /**
     * Gets a runbookRun by ID.
     * @summary Get a RunbookRunResource by ID
     * @param {string} id ID of the RunbookRunResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunbookRunsApiInterface
     */
    getRunbookRunById(id: string, options?: any): AxiosPromise<RunbookRunResource>;

    /**
     * Gets a runbookRun by ID.
     * @summary Get a RunbookRunResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the RunbookRunResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunbookRunsApiInterface
     */
    getRunbookRunByIdSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<RunbookRunResource>;

    /**
     * Lists all of the runbookRuns in the supplied Octopus Deploy Space, from projects, snapshots and environments accessible by the current user. The results will be sorted from most recent to least recent runbookRun.
     * @summary Get a list of RunbookRunResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunbookRunsApiInterface
     */
    indexRunbookRuns(skip?: number, take?: number, options?: any): AxiosPromise<RunbookRunResourceCollection>;

    /**
     * Lists all of the runbookRuns in the supplied Octopus Deploy Space, from projects, snapshots and environments accessible by the current user. The results will be sorted from most recent to least recent runbookRun.
     * @summary Get a list of RunbookRunResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunbookRunsApiInterface
     */
    indexRunbookRunsSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any): AxiosPromise<RunbookRunResourceCollection>;

}

/**
 * RunbookRunsApi - object-oriented interface
 * @export
 * @class RunbookRunsApi
 * @extends {BaseAPI}
 */
export class RunbookRunsApi extends BaseAPI implements RunbookRunsApiInterface {
    /**
     * Creates a new runbookRun.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunbookRunsApi
     */
    public createRunbookRunCreate(options?: any) {
        return RunbookRunsApiFp(this.configuration).createRunbookRunCreate(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a new runbookRun.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunbookRunsApi
     */
    public createRunbookRunCreateSpaces(baseSpaceId: string, options?: any) {
        return RunbookRunsApiFp(this.configuration).createRunbookRunCreateSpaces(baseSpaceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a runbookRun.
     * @summary Delete a RunbookRunResource by ID
     * @param {string} id ID of the RunbookRunResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunbookRunsApi
     */
    public deleteRunbookRun(id: string, options?: any) {
        return RunbookRunsApiFp(this.configuration).deleteRunbookRun(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a runbookRun.
     * @summary Delete a RunbookRunResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the RunbookRunResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunbookRunsApi
     */
    public deleteRunbookRunSpaces(baseSpaceId: string, id: string, options?: any) {
        return RunbookRunsApiFp(this.configuration).deleteRunbookRunSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a runbookRun by ID.
     * @summary Get a RunbookRunResource by ID
     * @param {string} id ID of the RunbookRunResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunbookRunsApi
     */
    public getRunbookRunById(id: string, options?: any) {
        return RunbookRunsApiFp(this.configuration).getRunbookRunById(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a runbookRun by ID.
     * @summary Get a RunbookRunResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the RunbookRunResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunbookRunsApi
     */
    public getRunbookRunByIdSpaces(baseSpaceId: string, id: string, options?: any) {
        return RunbookRunsApiFp(this.configuration).getRunbookRunByIdSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all of the runbookRuns in the supplied Octopus Deploy Space, from projects, snapshots and environments accessible by the current user. The results will be sorted from most recent to least recent runbookRun.
     * @summary Get a list of RunbookRunResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunbookRunsApi
     */
    public indexRunbookRuns(skip?: number, take?: number, options?: any) {
        return RunbookRunsApiFp(this.configuration).indexRunbookRuns(skip, take, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all of the runbookRuns in the supplied Octopus Deploy Space, from projects, snapshots and environments accessible by the current user. The results will be sorted from most recent to least recent runbookRun.
     * @summary Get a list of RunbookRunResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunbookRunsApi
     */
    public indexRunbookRunsSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any) {
        return RunbookRunsApiFp(this.configuration).indexRunbookRunsSpaces(baseSpaceId, skip, take, options).then((request) => request(this.axios, this.basePath));
    }
}
