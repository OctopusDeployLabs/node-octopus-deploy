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
import { ScopedUserRoleResourceCollection } from '../model';
// @ts-ignore
import { TeamResource } from '../model';
// @ts-ignore
import { TeamResourceCollection } from '../model';
/**
 * TeamsApi - axios parameter creator
 * @export
 */
export const TeamsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a team.
         * @summary Create a TeamResource
         * @param {TeamResource} [body] The TeamResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTeam: async (body?: TeamResource, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/teams`;
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
         * Creates a team.
         * @summary Create a TeamResource
         * @param {string} baseSpaceId ID of the space
         * @param {TeamResource} [body] The TeamResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTeamSpaces: async (baseSpaceId: string, body?: TeamResource, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('createTeamSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/teams`
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
         * Deletes an existing team.
         * @summary Delete a TeamResource by ID
         * @param {string} id ID of the TeamResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTeam: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteTeam', 'id', id)
            const localVarPath = `/teams/{id}`
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
         * Deletes an existing team.
         * @summary Delete a TeamResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the TeamResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTeamSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('deleteTeamSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteTeamSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/teams/{id}`
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
         * Lists the name and ID of all of the teams in the supplied Octopus Deploy Space. The results will be sorted by name.
         * @param {string} id ID of the team
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getListScopedUserRoleForTeam: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getListScopedUserRoleForTeam', 'id', id)
            const localVarPath = `/teams/{id}/scopeduserroles`
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
         * Lists the name and ID of all of the teams in the supplied Octopus Deploy Space. The results will be sorted by name.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the team
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getListScopedUserRoleForTeamSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getListScopedUserRoleForTeamSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getListScopedUserRoleForTeamSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/teams/{id}/scopeduserroles`
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
         * Gets a team by ID.
         * @summary Get a TeamResource by ID
         * @param {string} id ID of the TeamResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTeamById: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getTeamById', 'id', id)
            const localVarPath = `/teams/{id}`
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
         * Gets a team by ID.
         * @summary Get a TeamResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the TeamResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTeamByIdSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getTeamByIdSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getTeamByIdSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/teams/{id}`
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
         * Lists all of the teams in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
         * @summary Get a list of TeamResources
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexTeams: async (skip?: number, take?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/teams`;
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
         * Lists all of the teams in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
         * @summary Get a list of TeamResources
         * @param {string} baseSpaceId ID of the space
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexTeamsSpaces: async (baseSpaceId: string, skip?: number, take?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('indexTeamsSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/teams`
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
         * Lists the name and ID of all of the teams in the supplied Octopus Deploy Space. The results will be sorted by name.
         * @summary Get a list of TeamResources
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllTeams: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/teams/all`;
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
         * Lists the name and ID of all of the teams in the supplied Octopus Deploy Space. The results will be sorted by name.
         * @summary Get a list of TeamResources
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllTeamsSpaces: async (baseSpaceId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('listAllTeamsSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/teams/all`
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
         * Modifies an existing team. The Everyone team is treated as a special case and its members and external groups may not be changed.
         * @summary Modify a TeamResource by ID
         * @param {string} id ID of the TeamResource to modify
         * @param {TeamResource} [body] The TeamResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTeam: async (id: string, body?: TeamResource, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateTeam', 'id', id)
            const localVarPath = `/teams/{id}`
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
         * Modifies an existing team. The Everyone team is treated as a special case and its members and external groups may not be changed.
         * @summary Modify a TeamResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the TeamResource to modify
         * @param {TeamResource} [body] The TeamResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTeamSpaces: async (baseSpaceId: string, id: string, body?: TeamResource, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('updateTeamSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateTeamSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/teams/{id}`
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
 * TeamsApi - functional programming interface
 * @export
 */
export const TeamsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TeamsApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a team.
         * @summary Create a TeamResource
         * @param {TeamResource} [body] The TeamResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createTeam(body?: TeamResource, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TeamResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createTeam(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Creates a team.
         * @summary Create a TeamResource
         * @param {string} baseSpaceId ID of the space
         * @param {TeamResource} [body] The TeamResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createTeamSpaces(baseSpaceId: string, body?: TeamResource, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TeamResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createTeamSpaces(baseSpaceId, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes an existing team.
         * @summary Delete a TeamResource by ID
         * @param {string} id ID of the TeamResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteTeam(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTeam(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes an existing team.
         * @summary Delete a TeamResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the TeamResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteTeamSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTeamSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists the name and ID of all of the teams in the supplied Octopus Deploy Space. The results will be sorted by name.
         * @param {string} id ID of the team
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getListScopedUserRoleForTeam(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ScopedUserRoleResourceCollection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getListScopedUserRoleForTeam(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists the name and ID of all of the teams in the supplied Octopus Deploy Space. The results will be sorted by name.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the team
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getListScopedUserRoleForTeamSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ScopedUserRoleResourceCollection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getListScopedUserRoleForTeamSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets a team by ID.
         * @summary Get a TeamResource by ID
         * @param {string} id ID of the TeamResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTeamById(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TeamResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTeamById(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets a team by ID.
         * @summary Get a TeamResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the TeamResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTeamByIdSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TeamResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTeamByIdSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all of the teams in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
         * @summary Get a list of TeamResources
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async indexTeams(skip?: number, take?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TeamResourceCollection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.indexTeams(skip, take, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all of the teams in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
         * @summary Get a list of TeamResources
         * @param {string} baseSpaceId ID of the space
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async indexTeamsSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TeamResourceCollection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.indexTeamsSpaces(baseSpaceId, skip, take, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists the name and ID of all of the teams in the supplied Octopus Deploy Space. The results will be sorted by name.
         * @summary Get a list of TeamResources
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAllTeams(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TeamResource>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAllTeams(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists the name and ID of all of the teams in the supplied Octopus Deploy Space. The results will be sorted by name.
         * @summary Get a list of TeamResources
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAllTeamsSpaces(baseSpaceId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TeamResource>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAllTeamsSpaces(baseSpaceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Modifies an existing team. The Everyone team is treated as a special case and its members and external groups may not be changed.
         * @summary Modify a TeamResource by ID
         * @param {string} id ID of the TeamResource to modify
         * @param {TeamResource} [body] The TeamResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateTeam(id: string, body?: TeamResource, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TeamResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateTeam(id, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Modifies an existing team. The Everyone team is treated as a special case and its members and external groups may not be changed.
         * @summary Modify a TeamResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the TeamResource to modify
         * @param {TeamResource} [body] The TeamResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateTeamSpaces(baseSpaceId: string, id: string, body?: TeamResource, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TeamResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateTeamSpaces(baseSpaceId, id, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TeamsApi - factory interface
 * @export
 */
export const TeamsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TeamsApiFp(configuration)
    return {
        /**
         * Creates a team.
         * @summary Create a TeamResource
         * @param {TeamResource} [body] The TeamResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTeam(body?: TeamResource, options?: any): AxiosPromise<TeamResource> {
            return localVarFp.createTeam(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a team.
         * @summary Create a TeamResource
         * @param {string} baseSpaceId ID of the space
         * @param {TeamResource} [body] The TeamResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTeamSpaces(baseSpaceId: string, body?: TeamResource, options?: any): AxiosPromise<TeamResource> {
            return localVarFp.createTeamSpaces(baseSpaceId, body, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes an existing team.
         * @summary Delete a TeamResource by ID
         * @param {string} id ID of the TeamResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTeam(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteTeam(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes an existing team.
         * @summary Delete a TeamResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the TeamResource to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTeamSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteTeamSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the name and ID of all of the teams in the supplied Octopus Deploy Space. The results will be sorted by name.
         * @param {string} id ID of the team
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getListScopedUserRoleForTeam(id: string, options?: any): AxiosPromise<ScopedUserRoleResourceCollection> {
            return localVarFp.getListScopedUserRoleForTeam(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the name and ID of all of the teams in the supplied Octopus Deploy Space. The results will be sorted by name.
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the team
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getListScopedUserRoleForTeamSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<ScopedUserRoleResourceCollection> {
            return localVarFp.getListScopedUserRoleForTeamSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a team by ID.
         * @summary Get a TeamResource by ID
         * @param {string} id ID of the TeamResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTeamById(id: string, options?: any): AxiosPromise<TeamResource> {
            return localVarFp.getTeamById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a team by ID.
         * @summary Get a TeamResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the TeamResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTeamByIdSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<TeamResource> {
            return localVarFp.getTeamByIdSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all of the teams in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
         * @summary Get a list of TeamResources
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexTeams(skip?: number, take?: number, options?: any): AxiosPromise<TeamResourceCollection> {
            return localVarFp.indexTeams(skip, take, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all of the teams in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
         * @summary Get a list of TeamResources
         * @param {string} baseSpaceId ID of the space
         * @param {number} [skip] Number of items to skip
         * @param {number} [take] Number of items to take
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexTeamsSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any): AxiosPromise<TeamResourceCollection> {
            return localVarFp.indexTeamsSpaces(baseSpaceId, skip, take, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the name and ID of all of the teams in the supplied Octopus Deploy Space. The results will be sorted by name.
         * @summary Get a list of TeamResources
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllTeams(options?: any): AxiosPromise<Array<TeamResource>> {
            return localVarFp.listAllTeams(options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the name and ID of all of the teams in the supplied Octopus Deploy Space. The results will be sorted by name.
         * @summary Get a list of TeamResources
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllTeamsSpaces(baseSpaceId: string, options?: any): AxiosPromise<Array<TeamResource>> {
            return localVarFp.listAllTeamsSpaces(baseSpaceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Modifies an existing team. The Everyone team is treated as a special case and its members and external groups may not be changed.
         * @summary Modify a TeamResource by ID
         * @param {string} id ID of the TeamResource to modify
         * @param {TeamResource} [body] The TeamResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTeam(id: string, body?: TeamResource, options?: any): AxiosPromise<TeamResource> {
            return localVarFp.updateTeam(id, body, options).then((request) => request(axios, basePath));
        },
        /**
         * Modifies an existing team. The Everyone team is treated as a special case and its members and external groups may not be changed.
         * @summary Modify a TeamResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the TeamResource to modify
         * @param {TeamResource} [body] The TeamResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTeamSpaces(baseSpaceId: string, id: string, body?: TeamResource, options?: any): AxiosPromise<TeamResource> {
            return localVarFp.updateTeamSpaces(baseSpaceId, id, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TeamsApi - interface
 * @export
 * @interface TeamsApi
 */
export interface TeamsApiInterface {
    /**
     * Creates a team.
     * @summary Create a TeamResource
     * @param {TeamResource} [body] The TeamResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApiInterface
     */
    createTeam(body?: TeamResource, options?: any): AxiosPromise<TeamResource>;

    /**
     * Creates a team.
     * @summary Create a TeamResource
     * @param {string} baseSpaceId ID of the space
     * @param {TeamResource} [body] The TeamResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApiInterface
     */
    createTeamSpaces(baseSpaceId: string, body?: TeamResource, options?: any): AxiosPromise<TeamResource>;

    /**
     * Deletes an existing team.
     * @summary Delete a TeamResource by ID
     * @param {string} id ID of the TeamResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApiInterface
     */
    deleteTeam(id: string, options?: any): AxiosPromise<void>;

    /**
     * Deletes an existing team.
     * @summary Delete a TeamResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the TeamResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApiInterface
     */
    deleteTeamSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<void>;

    /**
     * Lists the name and ID of all of the teams in the supplied Octopus Deploy Space. The results will be sorted by name.
     * @param {string} id ID of the team
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApiInterface
     */
    getListScopedUserRoleForTeam(id: string, options?: any): AxiosPromise<ScopedUserRoleResourceCollection>;

    /**
     * Lists the name and ID of all of the teams in the supplied Octopus Deploy Space. The results will be sorted by name.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the team
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApiInterface
     */
    getListScopedUserRoleForTeamSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<ScopedUserRoleResourceCollection>;

    /**
     * Gets a team by ID.
     * @summary Get a TeamResource by ID
     * @param {string} id ID of the TeamResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApiInterface
     */
    getTeamById(id: string, options?: any): AxiosPromise<TeamResource>;

    /**
     * Gets a team by ID.
     * @summary Get a TeamResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the TeamResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApiInterface
     */
    getTeamByIdSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<TeamResource>;

    /**
     * Lists all of the teams in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of TeamResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApiInterface
     */
    indexTeams(skip?: number, take?: number, options?: any): AxiosPromise<TeamResourceCollection>;

    /**
     * Lists all of the teams in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of TeamResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApiInterface
     */
    indexTeamsSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any): AxiosPromise<TeamResourceCollection>;

    /**
     * Lists the name and ID of all of the teams in the supplied Octopus Deploy Space. The results will be sorted by name.
     * @summary Get a list of TeamResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApiInterface
     */
    listAllTeams(options?: any): AxiosPromise<Array<TeamResource>>;

    /**
     * Lists the name and ID of all of the teams in the supplied Octopus Deploy Space. The results will be sorted by name.
     * @summary Get a list of TeamResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApiInterface
     */
    listAllTeamsSpaces(baseSpaceId: string, options?: any): AxiosPromise<Array<TeamResource>>;

    /**
     * Modifies an existing team. The Everyone team is treated as a special case and its members and external groups may not be changed.
     * @summary Modify a TeamResource by ID
     * @param {string} id ID of the TeamResource to modify
     * @param {TeamResource} [body] The TeamResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApiInterface
     */
    updateTeam(id: string, body?: TeamResource, options?: any): AxiosPromise<TeamResource>;

    /**
     * Modifies an existing team. The Everyone team is treated as a special case and its members and external groups may not be changed.
     * @summary Modify a TeamResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the TeamResource to modify
     * @param {TeamResource} [body] The TeamResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApiInterface
     */
    updateTeamSpaces(baseSpaceId: string, id: string, body?: TeamResource, options?: any): AxiosPromise<TeamResource>;

}

/**
 * TeamsApi - object-oriented interface
 * @export
 * @class TeamsApi
 * @extends {BaseAPI}
 */
export class TeamsApi extends BaseAPI implements TeamsApiInterface {
    /**
     * Creates a team.
     * @summary Create a TeamResource
     * @param {TeamResource} [body] The TeamResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApi
     */
    public createTeam(body?: TeamResource, options?: any) {
        return TeamsApiFp(this.configuration).createTeam(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a team.
     * @summary Create a TeamResource
     * @param {string} baseSpaceId ID of the space
     * @param {TeamResource} [body] The TeamResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApi
     */
    public createTeamSpaces(baseSpaceId: string, body?: TeamResource, options?: any) {
        return TeamsApiFp(this.configuration).createTeamSpaces(baseSpaceId, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes an existing team.
     * @summary Delete a TeamResource by ID
     * @param {string} id ID of the TeamResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApi
     */
    public deleteTeam(id: string, options?: any) {
        return TeamsApiFp(this.configuration).deleteTeam(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes an existing team.
     * @summary Delete a TeamResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the TeamResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApi
     */
    public deleteTeamSpaces(baseSpaceId: string, id: string, options?: any) {
        return TeamsApiFp(this.configuration).deleteTeamSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the name and ID of all of the teams in the supplied Octopus Deploy Space. The results will be sorted by name.
     * @param {string} id ID of the team
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApi
     */
    public getListScopedUserRoleForTeam(id: string, options?: any) {
        return TeamsApiFp(this.configuration).getListScopedUserRoleForTeam(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the name and ID of all of the teams in the supplied Octopus Deploy Space. The results will be sorted by name.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the team
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApi
     */
    public getListScopedUserRoleForTeamSpaces(baseSpaceId: string, id: string, options?: any) {
        return TeamsApiFp(this.configuration).getListScopedUserRoleForTeamSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a team by ID.
     * @summary Get a TeamResource by ID
     * @param {string} id ID of the TeamResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApi
     */
    public getTeamById(id: string, options?: any) {
        return TeamsApiFp(this.configuration).getTeamById(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a team by ID.
     * @summary Get a TeamResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the TeamResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApi
     */
    public getTeamByIdSpaces(baseSpaceId: string, id: string, options?: any) {
        return TeamsApiFp(this.configuration).getTeamByIdSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all of the teams in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of TeamResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApi
     */
    public indexTeams(skip?: number, take?: number, options?: any) {
        return TeamsApiFp(this.configuration).indexTeams(skip, take, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all of the teams in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of TeamResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApi
     */
    public indexTeamsSpaces(baseSpaceId: string, skip?: number, take?: number, options?: any) {
        return TeamsApiFp(this.configuration).indexTeamsSpaces(baseSpaceId, skip, take, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the name and ID of all of the teams in the supplied Octopus Deploy Space. The results will be sorted by name.
     * @summary Get a list of TeamResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApi
     */
    public listAllTeams(options?: any) {
        return TeamsApiFp(this.configuration).listAllTeams(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the name and ID of all of the teams in the supplied Octopus Deploy Space. The results will be sorted by name.
     * @summary Get a list of TeamResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApi
     */
    public listAllTeamsSpaces(baseSpaceId: string, options?: any) {
        return TeamsApiFp(this.configuration).listAllTeamsSpaces(baseSpaceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Modifies an existing team. The Everyone team is treated as a special case and its members and external groups may not be changed.
     * @summary Modify a TeamResource by ID
     * @param {string} id ID of the TeamResource to modify
     * @param {TeamResource} [body] The TeamResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApi
     */
    public updateTeam(id: string, body?: TeamResource, options?: any) {
        return TeamsApiFp(this.configuration).updateTeam(id, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Modifies an existing team. The Everyone team is treated as a special case and its members and external groups may not be changed.
     * @summary Modify a TeamResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the TeamResource to modify
     * @param {TeamResource} [body] The TeamResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApi
     */
    public updateTeamSpaces(baseSpaceId: string, id: string, body?: TeamResource, options?: any) {
        return TeamsApiFp(this.configuration).updateTeamSpaces(baseSpaceId, id, body, options).then((request) => request(this.axios, this.basePath));
    }
}
