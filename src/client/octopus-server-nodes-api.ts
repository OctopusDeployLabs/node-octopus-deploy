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
import { OctopusServerNodeDetailsResource } from '../model';
// @ts-ignore
import { OctopusServerNodeResource } from '../model';
// @ts-ignore
import { OctopusServerNodeResourceCollection } from '../model';
/**
 * OctopusServerNodesApi - axios parameter creator
 * @export
 */
export const OctopusServerNodesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Deletes an Octopus Server node.
         * @summary Delete a OctopusServerNodeResource by ID
         * @param {string} id ID of the OctopusServerNodeResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOctopusServerNode: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteOctopusServerNode', 'id', id)
            const localVarPath = `/octopusservernodes/{id}`
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
         * Returns HTTP ImATeapot (418) when the Octopus Server node is draining or offline, otherwise HTTP OK (200). Always returns the node information in the body.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLoadBalancerPing: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/octopusservernodes/ping`;
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
         * Returns all nodes, with status information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOctopusServerClusterSummary: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/octopusservernodes/summary`;
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
         * Gets an Octopus Server node by ID.
         * @summary Get a OctopusServerNodeResource by ID
         * @param {string} id ID of the OctopusServerNodeResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOctopusServerNodeById: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getOctopusServerNodeById', 'id', id)
            const localVarPath = `/octopusservernodes/{id}`
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
         * A count of the running tasks per node.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOctopusServerNodeDetails: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getOctopusServerNodeDetails', 'id', id)
            const localVarPath = `/octopusservernodes/{id}/details`
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
         * List all of the Octopus Server nodes participating in the current Octopus Server cluster.
         * @summary Get a list of OctopusServerNodeResources
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexOctopusServerNodes: async (skip?: number, take?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/octopusservernodes`;
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
         * Lists the name and ID of all Octopus Server nodes.
         * @summary Get a list of OctopusServerNodeResources
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllOctopusServerNodes: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/octopusservernodes/all`;
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
         * Modifies an Octopus Server node.
         * @summary Modify a OctopusServerNodeResource by ID
         * @param {string} id ID of the OctopusServerNodeResource to modify
         * @param {OctopusServerNodeResource} [body] The OctopusServerNodeResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOctopusServerNode: async (id: string, body?: OctopusServerNodeResource, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateOctopusServerNode', 'id', id)
            const localVarPath = `/octopusservernodes/{id}`
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
 * OctopusServerNodesApi - functional programming interface
 * @export
 */
export const OctopusServerNodesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OctopusServerNodesApiAxiosParamCreator(configuration)
    return {
        /**
         * Deletes an Octopus Server node.
         * @summary Delete a OctopusServerNodeResource by ID
         * @param {string} id ID of the OctopusServerNodeResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteOctopusServerNode(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOctopusServerNode(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns HTTP ImATeapot (418) when the Octopus Server node is draining or offline, otherwise HTTP OK (200). Always returns the node information in the body.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLoadBalancerPing(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLoadBalancerPing(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns all nodes, with status information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOctopusServerClusterSummary(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOctopusServerClusterSummary(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets an Octopus Server node by ID.
         * @summary Get a OctopusServerNodeResource by ID
         * @param {string} id ID of the OctopusServerNodeResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOctopusServerNodeById(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OctopusServerNodeResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOctopusServerNodeById(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * A count of the running tasks per node.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOctopusServerNodeDetails(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OctopusServerNodeDetailsResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOctopusServerNodeDetails(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List all of the Octopus Server nodes participating in the current Octopus Server cluster.
         * @summary Get a list of OctopusServerNodeResources
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async indexOctopusServerNodes(skip?: number, take?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OctopusServerNodeResourceCollection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.indexOctopusServerNodes(skip, take, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists the name and ID of all Octopus Server nodes.
         * @summary Get a list of OctopusServerNodeResources
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAllOctopusServerNodes(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<OctopusServerNodeResource>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAllOctopusServerNodes(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Modifies an Octopus Server node.
         * @summary Modify a OctopusServerNodeResource by ID
         * @param {string} id ID of the OctopusServerNodeResource to modify
         * @param {OctopusServerNodeResource} [body] The OctopusServerNodeResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateOctopusServerNode(id: string, body?: OctopusServerNodeResource, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OctopusServerNodeResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOctopusServerNode(id, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * OctopusServerNodesApi - factory interface
 * @export
 */
export const OctopusServerNodesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OctopusServerNodesApiFp(configuration)
    return {
        /**
         * Deletes an Octopus Server node.
         * @summary Delete a OctopusServerNodeResource by ID
         * @param {string} id ID of the OctopusServerNodeResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOctopusServerNode(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteOctopusServerNode(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns HTTP ImATeapot (418) when the Octopus Server node is draining or offline, otherwise HTTP OK (200). Always returns the node information in the body.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLoadBalancerPing(options?: any): AxiosPromise<void> {
            return localVarFp.getLoadBalancerPing(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns all nodes, with status information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOctopusServerClusterSummary(options?: any): AxiosPromise<void> {
            return localVarFp.getOctopusServerClusterSummary(options).then((request) => request(axios, basePath));
        },
        /**
         * Gets an Octopus Server node by ID.
         * @summary Get a OctopusServerNodeResource by ID
         * @param {string} id ID of the OctopusServerNodeResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOctopusServerNodeById(id: string, options?: any): AxiosPromise<OctopusServerNodeResource> {
            return localVarFp.getOctopusServerNodeById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * A count of the running tasks per node.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOctopusServerNodeDetails(id: string, options?: any): AxiosPromise<OctopusServerNodeDetailsResource> {
            return localVarFp.getOctopusServerNodeDetails(id, options).then((request) => request(axios, basePath));
        },
        /**
         * List all of the Octopus Server nodes participating in the current Octopus Server cluster.
         * @summary Get a list of OctopusServerNodeResources
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexOctopusServerNodes(skip?: number, take?: number, options?: any): AxiosPromise<OctopusServerNodeResourceCollection> {
            return localVarFp.indexOctopusServerNodes(skip, take, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the name and ID of all Octopus Server nodes.
         * @summary Get a list of OctopusServerNodeResources
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllOctopusServerNodes(options?: any): AxiosPromise<Array<OctopusServerNodeResource>> {
            return localVarFp.listAllOctopusServerNodes(options).then((request) => request(axios, basePath));
        },
        /**
         * Modifies an Octopus Server node.
         * @summary Modify a OctopusServerNodeResource by ID
         * @param {string} id ID of the OctopusServerNodeResource to modify
         * @param {OctopusServerNodeResource} [body] The OctopusServerNodeResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOctopusServerNode(id: string, body?: OctopusServerNodeResource, options?: any): AxiosPromise<OctopusServerNodeResource> {
            return localVarFp.updateOctopusServerNode(id, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OctopusServerNodesApi - interface
 * @export
 * @interface OctopusServerNodesApi
 */
export interface OctopusServerNodesApiInterface {
    /**
     * Deletes an Octopus Server node.
     * @summary Delete a OctopusServerNodeResource by ID
     * @param {string} id ID of the OctopusServerNodeResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OctopusServerNodesApiInterface
     */
    deleteOctopusServerNode(id: string, options?: any): AxiosPromise<void>;

    /**
     * Returns HTTP ImATeapot (418) when the Octopus Server node is draining or offline, otherwise HTTP OK (200). Always returns the node information in the body.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OctopusServerNodesApiInterface
     */
    getLoadBalancerPing(options?: any): AxiosPromise<void>;

    /**
     * Returns all nodes, with status information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OctopusServerNodesApiInterface
     */
    getOctopusServerClusterSummary(options?: any): AxiosPromise<void>;

    /**
     * Gets an Octopus Server node by ID.
     * @summary Get a OctopusServerNodeResource by ID
     * @param {string} id ID of the OctopusServerNodeResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OctopusServerNodesApiInterface
     */
    getOctopusServerNodeById(id: string, options?: any): AxiosPromise<OctopusServerNodeResource>;

    /**
     * A count of the running tasks per node.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OctopusServerNodesApiInterface
     */
    getOctopusServerNodeDetails(id: string, options?: any): AxiosPromise<OctopusServerNodeDetailsResource>;

    /**
     * List all of the Octopus Server nodes participating in the current Octopus Server cluster.
     * @summary Get a list of OctopusServerNodeResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OctopusServerNodesApiInterface
     */
    indexOctopusServerNodes(skip?: number, take?: number, options?: any): AxiosPromise<OctopusServerNodeResourceCollection>;

    /**
     * Lists the name and ID of all Octopus Server nodes.
     * @summary Get a list of OctopusServerNodeResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OctopusServerNodesApiInterface
     */
    listAllOctopusServerNodes(options?: any): AxiosPromise<Array<OctopusServerNodeResource>>;

    /**
     * Modifies an Octopus Server node.
     * @summary Modify a OctopusServerNodeResource by ID
     * @param {string} id ID of the OctopusServerNodeResource to modify
     * @param {OctopusServerNodeResource} [body] The OctopusServerNodeResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OctopusServerNodesApiInterface
     */
    updateOctopusServerNode(id: string, body?: OctopusServerNodeResource, options?: any): AxiosPromise<OctopusServerNodeResource>;

}

/**
 * OctopusServerNodesApi - object-oriented interface
 * @export
 * @class OctopusServerNodesApi
 * @extends {BaseAPI}
 */
export class OctopusServerNodesApi extends BaseAPI implements OctopusServerNodesApiInterface {
    /**
     * Deletes an Octopus Server node.
     * @summary Delete a OctopusServerNodeResource by ID
     * @param {string} id ID of the OctopusServerNodeResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OctopusServerNodesApi
     */
    public deleteOctopusServerNode(id: string, options?: any) {
        return OctopusServerNodesApiFp(this.configuration).deleteOctopusServerNode(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns HTTP ImATeapot (418) when the Octopus Server node is draining or offline, otherwise HTTP OK (200). Always returns the node information in the body.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OctopusServerNodesApi
     */
    public getLoadBalancerPing(options?: any) {
        return OctopusServerNodesApiFp(this.configuration).getLoadBalancerPing(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns all nodes, with status information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OctopusServerNodesApi
     */
    public getOctopusServerClusterSummary(options?: any) {
        return OctopusServerNodesApiFp(this.configuration).getOctopusServerClusterSummary(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets an Octopus Server node by ID.
     * @summary Get a OctopusServerNodeResource by ID
     * @param {string} id ID of the OctopusServerNodeResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OctopusServerNodesApi
     */
    public getOctopusServerNodeById(id: string, options?: any) {
        return OctopusServerNodesApiFp(this.configuration).getOctopusServerNodeById(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * A count of the running tasks per node.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OctopusServerNodesApi
     */
    public getOctopusServerNodeDetails(id: string, options?: any) {
        return OctopusServerNodesApiFp(this.configuration).getOctopusServerNodeDetails(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List all of the Octopus Server nodes participating in the current Octopus Server cluster.
     * @summary Get a list of OctopusServerNodeResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OctopusServerNodesApi
     */
    public indexOctopusServerNodes(skip?: number, take?: number, options?: any) {
        return OctopusServerNodesApiFp(this.configuration).indexOctopusServerNodes(skip, take, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the name and ID of all Octopus Server nodes.
     * @summary Get a list of OctopusServerNodeResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OctopusServerNodesApi
     */
    public listAllOctopusServerNodes(options?: any) {
        return OctopusServerNodesApiFp(this.configuration).listAllOctopusServerNodes(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Modifies an Octopus Server node.
     * @summary Modify a OctopusServerNodeResource by ID
     * @param {string} id ID of the OctopusServerNodeResource to modify
     * @param {OctopusServerNodeResource} [body] The OctopusServerNodeResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OctopusServerNodesApi
     */
    public updateOctopusServerNode(id: string, body?: OctopusServerNodeResource, options?: any) {
        return OctopusServerNodesApiFp(this.configuration).updateOctopusServerNode(id, body, options).then((request) => request(this.axios, this.basePath));
    }
}
