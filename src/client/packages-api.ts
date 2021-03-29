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
import { PackageFromBuiltInFeedResource } from '../model';
// @ts-ignore
import { PackageNoteListResource } from '../model';
// @ts-ignore
import { PackageResource } from '../model';
// @ts-ignore
import { PackageResourceCollection } from '../model';
// @ts-ignore
import { PackageSignatureResource } from '../model';
/**
 * PackagesApi - axios parameter creator
 * @export
 */
export const PackagesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Uploads a delta patch for the given file. Used to optimize file upload.
         * @param {string} baseVersion The version of the package that was used to create the signature
         * @param {string} packageId Package ID of the package to be uploaded
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPackageRepositoryDeltaUpload: async (baseVersion: string, packageId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseVersion' is not null or undefined
            assertParamExists('createPackageRepositoryDeltaUpload', 'baseVersion', baseVersion)
            // verify required parameter 'packageId' is not null or undefined
            assertParamExists('createPackageRepositoryDeltaUpload', 'packageId', packageId)
            const localVarPath = `/packages/{packageId}/{baseVersion}/delta`
                .replace(`{${"baseVersion"}}`, encodeURIComponent(String(baseVersion)))
                .replace(`{${"packageId"}}`, encodeURIComponent(String(packageId)));
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
         * Uploads a delta patch for the given file. Used to optimize file upload.
         * @param {string} baseSpaceId ID of the space
         * @param {string} baseVersion The version of the package that was used to create the signature
         * @param {string} packageId Package ID of the package to be uploaded
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPackageRepositoryDeltaUploadSpaces: async (baseSpaceId: string, baseVersion: string, packageId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('createPackageRepositoryDeltaUploadSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'baseVersion' is not null or undefined
            assertParamExists('createPackageRepositoryDeltaUploadSpaces', 'baseVersion', baseVersion)
            // verify required parameter 'packageId' is not null or undefined
            assertParamExists('createPackageRepositoryDeltaUploadSpaces', 'packageId', packageId)
            const localVarPath = `/{baseSpaceId}/packages/{packageId}/{baseVersion}/delta`
                .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)))
                .replace(`{${"baseVersion"}}`, encodeURIComponent(String(baseVersion)))
                .replace(`{${"packageId"}}`, encodeURIComponent(String(packageId)));
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
         * Uploads a new package
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPackageRepositoryUpload: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/packages/raw`;
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
         * Uploads a new package
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPackageRepositoryUploadSpaces: async (baseSpaceId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('createPackageRepositoryUploadSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/packages/raw`
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
         * Deletes the specified package
         * @param {string} id ID of the package
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePackageRepositoryDeleteById: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deletePackageRepositoryDeleteById', 'id', id)
            const localVarPath = `/packages/{id}`
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
         * Deletes the specified package
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the package
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePackageRepositoryDeleteByIdSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('deletePackageRepositoryDeleteByIdSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deletePackageRepositoryDeleteByIdSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/packages/{id}`
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
         * Bulk deletes packages
         * @param {string} ids Comma separated list of IDs to be deleted
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePackageRepositoryDeleteByIds: async (ids: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'ids' is not null or undefined
            assertParamExists('deletePackageRepositoryDeleteByIds', 'ids', ids)
            const localVarPath = `/packages/bulk`;
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

            if (ids !== undefined) {
                localVarQueryParameter['ids'] = ids;
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
         * Bulk deletes packages
         * @param {string} baseSpaceId ID of the space
         * @param {string} ids Comma separated list of IDs to be deleted
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePackageRepositoryDeleteByIdsSpaces: async (baseSpaceId: string, ids: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('deletePackageRepositoryDeleteByIdsSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'ids' is not null or undefined
            assertParamExists('deletePackageRepositoryDeleteByIdsSpaces', 'ids', ids)
            const localVarPath = `/{baseSpaceId}/packages/bulk`
                .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)));
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

            if (ids !== undefined) {
                localVarQueryParameter['ids'] = ids;
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
         * Returns a list of release notes for the specified packages
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageListNotes: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/packages/notes`;
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
         * Returns a list of release notes for the specified packages
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageListNotesSpaces: async (baseSpaceId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getPackageListNotesSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/packages/notes`
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
         * Returns the release notes for the specified package
         * @param {string} id ID of the feed
         * @param {string} [packageId] Package Id
         * @param {string} [version] Package Version
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageNotes: async (id: string, packageId?: string, version?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getPackageNotes', 'id', id)
            const localVarPath = `/feeds/{id}/packages/notes`
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

            if (version !== undefined) {
                localVarQueryParameter['version'] = version;
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
         * Returns the release notes for the specified package
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the feed
         * @param {string} [packageId] Package Id
         * @param {string} [version] Package Version
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageNotesSpaces: async (baseSpaceId: string, id: string, packageId?: string, version?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getPackageNotesSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getPackageNotesSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/feeds/{id}/packages/notes`
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

            if (version !== undefined) {
                localVarQueryParameter['version'] = version;
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
         * Returns package information for the specified package id
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageRepository: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getPackageRepository', 'id', id)
            const localVarPath = `/packages/{id}`
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
         * Returns the delta-signature for a given package. Used to optimize file upload.
         * @param {string} packageId Package ID of the package to be uploaded
         * @param {string} version The version of the package to be uploaded
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageRepositoryDeltaSignature: async (packageId: string, version: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'packageId' is not null or undefined
            assertParamExists('getPackageRepositoryDeltaSignature', 'packageId', packageId)
            // verify required parameter 'version' is not null or undefined
            assertParamExists('getPackageRepositoryDeltaSignature', 'version', version)
            const localVarPath = `/packages/{packageId}/{version}/delta-signature`
                .replace(`{${"packageId"}}`, encodeURIComponent(String(packageId)))
                .replace(`{${"version"}}`, encodeURIComponent(String(version)));
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
         * Returns the delta-signature for a given package. Used to optimize file upload.
         * @param {string} baseSpaceId ID of the space
         * @param {string} packageId Package ID of the package to be uploaded
         * @param {string} version The version of the package to be uploaded
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageRepositoryDeltaSignatureSpaces: async (baseSpaceId: string, packageId: string, version: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getPackageRepositoryDeltaSignatureSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'packageId' is not null or undefined
            assertParamExists('getPackageRepositoryDeltaSignatureSpaces', 'packageId', packageId)
            // verify required parameter 'version' is not null or undefined
            assertParamExists('getPackageRepositoryDeltaSignatureSpaces', 'version', version)
            const localVarPath = `/{baseSpaceId}/packages/{packageId}/{version}/delta-signature`
                .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)))
                .replace(`{${"packageId"}}`, encodeURIComponent(String(packageId)))
                .replace(`{${"version"}}`, encodeURIComponent(String(version)));
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
         * Downloads the specified package
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageRepositoryGetRaw: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getPackageRepositoryGetRaw', 'id', id)
            const localVarPath = `/packages/{id}/raw`
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
         * Downloads the specified package
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageRepositoryGetRawSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getPackageRepositoryGetRawSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getPackageRepositoryGetRawSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/packages/{id}/raw`
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
         * Returns a list of packages matching the specified criteria
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageRepositoryList: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/packages`;
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
         * Returns a list of packages matching the specified criteria
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageRepositoryListSpaces: async (baseSpaceId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getPackageRepositoryListSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/packages`
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
         * Returns package information for the specified package id
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageRepositorySpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getPackageRepositorySpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getPackageRepositorySpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/packages/{id}`
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
         * Searches the specified feed for packages. Legacy. Please use the /feeds{id}/packages/search endpoint instead.
         * @param {string} id ID of the feed
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageSearchActionOld: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getPackageSearchActionOld', 'id', id)
            const localVarPath = `/feeds/{id}/packages`
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
         * Searches the specified feed for packages. Legacy. Please use the /feeds{id}/packages/search endpoint instead.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the feed
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageSearchActionOldSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getPackageSearchActionOldSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getPackageSearchActionOldSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/feeds/{id}/packages`
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
    }
};

/**
 * PackagesApi - functional programming interface
 * @export
 */
export const PackagesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PackagesApiAxiosParamCreator(configuration)
    return {
        /**
         * Uploads a delta patch for the given file. Used to optimize file upload.
         * @param {string} baseVersion The version of the package that was used to create the signature
         * @param {string} packageId Package ID of the package to be uploaded
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createPackageRepositoryDeltaUpload(baseVersion: string, packageId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createPackageRepositoryDeltaUpload(baseVersion, packageId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Uploads a delta patch for the given file. Used to optimize file upload.
         * @param {string} baseSpaceId ID of the space
         * @param {string} baseVersion The version of the package that was used to create the signature
         * @param {string} packageId Package ID of the package to be uploaded
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createPackageRepositoryDeltaUploadSpaces(baseSpaceId: string, baseVersion: string, packageId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createPackageRepositoryDeltaUploadSpaces(baseSpaceId, baseVersion, packageId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Uploads a new package
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createPackageRepositoryUpload(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createPackageRepositoryUpload(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Uploads a new package
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createPackageRepositoryUploadSpaces(baseSpaceId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createPackageRepositoryUploadSpaces(baseSpaceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes the specified package
         * @param {string} id ID of the package
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deletePackageRepositoryDeleteById(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deletePackageRepositoryDeleteById(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes the specified package
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the package
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deletePackageRepositoryDeleteByIdSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deletePackageRepositoryDeleteByIdSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Bulk deletes packages
         * @param {string} ids Comma separated list of IDs to be deleted
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deletePackageRepositoryDeleteByIds(ids: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deletePackageRepositoryDeleteByIds(ids, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Bulk deletes packages
         * @param {string} baseSpaceId ID of the space
         * @param {string} ids Comma separated list of IDs to be deleted
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deletePackageRepositoryDeleteByIdsSpaces(baseSpaceId: string, ids: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deletePackageRepositoryDeleteByIdsSpaces(baseSpaceId, ids, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of release notes for the specified packages
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPackageListNotes(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PackageNoteListResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPackageListNotes(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of release notes for the specified packages
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPackageListNotesSpaces(baseSpaceId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PackageNoteListResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPackageListNotesSpaces(baseSpaceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the release notes for the specified package
         * @param {string} id ID of the feed
         * @param {string} [packageId] Package Id
         * @param {string} [version] Package Version
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPackageNotes(id: string, packageId?: string, version?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPackageNotes(id, packageId, version, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the release notes for the specified package
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the feed
         * @param {string} [packageId] Package Id
         * @param {string} [version] Package Version
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPackageNotesSpaces(baseSpaceId: string, id: string, packageId?: string, version?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPackageNotesSpaces(baseSpaceId, id, packageId, version, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns package information for the specified package id
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPackageRepository(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PackageFromBuiltInFeedResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPackageRepository(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the delta-signature for a given package. Used to optimize file upload.
         * @param {string} packageId Package ID of the package to be uploaded
         * @param {string} version The version of the package to be uploaded
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPackageRepositoryDeltaSignature(packageId: string, version: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PackageSignatureResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPackageRepositoryDeltaSignature(packageId, version, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the delta-signature for a given package. Used to optimize file upload.
         * @param {string} baseSpaceId ID of the space
         * @param {string} packageId Package ID of the package to be uploaded
         * @param {string} version The version of the package to be uploaded
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPackageRepositoryDeltaSignatureSpaces(baseSpaceId: string, packageId: string, version: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PackageSignatureResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPackageRepositoryDeltaSignatureSpaces(baseSpaceId, packageId, version, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Downloads the specified package
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPackageRepositoryGetRaw(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPackageRepositoryGetRaw(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Downloads the specified package
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPackageRepositoryGetRawSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPackageRepositoryGetRawSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of packages matching the specified criteria
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPackageRepositoryList(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PackageResourceCollection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPackageRepositoryList(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of packages matching the specified criteria
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPackageRepositoryListSpaces(baseSpaceId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PackageResourceCollection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPackageRepositoryListSpaces(baseSpaceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns package information for the specified package id
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPackageRepositorySpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PackageFromBuiltInFeedResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPackageRepositorySpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Searches the specified feed for packages. Legacy. Please use the /feeds{id}/packages/search endpoint instead.
         * @param {string} id ID of the feed
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPackageSearchActionOld(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PackageResource>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPackageSearchActionOld(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Searches the specified feed for packages. Legacy. Please use the /feeds{id}/packages/search endpoint instead.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the feed
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPackageSearchActionOldSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PackageResource>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPackageSearchActionOldSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PackagesApi - factory interface
 * @export
 */
export const PackagesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PackagesApiFp(configuration)
    return {
        /**
         * Uploads a delta patch for the given file. Used to optimize file upload.
         * @param {string} baseVersion The version of the package that was used to create the signature
         * @param {string} packageId Package ID of the package to be uploaded
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPackageRepositoryDeltaUpload(baseVersion: string, packageId: string, options?: any): AxiosPromise<void> {
            return localVarFp.createPackageRepositoryDeltaUpload(baseVersion, packageId, options).then((request) => request(axios, basePath));
        },
        /**
         * Uploads a delta patch for the given file. Used to optimize file upload.
         * @param {string} baseSpaceId ID of the space
         * @param {string} baseVersion The version of the package that was used to create the signature
         * @param {string} packageId Package ID of the package to be uploaded
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPackageRepositoryDeltaUploadSpaces(baseSpaceId: string, baseVersion: string, packageId: string, options?: any): AxiosPromise<void> {
            return localVarFp.createPackageRepositoryDeltaUploadSpaces(baseSpaceId, baseVersion, packageId, options).then((request) => request(axios, basePath));
        },
        /**
         * Uploads a new package
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPackageRepositoryUpload(options?: any): AxiosPromise<void> {
            return localVarFp.createPackageRepositoryUpload(options).then((request) => request(axios, basePath));
        },
        /**
         * Uploads a new package
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPackageRepositoryUploadSpaces(baseSpaceId: string, options?: any): AxiosPromise<void> {
            return localVarFp.createPackageRepositoryUploadSpaces(baseSpaceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the specified package
         * @param {string} id ID of the package
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePackageRepositoryDeleteById(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deletePackageRepositoryDeleteById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the specified package
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the package
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePackageRepositoryDeleteByIdSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deletePackageRepositoryDeleteByIdSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Bulk deletes packages
         * @param {string} ids Comma separated list of IDs to be deleted
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePackageRepositoryDeleteByIds(ids: string, options?: any): AxiosPromise<void> {
            return localVarFp.deletePackageRepositoryDeleteByIds(ids, options).then((request) => request(axios, basePath));
        },
        /**
         * Bulk deletes packages
         * @param {string} baseSpaceId ID of the space
         * @param {string} ids Comma separated list of IDs to be deleted
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePackageRepositoryDeleteByIdsSpaces(baseSpaceId: string, ids: string, options?: any): AxiosPromise<void> {
            return localVarFp.deletePackageRepositoryDeleteByIdsSpaces(baseSpaceId, ids, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of release notes for the specified packages
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageListNotes(options?: any): AxiosPromise<PackageNoteListResource> {
            return localVarFp.getPackageListNotes(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of release notes for the specified packages
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageListNotesSpaces(baseSpaceId: string, options?: any): AxiosPromise<PackageNoteListResource> {
            return localVarFp.getPackageListNotesSpaces(baseSpaceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the release notes for the specified package
         * @param {string} id ID of the feed
         * @param {string} [packageId] Package Id
         * @param {string} [version] Package Version
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageNotes(id: string, packageId?: string, version?: string, options?: any): AxiosPromise<void> {
            return localVarFp.getPackageNotes(id, packageId, version, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the release notes for the specified package
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the feed
         * @param {string} [packageId] Package Id
         * @param {string} [version] Package Version
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageNotesSpaces(baseSpaceId: string, id: string, packageId?: string, version?: string, options?: any): AxiosPromise<void> {
            return localVarFp.getPackageNotesSpaces(baseSpaceId, id, packageId, version, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns package information for the specified package id
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageRepository(id: string, options?: any): AxiosPromise<PackageFromBuiltInFeedResource> {
            return localVarFp.getPackageRepository(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the delta-signature for a given package. Used to optimize file upload.
         * @param {string} packageId Package ID of the package to be uploaded
         * @param {string} version The version of the package to be uploaded
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageRepositoryDeltaSignature(packageId: string, version: string, options?: any): AxiosPromise<PackageSignatureResource> {
            return localVarFp.getPackageRepositoryDeltaSignature(packageId, version, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the delta-signature for a given package. Used to optimize file upload.
         * @param {string} baseSpaceId ID of the space
         * @param {string} packageId Package ID of the package to be uploaded
         * @param {string} version The version of the package to be uploaded
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageRepositoryDeltaSignatureSpaces(baseSpaceId: string, packageId: string, version: string, options?: any): AxiosPromise<PackageSignatureResource> {
            return localVarFp.getPackageRepositoryDeltaSignatureSpaces(baseSpaceId, packageId, version, options).then((request) => request(axios, basePath));
        },
        /**
         * Downloads the specified package
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageRepositoryGetRaw(id: string, options?: any): AxiosPromise<any> {
            return localVarFp.getPackageRepositoryGetRaw(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Downloads the specified package
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageRepositoryGetRawSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<any> {
            return localVarFp.getPackageRepositoryGetRawSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of packages matching the specified criteria
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageRepositoryList(options?: any): AxiosPromise<PackageResourceCollection> {
            return localVarFp.getPackageRepositoryList(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of packages matching the specified criteria
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageRepositoryListSpaces(baseSpaceId: string, options?: any): AxiosPromise<PackageResourceCollection> {
            return localVarFp.getPackageRepositoryListSpaces(baseSpaceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns package information for the specified package id
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageRepositorySpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<PackageFromBuiltInFeedResource> {
            return localVarFp.getPackageRepositorySpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Searches the specified feed for packages. Legacy. Please use the /feeds{id}/packages/search endpoint instead.
         * @param {string} id ID of the feed
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageSearchActionOld(id: string, options?: any): AxiosPromise<Array<PackageResource>> {
            return localVarFp.getPackageSearchActionOld(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Searches the specified feed for packages. Legacy. Please use the /feeds{id}/packages/search endpoint instead.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the feed
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageSearchActionOldSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<Array<PackageResource>> {
            return localVarFp.getPackageSearchActionOldSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PackagesApi - interface
 * @export
 * @interface PackagesApi
 */
export interface PackagesApiInterface {
    /**
     * Uploads a delta patch for the given file. Used to optimize file upload.
     * @param {string} baseVersion The version of the package that was used to create the signature
     * @param {string} packageId Package ID of the package to be uploaded
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApiInterface
     */
    createPackageRepositoryDeltaUpload(baseVersion: string, packageId: string, options?: any): AxiosPromise<void>;

    /**
     * Uploads a delta patch for the given file. Used to optimize file upload.
     * @param {string} baseSpaceId ID of the space
     * @param {string} baseVersion The version of the package that was used to create the signature
     * @param {string} packageId Package ID of the package to be uploaded
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApiInterface
     */
    createPackageRepositoryDeltaUploadSpaces(baseSpaceId: string, baseVersion: string, packageId: string, options?: any): AxiosPromise<void>;

    /**
     * Uploads a new package
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApiInterface
     */
    createPackageRepositoryUpload(options?: any): AxiosPromise<void>;

    /**
     * Uploads a new package
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApiInterface
     */
    createPackageRepositoryUploadSpaces(baseSpaceId: string, options?: any): AxiosPromise<void>;

    /**
     * Deletes the specified package
     * @param {string} id ID of the package
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApiInterface
     */
    deletePackageRepositoryDeleteById(id: string, options?: any): AxiosPromise<void>;

    /**
     * Deletes the specified package
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the package
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApiInterface
     */
    deletePackageRepositoryDeleteByIdSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<void>;

    /**
     * Bulk deletes packages
     * @param {string} ids Comma separated list of IDs to be deleted
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApiInterface
     */
    deletePackageRepositoryDeleteByIds(ids: string, options?: any): AxiosPromise<void>;

    /**
     * Bulk deletes packages
     * @param {string} baseSpaceId ID of the space
     * @param {string} ids Comma separated list of IDs to be deleted
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApiInterface
     */
    deletePackageRepositoryDeleteByIdsSpaces(baseSpaceId: string, ids: string, options?: any): AxiosPromise<void>;

    /**
     * Returns a list of release notes for the specified packages
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApiInterface
     */
    getPackageListNotes(options?: any): AxiosPromise<PackageNoteListResource>;

    /**
     * Returns a list of release notes for the specified packages
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApiInterface
     */
    getPackageListNotesSpaces(baseSpaceId: string, options?: any): AxiosPromise<PackageNoteListResource>;

    /**
     * Returns the release notes for the specified package
     * @param {string} id ID of the feed
     * @param {string} [packageId] Package Id
     * @param {string} [version] Package Version
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApiInterface
     */
    getPackageNotes(id: string, packageId?: string, version?: string, options?: any): AxiosPromise<void>;

    /**
     * Returns the release notes for the specified package
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the feed
     * @param {string} [packageId] Package Id
     * @param {string} [version] Package Version
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApiInterface
     */
    getPackageNotesSpaces(baseSpaceId: string, id: string, packageId?: string, version?: string, options?: any): AxiosPromise<void>;

    /**
     * Returns package information for the specified package id
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApiInterface
     */
    getPackageRepository(id: string, options?: any): AxiosPromise<PackageFromBuiltInFeedResource>;

    /**
     * Returns the delta-signature for a given package. Used to optimize file upload.
     * @param {string} packageId Package ID of the package to be uploaded
     * @param {string} version The version of the package to be uploaded
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApiInterface
     */
    getPackageRepositoryDeltaSignature(packageId: string, version: string, options?: any): AxiosPromise<PackageSignatureResource>;

    /**
     * Returns the delta-signature for a given package. Used to optimize file upload.
     * @param {string} baseSpaceId ID of the space
     * @param {string} packageId Package ID of the package to be uploaded
     * @param {string} version The version of the package to be uploaded
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApiInterface
     */
    getPackageRepositoryDeltaSignatureSpaces(baseSpaceId: string, packageId: string, version: string, options?: any): AxiosPromise<PackageSignatureResource>;

    /**
     * Downloads the specified package
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApiInterface
     */
    getPackageRepositoryGetRaw(id: string, options?: any): AxiosPromise<any>;

    /**
     * Downloads the specified package
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApiInterface
     */
    getPackageRepositoryGetRawSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<any>;

    /**
     * Returns a list of packages matching the specified criteria
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApiInterface
     */
    getPackageRepositoryList(options?: any): AxiosPromise<PackageResourceCollection>;

    /**
     * Returns a list of packages matching the specified criteria
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApiInterface
     */
    getPackageRepositoryListSpaces(baseSpaceId: string, options?: any): AxiosPromise<PackageResourceCollection>;

    /**
     * Returns package information for the specified package id
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApiInterface
     */
    getPackageRepositorySpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<PackageFromBuiltInFeedResource>;

    /**
     * Searches the specified feed for packages. Legacy. Please use the /feeds{id}/packages/search endpoint instead.
     * @param {string} id ID of the feed
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApiInterface
     */
    getPackageSearchActionOld(id: string, options?: any): AxiosPromise<Array<PackageResource>>;

    /**
     * Searches the specified feed for packages. Legacy. Please use the /feeds{id}/packages/search endpoint instead.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the feed
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApiInterface
     */
    getPackageSearchActionOldSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<Array<PackageResource>>;

}

/**
 * PackagesApi - object-oriented interface
 * @export
 * @class PackagesApi
 * @extends {BaseAPI}
 */
export class PackagesApi extends BaseAPI implements PackagesApiInterface {
    /**
     * Uploads a delta patch for the given file. Used to optimize file upload.
     * @param {string} baseVersion The version of the package that was used to create the signature
     * @param {string} packageId Package ID of the package to be uploaded
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApi
     */
    public createPackageRepositoryDeltaUpload(baseVersion: string, packageId: string, options?: any) {
        return PackagesApiFp(this.configuration).createPackageRepositoryDeltaUpload(baseVersion, packageId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Uploads a delta patch for the given file. Used to optimize file upload.
     * @param {string} baseSpaceId ID of the space
     * @param {string} baseVersion The version of the package that was used to create the signature
     * @param {string} packageId Package ID of the package to be uploaded
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApi
     */
    public createPackageRepositoryDeltaUploadSpaces(baseSpaceId: string, baseVersion: string, packageId: string, options?: any) {
        return PackagesApiFp(this.configuration).createPackageRepositoryDeltaUploadSpaces(baseSpaceId, baseVersion, packageId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Uploads a new package
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApi
     */
    public createPackageRepositoryUpload(options?: any) {
        return PackagesApiFp(this.configuration).createPackageRepositoryUpload(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Uploads a new package
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApi
     */
    public createPackageRepositoryUploadSpaces(baseSpaceId: string, options?: any) {
        return PackagesApiFp(this.configuration).createPackageRepositoryUploadSpaces(baseSpaceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the specified package
     * @param {string} id ID of the package
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApi
     */
    public deletePackageRepositoryDeleteById(id: string, options?: any) {
        return PackagesApiFp(this.configuration).deletePackageRepositoryDeleteById(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the specified package
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the package
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApi
     */
    public deletePackageRepositoryDeleteByIdSpaces(baseSpaceId: string, id: string, options?: any) {
        return PackagesApiFp(this.configuration).deletePackageRepositoryDeleteByIdSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Bulk deletes packages
     * @param {string} ids Comma separated list of IDs to be deleted
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApi
     */
    public deletePackageRepositoryDeleteByIds(ids: string, options?: any) {
        return PackagesApiFp(this.configuration).deletePackageRepositoryDeleteByIds(ids, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Bulk deletes packages
     * @param {string} baseSpaceId ID of the space
     * @param {string} ids Comma separated list of IDs to be deleted
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApi
     */
    public deletePackageRepositoryDeleteByIdsSpaces(baseSpaceId: string, ids: string, options?: any) {
        return PackagesApiFp(this.configuration).deletePackageRepositoryDeleteByIdsSpaces(baseSpaceId, ids, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of release notes for the specified packages
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApi
     */
    public getPackageListNotes(options?: any) {
        return PackagesApiFp(this.configuration).getPackageListNotes(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of release notes for the specified packages
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApi
     */
    public getPackageListNotesSpaces(baseSpaceId: string, options?: any) {
        return PackagesApiFp(this.configuration).getPackageListNotesSpaces(baseSpaceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the release notes for the specified package
     * @param {string} id ID of the feed
     * @param {string} [packageId] Package Id
     * @param {string} [version] Package Version
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApi
     */
    public getPackageNotes(id: string, packageId?: string, version?: string, options?: any) {
        return PackagesApiFp(this.configuration).getPackageNotes(id, packageId, version, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the release notes for the specified package
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the feed
     * @param {string} [packageId] Package Id
     * @param {string} [version] Package Version
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApi
     */
    public getPackageNotesSpaces(baseSpaceId: string, id: string, packageId?: string, version?: string, options?: any) {
        return PackagesApiFp(this.configuration).getPackageNotesSpaces(baseSpaceId, id, packageId, version, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns package information for the specified package id
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApi
     */
    public getPackageRepository(id: string, options?: any) {
        return PackagesApiFp(this.configuration).getPackageRepository(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the delta-signature for a given package. Used to optimize file upload.
     * @param {string} packageId Package ID of the package to be uploaded
     * @param {string} version The version of the package to be uploaded
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApi
     */
    public getPackageRepositoryDeltaSignature(packageId: string, version: string, options?: any) {
        return PackagesApiFp(this.configuration).getPackageRepositoryDeltaSignature(packageId, version, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the delta-signature for a given package. Used to optimize file upload.
     * @param {string} baseSpaceId ID of the space
     * @param {string} packageId Package ID of the package to be uploaded
     * @param {string} version The version of the package to be uploaded
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApi
     */
    public getPackageRepositoryDeltaSignatureSpaces(baseSpaceId: string, packageId: string, version: string, options?: any) {
        return PackagesApiFp(this.configuration).getPackageRepositoryDeltaSignatureSpaces(baseSpaceId, packageId, version, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Downloads the specified package
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApi
     */
    public getPackageRepositoryGetRaw(id: string, options?: any) {
        return PackagesApiFp(this.configuration).getPackageRepositoryGetRaw(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Downloads the specified package
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApi
     */
    public getPackageRepositoryGetRawSpaces(baseSpaceId: string, id: string, options?: any) {
        return PackagesApiFp(this.configuration).getPackageRepositoryGetRawSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of packages matching the specified criteria
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApi
     */
    public getPackageRepositoryList(options?: any) {
        return PackagesApiFp(this.configuration).getPackageRepositoryList(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of packages matching the specified criteria
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApi
     */
    public getPackageRepositoryListSpaces(baseSpaceId: string, options?: any) {
        return PackagesApiFp(this.configuration).getPackageRepositoryListSpaces(baseSpaceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns package information for the specified package id
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApi
     */
    public getPackageRepositorySpaces(baseSpaceId: string, id: string, options?: any) {
        return PackagesApiFp(this.configuration).getPackageRepositorySpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Searches the specified feed for packages. Legacy. Please use the /feeds{id}/packages/search endpoint instead.
     * @param {string} id ID of the feed
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApi
     */
    public getPackageSearchActionOld(id: string, options?: any) {
        return PackagesApiFp(this.configuration).getPackageSearchActionOld(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Searches the specified feed for packages. Legacy. Please use the /feeds{id}/packages/search endpoint instead.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the feed
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagesApi
     */
    public getPackageSearchActionOldSpaces(baseSpaceId: string, id: string, options?: any) {
        return PackagesApiFp(this.configuration).getPackageSearchActionOldSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }
}
