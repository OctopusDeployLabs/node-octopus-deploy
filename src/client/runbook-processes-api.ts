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
import { RunbookProcessResource } from '../model';
// @ts-ignore
import { RunbookProcessResourceCollection } from '../model';
// @ts-ignore
import { RunbookSnapshotTemplateResource } from '../model';
/**
 * RunbookProcessesApi - axios parameter creator
 * @export
 */
export const RunbookProcessesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Gets a Runbook Process by ID.
         * @summary Get a RunbookProcessResource by ID
         * @param {string} id ID of the RunbookProcessResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRunbookProcessById: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getRunbookProcessById', 'id', id)
            const localVarPath = `/runbookProcesses/{id}`
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
         * Gets a Runbook Process by ID.
         * @summary Get a RunbookProcessResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the RunbookProcessResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRunbookProcessByIdSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getRunbookProcessByIdSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getRunbookProcessByIdSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/runbookProcesses/{id}`
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
         * Gets all of the information necessary for creating or editing a Runbook Snapshot using this Runbook Process.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRunbookSnapshotTemplateForRunbookStep: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getRunbookSnapshotTemplateForRunbookStep', 'id', id)
            const localVarPath = `/runbookProcesses/{id}/runbookSnapshotTemplate`
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
         * Gets all of the information necessary for creating or editing a Runbook Snapshot using this Runbook Process.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRunbookSnapshotTemplateForRunbookStepSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getRunbookSnapshotTemplateForRunbookStepSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getRunbookSnapshotTemplateForRunbookStepSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/runbookProcesses/{id}/runbookSnapshotTemplate`
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
         * Lists all the Runbook Processes in the supplied Octopus Deploy Space, sorted by Id
         * @summary Get a list of RunbookProcessResources
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexRunbookProcesses: async (skip?: number, take?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/runbookProcesses`;
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
         * Lists all the Runbook Processes in the supplied Octopus Deploy Space, sorted by Id
         * @summary Get a list of RunbookProcessResources
         * @param {string} baseSpaceId ID of the space
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexRunbookProcessesSpaces: async (baseSpaceId: string, skip?: number, take?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('indexRunbookProcessesSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/runbookProcesses`
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
         * Modifies a Runbook Process. Only allowed for Runbook Processes owned by a project.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRunbookProcess: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateRunbookProcess', 'id', id)
            const localVarPath = `/runbookProcesses/{id}`
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Modifies a Runbook Process. Only allowed for Runbook Processes owned by a project.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRunbookProcessSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('updateRunbookProcessSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateRunbookProcessSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/runbookProcesses/{id}`
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
 * RunbookProcessesApi - functional programming interface
 * @export
 */
export const RunbookProcessesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RunbookProcessesApiAxiosParamCreator(configuration)
    return {
        /**
         * Gets a Runbook Process by ID.
         * @summary Get a RunbookProcessResource by ID
         * @param {string} id ID of the RunbookProcessResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRunbookProcessById(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RunbookProcessResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRunbookProcessById(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets a Runbook Process by ID.
         * @summary Get a RunbookProcessResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the RunbookProcessResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRunbookProcessByIdSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RunbookProcessResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRunbookProcessByIdSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets all of the information necessary for creating or editing a Runbook Snapshot using this Runbook Process.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRunbookSnapshotTemplateForRunbookStep(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RunbookSnapshotTemplateResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRunbookSnapshotTemplateForRunbookStep(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets all of the information necessary for creating or editing a Runbook Snapshot using this Runbook Process.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRunbookSnapshotTemplateForRunbookStepSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RunbookSnapshotTemplateResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRunbookSnapshotTemplateForRunbookStepSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all the Runbook Processes in the supplied Octopus Deploy Space, sorted by Id
         * @summary Get a list of RunbookProcessResources
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async indexRunbookProcesses(skip?: number, take?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RunbookProcessResourceCollection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.indexRunbookProcesses(skip, take, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all the Runbook Processes in the supplied Octopus Deploy Space, sorted by Id
         * @summary Get a list of RunbookProcessResources
         * @param {string} baseSpaceId ID of the space
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async indexRunbookProcessesSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RunbookProcessResourceCollection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.indexRunbookProcessesSpaces(baseSpaceId, skip, take, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Modifies a Runbook Process. Only allowed for Runbook Processes owned by a project.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateRunbookProcess(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RunbookProcessResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateRunbookProcess(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Modifies a Runbook Process. Only allowed for Runbook Processes owned by a project.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateRunbookProcessSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RunbookProcessResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateRunbookProcessSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RunbookProcessesApi - factory interface
 * @export
 */
export const RunbookProcessesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RunbookProcessesApiFp(configuration)
    return {
        /**
         * Gets a Runbook Process by ID.
         * @summary Get a RunbookProcessResource by ID
         * @param {string} id ID of the RunbookProcessResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRunbookProcessById(id: string, options?: any): AxiosPromise<RunbookProcessResource> {
            return localVarFp.getRunbookProcessById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a Runbook Process by ID.
         * @summary Get a RunbookProcessResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the RunbookProcessResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRunbookProcessByIdSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<RunbookProcessResource> {
            return localVarFp.getRunbookProcessByIdSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets all of the information necessary for creating or editing a Runbook Snapshot using this Runbook Process.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRunbookSnapshotTemplateForRunbookStep(id: string, options?: any): AxiosPromise<RunbookSnapshotTemplateResource> {
            return localVarFp.getRunbookSnapshotTemplateForRunbookStep(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets all of the information necessary for creating or editing a Runbook Snapshot using this Runbook Process.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRunbookSnapshotTemplateForRunbookStepSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<RunbookSnapshotTemplateResource> {
            return localVarFp.getRunbookSnapshotTemplateForRunbookStepSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all the Runbook Processes in the supplied Octopus Deploy Space, sorted by Id
         * @summary Get a list of RunbookProcessResources
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexRunbookProcesses(skip?: number, take?: number, options?: any): AxiosPromise<RunbookProcessResourceCollection> {
            return localVarFp.indexRunbookProcesses(skip, take, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all the Runbook Processes in the supplied Octopus Deploy Space, sorted by Id
         * @summary Get a list of RunbookProcessResources
         * @param {string} baseSpaceId ID of the space
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexRunbookProcessesSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any): AxiosPromise<RunbookProcessResourceCollection> {
            return localVarFp.indexRunbookProcessesSpaces(baseSpaceId, skip, take, options).then((request) => request(axios, basePath));
        },
        /**
         * Modifies a Runbook Process. Only allowed for Runbook Processes owned by a project.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRunbookProcess(id: string, options?: any): AxiosPromise<RunbookProcessResource> {
            return localVarFp.updateRunbookProcess(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Modifies a Runbook Process. Only allowed for Runbook Processes owned by a project.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRunbookProcessSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<RunbookProcessResource> {
            return localVarFp.updateRunbookProcessSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RunbookProcessesApi - interface
 * @export
 * @interface RunbookProcessesApi
 */
export interface RunbookProcessesApiInterface {
    /**
     * Gets a Runbook Process by ID.
     * @summary Get a RunbookProcessResource by ID
     * @param {string} id ID of the RunbookProcessResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunbookProcessesApiInterface
     */
    getRunbookProcessById(id: string, options?: any): AxiosPromise<RunbookProcessResource>;

    /**
     * Gets a Runbook Process by ID.
     * @summary Get a RunbookProcessResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the RunbookProcessResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunbookProcessesApiInterface
     */
    getRunbookProcessByIdSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<RunbookProcessResource>;

    /**
     * Gets all of the information necessary for creating or editing a Runbook Snapshot using this Runbook Process.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunbookProcessesApiInterface
     */
    getRunbookSnapshotTemplateForRunbookStep(id: string, options?: any): AxiosPromise<RunbookSnapshotTemplateResource>;

    /**
     * Gets all of the information necessary for creating or editing a Runbook Snapshot using this Runbook Process.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunbookProcessesApiInterface
     */
    getRunbookSnapshotTemplateForRunbookStepSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<RunbookSnapshotTemplateResource>;

    /**
     * Lists all the Runbook Processes in the supplied Octopus Deploy Space, sorted by Id
     * @summary Get a list of RunbookProcessResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunbookProcessesApiInterface
     */
    indexRunbookProcesses(skip?: number, take?: number, options?: any): AxiosPromise<RunbookProcessResourceCollection>;

    /**
     * Lists all the Runbook Processes in the supplied Octopus Deploy Space, sorted by Id
     * @summary Get a list of RunbookProcessResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunbookProcessesApiInterface
     */
    indexRunbookProcessesSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any): AxiosPromise<RunbookProcessResourceCollection>;

    /**
     * Modifies a Runbook Process. Only allowed for Runbook Processes owned by a project.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunbookProcessesApiInterface
     */
    updateRunbookProcess(id: string, options?: any): AxiosPromise<RunbookProcessResource>;

    /**
     * Modifies a Runbook Process. Only allowed for Runbook Processes owned by a project.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunbookProcessesApiInterface
     */
    updateRunbookProcessSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<RunbookProcessResource>;

}

/**
 * RunbookProcessesApi - object-oriented interface
 * @export
 * @class RunbookProcessesApi
 * @extends {BaseAPI}
 */
export class RunbookProcessesApi extends BaseAPI implements RunbookProcessesApiInterface {
    /**
     * Gets a Runbook Process by ID.
     * @summary Get a RunbookProcessResource by ID
     * @param {string} id ID of the RunbookProcessResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunbookProcessesApi
     */
    public getRunbookProcessById(id: string, options?: any) {
        return RunbookProcessesApiFp(this.configuration).getRunbookProcessById(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a Runbook Process by ID.
     * @summary Get a RunbookProcessResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the RunbookProcessResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunbookProcessesApi
     */
    public getRunbookProcessByIdSpaces(baseSpaceId: string, id: string, options?: any) {
        return RunbookProcessesApiFp(this.configuration).getRunbookProcessByIdSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets all of the information necessary for creating or editing a Runbook Snapshot using this Runbook Process.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunbookProcessesApi
     */
    public getRunbookSnapshotTemplateForRunbookStep(id: string, options?: any) {
        return RunbookProcessesApiFp(this.configuration).getRunbookSnapshotTemplateForRunbookStep(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets all of the information necessary for creating or editing a Runbook Snapshot using this Runbook Process.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunbookProcessesApi
     */
    public getRunbookSnapshotTemplateForRunbookStepSpaces(baseSpaceId: string, id: string, options?: any) {
        return RunbookProcessesApiFp(this.configuration).getRunbookSnapshotTemplateForRunbookStepSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all the Runbook Processes in the supplied Octopus Deploy Space, sorted by Id
     * @summary Get a list of RunbookProcessResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunbookProcessesApi
     */
    public indexRunbookProcesses(skip?: number, take?: number, options?: any) {
        return RunbookProcessesApiFp(this.configuration).indexRunbookProcesses(skip, take, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all the Runbook Processes in the supplied Octopus Deploy Space, sorted by Id
     * @summary Get a list of RunbookProcessResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunbookProcessesApi
     */
    public indexRunbookProcessesSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any) {
        return RunbookProcessesApiFp(this.configuration).indexRunbookProcessesSpaces(baseSpaceId, skip, take, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Modifies a Runbook Process. Only allowed for Runbook Processes owned by a project.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunbookProcessesApi
     */
    public updateRunbookProcess(id: string, options?: any) {
        return RunbookProcessesApiFp(this.configuration).updateRunbookProcess(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Modifies a Runbook Process. Only allowed for Runbook Processes owned by a project.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunbookProcessesApi
     */
    public updateRunbookProcessSpaces(baseSpaceId: string, id: string, options?: any) {
        return RunbookProcessesApiFp(this.configuration).updateRunbookProcessSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }
}
