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
import { ConnectivityCheckResponse } from '../model';
// @ts-ignore
import { ConvertProjectToVersionControlledResponse } from '../model';
// @ts-ignore
import { ProjectResource } from '../model';
// @ts-ignore
import { ProjectResourceCollection } from '../model';
// @ts-ignore
import { ProjectSettingsMetadata } from '../model';
// @ts-ignore
import { ProjectSummary } from '../model';
/**
 * ProjectsApi - axios parameter creator
 * @export
 */
export const ProjectsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new project.
         * @summary Create a ProjectResource
         * @param {string} [clone] The projectId whose configuration is to be copied to the project being created.
         * @param {ProjectResource} [body] The ProjectResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProject: async (clone?: string, body?: ProjectResource, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/projects`;
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

            if (clone !== undefined) {
                localVarQueryParameter['clone'] = clone;
            }


    
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
         * Updates the logo associated with the project.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProjectLogo: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('createProjectLogo', 'id', id)
            const localVarPath = `/projects/{id}/logo`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * Updates the logo associated with the project.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProjectLogoSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('createProjectLogoSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('createProjectLogoSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/projects/{id}/logo`
                .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * Creates a new project.
         * @summary Create a ProjectResource
         * @param {string} baseSpaceId ID of the space
         * @param {string} [clone] The projectId whose configuration is to be copied to the project being created.
         * @param {ProjectResource} [body] The ProjectResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProjectSpaces: async (baseSpaceId: string, clone?: string, body?: ProjectResource, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('createProjectSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/projects`
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

            if (clone !== undefined) {
                localVarQueryParameter['clone'] = clone;
            }


    
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
         * Converts an existing project to store its configuration in version control.
         * @param {string} projectId ID of the project resource.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProjectVersionControlConversion: async (projectId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('createProjectVersionControlConversion', 'projectId', projectId)
            const localVarPath = `/projects/{projectId}/versioncontrol/convert`
                .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)));
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
         * Converts an existing project to store its configuration in version control.
         * @param {string} baseSpaceId ID of the space
         * @param {string} projectId ID of the project resource.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProjectVersionControlConversionSpaces: async (baseSpaceId: string, projectId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('createProjectVersionControlConversionSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('createProjectVersionControlConversionSpaces', 'projectId', projectId)
            const localVarPath = `/{baseSpaceId}/projects/{projectId}/versioncontrol/convert`
                .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)))
                .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)));
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
         * Tests the VCS settings to make sure we can connect
         * @param {string} id ID of the project
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createVersionControlSettingsConnectivityCheck: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('createVersionControlSettingsConnectivityCheck', 'id', id)
            const localVarPath = `/projects/{id}/versioncontrolsettings/test`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * Tests the VCS settings to make sure we can connect
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the project
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createVersionControlSettingsConnectivityCheckSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('createVersionControlSettingsConnectivityCheckSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('createVersionControlSettingsConnectivityCheckSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/projects/{id}/versioncontrolsettings/test`
                .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * Deletes an existing project.
         * @summary Delete a ProjectResource by ID
         * @param {string} id ID of the ProjectResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProject: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteProject', 'id', id)
            const localVarPath = `/projects/{id}`
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
         * Deletes an existing project.
         * @summary Delete a ProjectResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the ProjectResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProjectSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('deleteProjectSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteProjectSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/projects/{id}`
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
         * Gets a single project by ID or Slug.
         * @param {string} id ID or slug of the ProjectResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectByIdOrSlug: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getProjectByIdOrSlug', 'id', id)
            const localVarPath = `/projects/{id}`
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
         * Gets a single project by ID or Slug.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID or slug of the ProjectResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectByIdOrSlugSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getProjectByIdOrSlugSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getProjectByIdOrSlugSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/projects/{id}`
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
         * Gets the logo associated with the project.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectLogo: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getProjectLogo', 'id', id)
            const localVarPath = `/projects/{id}/logo`
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
         * Gets the logo associated with the project.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectLogoSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getProjectLogoSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getProjectLogoSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/projects/{id}/logo`
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
         * Gets the custom settings metadata from the extensions.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectSettingsMetadata: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getProjectSettingsMetadata', 'id', id)
            const localVarPath = `/projects/{id}/metadata`
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
         * Gets the custom settings metadata from the extensions.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectSettingsMetadataSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getProjectSettingsMetadataSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getProjectSettingsMetadataSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/projects/{id}/metadata`
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
         * Gets a summary of project-specific information.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectSummary: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getProjectSummary', 'id', id)
            const localVarPath = `/projects/{id}/summary`
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
         * Gets a summary of project-specific information.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectSummarySpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getProjectSummarySpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getProjectSummarySpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/projects/{id}/summary`
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
         * Lists all of the projects in the supplied Octopus Deploy Space, from all project groups. The results will be sorted alphabetically by name.
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexProjects: async (skip?: number, take?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/projects`;
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
         * Lists all of the projects in the supplied Octopus Deploy Space, from all project groups. The results will be sorted alphabetically by name.
         * @param {string} baseSpaceId ID of the space
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexProjectsSpaces: async (baseSpaceId: string, skip?: number, take?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('indexProjectsSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/projects`
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
         * Lists the name and ID of all of the projects in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllProjects: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/projects/all`;
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
         * Lists the name and ID of all of the projects in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllProjectsSpaces: async (baseSpaceId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('listAllProjectsSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/projects/all`
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
         * Modifies an existing project.
         * @summary Modify a ProjectResource by ID
         * @param {string} id ID of the ProjectResource to modify
         * @param {ProjectResource} [body] The ProjectResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProject: async (id: string, body?: ProjectResource, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateProject', 'id', id)
            const localVarPath = `/projects/{id}`
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
         * Updates the logo associated with the project.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProjectLogo: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateProjectLogo', 'id', id)
            const localVarPath = `/projects/{id}/logo`
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
         * Updates the logo associated with the project.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProjectLogoSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('updateProjectLogoSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateProjectLogoSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/projects/{id}/logo`
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
        /**
         * Modifies an existing project.
         * @summary Modify a ProjectResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the ProjectResource to modify
         * @param {ProjectResource} [body] The ProjectResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProjectSpaces: async (baseSpaceId: string, id: string, body?: ProjectResource, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('updateProjectSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateProjectSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/projects/{id}`
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
 * ProjectsApi - functional programming interface
 * @export
 */
export const ProjectsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProjectsApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new project.
         * @summary Create a ProjectResource
         * @param {string} [clone] The projectId whose configuration is to be copied to the project being created.
         * @param {ProjectResource} [body] The ProjectResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createProject(clone?: string, body?: ProjectResource, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createProject(clone, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates the logo associated with the project.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createProjectLogo(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createProjectLogo(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates the logo associated with the project.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createProjectLogoSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createProjectLogoSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Creates a new project.
         * @summary Create a ProjectResource
         * @param {string} baseSpaceId ID of the space
         * @param {string} [clone] The projectId whose configuration is to be copied to the project being created.
         * @param {ProjectResource} [body] The ProjectResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createProjectSpaces(baseSpaceId: string, clone?: string, body?: ProjectResource, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createProjectSpaces(baseSpaceId, clone, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Converts an existing project to store its configuration in version control.
         * @param {string} projectId ID of the project resource.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createProjectVersionControlConversion(projectId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConvertProjectToVersionControlledResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createProjectVersionControlConversion(projectId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Converts an existing project to store its configuration in version control.
         * @param {string} baseSpaceId ID of the space
         * @param {string} projectId ID of the project resource.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createProjectVersionControlConversionSpaces(baseSpaceId: string, projectId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConvertProjectToVersionControlledResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createProjectVersionControlConversionSpaces(baseSpaceId, projectId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Tests the VCS settings to make sure we can connect
         * @param {string} id ID of the project
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createVersionControlSettingsConnectivityCheck(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConnectivityCheckResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createVersionControlSettingsConnectivityCheck(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Tests the VCS settings to make sure we can connect
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the project
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createVersionControlSettingsConnectivityCheckSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConnectivityCheckResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createVersionControlSettingsConnectivityCheckSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes an existing project.
         * @summary Delete a ProjectResource by ID
         * @param {string} id ID of the ProjectResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteProject(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteProject(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes an existing project.
         * @summary Delete a ProjectResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the ProjectResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteProjectSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteProjectSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets a single project by ID or Slug.
         * @param {string} id ID or slug of the ProjectResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProjectByIdOrSlug(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProjectByIdOrSlug(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets a single project by ID or Slug.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID or slug of the ProjectResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProjectByIdOrSlugSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProjectByIdOrSlugSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets the logo associated with the project.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProjectLogo(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProjectLogo(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets the logo associated with the project.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProjectLogoSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProjectLogoSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets the custom settings metadata from the extensions.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProjectSettingsMetadata(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ProjectSettingsMetadata>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProjectSettingsMetadata(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets the custom settings metadata from the extensions.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProjectSettingsMetadataSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ProjectSettingsMetadata>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProjectSettingsMetadataSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets a summary of project-specific information.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProjectSummary(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectSummary>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProjectSummary(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets a summary of project-specific information.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProjectSummarySpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectSummary>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProjectSummarySpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all of the projects in the supplied Octopus Deploy Space, from all project groups. The results will be sorted alphabetically by name.
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async indexProjects(skip?: number, take?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectResourceCollection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.indexProjects(skip, take, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all of the projects in the supplied Octopus Deploy Space, from all project groups. The results will be sorted alphabetically by name.
         * @param {string} baseSpaceId ID of the space
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async indexProjectsSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectResourceCollection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.indexProjectsSpaces(baseSpaceId, skip, take, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists the name and ID of all of the projects in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAllProjects(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ProjectResource>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAllProjects(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists the name and ID of all of the projects in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAllProjectsSpaces(baseSpaceId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ProjectResource>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAllProjectsSpaces(baseSpaceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Modifies an existing project.
         * @summary Modify a ProjectResource by ID
         * @param {string} id ID of the ProjectResource to modify
         * @param {ProjectResource} [body] The ProjectResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateProject(id: string, body?: ProjectResource, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateProject(id, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates the logo associated with the project.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateProjectLogo(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateProjectLogo(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates the logo associated with the project.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateProjectLogoSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateProjectLogoSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Modifies an existing project.
         * @summary Modify a ProjectResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the ProjectResource to modify
         * @param {ProjectResource} [body] The ProjectResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateProjectSpaces(baseSpaceId: string, id: string, body?: ProjectResource, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateProjectSpaces(baseSpaceId, id, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ProjectsApi - factory interface
 * @export
 */
export const ProjectsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProjectsApiFp(configuration)
    return {
        /**
         * Creates a new project.
         * @summary Create a ProjectResource
         * @param {string} [clone] The projectId whose configuration is to be copied to the project being created.
         * @param {ProjectResource} [body] The ProjectResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProject(clone?: string, body?: ProjectResource, options?: any): AxiosPromise<ProjectResource> {
            return localVarFp.createProject(clone, body, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the logo associated with the project.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProjectLogo(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.createProjectLogo(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the logo associated with the project.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProjectLogoSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<void> {
            return localVarFp.createProjectLogoSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a new project.
         * @summary Create a ProjectResource
         * @param {string} baseSpaceId ID of the space
         * @param {string} [clone] The projectId whose configuration is to be copied to the project being created.
         * @param {ProjectResource} [body] The ProjectResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProjectSpaces(baseSpaceId: string, clone?: string, body?: ProjectResource, options?: any): AxiosPromise<ProjectResource> {
            return localVarFp.createProjectSpaces(baseSpaceId, clone, body, options).then((request) => request(axios, basePath));
        },
        /**
         * Converts an existing project to store its configuration in version control.
         * @param {string} projectId ID of the project resource.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProjectVersionControlConversion(projectId: string, options?: any): AxiosPromise<ConvertProjectToVersionControlledResponse> {
            return localVarFp.createProjectVersionControlConversion(projectId, options).then((request) => request(axios, basePath));
        },
        /**
         * Converts an existing project to store its configuration in version control.
         * @param {string} baseSpaceId ID of the space
         * @param {string} projectId ID of the project resource.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProjectVersionControlConversionSpaces(baseSpaceId: string, projectId: string, options?: any): AxiosPromise<ConvertProjectToVersionControlledResponse> {
            return localVarFp.createProjectVersionControlConversionSpaces(baseSpaceId, projectId, options).then((request) => request(axios, basePath));
        },
        /**
         * Tests the VCS settings to make sure we can connect
         * @param {string} id ID of the project
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createVersionControlSettingsConnectivityCheck(id: string, options?: any): AxiosPromise<ConnectivityCheckResponse> {
            return localVarFp.createVersionControlSettingsConnectivityCheck(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Tests the VCS settings to make sure we can connect
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the project
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createVersionControlSettingsConnectivityCheckSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<ConnectivityCheckResponse> {
            return localVarFp.createVersionControlSettingsConnectivityCheckSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes an existing project.
         * @summary Delete a ProjectResource by ID
         * @param {string} id ID of the ProjectResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProject(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteProject(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes an existing project.
         * @summary Delete a ProjectResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the ProjectResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProjectSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteProjectSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a single project by ID or Slug.
         * @param {string} id ID or slug of the ProjectResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectByIdOrSlug(id: string, options?: any): AxiosPromise<ProjectResource> {
            return localVarFp.getProjectByIdOrSlug(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a single project by ID or Slug.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID or slug of the ProjectResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectByIdOrSlugSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<ProjectResource> {
            return localVarFp.getProjectByIdOrSlugSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets the logo associated with the project.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectLogo(id: string, options?: any): AxiosPromise<any> {
            return localVarFp.getProjectLogo(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets the logo associated with the project.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectLogoSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<any> {
            return localVarFp.getProjectLogoSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets the custom settings metadata from the extensions.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectSettingsMetadata(id: string, options?: any): AxiosPromise<Array<ProjectSettingsMetadata>> {
            return localVarFp.getProjectSettingsMetadata(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets the custom settings metadata from the extensions.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectSettingsMetadataSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<Array<ProjectSettingsMetadata>> {
            return localVarFp.getProjectSettingsMetadataSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a summary of project-specific information.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectSummary(id: string, options?: any): AxiosPromise<ProjectSummary> {
            return localVarFp.getProjectSummary(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a summary of project-specific information.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectSummarySpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<ProjectSummary> {
            return localVarFp.getProjectSummarySpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all of the projects in the supplied Octopus Deploy Space, from all project groups. The results will be sorted alphabetically by name.
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexProjects(skip?: number, take?: number, options?: any): AxiosPromise<ProjectResourceCollection> {
            return localVarFp.indexProjects(skip, take, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all of the projects in the supplied Octopus Deploy Space, from all project groups. The results will be sorted alphabetically by name.
         * @param {string} baseSpaceId ID of the space
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexProjectsSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any): AxiosPromise<ProjectResourceCollection> {
            return localVarFp.indexProjectsSpaces(baseSpaceId, skip, take, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the name and ID of all of the projects in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllProjects(options?: any): AxiosPromise<Array<ProjectResource>> {
            return localVarFp.listAllProjects(options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the name and ID of all of the projects in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllProjectsSpaces(baseSpaceId: string, options?: any): AxiosPromise<Array<ProjectResource>> {
            return localVarFp.listAllProjectsSpaces(baseSpaceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Modifies an existing project.
         * @summary Modify a ProjectResource by ID
         * @param {string} id ID of the ProjectResource to modify
         * @param {ProjectResource} [body] The ProjectResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProject(id: string, body?: ProjectResource, options?: any): AxiosPromise<ProjectResource> {
            return localVarFp.updateProject(id, body, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the logo associated with the project.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProjectLogo(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.updateProjectLogo(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the logo associated with the project.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProjectLogoSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<void> {
            return localVarFp.updateProjectLogoSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Modifies an existing project.
         * @summary Modify a ProjectResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the ProjectResource to modify
         * @param {ProjectResource} [body] The ProjectResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProjectSpaces(baseSpaceId: string, id: string, body?: ProjectResource, options?: any): AxiosPromise<ProjectResource> {
            return localVarFp.updateProjectSpaces(baseSpaceId, id, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ProjectsApi - interface
 * @export
 * @interface ProjectsApi
 */
export interface ProjectsApiInterface {
    /**
     * Creates a new project.
     * @summary Create a ProjectResource
     * @param {string} [clone] The projectId whose configuration is to be copied to the project being created.
     * @param {ProjectResource} [body] The ProjectResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    createProject(clone?: string, body?: ProjectResource, options?: any): AxiosPromise<ProjectResource>;

    /**
     * Updates the logo associated with the project.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    createProjectLogo(id: string, options?: any): AxiosPromise<void>;

    /**
     * Updates the logo associated with the project.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    createProjectLogoSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<void>;

    /**
     * Creates a new project.
     * @summary Create a ProjectResource
     * @param {string} baseSpaceId ID of the space
     * @param {string} [clone] The projectId whose configuration is to be copied to the project being created.
     * @param {ProjectResource} [body] The ProjectResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    createProjectSpaces(baseSpaceId: string, clone?: string, body?: ProjectResource, options?: any): AxiosPromise<ProjectResource>;

    /**
     * Converts an existing project to store its configuration in version control.
     * @param {string} projectId ID of the project resource.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    createProjectVersionControlConversion(projectId: string, options?: any): AxiosPromise<ConvertProjectToVersionControlledResponse>;

    /**
     * Converts an existing project to store its configuration in version control.
     * @param {string} baseSpaceId ID of the space
     * @param {string} projectId ID of the project resource.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    createProjectVersionControlConversionSpaces(baseSpaceId: string, projectId: string, options?: any): AxiosPromise<ConvertProjectToVersionControlledResponse>;

    /**
     * Tests the VCS settings to make sure we can connect
     * @param {string} id ID of the project
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    createVersionControlSettingsConnectivityCheck(id: string, options?: any): AxiosPromise<ConnectivityCheckResponse>;

    /**
     * Tests the VCS settings to make sure we can connect
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the project
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    createVersionControlSettingsConnectivityCheckSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<ConnectivityCheckResponse>;

    /**
     * Deletes an existing project.
     * @summary Delete a ProjectResource by ID
     * @param {string} id ID of the ProjectResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    deleteProject(id: string, options?: any): AxiosPromise<void>;

    /**
     * Deletes an existing project.
     * @summary Delete a ProjectResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ProjectResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    deleteProjectSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<void>;

    /**
     * Gets a single project by ID or Slug.
     * @param {string} id ID or slug of the ProjectResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    getProjectByIdOrSlug(id: string, options?: any): AxiosPromise<ProjectResource>;

    /**
     * Gets a single project by ID or Slug.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID or slug of the ProjectResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    getProjectByIdOrSlugSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<ProjectResource>;

    /**
     * Gets the logo associated with the project.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    getProjectLogo(id: string, options?: any): AxiosPromise<any>;

    /**
     * Gets the logo associated with the project.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    getProjectLogoSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<any>;

    /**
     * Gets the custom settings metadata from the extensions.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    getProjectSettingsMetadata(id: string, options?: any): AxiosPromise<Array<ProjectSettingsMetadata>>;

    /**
     * Gets the custom settings metadata from the extensions.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    getProjectSettingsMetadataSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<Array<ProjectSettingsMetadata>>;

    /**
     * Gets a summary of project-specific information.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    getProjectSummary(id: string, options?: any): AxiosPromise<ProjectSummary>;

    /**
     * Gets a summary of project-specific information.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    getProjectSummarySpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<ProjectSummary>;

    /**
     * Lists all of the projects in the supplied Octopus Deploy Space, from all project groups. The results will be sorted alphabetically by name.
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    indexProjects(skip?: number, take?: number, options?: any): AxiosPromise<ProjectResourceCollection>;

    /**
     * Lists all of the projects in the supplied Octopus Deploy Space, from all project groups. The results will be sorted alphabetically by name.
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    indexProjectsSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any): AxiosPromise<ProjectResourceCollection>;

    /**
     * Lists the name and ID of all of the projects in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    listAllProjects(options?: any): AxiosPromise<Array<ProjectResource>>;

    /**
     * Lists the name and ID of all of the projects in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    listAllProjectsSpaces(baseSpaceId: string, options?: any): AxiosPromise<Array<ProjectResource>>;

    /**
     * Modifies an existing project.
     * @summary Modify a ProjectResource by ID
     * @param {string} id ID of the ProjectResource to modify
     * @param {ProjectResource} [body] The ProjectResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    updateProject(id: string, body?: ProjectResource, options?: any): AxiosPromise<ProjectResource>;

    /**
     * Updates the logo associated with the project.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    updateProjectLogo(id: string, options?: any): AxiosPromise<void>;

    /**
     * Updates the logo associated with the project.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    updateProjectLogoSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<void>;

    /**
     * Modifies an existing project.
     * @summary Modify a ProjectResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ProjectResource to modify
     * @param {ProjectResource} [body] The ProjectResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    updateProjectSpaces(baseSpaceId: string, id: string, body?: ProjectResource, options?: any): AxiosPromise<ProjectResource>;

}

/**
 * ProjectsApi - object-oriented interface
 * @export
 * @class ProjectsApi
 * @extends {BaseAPI}
 */
export class ProjectsApi extends BaseAPI implements ProjectsApiInterface {
    /**
     * Creates a new project.
     * @summary Create a ProjectResource
     * @param {string} [clone] The projectId whose configuration is to be copied to the project being created.
     * @param {ProjectResource} [body] The ProjectResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public createProject(clone?: string, body?: ProjectResource, options?: any) {
        return ProjectsApiFp(this.configuration).createProject(clone, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the logo associated with the project.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public createProjectLogo(id: string, options?: any) {
        return ProjectsApiFp(this.configuration).createProjectLogo(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the logo associated with the project.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public createProjectLogoSpaces(baseSpaceId: string, id: string, options?: any) {
        return ProjectsApiFp(this.configuration).createProjectLogoSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a new project.
     * @summary Create a ProjectResource
     * @param {string} baseSpaceId ID of the space
     * @param {string} [clone] The projectId whose configuration is to be copied to the project being created.
     * @param {ProjectResource} [body] The ProjectResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public createProjectSpaces(baseSpaceId: string, clone?: string, body?: ProjectResource, options?: any) {
        return ProjectsApiFp(this.configuration).createProjectSpaces(baseSpaceId, clone, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Converts an existing project to store its configuration in version control.
     * @param {string} projectId ID of the project resource.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public createProjectVersionControlConversion(projectId: string, options?: any) {
        return ProjectsApiFp(this.configuration).createProjectVersionControlConversion(projectId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Converts an existing project to store its configuration in version control.
     * @param {string} baseSpaceId ID of the space
     * @param {string} projectId ID of the project resource.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public createProjectVersionControlConversionSpaces(baseSpaceId: string, projectId: string, options?: any) {
        return ProjectsApiFp(this.configuration).createProjectVersionControlConversionSpaces(baseSpaceId, projectId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Tests the VCS settings to make sure we can connect
     * @param {string} id ID of the project
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public createVersionControlSettingsConnectivityCheck(id: string, options?: any) {
        return ProjectsApiFp(this.configuration).createVersionControlSettingsConnectivityCheck(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Tests the VCS settings to make sure we can connect
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the project
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public createVersionControlSettingsConnectivityCheckSpaces(baseSpaceId: string, id: string, options?: any) {
        return ProjectsApiFp(this.configuration).createVersionControlSettingsConnectivityCheckSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes an existing project.
     * @summary Delete a ProjectResource by ID
     * @param {string} id ID of the ProjectResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public deleteProject(id: string, options?: any) {
        return ProjectsApiFp(this.configuration).deleteProject(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes an existing project.
     * @summary Delete a ProjectResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ProjectResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public deleteProjectSpaces(baseSpaceId: string, id: string, options?: any) {
        return ProjectsApiFp(this.configuration).deleteProjectSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a single project by ID or Slug.
     * @param {string} id ID or slug of the ProjectResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public getProjectByIdOrSlug(id: string, options?: any) {
        return ProjectsApiFp(this.configuration).getProjectByIdOrSlug(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a single project by ID or Slug.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID or slug of the ProjectResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public getProjectByIdOrSlugSpaces(baseSpaceId: string, id: string, options?: any) {
        return ProjectsApiFp(this.configuration).getProjectByIdOrSlugSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets the logo associated with the project.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public getProjectLogo(id: string, options?: any) {
        return ProjectsApiFp(this.configuration).getProjectLogo(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets the logo associated with the project.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public getProjectLogoSpaces(baseSpaceId: string, id: string, options?: any) {
        return ProjectsApiFp(this.configuration).getProjectLogoSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets the custom settings metadata from the extensions.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public getProjectSettingsMetadata(id: string, options?: any) {
        return ProjectsApiFp(this.configuration).getProjectSettingsMetadata(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets the custom settings metadata from the extensions.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public getProjectSettingsMetadataSpaces(baseSpaceId: string, id: string, options?: any) {
        return ProjectsApiFp(this.configuration).getProjectSettingsMetadataSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a summary of project-specific information.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public getProjectSummary(id: string, options?: any) {
        return ProjectsApiFp(this.configuration).getProjectSummary(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a summary of project-specific information.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public getProjectSummarySpaces(baseSpaceId: string, id: string, options?: any) {
        return ProjectsApiFp(this.configuration).getProjectSummarySpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all of the projects in the supplied Octopus Deploy Space, from all project groups. The results will be sorted alphabetically by name.
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public indexProjects(skip?: number, take?: number, options?: any) {
        return ProjectsApiFp(this.configuration).indexProjects(skip, take, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all of the projects in the supplied Octopus Deploy Space, from all project groups. The results will be sorted alphabetically by name.
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public indexProjectsSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any) {
        return ProjectsApiFp(this.configuration).indexProjectsSpaces(baseSpaceId, skip, take, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the name and ID of all of the projects in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public listAllProjects(options?: any) {
        return ProjectsApiFp(this.configuration).listAllProjects(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the name and ID of all of the projects in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public listAllProjectsSpaces(baseSpaceId: string, options?: any) {
        return ProjectsApiFp(this.configuration).listAllProjectsSpaces(baseSpaceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Modifies an existing project.
     * @summary Modify a ProjectResource by ID
     * @param {string} id ID of the ProjectResource to modify
     * @param {ProjectResource} [body] The ProjectResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public updateProject(id: string, body?: ProjectResource, options?: any) {
        return ProjectsApiFp(this.configuration).updateProject(id, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the logo associated with the project.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public updateProjectLogo(id: string, options?: any) {
        return ProjectsApiFp(this.configuration).updateProjectLogo(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the logo associated with the project.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public updateProjectLogoSpaces(baseSpaceId: string, id: string, options?: any) {
        return ProjectsApiFp(this.configuration).updateProjectLogoSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Modifies an existing project.
     * @summary Modify a ProjectResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ProjectResource to modify
     * @param {ProjectResource} [body] The ProjectResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public updateProjectSpaces(baseSpaceId: string, id: string, body?: ProjectResource, options?: any) {
        return ProjectsApiFp(this.configuration).updateProjectSpaces(baseSpaceId, id, body, options).then((request) => request(this.axios, this.basePath));
    }
}
