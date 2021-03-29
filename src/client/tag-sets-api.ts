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
import { TagSetResource } from '../model';
// @ts-ignore
import { TagSetResourceCollection } from '../model';
/**
 * TagSetsApi - axios parameter creator
 * @export
 */
export const TagSetsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new tag set.
         * @summary Create a TagSetResource
         * @param {TagSetResource} [body] The TagSetResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTagSet: async (body?: TagSetResource, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/tagsets`;
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
         * Creates a new tag set.
         * @summary Create a TagSetResource
         * @param {string} baseSpaceId ID of the space
         * @param {TagSetResource} [body] The TagSetResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTagSetSpaces: async (baseSpaceId: string, body?: TagSetResource, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('createTagSetSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/tagsets`
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
         * Deletes an existing tag set.
         * @summary Delete a TagSetResource by ID
         * @param {string} id ID of the TagSetResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTagSet: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteTagSet', 'id', id)
            const localVarPath = `/tagsets/{id}`
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
         * Deletes an existing tag set.
         * @summary Delete a TagSetResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the TagSetResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTagSetSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('deleteTagSetSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteTagSetSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/tagsets/{id}`
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
         * Gets a tag set by ID.
         * @summary Get a TagSetResource by ID
         * @param {string} id ID of the TagSetResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTagSetById: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getTagSetById', 'id', id)
            const localVarPath = `/tagsets/{id}`
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
         * Gets a tag set by ID.
         * @summary Get a TagSetResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the TagSetResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTagSetByIdSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getTagSetByIdSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getTagSetByIdSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/tagsets/{id}`
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
         * Lists all of the tag sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by the `SortOrder` field on each tag set.
         * @summary Get a list of TagSetResources
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexTagSets: async (skip?: number, take?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/tagsets`;
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
         * Lists all of the tag sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by the `SortOrder` field on each tag set.
         * @summary Get a list of TagSetResources
         * @param {string} baseSpaceId ID of the space
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexTagSetsSpaces: async (baseSpaceId: string, skip?: number, take?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('indexTagSetsSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/tagsets`
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
         * Lists the details of all of the tag sets in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each tag set.
         * @summary Get a list of TagSetResources
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllTagSets: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/tagsets/all`;
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
         * Lists the details of all of the tag sets in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each tag set.
         * @summary Get a list of TagSetResources
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllTagSetsSpaces: async (baseSpaceId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('listAllTagSetsSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/tagsets/all`
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
         * Takes an array of tag set IDs as the request body, uses the order of items in the array to sort the tag sets on the server. The ID of every tag set must be specified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSortTagSets: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/tagsets/sortorder`;
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
         * Takes an array of tag set IDs as the request body, uses the order of items in the array to sort the tag sets on the server. The ID of every tag set must be specified.
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSortTagSetsSpaces: async (baseSpaceId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('updateSortTagSetsSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/tagsets/sortorder`
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
         * Modifies an existing tag set.
         * @summary Modify a TagSetResource by ID
         * @param {string} id ID of the TagSetResource to modify
         * @param {TagSetResource} [body] The TagSetResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTagSet: async (id: string, body?: TagSetResource, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateTagSet', 'id', id)
            const localVarPath = `/tagsets/{id}`
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
         * Modifies an existing tag set.
         * @summary Modify a TagSetResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the TagSetResource to modify
         * @param {TagSetResource} [body] The TagSetResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTagSetSpaces: async (baseSpaceId: string, id: string, body?: TagSetResource, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('updateTagSetSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateTagSetSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/tagsets/{id}`
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
 * TagSetsApi - functional programming interface
 * @export
 */
export const TagSetsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TagSetsApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new tag set.
         * @summary Create a TagSetResource
         * @param {TagSetResource} [body] The TagSetResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createTagSet(body?: TagSetResource, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TagSetResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createTagSet(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Creates a new tag set.
         * @summary Create a TagSetResource
         * @param {string} baseSpaceId ID of the space
         * @param {TagSetResource} [body] The TagSetResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createTagSetSpaces(baseSpaceId: string, body?: TagSetResource, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TagSetResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createTagSetSpaces(baseSpaceId, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes an existing tag set.
         * @summary Delete a TagSetResource by ID
         * @param {string} id ID of the TagSetResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteTagSet(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTagSet(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes an existing tag set.
         * @summary Delete a TagSetResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the TagSetResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteTagSetSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTagSetSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets a tag set by ID.
         * @summary Get a TagSetResource by ID
         * @param {string} id ID of the TagSetResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTagSetById(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TagSetResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTagSetById(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets a tag set by ID.
         * @summary Get a TagSetResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the TagSetResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTagSetByIdSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TagSetResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTagSetByIdSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all of the tag sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by the `SortOrder` field on each tag set.
         * @summary Get a list of TagSetResources
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async indexTagSets(skip?: number, take?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TagSetResourceCollection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.indexTagSets(skip, take, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all of the tag sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by the `SortOrder` field on each tag set.
         * @summary Get a list of TagSetResources
         * @param {string} baseSpaceId ID of the space
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async indexTagSetsSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TagSetResourceCollection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.indexTagSetsSpaces(baseSpaceId, skip, take, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists the details of all of the tag sets in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each tag set.
         * @summary Get a list of TagSetResources
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAllTagSets(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TagSetResource>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAllTagSets(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists the details of all of the tag sets in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each tag set.
         * @summary Get a list of TagSetResources
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAllTagSetsSpaces(baseSpaceId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TagSetResource>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAllTagSetsSpaces(baseSpaceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Takes an array of tag set IDs as the request body, uses the order of items in the array to sort the tag sets on the server. The ID of every tag set must be specified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateSortTagSets(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateSortTagSets(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Takes an array of tag set IDs as the request body, uses the order of items in the array to sort the tag sets on the server. The ID of every tag set must be specified.
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateSortTagSetsSpaces(baseSpaceId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateSortTagSetsSpaces(baseSpaceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Modifies an existing tag set.
         * @summary Modify a TagSetResource by ID
         * @param {string} id ID of the TagSetResource to modify
         * @param {TagSetResource} [body] The TagSetResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateTagSet(id: string, body?: TagSetResource, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TagSetResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateTagSet(id, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Modifies an existing tag set.
         * @summary Modify a TagSetResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the TagSetResource to modify
         * @param {TagSetResource} [body] The TagSetResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateTagSetSpaces(baseSpaceId: string, id: string, body?: TagSetResource, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TagSetResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateTagSetSpaces(baseSpaceId, id, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TagSetsApi - factory interface
 * @export
 */
export const TagSetsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TagSetsApiFp(configuration)
    return {
        /**
         * Creates a new tag set.
         * @summary Create a TagSetResource
         * @param {TagSetResource} [body] The TagSetResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTagSet(body?: TagSetResource, options?: any): AxiosPromise<TagSetResource> {
            return localVarFp.createTagSet(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a new tag set.
         * @summary Create a TagSetResource
         * @param {string} baseSpaceId ID of the space
         * @param {TagSetResource} [body] The TagSetResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTagSetSpaces(baseSpaceId: string, body?: TagSetResource, options?: any): AxiosPromise<TagSetResource> {
            return localVarFp.createTagSetSpaces(baseSpaceId, body, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes an existing tag set.
         * @summary Delete a TagSetResource by ID
         * @param {string} id ID of the TagSetResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTagSet(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteTagSet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes an existing tag set.
         * @summary Delete a TagSetResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the TagSetResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTagSetSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteTagSetSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a tag set by ID.
         * @summary Get a TagSetResource by ID
         * @param {string} id ID of the TagSetResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTagSetById(id: string, options?: any): AxiosPromise<TagSetResource> {
            return localVarFp.getTagSetById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a tag set by ID.
         * @summary Get a TagSetResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the TagSetResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTagSetByIdSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<TagSetResource> {
            return localVarFp.getTagSetByIdSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all of the tag sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by the `SortOrder` field on each tag set.
         * @summary Get a list of TagSetResources
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexTagSets(skip?: number, take?: number, options?: any): AxiosPromise<TagSetResourceCollection> {
            return localVarFp.indexTagSets(skip, take, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all of the tag sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by the `SortOrder` field on each tag set.
         * @summary Get a list of TagSetResources
         * @param {string} baseSpaceId ID of the space
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexTagSetsSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any): AxiosPromise<TagSetResourceCollection> {
            return localVarFp.indexTagSetsSpaces(baseSpaceId, skip, take, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the details of all of the tag sets in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each tag set.
         * @summary Get a list of TagSetResources
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllTagSets(options?: any): AxiosPromise<Array<TagSetResource>> {
            return localVarFp.listAllTagSets(options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the details of all of the tag sets in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each tag set.
         * @summary Get a list of TagSetResources
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllTagSetsSpaces(baseSpaceId: string, options?: any): AxiosPromise<Array<TagSetResource>> {
            return localVarFp.listAllTagSetsSpaces(baseSpaceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Takes an array of tag set IDs as the request body, uses the order of items in the array to sort the tag sets on the server. The ID of every tag set must be specified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSortTagSets(options?: any): AxiosPromise<void> {
            return localVarFp.updateSortTagSets(options).then((request) => request(axios, basePath));
        },
        /**
         * Takes an array of tag set IDs as the request body, uses the order of items in the array to sort the tag sets on the server. The ID of every tag set must be specified.
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSortTagSetsSpaces(baseSpaceId: string, options?: any): AxiosPromise<void> {
            return localVarFp.updateSortTagSetsSpaces(baseSpaceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Modifies an existing tag set.
         * @summary Modify a TagSetResource by ID
         * @param {string} id ID of the TagSetResource to modify
         * @param {TagSetResource} [body] The TagSetResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTagSet(id: string, body?: TagSetResource, options?: any): AxiosPromise<TagSetResource> {
            return localVarFp.updateTagSet(id, body, options).then((request) => request(axios, basePath));
        },
        /**
         * Modifies an existing tag set.
         * @summary Modify a TagSetResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the TagSetResource to modify
         * @param {TagSetResource} [body] The TagSetResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTagSetSpaces(baseSpaceId: string, id: string, body?: TagSetResource, options?: any): AxiosPromise<TagSetResource> {
            return localVarFp.updateTagSetSpaces(baseSpaceId, id, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TagSetsApi - interface
 * @export
 * @interface TagSetsApi
 */
export interface TagSetsApiInterface {
    /**
     * Creates a new tag set.
     * @summary Create a TagSetResource
     * @param {TagSetResource} [body] The TagSetResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagSetsApiInterface
     */
    createTagSet(body?: TagSetResource, options?: any): AxiosPromise<TagSetResource>;

    /**
     * Creates a new tag set.
     * @summary Create a TagSetResource
     * @param {string} baseSpaceId ID of the space
     * @param {TagSetResource} [body] The TagSetResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagSetsApiInterface
     */
    createTagSetSpaces(baseSpaceId: string, body?: TagSetResource, options?: any): AxiosPromise<TagSetResource>;

    /**
     * Deletes an existing tag set.
     * @summary Delete a TagSetResource by ID
     * @param {string} id ID of the TagSetResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagSetsApiInterface
     */
    deleteTagSet(id: string, options?: any): AxiosPromise<void>;

    /**
     * Deletes an existing tag set.
     * @summary Delete a TagSetResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the TagSetResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagSetsApiInterface
     */
    deleteTagSetSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<void>;

    /**
     * Gets a tag set by ID.
     * @summary Get a TagSetResource by ID
     * @param {string} id ID of the TagSetResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagSetsApiInterface
     */
    getTagSetById(id: string, options?: any): AxiosPromise<TagSetResource>;

    /**
     * Gets a tag set by ID.
     * @summary Get a TagSetResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the TagSetResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagSetsApiInterface
     */
    getTagSetByIdSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<TagSetResource>;

    /**
     * Lists all of the tag sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by the `SortOrder` field on each tag set.
     * @summary Get a list of TagSetResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagSetsApiInterface
     */
    indexTagSets(skip?: number, take?: number, options?: any): AxiosPromise<TagSetResourceCollection>;

    /**
     * Lists all of the tag sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by the `SortOrder` field on each tag set.
     * @summary Get a list of TagSetResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagSetsApiInterface
     */
    indexTagSetsSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any): AxiosPromise<TagSetResourceCollection>;

    /**
     * Lists the details of all of the tag sets in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each tag set.
     * @summary Get a list of TagSetResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagSetsApiInterface
     */
    listAllTagSets(options?: any): AxiosPromise<Array<TagSetResource>>;

    /**
     * Lists the details of all of the tag sets in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each tag set.
     * @summary Get a list of TagSetResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagSetsApiInterface
     */
    listAllTagSetsSpaces(baseSpaceId: string, options?: any): AxiosPromise<Array<TagSetResource>>;

    /**
     * Takes an array of tag set IDs as the request body, uses the order of items in the array to sort the tag sets on the server. The ID of every tag set must be specified.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagSetsApiInterface
     */
    updateSortTagSets(options?: any): AxiosPromise<void>;

    /**
     * Takes an array of tag set IDs as the request body, uses the order of items in the array to sort the tag sets on the server. The ID of every tag set must be specified.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagSetsApiInterface
     */
    updateSortTagSetsSpaces(baseSpaceId: string, options?: any): AxiosPromise<void>;

    /**
     * Modifies an existing tag set.
     * @summary Modify a TagSetResource by ID
     * @param {string} id ID of the TagSetResource to modify
     * @param {TagSetResource} [body] The TagSetResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagSetsApiInterface
     */
    updateTagSet(id: string, body?: TagSetResource, options?: any): AxiosPromise<TagSetResource>;

    /**
     * Modifies an existing tag set.
     * @summary Modify a TagSetResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the TagSetResource to modify
     * @param {TagSetResource} [body] The TagSetResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagSetsApiInterface
     */
    updateTagSetSpaces(baseSpaceId: string, id: string, body?: TagSetResource, options?: any): AxiosPromise<TagSetResource>;

}

/**
 * TagSetsApi - object-oriented interface
 * @export
 * @class TagSetsApi
 * @extends {BaseAPI}
 */
export class TagSetsApi extends BaseAPI implements TagSetsApiInterface {
    /**
     * Creates a new tag set.
     * @summary Create a TagSetResource
     * @param {TagSetResource} [body] The TagSetResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagSetsApi
     */
    public createTagSet(body?: TagSetResource, options?: any) {
        return TagSetsApiFp(this.configuration).createTagSet(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a new tag set.
     * @summary Create a TagSetResource
     * @param {string} baseSpaceId ID of the space
     * @param {TagSetResource} [body] The TagSetResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagSetsApi
     */
    public createTagSetSpaces(baseSpaceId: string, body?: TagSetResource, options?: any) {
        return TagSetsApiFp(this.configuration).createTagSetSpaces(baseSpaceId, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes an existing tag set.
     * @summary Delete a TagSetResource by ID
     * @param {string} id ID of the TagSetResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagSetsApi
     */
    public deleteTagSet(id: string, options?: any) {
        return TagSetsApiFp(this.configuration).deleteTagSet(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes an existing tag set.
     * @summary Delete a TagSetResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the TagSetResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagSetsApi
     */
    public deleteTagSetSpaces(baseSpaceId: string, id: string, options?: any) {
        return TagSetsApiFp(this.configuration).deleteTagSetSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a tag set by ID.
     * @summary Get a TagSetResource by ID
     * @param {string} id ID of the TagSetResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagSetsApi
     */
    public getTagSetById(id: string, options?: any) {
        return TagSetsApiFp(this.configuration).getTagSetById(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a tag set by ID.
     * @summary Get a TagSetResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the TagSetResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagSetsApi
     */
    public getTagSetByIdSpaces(baseSpaceId: string, id: string, options?: any) {
        return TagSetsApiFp(this.configuration).getTagSetByIdSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all of the tag sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by the `SortOrder` field on each tag set.
     * @summary Get a list of TagSetResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagSetsApi
     */
    public indexTagSets(skip?: number, take?: number, options?: any) {
        return TagSetsApiFp(this.configuration).indexTagSets(skip, take, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all of the tag sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by the `SortOrder` field on each tag set.
     * @summary Get a list of TagSetResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagSetsApi
     */
    public indexTagSetsSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any) {
        return TagSetsApiFp(this.configuration).indexTagSetsSpaces(baseSpaceId, skip, take, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the details of all of the tag sets in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each tag set.
     * @summary Get a list of TagSetResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagSetsApi
     */
    public listAllTagSets(options?: any) {
        return TagSetsApiFp(this.configuration).listAllTagSets(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the details of all of the tag sets in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each tag set.
     * @summary Get a list of TagSetResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagSetsApi
     */
    public listAllTagSetsSpaces(baseSpaceId: string, options?: any) {
        return TagSetsApiFp(this.configuration).listAllTagSetsSpaces(baseSpaceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Takes an array of tag set IDs as the request body, uses the order of items in the array to sort the tag sets on the server. The ID of every tag set must be specified.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagSetsApi
     */
    public updateSortTagSets(options?: any) {
        return TagSetsApiFp(this.configuration).updateSortTagSets(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Takes an array of tag set IDs as the request body, uses the order of items in the array to sort the tag sets on the server. The ID of every tag set must be specified.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagSetsApi
     */
    public updateSortTagSetsSpaces(baseSpaceId: string, options?: any) {
        return TagSetsApiFp(this.configuration).updateSortTagSetsSpaces(baseSpaceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Modifies an existing tag set.
     * @summary Modify a TagSetResource by ID
     * @param {string} id ID of the TagSetResource to modify
     * @param {TagSetResource} [body] The TagSetResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagSetsApi
     */
    public updateTagSet(id: string, body?: TagSetResource, options?: any) {
        return TagSetsApiFp(this.configuration).updateTagSet(id, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Modifies an existing tag set.
     * @summary Modify a TagSetResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the TagSetResource to modify
     * @param {TagSetResource} [body] The TagSetResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagSetsApi
     */
    public updateTagSetSpaces(baseSpaceId: string, id: string, body?: TagSetResource, options?: any) {
        return TagSetsApiFp(this.configuration).updateTagSetSpaces(baseSpaceId, id, body, options).then((request) => request(this.axios, this.basePath));
    }
}
