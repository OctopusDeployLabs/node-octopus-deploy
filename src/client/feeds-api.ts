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
import { BuiltInFeedStatsResource } from '../model';
// @ts-ignore
import { FeedResource } from '../model';
// @ts-ignore
import { FeedResourceCollection } from '../model';
// @ts-ignore
import { PackageDescriptionResourceCollection } from '../model';
// @ts-ignore
import { PackageVersionResourceCollection } from '../model';
/**
 * FeedsApi - axios parameter creator
 * @export
 */
export const FeedsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a feed.
         * @summary Create a FeedResource
         * @param {FeedResource} [body] The FeedResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createFeed: async (body?: FeedResource, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/feeds`;
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
         * Creates a feed.
         * @summary Create a FeedResource
         * @param {string} baseSpaceId ID of the space
         * @param {FeedResource} [body] The FeedResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createFeedSpaces: async (baseSpaceId: string, body?: FeedResource, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('createFeedSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/feeds`
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
         * Deletes an existing feed.
         * @summary Delete a FeedResource by ID
         * @param {string} id ID of the FeedResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFeed: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteFeed', 'id', id)
            const localVarPath = `/feeds/{id}`
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
         * Deletes an existing feed.
         * @summary Delete a FeedResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the FeedResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFeedSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('deleteFeedSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteFeedSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/feeds/{id}`
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
         * Provides statistics for the built-in package repository.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBuiltInFeedStats: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/feeds/stats`;
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
         * Provides statistics for the built-in package repository.
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBuiltInFeedStatsSpaces: async (baseSpaceId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getBuiltInFeedStatsSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/feeds/stats`
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
         * Gets a single feed by ID.
         * @summary Get a FeedResource by ID
         * @param {string} id ID of the FeedResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFeedById: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getFeedById', 'id', id)
            const localVarPath = `/feeds/{id}`
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
         * Gets a single feed by ID.
         * @summary Get a FeedResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the FeedResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFeedByIdSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getFeedByIdSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getFeedByIdSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/feeds/{id}`
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
         * Searches the specified feed for packages based on the specified search term
         * @param {string} id ID of the feed
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageSearch: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getPackageSearch', 'id', id)
            const localVarPath = `/feeds/{id}/packages/search`
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
         * Searches the specified feed for packages based on the specified search term
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the feed
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageSearchSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getPackageSearchSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getPackageSearchSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/feeds/{id}/packages/search`
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
         * Lists available versions of the package specified
         * @param {string} id ID of the feed
         * @param {string} packageId Package ID to search
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageVersionSearch: async (id: string, packageId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getPackageVersionSearch', 'id', id)
            // verify required parameter 'packageId' is not null or undefined
            assertParamExists('getPackageVersionSearch', 'packageId', packageId)
            const localVarPath = `/feeds/{id}/packages/versions`
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

            if (packageId !== undefined) {
                localVarQueryParameter['packageId'] = packageId;
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
         * Lists available versions of the package specified
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the feed
         * @param {string} packageId Package ID to search
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageVersionSearchSpaces: async (baseSpaceId: string, id: string, packageId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getPackageVersionSearchSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getPackageVersionSearchSpaces', 'id', id)
            // verify required parameter 'packageId' is not null or undefined
            assertParamExists('getPackageVersionSearchSpaces', 'packageId', packageId)
            const localVarPath = `/{baseSpaceId}/feeds/{id}/packages/versions`
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

            if (packageId !== undefined) {
                localVarQueryParameter['packageId'] = packageId;
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
         * Lists all the feeds used by the current Octopus installation. The results will be sorted alphabetically by name.
         * @summary Get a list of FeedResources
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexFeeds: async (skip?: number, take?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/feeds`;
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
         * Lists all the feeds used by the current Octopus installation. The results will be sorted alphabetically by name.
         * @summary Get a list of FeedResources
         * @param {string} baseSpaceId ID of the space
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexFeedsSpaces: async (baseSpaceId: string, skip?: number, take?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('indexFeedsSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/feeds`
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
         * Lists all the feeds in the specified Octopus Deploy Space.
         * @summary Get a list of FeedResources
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllFeeds: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/feeds/all`;
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
         * Lists all the feeds in the specified Octopus Deploy Space.
         * @summary Get a list of FeedResources
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllFeedsSpaces: async (baseSpaceId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('listAllFeedsSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/feeds/all`
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
         * Modifies an existing feed.
         * @summary Modify a FeedResource by ID
         * @param {string} id ID of the FeedResource to modify
         * @param {FeedResource} [body] The FeedResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateFeed: async (id: string, body?: FeedResource, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateFeed', 'id', id)
            const localVarPath = `/feeds/{id}`
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
         * Modifies an existing feed.
         * @summary Modify a FeedResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the FeedResource to modify
         * @param {FeedResource} [body] The FeedResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateFeedSpaces: async (baseSpaceId: string, id: string, body?: FeedResource, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('updateFeedSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateFeedSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/feeds/{id}`
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
 * FeedsApi - functional programming interface
 * @export
 */
export const FeedsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FeedsApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a feed.
         * @summary Create a FeedResource
         * @param {FeedResource} [body] The FeedResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createFeed(body?: FeedResource, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FeedResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createFeed(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Creates a feed.
         * @summary Create a FeedResource
         * @param {string} baseSpaceId ID of the space
         * @param {FeedResource} [body] The FeedResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createFeedSpaces(baseSpaceId: string, body?: FeedResource, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FeedResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createFeedSpaces(baseSpaceId, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes an existing feed.
         * @summary Delete a FeedResource by ID
         * @param {string} id ID of the FeedResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteFeed(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteFeed(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes an existing feed.
         * @summary Delete a FeedResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the FeedResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteFeedSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteFeedSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Provides statistics for the built-in package repository.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBuiltInFeedStats(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BuiltInFeedStatsResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBuiltInFeedStats(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Provides statistics for the built-in package repository.
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBuiltInFeedStatsSpaces(baseSpaceId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BuiltInFeedStatsResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBuiltInFeedStatsSpaces(baseSpaceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets a single feed by ID.
         * @summary Get a FeedResource by ID
         * @param {string} id ID of the FeedResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFeedById(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FeedResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFeedById(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets a single feed by ID.
         * @summary Get a FeedResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the FeedResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFeedByIdSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FeedResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFeedByIdSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Searches the specified feed for packages based on the specified search term
         * @param {string} id ID of the feed
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPackageSearch(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PackageDescriptionResourceCollection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPackageSearch(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Searches the specified feed for packages based on the specified search term
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the feed
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPackageSearchSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PackageDescriptionResourceCollection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPackageSearchSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists available versions of the package specified
         * @param {string} id ID of the feed
         * @param {string} packageId Package ID to search
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPackageVersionSearch(id: string, packageId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PackageVersionResourceCollection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPackageVersionSearch(id, packageId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists available versions of the package specified
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the feed
         * @param {string} packageId Package ID to search
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPackageVersionSearchSpaces(baseSpaceId: string, id: string, packageId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PackageVersionResourceCollection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPackageVersionSearchSpaces(baseSpaceId, id, packageId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all the feeds used by the current Octopus installation. The results will be sorted alphabetically by name.
         * @summary Get a list of FeedResources
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async indexFeeds(skip?: number, take?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FeedResourceCollection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.indexFeeds(skip, take, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all the feeds used by the current Octopus installation. The results will be sorted alphabetically by name.
         * @summary Get a list of FeedResources
         * @param {string} baseSpaceId ID of the space
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async indexFeedsSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FeedResourceCollection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.indexFeedsSpaces(baseSpaceId, skip, take, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all the feeds in the specified Octopus Deploy Space.
         * @summary Get a list of FeedResources
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAllFeeds(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<FeedResource>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAllFeeds(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all the feeds in the specified Octopus Deploy Space.
         * @summary Get a list of FeedResources
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAllFeedsSpaces(baseSpaceId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<FeedResource>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAllFeedsSpaces(baseSpaceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Modifies an existing feed.
         * @summary Modify a FeedResource by ID
         * @param {string} id ID of the FeedResource to modify
         * @param {FeedResource} [body] The FeedResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateFeed(id: string, body?: FeedResource, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FeedResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateFeed(id, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Modifies an existing feed.
         * @summary Modify a FeedResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the FeedResource to modify
         * @param {FeedResource} [body] The FeedResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateFeedSpaces(baseSpaceId: string, id: string, body?: FeedResource, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FeedResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateFeedSpaces(baseSpaceId, id, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FeedsApi - factory interface
 * @export
 */
export const FeedsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FeedsApiFp(configuration)
    return {
        /**
         * Creates a feed.
         * @summary Create a FeedResource
         * @param {FeedResource} [body] The FeedResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createFeed(body?: FeedResource, options?: any): AxiosPromise<FeedResource> {
            return localVarFp.createFeed(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a feed.
         * @summary Create a FeedResource
         * @param {string} baseSpaceId ID of the space
         * @param {FeedResource} [body] The FeedResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createFeedSpaces(baseSpaceId: string, body?: FeedResource, options?: any): AxiosPromise<FeedResource> {
            return localVarFp.createFeedSpaces(baseSpaceId, body, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes an existing feed.
         * @summary Delete a FeedResource by ID
         * @param {string} id ID of the FeedResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFeed(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteFeed(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes an existing feed.
         * @summary Delete a FeedResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the FeedResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFeedSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteFeedSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Provides statistics for the built-in package repository.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBuiltInFeedStats(options?: any): AxiosPromise<BuiltInFeedStatsResource> {
            return localVarFp.getBuiltInFeedStats(options).then((request) => request(axios, basePath));
        },
        /**
         * Provides statistics for the built-in package repository.
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBuiltInFeedStatsSpaces(baseSpaceId: string, options?: any): AxiosPromise<BuiltInFeedStatsResource> {
            return localVarFp.getBuiltInFeedStatsSpaces(baseSpaceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a single feed by ID.
         * @summary Get a FeedResource by ID
         * @param {string} id ID of the FeedResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFeedById(id: string, options?: any): AxiosPromise<FeedResource> {
            return localVarFp.getFeedById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a single feed by ID.
         * @summary Get a FeedResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the FeedResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFeedByIdSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<FeedResource> {
            return localVarFp.getFeedByIdSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Searches the specified feed for packages based on the specified search term
         * @param {string} id ID of the feed
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageSearch(id: string, options?: any): AxiosPromise<PackageDescriptionResourceCollection> {
            return localVarFp.getPackageSearch(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Searches the specified feed for packages based on the specified search term
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the feed
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageSearchSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<PackageDescriptionResourceCollection> {
            return localVarFp.getPackageSearchSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists available versions of the package specified
         * @param {string} id ID of the feed
         * @param {string} packageId Package ID to search
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageVersionSearch(id: string, packageId: string, options?: any): AxiosPromise<PackageVersionResourceCollection> {
            return localVarFp.getPackageVersionSearch(id, packageId, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists available versions of the package specified
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the feed
         * @param {string} packageId Package ID to search
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageVersionSearchSpaces(baseSpaceId: string, id: string, packageId: string, options?: any): AxiosPromise<PackageVersionResourceCollection> {
            return localVarFp.getPackageVersionSearchSpaces(baseSpaceId, id, packageId, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all the feeds used by the current Octopus installation. The results will be sorted alphabetically by name.
         * @summary Get a list of FeedResources
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexFeeds(skip?: number, take?: number, options?: any): AxiosPromise<FeedResourceCollection> {
            return localVarFp.indexFeeds(skip, take, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all the feeds used by the current Octopus installation. The results will be sorted alphabetically by name.
         * @summary Get a list of FeedResources
         * @param {string} baseSpaceId ID of the space
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexFeedsSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any): AxiosPromise<FeedResourceCollection> {
            return localVarFp.indexFeedsSpaces(baseSpaceId, skip, take, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all the feeds in the specified Octopus Deploy Space.
         * @summary Get a list of FeedResources
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllFeeds(options?: any): AxiosPromise<Array<FeedResource>> {
            return localVarFp.listAllFeeds(options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all the feeds in the specified Octopus Deploy Space.
         * @summary Get a list of FeedResources
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllFeedsSpaces(baseSpaceId: string, options?: any): AxiosPromise<Array<FeedResource>> {
            return localVarFp.listAllFeedsSpaces(baseSpaceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Modifies an existing feed.
         * @summary Modify a FeedResource by ID
         * @param {string} id ID of the FeedResource to modify
         * @param {FeedResource} [body] The FeedResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateFeed(id: string, body?: FeedResource, options?: any): AxiosPromise<FeedResource> {
            return localVarFp.updateFeed(id, body, options).then((request) => request(axios, basePath));
        },
        /**
         * Modifies an existing feed.
         * @summary Modify a FeedResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the FeedResource to modify
         * @param {FeedResource} [body] The FeedResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateFeedSpaces(baseSpaceId: string, id: string, body?: FeedResource, options?: any): AxiosPromise<FeedResource> {
            return localVarFp.updateFeedSpaces(baseSpaceId, id, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FeedsApi - interface
 * @export
 * @interface FeedsApi
 */
export interface FeedsApiInterface {
    /**
     * Creates a feed.
     * @summary Create a FeedResource
     * @param {FeedResource} [body] The FeedResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApiInterface
     */
    createFeed(body?: FeedResource, options?: any): AxiosPromise<FeedResource>;

    /**
     * Creates a feed.
     * @summary Create a FeedResource
     * @param {string} baseSpaceId ID of the space
     * @param {FeedResource} [body] The FeedResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApiInterface
     */
    createFeedSpaces(baseSpaceId: string, body?: FeedResource, options?: any): AxiosPromise<FeedResource>;

    /**
     * Deletes an existing feed.
     * @summary Delete a FeedResource by ID
     * @param {string} id ID of the FeedResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApiInterface
     */
    deleteFeed(id: string, options?: any): AxiosPromise<void>;

    /**
     * Deletes an existing feed.
     * @summary Delete a FeedResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the FeedResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApiInterface
     */
    deleteFeedSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<void>;

    /**
     * Provides statistics for the built-in package repository.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApiInterface
     */
    getBuiltInFeedStats(options?: any): AxiosPromise<BuiltInFeedStatsResource>;

    /**
     * Provides statistics for the built-in package repository.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApiInterface
     */
    getBuiltInFeedStatsSpaces(baseSpaceId: string, options?: any): AxiosPromise<BuiltInFeedStatsResource>;

    /**
     * Gets a single feed by ID.
     * @summary Get a FeedResource by ID
     * @param {string} id ID of the FeedResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApiInterface
     */
    getFeedById(id: string, options?: any): AxiosPromise<FeedResource>;

    /**
     * Gets a single feed by ID.
     * @summary Get a FeedResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the FeedResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApiInterface
     */
    getFeedByIdSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<FeedResource>;

    /**
     * Searches the specified feed for packages based on the specified search term
     * @param {string} id ID of the feed
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApiInterface
     */
    getPackageSearch(id: string, options?: any): AxiosPromise<PackageDescriptionResourceCollection>;

    /**
     * Searches the specified feed for packages based on the specified search term
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the feed
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApiInterface
     */
    getPackageSearchSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<PackageDescriptionResourceCollection>;

    /**
     * Lists available versions of the package specified
     * @param {string} id ID of the feed
     * @param {string} packageId Package ID to search
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApiInterface
     */
    getPackageVersionSearch(id: string, packageId: string, options?: any): AxiosPromise<PackageVersionResourceCollection>;

    /**
     * Lists available versions of the package specified
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the feed
     * @param {string} packageId Package ID to search
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApiInterface
     */
    getPackageVersionSearchSpaces(baseSpaceId: string, id: string, packageId: string, options?: any): AxiosPromise<PackageVersionResourceCollection>;

    /**
     * Lists all the feeds used by the current Octopus installation. The results will be sorted alphabetically by name.
     * @summary Get a list of FeedResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApiInterface
     */
    indexFeeds(skip?: number, take?: number, options?: any): AxiosPromise<FeedResourceCollection>;

    /**
     * Lists all the feeds used by the current Octopus installation. The results will be sorted alphabetically by name.
     * @summary Get a list of FeedResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApiInterface
     */
    indexFeedsSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any): AxiosPromise<FeedResourceCollection>;

    /**
     * Lists all the feeds in the specified Octopus Deploy Space.
     * @summary Get a list of FeedResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApiInterface
     */
    listAllFeeds(options?: any): AxiosPromise<Array<FeedResource>>;

    /**
     * Lists all the feeds in the specified Octopus Deploy Space.
     * @summary Get a list of FeedResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApiInterface
     */
    listAllFeedsSpaces(baseSpaceId: string, options?: any): AxiosPromise<Array<FeedResource>>;

    /**
     * Modifies an existing feed.
     * @summary Modify a FeedResource by ID
     * @param {string} id ID of the FeedResource to modify
     * @param {FeedResource} [body] The FeedResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApiInterface
     */
    updateFeed(id: string, body?: FeedResource, options?: any): AxiosPromise<FeedResource>;

    /**
     * Modifies an existing feed.
     * @summary Modify a FeedResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the FeedResource to modify
     * @param {FeedResource} [body] The FeedResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApiInterface
     */
    updateFeedSpaces(baseSpaceId: string, id: string, body?: FeedResource, options?: any): AxiosPromise<FeedResource>;

}

/**
 * FeedsApi - object-oriented interface
 * @export
 * @class FeedsApi
 * @extends {BaseAPI}
 */
export class FeedsApi extends BaseAPI implements FeedsApiInterface {
    /**
     * Creates a feed.
     * @summary Create a FeedResource
     * @param {FeedResource} [body] The FeedResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApi
     */
    public createFeed(body?: FeedResource, options?: any) {
        return FeedsApiFp(this.configuration).createFeed(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a feed.
     * @summary Create a FeedResource
     * @param {string} baseSpaceId ID of the space
     * @param {FeedResource} [body] The FeedResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApi
     */
    public createFeedSpaces(baseSpaceId: string, body?: FeedResource, options?: any) {
        return FeedsApiFp(this.configuration).createFeedSpaces(baseSpaceId, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes an existing feed.
     * @summary Delete a FeedResource by ID
     * @param {string} id ID of the FeedResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApi
     */
    public deleteFeed(id: string, options?: any) {
        return FeedsApiFp(this.configuration).deleteFeed(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes an existing feed.
     * @summary Delete a FeedResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the FeedResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApi
     */
    public deleteFeedSpaces(baseSpaceId: string, id: string, options?: any) {
        return FeedsApiFp(this.configuration).deleteFeedSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Provides statistics for the built-in package repository.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApi
     */
    public getBuiltInFeedStats(options?: any) {
        return FeedsApiFp(this.configuration).getBuiltInFeedStats(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Provides statistics for the built-in package repository.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApi
     */
    public getBuiltInFeedStatsSpaces(baseSpaceId: string, options?: any) {
        return FeedsApiFp(this.configuration).getBuiltInFeedStatsSpaces(baseSpaceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a single feed by ID.
     * @summary Get a FeedResource by ID
     * @param {string} id ID of the FeedResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApi
     */
    public getFeedById(id: string, options?: any) {
        return FeedsApiFp(this.configuration).getFeedById(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a single feed by ID.
     * @summary Get a FeedResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the FeedResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApi
     */
    public getFeedByIdSpaces(baseSpaceId: string, id: string, options?: any) {
        return FeedsApiFp(this.configuration).getFeedByIdSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Searches the specified feed for packages based on the specified search term
     * @param {string} id ID of the feed
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApi
     */
    public getPackageSearch(id: string, options?: any) {
        return FeedsApiFp(this.configuration).getPackageSearch(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Searches the specified feed for packages based on the specified search term
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the feed
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApi
     */
    public getPackageSearchSpaces(baseSpaceId: string, id: string, options?: any) {
        return FeedsApiFp(this.configuration).getPackageSearchSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists available versions of the package specified
     * @param {string} id ID of the feed
     * @param {string} packageId Package ID to search
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApi
     */
    public getPackageVersionSearch(id: string, packageId: string, options?: any) {
        return FeedsApiFp(this.configuration).getPackageVersionSearch(id, packageId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists available versions of the package specified
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the feed
     * @param {string} packageId Package ID to search
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApi
     */
    public getPackageVersionSearchSpaces(baseSpaceId: string, id: string, packageId: string, options?: any) {
        return FeedsApiFp(this.configuration).getPackageVersionSearchSpaces(baseSpaceId, id, packageId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all the feeds used by the current Octopus installation. The results will be sorted alphabetically by name.
     * @summary Get a list of FeedResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApi
     */
    public indexFeeds(skip?: number, take?: number, options?: any) {
        return FeedsApiFp(this.configuration).indexFeeds(skip, take, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all the feeds used by the current Octopus installation. The results will be sorted alphabetically by name.
     * @summary Get a list of FeedResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApi
     */
    public indexFeedsSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any) {
        return FeedsApiFp(this.configuration).indexFeedsSpaces(baseSpaceId, skip, take, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all the feeds in the specified Octopus Deploy Space.
     * @summary Get a list of FeedResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApi
     */
    public listAllFeeds(options?: any) {
        return FeedsApiFp(this.configuration).listAllFeeds(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all the feeds in the specified Octopus Deploy Space.
     * @summary Get a list of FeedResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApi
     */
    public listAllFeedsSpaces(baseSpaceId: string, options?: any) {
        return FeedsApiFp(this.configuration).listAllFeedsSpaces(baseSpaceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Modifies an existing feed.
     * @summary Modify a FeedResource by ID
     * @param {string} id ID of the FeedResource to modify
     * @param {FeedResource} [body] The FeedResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApi
     */
    public updateFeed(id: string, body?: FeedResource, options?: any) {
        return FeedsApiFp(this.configuration).updateFeed(id, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Modifies an existing feed.
     * @summary Modify a FeedResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the FeedResource to modify
     * @param {FeedResource} [body] The FeedResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApi
     */
    public updateFeedSpaces(baseSpaceId: string, id: string, body?: FeedResource, options?: any) {
        return FeedsApiFp(this.configuration).updateFeedSpaces(baseSpaceId, id, body, options).then((request) => request(this.axios, this.basePath));
    }
}
