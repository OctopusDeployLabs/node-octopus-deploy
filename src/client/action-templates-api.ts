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
import { ActionTemplateCategoryResource } from '../model';
// @ts-ignore
import { ActionTemplateResource } from '../model';
// @ts-ignore
import { ActionTemplateResourceCollection } from '../model';
// @ts-ignore
import { ActionTemplateSearchResource } from '../model';
// @ts-ignore
import { ActionTemplateUsageResource } from '../model';
// @ts-ignore
import { ActionUpdateResultResource } from '../model';
/**
 * ActionTemplatesApi - axios parameter creator
 * @export
 */
export const ActionTemplatesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new action template.
         * @summary Create a ActionTemplateResource
         * @param {ActionTemplateResource} [body] The ActionTemplateResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createActionTemplate: async (body?: ActionTemplateResource, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/actiontemplates`;
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
         * Updates deployment actions to specific version of action template
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createActionTemplateActions: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('createActionTemplateActions', 'id', id)
            const localVarPath = `/actiontemplates/{id}/actionsUpdate`
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
         * Updates deployment actions to specific version of action template
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createActionTemplateActionsSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('createActionTemplateActionsSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('createActionTemplateActionsSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/actiontemplates/{id}/actionsUpdate`
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
         * Updates the logo associated with the latest version of the action template.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createActionTemplateLogo: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('createActionTemplateLogo', 'id', id)
            const localVarPath = `/actiontemplates/{id}/logo`
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
         * Updates the logo associated with the latest version of the action template.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createActionTemplateLogoSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('createActionTemplateLogoSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('createActionTemplateLogoSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/actiontemplates/{id}/logo`
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
         * Creates a new action template.
         * @summary Create a ActionTemplateResource
         * @param {string} baseSpaceId ID of the space
         * @param {ActionTemplateResource} [body] The ActionTemplateResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createActionTemplateSpaces: async (baseSpaceId: string, body?: ActionTemplateResource, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('createActionTemplateSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/actiontemplates`
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
         * Deletes an existing action template and all its versions.
         * @summary Delete a ActionTemplateResource by ID
         * @param {string} id ID of the ActionTemplateResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteActionTemplate: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteActionTemplate', 'id', id)
            const localVarPath = `/actiontemplates/{id}`
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
         * Deletes an existing action template and all its versions.
         * @summary Delete a ActionTemplateResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the ActionTemplateResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteActionTemplateSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('deleteActionTemplateSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteActionTemplateSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/actiontemplates/{id}`
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
         * Gets a single action template by ID.
         * @summary Get a ActionTemplateResource by ID
         * @param {string} id ID of the ActionTemplateResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActionTemplateById: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getActionTemplateById', 'id', id)
            const localVarPath = `/actiontemplates/{id}`
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
         * Gets a single action template by ID.
         * @summary Get a ActionTemplateResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the ActionTemplateResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActionTemplateByIdSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getActionTemplateByIdSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getActionTemplateByIdSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/actiontemplates/{id}`
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
         * Lists action template categories.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActionTemplateCategories: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/actiontemplates/categories`;
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
         * Lists action template categories.
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActionTemplateCategoriesSpaces: async (baseSpaceId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getActionTemplateCategoriesSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/actiontemplates/categories`
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
         * Gets the logo associated with the latest version of action template.
         * @param {string} id Action Type or ID of the action type logo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActionTemplateLogo: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getActionTemplateLogo', 'id', id)
            const localVarPath = `/actiontemplates/{id}/logo`
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
         * Gets the logo associated with the latest version of action template.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id Action Type or ID of the action type logo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActionTemplateLogoSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getActionTemplateLogoSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getActionTemplateLogoSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/actiontemplates/{id}/logo`
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
         * Gets the logo associated with specific version of the action template.
         * @param {string} typeOrId Action Type or ID of the action type logo
         * @param {number} version Version of the action type logo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActionTemplateLogoVersion: async (typeOrId: string, version: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'typeOrId' is not null or undefined
            assertParamExists('getActionTemplateLogoVersion', 'typeOrId', typeOrId)
            // verify required parameter 'version' is not null or undefined
            assertParamExists('getActionTemplateLogoVersion', 'version', version)
            const localVarPath = `/actiontemplates/{typeOrId}/versions/{version}/logo`
                .replace(`{${"typeOrId"}}`, encodeURIComponent(String(typeOrId)))
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
         * Gets the logo associated with specific version of the action template.
         * @param {string} baseSpaceId ID of the space
         * @param {string} typeOrId Action Type or ID of the action type logo
         * @param {number} version Version of the action type logo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActionTemplateLogoVersionSpaces: async (baseSpaceId: string, typeOrId: string, version: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getActionTemplateLogoVersionSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'typeOrId' is not null or undefined
            assertParamExists('getActionTemplateLogoVersionSpaces', 'typeOrId', typeOrId)
            // verify required parameter 'version' is not null or undefined
            assertParamExists('getActionTemplateLogoVersionSpaces', 'version', version)
            const localVarPath = `/{baseSpaceId}/actiontemplates/{typeOrId}/versions/{version}/logo`
                .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)))
                .replace(`{${"typeOrId"}}`, encodeURIComponent(String(typeOrId)))
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
         * Gets a list of all steps/deployment processes that use a given action template.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActionTemplateUsage: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getActionTemplateUsage', 'id', id)
            const localVarPath = `/actiontemplates/{id}/usage`
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
         * Gets a list of all steps/deployment processes that use a given action template.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActionTemplateUsageSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getActionTemplateUsageSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getActionTemplateUsageSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/actiontemplates/{id}/usage`
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
         * Gets specific version of action template.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActionTemplateVersion: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getActionTemplateVersion', 'id', id)
            const localVarPath = `/actiontemplates/{id}/versions`
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
         * Gets specific version of action template.
         * @param {string} id ID of the resource
         * @param {number} version Template version to get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActionTemplateVersion1: async (id: string, version: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getActionTemplateVersion1', 'id', id)
            // verify required parameter 'version' is not null or undefined
            assertParamExists('getActionTemplateVersion1', 'version', version)
            const localVarPath = `/actiontemplates/{id}/versions/{version}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)))
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
         * Gets specific version of action template.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActionTemplateVersionSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getActionTemplateVersionSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getActionTemplateVersionSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/actiontemplates/{id}/versions`
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
         * Gets specific version of action template.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {number} version Template version to get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActionTemplateVersionSpaces1: async (baseSpaceId: string, id: string, version: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getActionTemplateVersionSpaces1', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getActionTemplateVersionSpaces1', 'id', id)
            // verify required parameter 'version' is not null or undefined
            assertParamExists('getActionTemplateVersionSpaces1', 'version', version)
            const localVarPath = `/{baseSpaceId}/actiontemplates/{id}/versions/{version}`
                .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)))
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
         * Lists all available action templates including built-in, custom and community contributed step templates.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActionTemplatesSearch: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/actiontemplates/search`;
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
         * Lists all available action templates including built-in, custom and community contributed step templates.
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActionTemplatesSearchSpaces: async (baseSpaceId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getActionTemplatesSearchSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/actiontemplates/search`
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
         * Lists all of the action templates in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
         * @summary Get a list of ActionTemplateResources
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexActionTemplates: async (skip?: number, take?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/actiontemplates`;
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
         * Lists all of the action templates in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
         * @summary Get a list of ActionTemplateResources
         * @param {string} baseSpaceId ID of the space
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexActionTemplatesSpaces: async (baseSpaceId: string, skip?: number, take?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('indexActionTemplatesSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/actiontemplates`
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
         * Lists the all of the action templates in the supplied Octopus Deploy Space. The results will be sorted by name.
         * @summary Get a list of ActionTemplateResources
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllActionTemplates: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/actiontemplates/all`;
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
         * Lists the all of the action templates in the supplied Octopus Deploy Space. The results will be sorted by name.
         * @summary Get a list of ActionTemplateResources
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllActionTemplatesSpaces: async (baseSpaceId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('listAllActionTemplatesSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/actiontemplates/all`
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
         * Modifies an existing action template.
         * @summary Modify a ActionTemplateResource by ID
         * @param {string} id ID of the ActionTemplateResource to modify
         * @param {ActionTemplateResource} [body] The ActionTemplateResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateActionTemplate: async (id: string, body?: ActionTemplateResource, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateActionTemplate', 'id', id)
            const localVarPath = `/actiontemplates/{id}`
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
         * Updates the logo associated with the latest version of the action template.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateActionTemplateLogo: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateActionTemplateLogo', 'id', id)
            const localVarPath = `/actiontemplates/{id}/logo`
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
         * Updates the logo associated with the latest version of the action template.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateActionTemplateLogoSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('updateActionTemplateLogoSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateActionTemplateLogoSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/actiontemplates/{id}/logo`
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
         * Modifies an existing action template.
         * @summary Modify a ActionTemplateResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the ActionTemplateResource to modify
         * @param {ActionTemplateResource} [body] The ActionTemplateResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateActionTemplateSpaces: async (baseSpaceId: string, id: string, body?: ActionTemplateResource, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('updateActionTemplateSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateActionTemplateSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/actiontemplates/{id}`
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
 * ActionTemplatesApi - functional programming interface
 * @export
 */
export const ActionTemplatesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ActionTemplatesApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new action template.
         * @summary Create a ActionTemplateResource
         * @param {ActionTemplateResource} [body] The ActionTemplateResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createActionTemplate(body?: ActionTemplateResource, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ActionTemplateResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createActionTemplate(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates deployment actions to specific version of action template
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createActionTemplateActions(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ActionUpdateResultResource>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createActionTemplateActions(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates deployment actions to specific version of action template
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createActionTemplateActionsSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ActionUpdateResultResource>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createActionTemplateActionsSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates the logo associated with the latest version of the action template.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createActionTemplateLogo(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createActionTemplateLogo(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates the logo associated with the latest version of the action template.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createActionTemplateLogoSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createActionTemplateLogoSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Creates a new action template.
         * @summary Create a ActionTemplateResource
         * @param {string} baseSpaceId ID of the space
         * @param {ActionTemplateResource} [body] The ActionTemplateResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createActionTemplateSpaces(baseSpaceId: string, body?: ActionTemplateResource, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ActionTemplateResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createActionTemplateSpaces(baseSpaceId, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes an existing action template and all its versions.
         * @summary Delete a ActionTemplateResource by ID
         * @param {string} id ID of the ActionTemplateResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteActionTemplate(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteActionTemplate(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes an existing action template and all its versions.
         * @summary Delete a ActionTemplateResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the ActionTemplateResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteActionTemplateSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteActionTemplateSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets a single action template by ID.
         * @summary Get a ActionTemplateResource by ID
         * @param {string} id ID of the ActionTemplateResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getActionTemplateById(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ActionTemplateResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getActionTemplateById(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets a single action template by ID.
         * @summary Get a ActionTemplateResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the ActionTemplateResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getActionTemplateByIdSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ActionTemplateResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getActionTemplateByIdSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists action template categories.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getActionTemplateCategories(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ActionTemplateCategoryResource>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getActionTemplateCategories(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists action template categories.
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getActionTemplateCategoriesSpaces(baseSpaceId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ActionTemplateCategoryResource>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getActionTemplateCategoriesSpaces(baseSpaceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets the logo associated with the latest version of action template.
         * @param {string} id Action Type or ID of the action type logo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getActionTemplateLogo(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getActionTemplateLogo(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets the logo associated with the latest version of action template.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id Action Type or ID of the action type logo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getActionTemplateLogoSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getActionTemplateLogoSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets the logo associated with specific version of the action template.
         * @param {string} typeOrId Action Type or ID of the action type logo
         * @param {number} version Version of the action type logo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getActionTemplateLogoVersion(typeOrId: string, version: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getActionTemplateLogoVersion(typeOrId, version, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets the logo associated with specific version of the action template.
         * @param {string} baseSpaceId ID of the space
         * @param {string} typeOrId Action Type or ID of the action type logo
         * @param {number} version Version of the action type logo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getActionTemplateLogoVersionSpaces(baseSpaceId: string, typeOrId: string, version: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getActionTemplateLogoVersionSpaces(baseSpaceId, typeOrId, version, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets a list of all steps/deployment processes that use a given action template.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getActionTemplateUsage(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ActionTemplateUsageResource>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getActionTemplateUsage(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets a list of all steps/deployment processes that use a given action template.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getActionTemplateUsageSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ActionTemplateUsageResource>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getActionTemplateUsageSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets specific version of action template.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getActionTemplateVersion(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getActionTemplateVersion(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets specific version of action template.
         * @param {string} id ID of the resource
         * @param {number} version Template version to get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getActionTemplateVersion1(id: string, version: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getActionTemplateVersion1(id, version, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets specific version of action template.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getActionTemplateVersionSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getActionTemplateVersionSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets specific version of action template.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {number} version Template version to get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getActionTemplateVersionSpaces1(baseSpaceId: string, id: string, version: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getActionTemplateVersionSpaces1(baseSpaceId, id, version, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all available action templates including built-in, custom and community contributed step templates.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getActionTemplatesSearch(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ActionTemplateSearchResource>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getActionTemplatesSearch(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all available action templates including built-in, custom and community contributed step templates.
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getActionTemplatesSearchSpaces(baseSpaceId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ActionTemplateSearchResource>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getActionTemplatesSearchSpaces(baseSpaceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all of the action templates in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
         * @summary Get a list of ActionTemplateResources
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async indexActionTemplates(skip?: number, take?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ActionTemplateResourceCollection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.indexActionTemplates(skip, take, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all of the action templates in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
         * @summary Get a list of ActionTemplateResources
         * @param {string} baseSpaceId ID of the space
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async indexActionTemplatesSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ActionTemplateResourceCollection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.indexActionTemplatesSpaces(baseSpaceId, skip, take, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists the all of the action templates in the supplied Octopus Deploy Space. The results will be sorted by name.
         * @summary Get a list of ActionTemplateResources
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAllActionTemplates(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ActionTemplateResource>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAllActionTemplates(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists the all of the action templates in the supplied Octopus Deploy Space. The results will be sorted by name.
         * @summary Get a list of ActionTemplateResources
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAllActionTemplatesSpaces(baseSpaceId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ActionTemplateResource>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAllActionTemplatesSpaces(baseSpaceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Modifies an existing action template.
         * @summary Modify a ActionTemplateResource by ID
         * @param {string} id ID of the ActionTemplateResource to modify
         * @param {ActionTemplateResource} [body] The ActionTemplateResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateActionTemplate(id: string, body?: ActionTemplateResource, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ActionTemplateResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateActionTemplate(id, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates the logo associated with the latest version of the action template.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateActionTemplateLogo(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateActionTemplateLogo(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates the logo associated with the latest version of the action template.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateActionTemplateLogoSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateActionTemplateLogoSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Modifies an existing action template.
         * @summary Modify a ActionTemplateResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the ActionTemplateResource to modify
         * @param {ActionTemplateResource} [body] The ActionTemplateResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateActionTemplateSpaces(baseSpaceId: string, id: string, body?: ActionTemplateResource, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ActionTemplateResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateActionTemplateSpaces(baseSpaceId, id, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ActionTemplatesApi - factory interface
 * @export
 */
export const ActionTemplatesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ActionTemplatesApiFp(configuration)
    return {
        /**
         * Creates a new action template.
         * @summary Create a ActionTemplateResource
         * @param {ActionTemplateResource} [body] The ActionTemplateResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createActionTemplate(body?: ActionTemplateResource, options?: any): AxiosPromise<ActionTemplateResource> {
            return localVarFp.createActionTemplate(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates deployment actions to specific version of action template
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createActionTemplateActions(id: string, options?: any): AxiosPromise<Array<ActionUpdateResultResource>> {
            return localVarFp.createActionTemplateActions(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates deployment actions to specific version of action template
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createActionTemplateActionsSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<Array<ActionUpdateResultResource>> {
            return localVarFp.createActionTemplateActionsSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the logo associated with the latest version of the action template.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createActionTemplateLogo(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.createActionTemplateLogo(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the logo associated with the latest version of the action template.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createActionTemplateLogoSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<void> {
            return localVarFp.createActionTemplateLogoSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a new action template.
         * @summary Create a ActionTemplateResource
         * @param {string} baseSpaceId ID of the space
         * @param {ActionTemplateResource} [body] The ActionTemplateResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createActionTemplateSpaces(baseSpaceId: string, body?: ActionTemplateResource, options?: any): AxiosPromise<ActionTemplateResource> {
            return localVarFp.createActionTemplateSpaces(baseSpaceId, body, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes an existing action template and all its versions.
         * @summary Delete a ActionTemplateResource by ID
         * @param {string} id ID of the ActionTemplateResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteActionTemplate(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteActionTemplate(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes an existing action template and all its versions.
         * @summary Delete a ActionTemplateResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the ActionTemplateResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteActionTemplateSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteActionTemplateSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a single action template by ID.
         * @summary Get a ActionTemplateResource by ID
         * @param {string} id ID of the ActionTemplateResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActionTemplateById(id: string, options?: any): AxiosPromise<ActionTemplateResource> {
            return localVarFp.getActionTemplateById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a single action template by ID.
         * @summary Get a ActionTemplateResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the ActionTemplateResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActionTemplateByIdSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<ActionTemplateResource> {
            return localVarFp.getActionTemplateByIdSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists action template categories.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActionTemplateCategories(options?: any): AxiosPromise<Array<ActionTemplateCategoryResource>> {
            return localVarFp.getActionTemplateCategories(options).then((request) => request(axios, basePath));
        },
        /**
         * Lists action template categories.
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActionTemplateCategoriesSpaces(baseSpaceId: string, options?: any): AxiosPromise<Array<ActionTemplateCategoryResource>> {
            return localVarFp.getActionTemplateCategoriesSpaces(baseSpaceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets the logo associated with the latest version of action template.
         * @param {string} id Action Type or ID of the action type logo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActionTemplateLogo(id: string, options?: any): AxiosPromise<any> {
            return localVarFp.getActionTemplateLogo(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets the logo associated with the latest version of action template.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id Action Type or ID of the action type logo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActionTemplateLogoSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<any> {
            return localVarFp.getActionTemplateLogoSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets the logo associated with specific version of the action template.
         * @param {string} typeOrId Action Type or ID of the action type logo
         * @param {number} version Version of the action type logo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActionTemplateLogoVersion(typeOrId: string, version: number, options?: any): AxiosPromise<any> {
            return localVarFp.getActionTemplateLogoVersion(typeOrId, version, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets the logo associated with specific version of the action template.
         * @param {string} baseSpaceId ID of the space
         * @param {string} typeOrId Action Type or ID of the action type logo
         * @param {number} version Version of the action type logo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActionTemplateLogoVersionSpaces(baseSpaceId: string, typeOrId: string, version: number, options?: any): AxiosPromise<any> {
            return localVarFp.getActionTemplateLogoVersionSpaces(baseSpaceId, typeOrId, version, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a list of all steps/deployment processes that use a given action template.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActionTemplateUsage(id: string, options?: any): AxiosPromise<Array<ActionTemplateUsageResource>> {
            return localVarFp.getActionTemplateUsage(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a list of all steps/deployment processes that use a given action template.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActionTemplateUsageSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<Array<ActionTemplateUsageResource>> {
            return localVarFp.getActionTemplateUsageSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets specific version of action template.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActionTemplateVersion(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.getActionTemplateVersion(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets specific version of action template.
         * @param {string} id ID of the resource
         * @param {number} version Template version to get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActionTemplateVersion1(id: string, version: number, options?: any): AxiosPromise<void> {
            return localVarFp.getActionTemplateVersion1(id, version, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets specific version of action template.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActionTemplateVersionSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<void> {
            return localVarFp.getActionTemplateVersionSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets specific version of action template.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {number} version Template version to get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActionTemplateVersionSpaces1(baseSpaceId: string, id: string, version: number, options?: any): AxiosPromise<void> {
            return localVarFp.getActionTemplateVersionSpaces1(baseSpaceId, id, version, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all available action templates including built-in, custom and community contributed step templates.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActionTemplatesSearch(options?: any): AxiosPromise<Array<ActionTemplateSearchResource>> {
            return localVarFp.getActionTemplatesSearch(options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all available action templates including built-in, custom and community contributed step templates.
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActionTemplatesSearchSpaces(baseSpaceId: string, options?: any): AxiosPromise<Array<ActionTemplateSearchResource>> {
            return localVarFp.getActionTemplatesSearchSpaces(baseSpaceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all of the action templates in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
         * @summary Get a list of ActionTemplateResources
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexActionTemplates(skip?: number, take?: number, options?: any): AxiosPromise<ActionTemplateResourceCollection> {
            return localVarFp.indexActionTemplates(skip, take, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all of the action templates in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
         * @summary Get a list of ActionTemplateResources
         * @param {string} baseSpaceId ID of the space
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexActionTemplatesSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any): AxiosPromise<ActionTemplateResourceCollection> {
            return localVarFp.indexActionTemplatesSpaces(baseSpaceId, skip, take, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the all of the action templates in the supplied Octopus Deploy Space. The results will be sorted by name.
         * @summary Get a list of ActionTemplateResources
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllActionTemplates(options?: any): AxiosPromise<Array<ActionTemplateResource>> {
            return localVarFp.listAllActionTemplates(options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the all of the action templates in the supplied Octopus Deploy Space. The results will be sorted by name.
         * @summary Get a list of ActionTemplateResources
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllActionTemplatesSpaces(baseSpaceId: string, options?: any): AxiosPromise<Array<ActionTemplateResource>> {
            return localVarFp.listAllActionTemplatesSpaces(baseSpaceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Modifies an existing action template.
         * @summary Modify a ActionTemplateResource by ID
         * @param {string} id ID of the ActionTemplateResource to modify
         * @param {ActionTemplateResource} [body] The ActionTemplateResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateActionTemplate(id: string, body?: ActionTemplateResource, options?: any): AxiosPromise<ActionTemplateResource> {
            return localVarFp.updateActionTemplate(id, body, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the logo associated with the latest version of the action template.
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateActionTemplateLogo(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.updateActionTemplateLogo(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the logo associated with the latest version of the action template.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateActionTemplateLogoSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<void> {
            return localVarFp.updateActionTemplateLogoSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Modifies an existing action template.
         * @summary Modify a ActionTemplateResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the ActionTemplateResource to modify
         * @param {ActionTemplateResource} [body] The ActionTemplateResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateActionTemplateSpaces(baseSpaceId: string, id: string, body?: ActionTemplateResource, options?: any): AxiosPromise<ActionTemplateResource> {
            return localVarFp.updateActionTemplateSpaces(baseSpaceId, id, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ActionTemplatesApi - interface
 * @export
 * @interface ActionTemplatesApi
 */
export interface ActionTemplatesApiInterface {
    /**
     * Creates a new action template.
     * @summary Create a ActionTemplateResource
     * @param {ActionTemplateResource} [body] The ActionTemplateResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApiInterface
     */
    createActionTemplate(body?: ActionTemplateResource, options?: any): AxiosPromise<ActionTemplateResource>;

    /**
     * Updates deployment actions to specific version of action template
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApiInterface
     */
    createActionTemplateActions(id: string, options?: any): AxiosPromise<Array<ActionUpdateResultResource>>;

    /**
     * Updates deployment actions to specific version of action template
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApiInterface
     */
    createActionTemplateActionsSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<Array<ActionUpdateResultResource>>;

    /**
     * Updates the logo associated with the latest version of the action template.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApiInterface
     */
    createActionTemplateLogo(id: string, options?: any): AxiosPromise<void>;

    /**
     * Updates the logo associated with the latest version of the action template.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApiInterface
     */
    createActionTemplateLogoSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<void>;

    /**
     * Creates a new action template.
     * @summary Create a ActionTemplateResource
     * @param {string} baseSpaceId ID of the space
     * @param {ActionTemplateResource} [body] The ActionTemplateResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApiInterface
     */
    createActionTemplateSpaces(baseSpaceId: string, body?: ActionTemplateResource, options?: any): AxiosPromise<ActionTemplateResource>;

    /**
     * Deletes an existing action template and all its versions.
     * @summary Delete a ActionTemplateResource by ID
     * @param {string} id ID of the ActionTemplateResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApiInterface
     */
    deleteActionTemplate(id: string, options?: any): AxiosPromise<void>;

    /**
     * Deletes an existing action template and all its versions.
     * @summary Delete a ActionTemplateResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ActionTemplateResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApiInterface
     */
    deleteActionTemplateSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<void>;

    /**
     * Gets a single action template by ID.
     * @summary Get a ActionTemplateResource by ID
     * @param {string} id ID of the ActionTemplateResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApiInterface
     */
    getActionTemplateById(id: string, options?: any): AxiosPromise<ActionTemplateResource>;

    /**
     * Gets a single action template by ID.
     * @summary Get a ActionTemplateResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ActionTemplateResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApiInterface
     */
    getActionTemplateByIdSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<ActionTemplateResource>;

    /**
     * Lists action template categories.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApiInterface
     */
    getActionTemplateCategories(options?: any): AxiosPromise<Array<ActionTemplateCategoryResource>>;

    /**
     * Lists action template categories.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApiInterface
     */
    getActionTemplateCategoriesSpaces(baseSpaceId: string, options?: any): AxiosPromise<Array<ActionTemplateCategoryResource>>;

    /**
     * Gets the logo associated with the latest version of action template.
     * @param {string} id Action Type or ID of the action type logo
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApiInterface
     */
    getActionTemplateLogo(id: string, options?: any): AxiosPromise<any>;

    /**
     * Gets the logo associated with the latest version of action template.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id Action Type or ID of the action type logo
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApiInterface
     */
    getActionTemplateLogoSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<any>;

    /**
     * Gets the logo associated with specific version of the action template.
     * @param {string} typeOrId Action Type or ID of the action type logo
     * @param {number} version Version of the action type logo
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApiInterface
     */
    getActionTemplateLogoVersion(typeOrId: string, version: number, options?: any): AxiosPromise<any>;

    /**
     * Gets the logo associated with specific version of the action template.
     * @param {string} baseSpaceId ID of the space
     * @param {string} typeOrId Action Type or ID of the action type logo
     * @param {number} version Version of the action type logo
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApiInterface
     */
    getActionTemplateLogoVersionSpaces(baseSpaceId: string, typeOrId: string, version: number, options?: any): AxiosPromise<any>;

    /**
     * Gets a list of all steps/deployment processes that use a given action template.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApiInterface
     */
    getActionTemplateUsage(id: string, options?: any): AxiosPromise<Array<ActionTemplateUsageResource>>;

    /**
     * Gets a list of all steps/deployment processes that use a given action template.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApiInterface
     */
    getActionTemplateUsageSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<Array<ActionTemplateUsageResource>>;

    /**
     * Gets specific version of action template.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApiInterface
     */
    getActionTemplateVersion(id: string, options?: any): AxiosPromise<void>;

    /**
     * Gets specific version of action template.
     * @param {string} id ID of the resource
     * @param {number} version Template version to get
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApiInterface
     */
    getActionTemplateVersion1(id: string, version: number, options?: any): AxiosPromise<void>;

    /**
     * Gets specific version of action template.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApiInterface
     */
    getActionTemplateVersionSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<void>;

    /**
     * Gets specific version of action template.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {number} version Template version to get
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApiInterface
     */
    getActionTemplateVersionSpaces1(baseSpaceId: string, id: string, version: number, options?: any): AxiosPromise<void>;

    /**
     * Lists all available action templates including built-in, custom and community contributed step templates.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApiInterface
     */
    getActionTemplatesSearch(options?: any): AxiosPromise<Array<ActionTemplateSearchResource>>;

    /**
     * Lists all available action templates including built-in, custom and community contributed step templates.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApiInterface
     */
    getActionTemplatesSearchSpaces(baseSpaceId: string, options?: any): AxiosPromise<Array<ActionTemplateSearchResource>>;

    /**
     * Lists all of the action templates in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of ActionTemplateResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApiInterface
     */
    indexActionTemplates(skip?: number, take?: number, options?: any): AxiosPromise<ActionTemplateResourceCollection>;

    /**
     * Lists all of the action templates in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of ActionTemplateResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApiInterface
     */
    indexActionTemplatesSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any): AxiosPromise<ActionTemplateResourceCollection>;

    /**
     * Lists the all of the action templates in the supplied Octopus Deploy Space. The results will be sorted by name.
     * @summary Get a list of ActionTemplateResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApiInterface
     */
    listAllActionTemplates(options?: any): AxiosPromise<Array<ActionTemplateResource>>;

    /**
     * Lists the all of the action templates in the supplied Octopus Deploy Space. The results will be sorted by name.
     * @summary Get a list of ActionTemplateResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApiInterface
     */
    listAllActionTemplatesSpaces(baseSpaceId: string, options?: any): AxiosPromise<Array<ActionTemplateResource>>;

    /**
     * Modifies an existing action template.
     * @summary Modify a ActionTemplateResource by ID
     * @param {string} id ID of the ActionTemplateResource to modify
     * @param {ActionTemplateResource} [body] The ActionTemplateResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApiInterface
     */
    updateActionTemplate(id: string, body?: ActionTemplateResource, options?: any): AxiosPromise<ActionTemplateResource>;

    /**
     * Updates the logo associated with the latest version of the action template.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApiInterface
     */
    updateActionTemplateLogo(id: string, options?: any): AxiosPromise<void>;

    /**
     * Updates the logo associated with the latest version of the action template.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApiInterface
     */
    updateActionTemplateLogoSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<void>;

    /**
     * Modifies an existing action template.
     * @summary Modify a ActionTemplateResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ActionTemplateResource to modify
     * @param {ActionTemplateResource} [body] The ActionTemplateResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApiInterface
     */
    updateActionTemplateSpaces(baseSpaceId: string, id: string, body?: ActionTemplateResource, options?: any): AxiosPromise<ActionTemplateResource>;

}

/**
 * ActionTemplatesApi - object-oriented interface
 * @export
 * @class ActionTemplatesApi
 * @extends {BaseAPI}
 */
export class ActionTemplatesApi extends BaseAPI implements ActionTemplatesApiInterface {
    /**
     * Creates a new action template.
     * @summary Create a ActionTemplateResource
     * @param {ActionTemplateResource} [body] The ActionTemplateResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApi
     */
    public createActionTemplate(body?: ActionTemplateResource, options?: any) {
        return ActionTemplatesApiFp(this.configuration).createActionTemplate(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates deployment actions to specific version of action template
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApi
     */
    public createActionTemplateActions(id: string, options?: any) {
        return ActionTemplatesApiFp(this.configuration).createActionTemplateActions(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates deployment actions to specific version of action template
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApi
     */
    public createActionTemplateActionsSpaces(baseSpaceId: string, id: string, options?: any) {
        return ActionTemplatesApiFp(this.configuration).createActionTemplateActionsSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the logo associated with the latest version of the action template.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApi
     */
    public createActionTemplateLogo(id: string, options?: any) {
        return ActionTemplatesApiFp(this.configuration).createActionTemplateLogo(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the logo associated with the latest version of the action template.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApi
     */
    public createActionTemplateLogoSpaces(baseSpaceId: string, id: string, options?: any) {
        return ActionTemplatesApiFp(this.configuration).createActionTemplateLogoSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a new action template.
     * @summary Create a ActionTemplateResource
     * @param {string} baseSpaceId ID of the space
     * @param {ActionTemplateResource} [body] The ActionTemplateResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApi
     */
    public createActionTemplateSpaces(baseSpaceId: string, body?: ActionTemplateResource, options?: any) {
        return ActionTemplatesApiFp(this.configuration).createActionTemplateSpaces(baseSpaceId, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes an existing action template and all its versions.
     * @summary Delete a ActionTemplateResource by ID
     * @param {string} id ID of the ActionTemplateResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApi
     */
    public deleteActionTemplate(id: string, options?: any) {
        return ActionTemplatesApiFp(this.configuration).deleteActionTemplate(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes an existing action template and all its versions.
     * @summary Delete a ActionTemplateResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ActionTemplateResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApi
     */
    public deleteActionTemplateSpaces(baseSpaceId: string, id: string, options?: any) {
        return ActionTemplatesApiFp(this.configuration).deleteActionTemplateSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a single action template by ID.
     * @summary Get a ActionTemplateResource by ID
     * @param {string} id ID of the ActionTemplateResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApi
     */
    public getActionTemplateById(id: string, options?: any) {
        return ActionTemplatesApiFp(this.configuration).getActionTemplateById(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a single action template by ID.
     * @summary Get a ActionTemplateResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ActionTemplateResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApi
     */
    public getActionTemplateByIdSpaces(baseSpaceId: string, id: string, options?: any) {
        return ActionTemplatesApiFp(this.configuration).getActionTemplateByIdSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists action template categories.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApi
     */
    public getActionTemplateCategories(options?: any) {
        return ActionTemplatesApiFp(this.configuration).getActionTemplateCategories(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists action template categories.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApi
     */
    public getActionTemplateCategoriesSpaces(baseSpaceId: string, options?: any) {
        return ActionTemplatesApiFp(this.configuration).getActionTemplateCategoriesSpaces(baseSpaceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets the logo associated with the latest version of action template.
     * @param {string} id Action Type or ID of the action type logo
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApi
     */
    public getActionTemplateLogo(id: string, options?: any) {
        return ActionTemplatesApiFp(this.configuration).getActionTemplateLogo(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets the logo associated with the latest version of action template.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id Action Type or ID of the action type logo
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApi
     */
    public getActionTemplateLogoSpaces(baseSpaceId: string, id: string, options?: any) {
        return ActionTemplatesApiFp(this.configuration).getActionTemplateLogoSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets the logo associated with specific version of the action template.
     * @param {string} typeOrId Action Type or ID of the action type logo
     * @param {number} version Version of the action type logo
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApi
     */
    public getActionTemplateLogoVersion(typeOrId: string, version: number, options?: any) {
        return ActionTemplatesApiFp(this.configuration).getActionTemplateLogoVersion(typeOrId, version, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets the logo associated with specific version of the action template.
     * @param {string} baseSpaceId ID of the space
     * @param {string} typeOrId Action Type or ID of the action type logo
     * @param {number} version Version of the action type logo
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApi
     */
    public getActionTemplateLogoVersionSpaces(baseSpaceId: string, typeOrId: string, version: number, options?: any) {
        return ActionTemplatesApiFp(this.configuration).getActionTemplateLogoVersionSpaces(baseSpaceId, typeOrId, version, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a list of all steps/deployment processes that use a given action template.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApi
     */
    public getActionTemplateUsage(id: string, options?: any) {
        return ActionTemplatesApiFp(this.configuration).getActionTemplateUsage(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a list of all steps/deployment processes that use a given action template.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApi
     */
    public getActionTemplateUsageSpaces(baseSpaceId: string, id: string, options?: any) {
        return ActionTemplatesApiFp(this.configuration).getActionTemplateUsageSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets specific version of action template.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApi
     */
    public getActionTemplateVersion(id: string, options?: any) {
        return ActionTemplatesApiFp(this.configuration).getActionTemplateVersion(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets specific version of action template.
     * @param {string} id ID of the resource
     * @param {number} version Template version to get
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApi
     */
    public getActionTemplateVersion1(id: string, version: number, options?: any) {
        return ActionTemplatesApiFp(this.configuration).getActionTemplateVersion1(id, version, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets specific version of action template.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApi
     */
    public getActionTemplateVersionSpaces(baseSpaceId: string, id: string, options?: any) {
        return ActionTemplatesApiFp(this.configuration).getActionTemplateVersionSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets specific version of action template.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {number} version Template version to get
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApi
     */
    public getActionTemplateVersionSpaces1(baseSpaceId: string, id: string, version: number, options?: any) {
        return ActionTemplatesApiFp(this.configuration).getActionTemplateVersionSpaces1(baseSpaceId, id, version, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all available action templates including built-in, custom and community contributed step templates.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApi
     */
    public getActionTemplatesSearch(options?: any) {
        return ActionTemplatesApiFp(this.configuration).getActionTemplatesSearch(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all available action templates including built-in, custom and community contributed step templates.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApi
     */
    public getActionTemplatesSearchSpaces(baseSpaceId: string, options?: any) {
        return ActionTemplatesApiFp(this.configuration).getActionTemplatesSearchSpaces(baseSpaceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all of the action templates in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of ActionTemplateResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApi
     */
    public indexActionTemplates(skip?: number, take?: number, options?: any) {
        return ActionTemplatesApiFp(this.configuration).indexActionTemplates(skip, take, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all of the action templates in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of ActionTemplateResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApi
     */
    public indexActionTemplatesSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any) {
        return ActionTemplatesApiFp(this.configuration).indexActionTemplatesSpaces(baseSpaceId, skip, take, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the all of the action templates in the supplied Octopus Deploy Space. The results will be sorted by name.
     * @summary Get a list of ActionTemplateResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApi
     */
    public listAllActionTemplates(options?: any) {
        return ActionTemplatesApiFp(this.configuration).listAllActionTemplates(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the all of the action templates in the supplied Octopus Deploy Space. The results will be sorted by name.
     * @summary Get a list of ActionTemplateResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApi
     */
    public listAllActionTemplatesSpaces(baseSpaceId: string, options?: any) {
        return ActionTemplatesApiFp(this.configuration).listAllActionTemplatesSpaces(baseSpaceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Modifies an existing action template.
     * @summary Modify a ActionTemplateResource by ID
     * @param {string} id ID of the ActionTemplateResource to modify
     * @param {ActionTemplateResource} [body] The ActionTemplateResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApi
     */
    public updateActionTemplate(id: string, body?: ActionTemplateResource, options?: any) {
        return ActionTemplatesApiFp(this.configuration).updateActionTemplate(id, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the logo associated with the latest version of the action template.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApi
     */
    public updateActionTemplateLogo(id: string, options?: any) {
        return ActionTemplatesApiFp(this.configuration).updateActionTemplateLogo(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the logo associated with the latest version of the action template.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApi
     */
    public updateActionTemplateLogoSpaces(baseSpaceId: string, id: string, options?: any) {
        return ActionTemplatesApiFp(this.configuration).updateActionTemplateLogoSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Modifies an existing action template.
     * @summary Modify a ActionTemplateResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ActionTemplateResource to modify
     * @param {ActionTemplateResource} [body] The ActionTemplateResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionTemplatesApi
     */
    public updateActionTemplateSpaces(baseSpaceId: string, id: string, body?: ActionTemplateResource, options?: any) {
        return ActionTemplatesApiFp(this.configuration).updateActionTemplateSpaces(baseSpaceId, id, body, options).then((request) => request(this.axios, this.basePath));
    }
}
