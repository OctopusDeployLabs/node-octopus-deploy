/* tslint:disable */
/* eslint-disable */
// Octopus REST API v2021.2.1387

import globalAxios, { AxiosPromise, AxiosInstance } from "axios";
import { Configuration } from "../configuration";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "../base";
// @ts-ignore
import { ScopedUserRoleResourceCollection } from "../model";
// @ts-ignore
import { TeamResource } from "../model";
// @ts-ignore
import { TeamResourceCollection } from "../model";
/**
 * TeamsApi - axios parameter creator
 * @export
 */
export const TeamsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Creates a team.
     * @summary Creates a new Team
     * @param {TeamResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTeam: async (
      body?: TeamResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/teams`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-Octopus-ApiKey",
        configuration
      );

      // authentication APIKeyQuery required
      await setApiKeyToObject(localVarQueryParameter, "ApiKey", configuration);

      // authentication NugetApiKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-NuGet-ApiKey",
        configuration
      );

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        body,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Creates a team.
     * @summary Creates a new Team
     * @param {string} baseSpaceId ID of the space
     * @param {TeamResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTeamSpaces: async (
      baseSpaceId: string,
      body?: TeamResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("createTeamSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/teams`.replace(
        `{${"baseSpaceId"}}`,
        encodeURIComponent(String(baseSpaceId))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-Octopus-ApiKey",
        configuration
      );

      // authentication APIKeyQuery required
      await setApiKeyToObject(localVarQueryParameter, "ApiKey", configuration);

      // authentication NugetApiKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-NuGet-ApiKey",
        configuration
      );

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        body,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Deletes an existing Team
     * @param {string} id ID of the Team to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteTeam: async (id: string, options: any = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteTeam", "id", id);
      const localVarPath = `/teams/{id}`.replace(
        `{${"id"}}`,
        encodeURIComponent(String(id))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "DELETE",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-Octopus-ApiKey",
        configuration
      );

      // authentication APIKeyQuery required
      await setApiKeyToObject(localVarQueryParameter, "ApiKey", configuration);

      // authentication NugetApiKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-NuGet-ApiKey",
        configuration
      );

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Deletes an existing Team
     * @param {string} id ID of the Team to delete
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteTeamSpaces: async (
      id: string,
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteTeamSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("deleteTeamSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/teams/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)))
        .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "DELETE",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-Octopus-ApiKey",
        configuration
      );

      // authentication APIKeyQuery required
      await setApiKeyToObject(localVarQueryParameter, "ApiKey", configuration);

      // authentication NugetApiKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-NuGet-ApiKey",
        configuration
      );

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * List all the Scoped User Roles for the Team. Results will be sorted by Space Id with System Teams being sorted before Space Teams.
     * @summary Get a list of a Team\'s Scoped User Roles
     * @param {string} id The ID of the Team
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListScopedUserRoleForTeam: async (
      id: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getListScopedUserRoleForTeam", "id", id);
      const localVarPath = `/teams/{id}/scopeduserroles`.replace(
        `{${"id"}}`,
        encodeURIComponent(String(id))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-Octopus-ApiKey",
        configuration
      );

      // authentication APIKeyQuery required
      await setApiKeyToObject(localVarQueryParameter, "ApiKey", configuration);

      // authentication NugetApiKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-NuGet-ApiKey",
        configuration
      );

      if (skip !== undefined) {
        localVarQueryParameter["skip"] = skip;
      }

      if (take !== undefined) {
        localVarQueryParameter["take"] = take;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * List all the Scoped User Roles for the Team. Results will be sorted by Space Id with System Teams being sorted before Space Teams.
     * @summary Get a list of a Team\'s Scoped User Roles
     * @param {string} id The ID of the Team
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListScopedUserRoleForTeamSpaces: async (
      id: string,
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getListScopedUserRoleForTeamSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getListScopedUserRoleForTeamSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/teams/{id}/scopeduserroles`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)))
        .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-Octopus-ApiKey",
        configuration
      );

      // authentication APIKeyQuery required
      await setApiKeyToObject(localVarQueryParameter, "ApiKey", configuration);

      // authentication NugetApiKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-NuGet-ApiKey",
        configuration
      );

      if (skip !== undefined) {
        localVarQueryParameter["skip"] = skip;
      }

      if (take !== undefined) {
        localVarQueryParameter["take"] = take;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Get a Team by ID
     * @param {string} id ID of the Team to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTeamById: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getTeamById", "id", id);
      const localVarPath = `/teams/{id}`.replace(
        `{${"id"}}`,
        encodeURIComponent(String(id))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-Octopus-ApiKey",
        configuration
      );

      // authentication APIKeyQuery required
      await setApiKeyToObject(localVarQueryParameter, "ApiKey", configuration);

      // authentication NugetApiKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-NuGet-ApiKey",
        configuration
      );

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Get a Team by ID
     * @param {string} id ID of the Team to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTeamByIdSpaces: async (
      id: string,
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getTeamByIdSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getTeamByIdSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/teams/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)))
        .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-Octopus-ApiKey",
        configuration
      );

      // authentication APIKeyQuery required
      await setApiKeyToObject(localVarQueryParameter, "ApiKey", configuration);

      // authentication NugetApiKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-NuGet-ApiKey",
        configuration
      );

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Lists the name and ID of all of the teams in the supplied Octopus Deploy Space. The results will be sorted by name.
     * @summary Get a list of Teams
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

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-Octopus-ApiKey",
        configuration
      );

      // authentication APIKeyQuery required
      await setApiKeyToObject(localVarQueryParameter, "ApiKey", configuration);

      // authentication NugetApiKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-NuGet-ApiKey",
        configuration
      );

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Lists the name and ID of all of the teams in the supplied Octopus Deploy Space. The results will be sorted by name.
     * @summary Get a list of Teams
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllTeamsSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("listAllTeamsSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/teams/all`.replace(
        `{${"baseSpaceId"}}`,
        encodeURIComponent(String(baseSpaceId))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-Octopus-ApiKey",
        configuration
      );

      // authentication APIKeyQuery required
      await setApiKeyToObject(localVarQueryParameter, "ApiKey", configuration);

      // authentication NugetApiKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-NuGet-ApiKey",
        configuration
      );

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Lists all of the teams in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Gets a list of teams
     * @param {Array<string>} [ids] A list of Team IDs, to limit the matching of Teams to those with a particular ID. Example: [\&quot;Teams-1\&quot;, \&quot;Teams-2\&quot;]
     * @param {string} [partialName] A partial name, to limit the set of Teams to those with a name that includes the partial name
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listTeams: async (
      ids?: Array<string>,
      partialName?: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/teams`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-Octopus-ApiKey",
        configuration
      );

      // authentication APIKeyQuery required
      await setApiKeyToObject(localVarQueryParameter, "ApiKey", configuration);

      // authentication NugetApiKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-NuGet-ApiKey",
        configuration
      );

      if (ids) {
        localVarQueryParameter["ids"] = ids.join(COLLECTION_FORMATS.csv);
      }

      if (partialName !== undefined) {
        localVarQueryParameter["partialName"] = partialName;
      }

      if (skip !== undefined) {
        localVarQueryParameter["skip"] = skip;
      }

      if (take !== undefined) {
        localVarQueryParameter["take"] = take;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Lists all of the teams in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Gets a list of teams
     * @param {string} baseSpaceId ID of the space
     * @param {Array<string>} [ids] A list of Team IDs, to limit the matching of Teams to those with a particular ID. Example: [\&quot;Teams-1\&quot;, \&quot;Teams-2\&quot;]
     * @param {string} [partialName] A partial name, to limit the set of Teams to those with a name that includes the partial name
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listTeamsSpaces: async (
      baseSpaceId: string,
      ids?: Array<string>,
      partialName?: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("listTeamsSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/teams`.replace(
        `{${"baseSpaceId"}}`,
        encodeURIComponent(String(baseSpaceId))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-Octopus-ApiKey",
        configuration
      );

      // authentication APIKeyQuery required
      await setApiKeyToObject(localVarQueryParameter, "ApiKey", configuration);

      // authentication NugetApiKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-NuGet-ApiKey",
        configuration
      );

      if (ids) {
        localVarQueryParameter["ids"] = ids.join(COLLECTION_FORMATS.csv);
      }

      if (partialName !== undefined) {
        localVarQueryParameter["partialName"] = partialName;
      }

      if (skip !== undefined) {
        localVarQueryParameter["skip"] = skip;
      }

      if (take !== undefined) {
        localVarQueryParameter["take"] = take;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * The Everyone team is treated as a special case and its members and external groups may not be changed.
     * @summary Modifies an existing Team
     * @param {string} id
     * @param {TeamResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateTeam: async (
      id: string,
      body?: TeamResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateTeam", "id", id);
      const localVarPath = `/teams/{id}`.replace(
        `{${"id"}}`,
        encodeURIComponent(String(id))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "PUT",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-Octopus-ApiKey",
        configuration
      );

      // authentication APIKeyQuery required
      await setApiKeyToObject(localVarQueryParameter, "ApiKey", configuration);

      // authentication NugetApiKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-NuGet-ApiKey",
        configuration
      );

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        body,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * The Everyone team is treated as a special case and its members and external groups may not be changed.
     * @summary Modifies an existing Team
     * @param {string} id
     * @param {string} baseSpaceId ID of the space
     * @param {TeamResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateTeamSpaces: async (
      id: string,
      baseSpaceId: string,
      body?: TeamResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateTeamSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("updateTeamSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/teams/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)))
        .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "PUT",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-Octopus-ApiKey",
        configuration
      );

      // authentication APIKeyQuery required
      await setApiKeyToObject(localVarQueryParameter, "ApiKey", configuration);

      // authentication NugetApiKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-NuGet-ApiKey",
        configuration
      );

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        body,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * TeamsApi - functional programming interface
 * @export
 */
export const TeamsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = TeamsApiAxiosParamCreator(configuration);
  return {
    /**
     * Creates a team.
     * @summary Creates a new Team
     * @param {TeamResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createTeam(
      body?: TeamResource,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TeamResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createTeam(
        body,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Creates a team.
     * @summary Creates a new Team
     * @param {string} baseSpaceId ID of the space
     * @param {TeamResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createTeamSpaces(
      baseSpaceId: string,
      body?: TeamResource,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TeamResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createTeamSpaces(
          baseSpaceId,
          body,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary Deletes an existing Team
     * @param {string} id ID of the Team to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteTeam(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTeam(
        id,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary Deletes an existing Team
     * @param {string} id ID of the Team to delete
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteTeamSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deleteTeamSpaces(
          id,
          baseSpaceId,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * List all the Scoped User Roles for the Team. Results will be sorted by Space Id with System Teams being sorted before Space Teams.
     * @summary Get a list of a Team\'s Scoped User Roles
     * @param {string} id The ID of the Team
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getListScopedUserRoleForTeam(
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ScopedUserRoleResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getListScopedUserRoleForTeam(
          id,
          skip,
          take,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * List all the Scoped User Roles for the Team. Results will be sorted by Space Id with System Teams being sorted before Space Teams.
     * @summary Get a list of a Team\'s Scoped User Roles
     * @param {string} id The ID of the Team
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getListScopedUserRoleForTeamSpaces(
      id: string,
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ScopedUserRoleResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getListScopedUserRoleForTeamSpaces(
          id,
          baseSpaceId,
          skip,
          take,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary Get a Team by ID
     * @param {string} id ID of the Team to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTeamById(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TeamResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getTeamById(
        id,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary Get a Team by ID
     * @param {string} id ID of the Team to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTeamByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TeamResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getTeamByIdSpaces(
          id,
          baseSpaceId,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Lists the name and ID of all of the teams in the supplied Octopus Deploy Space. The results will be sorted by name.
     * @summary Get a list of Teams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllTeams(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<TeamResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listAllTeams(
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Lists the name and ID of all of the teams in the supplied Octopus Deploy Space. The results will be sorted by name.
     * @summary Get a list of Teams
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllTeamsSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<TeamResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listAllTeamsSpaces(
          baseSpaceId,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Lists all of the teams in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Gets a list of teams
     * @param {Array<string>} [ids] A list of Team IDs, to limit the matching of Teams to those with a particular ID. Example: [\&quot;Teams-1\&quot;, \&quot;Teams-2\&quot;]
     * @param {string} [partialName] A partial name, to limit the set of Teams to those with a name that includes the partial name
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listTeams(
      ids?: Array<string>,
      partialName?: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<TeamResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listTeams(
        ids,
        partialName,
        skip,
        take,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Lists all of the teams in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Gets a list of teams
     * @param {string} baseSpaceId ID of the space
     * @param {Array<string>} [ids] A list of Team IDs, to limit the matching of Teams to those with a particular ID. Example: [\&quot;Teams-1\&quot;, \&quot;Teams-2\&quot;]
     * @param {string} [partialName] A partial name, to limit the set of Teams to those with a name that includes the partial name
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listTeamsSpaces(
      baseSpaceId: string,
      ids?: Array<string>,
      partialName?: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<TeamResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listTeamsSpaces(
        baseSpaceId,
        ids,
        partialName,
        skip,
        take,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * The Everyone team is treated as a special case and its members and external groups may not be changed.
     * @summary Modifies an existing Team
     * @param {string} id
     * @param {TeamResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateTeam(
      id: string,
      body?: TeamResource,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TeamResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateTeam(
        id,
        body,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * The Everyone team is treated as a special case and its members and external groups may not be changed.
     * @summary Modifies an existing Team
     * @param {string} id
     * @param {string} baseSpaceId ID of the space
     * @param {TeamResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateTeamSpaces(
      id: string,
      baseSpaceId: string,
      body?: TeamResource,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TeamResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateTeamSpaces(
          id,
          baseSpaceId,
          body,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * TeamsApi - factory interface
 * @export
 */
export const TeamsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = TeamsApiFp(configuration);
  return {
    /**
     * Creates a team.
     * @summary Creates a new Team
     * @param {TeamResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTeam(body?: TeamResource, options?: any): AxiosPromise<TeamResource> {
      return localVarFp
        .createTeam(body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Creates a team.
     * @summary Creates a new Team
     * @param {string} baseSpaceId ID of the space
     * @param {TeamResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTeamSpaces(
      baseSpaceId: string,
      body?: TeamResource,
      options?: any
    ): AxiosPromise<TeamResource> {
      return localVarFp
        .createTeamSpaces(baseSpaceId, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Deletes an existing Team
     * @param {string} id ID of the Team to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteTeam(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .deleteTeam(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Deletes an existing Team
     * @param {string} id ID of the Team to delete
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteTeamSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .deleteTeamSpaces(id, baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * List all the Scoped User Roles for the Team. Results will be sorted by Space Id with System Teams being sorted before Space Teams.
     * @summary Get a list of a Team\'s Scoped User Roles
     * @param {string} id The ID of the Team
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListScopedUserRoleForTeam(
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<ScopedUserRoleResourceCollection> {
      return localVarFp
        .getListScopedUserRoleForTeam(id, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * List all the Scoped User Roles for the Team. Results will be sorted by Space Id with System Teams being sorted before Space Teams.
     * @summary Get a list of a Team\'s Scoped User Roles
     * @param {string} id The ID of the Team
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListScopedUserRoleForTeamSpaces(
      id: string,
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<ScopedUserRoleResourceCollection> {
      return localVarFp
        .getListScopedUserRoleForTeamSpaces(
          id,
          baseSpaceId,
          skip,
          take,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Team by ID
     * @param {string} id ID of the Team to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTeamById(id: string, options?: any): AxiosPromise<TeamResource> {
      return localVarFp
        .getTeamById(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Team by ID
     * @param {string} id ID of the Team to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTeamByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<TeamResource> {
      return localVarFp
        .getTeamByIdSpaces(id, baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists the name and ID of all of the teams in the supplied Octopus Deploy Space. The results will be sorted by name.
     * @summary Get a list of Teams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllTeams(options?: any): AxiosPromise<Array<TeamResource>> {
      return localVarFp
        .listAllTeams(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists the name and ID of all of the teams in the supplied Octopus Deploy Space. The results will be sorted by name.
     * @summary Get a list of Teams
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllTeamsSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<Array<TeamResource>> {
      return localVarFp
        .listAllTeamsSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the teams in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Gets a list of teams
     * @param {Array<string>} [ids] A list of Team IDs, to limit the matching of Teams to those with a particular ID. Example: [\&quot;Teams-1\&quot;, \&quot;Teams-2\&quot;]
     * @param {string} [partialName] A partial name, to limit the set of Teams to those with a name that includes the partial name
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listTeams(
      ids?: Array<string>,
      partialName?: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<TeamResourceCollection> {
      return localVarFp
        .listTeams(ids, partialName, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the teams in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Gets a list of teams
     * @param {string} baseSpaceId ID of the space
     * @param {Array<string>} [ids] A list of Team IDs, to limit the matching of Teams to those with a particular ID. Example: [\&quot;Teams-1\&quot;, \&quot;Teams-2\&quot;]
     * @param {string} [partialName] A partial name, to limit the set of Teams to those with a name that includes the partial name
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listTeamsSpaces(
      baseSpaceId: string,
      ids?: Array<string>,
      partialName?: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<TeamResourceCollection> {
      return localVarFp
        .listTeamsSpaces(baseSpaceId, ids, partialName, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * The Everyone team is treated as a special case and its members and external groups may not be changed.
     * @summary Modifies an existing Team
     * @param {string} id
     * @param {TeamResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateTeam(
      id: string,
      body?: TeamResource,
      options?: any
    ): AxiosPromise<TeamResource> {
      return localVarFp
        .updateTeam(id, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * The Everyone team is treated as a special case and its members and external groups may not be changed.
     * @summary Modifies an existing Team
     * @param {string} id
     * @param {string} baseSpaceId ID of the space
     * @param {TeamResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateTeamSpaces(
      id: string,
      baseSpaceId: string,
      body?: TeamResource,
      options?: any
    ): AxiosPromise<TeamResource> {
      return localVarFp
        .updateTeamSpaces(id, baseSpaceId, body, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * TeamsApi - object-oriented interface
 * @export
 * @class TeamsApi
 * @extends {BaseAPI}
 */
export class TeamsApi extends BaseAPI {
  /**
   * Creates a team.
   * @summary Creates a new Team
   * @param {TeamResource} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamsApi
   */
  public createTeam(body?: TeamResource, options?: any) {
    return TeamsApiFp(this.configuration)
      .createTeam(body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Creates a team.
   * @summary Creates a new Team
   * @param {string} baseSpaceId ID of the space
   * @param {TeamResource} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamsApi
   */
  public createTeamSpaces(
    baseSpaceId: string,
    body?: TeamResource,
    options?: any
  ) {
    return TeamsApiFp(this.configuration)
      .createTeamSpaces(baseSpaceId, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Deletes an existing Team
   * @param {string} id ID of the Team to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamsApi
   */
  public deleteTeam(id: string, options?: any) {
    return TeamsApiFp(this.configuration)
      .deleteTeam(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Deletes an existing Team
   * @param {string} id ID of the Team to delete
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamsApi
   */
  public deleteTeamSpaces(id: string, baseSpaceId: string, options?: any) {
    return TeamsApiFp(this.configuration)
      .deleteTeamSpaces(id, baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * List all the Scoped User Roles for the Team. Results will be sorted by Space Id with System Teams being sorted before Space Teams.
   * @summary Get a list of a Team\'s Scoped User Roles
   * @param {string} id The ID of the Team
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamsApi
   */
  public getListScopedUserRoleForTeam(
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return TeamsApiFp(this.configuration)
      .getListScopedUserRoleForTeam(id, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * List all the Scoped User Roles for the Team. Results will be sorted by Space Id with System Teams being sorted before Space Teams.
   * @summary Get a list of a Team\'s Scoped User Roles
   * @param {string} id The ID of the Team
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamsApi
   */
  public getListScopedUserRoleForTeamSpaces(
    id: string,
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return TeamsApiFp(this.configuration)
      .getListScopedUserRoleForTeamSpaces(id, baseSpaceId, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Team by ID
   * @param {string} id ID of the Team to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamsApi
   */
  public getTeamById(id: string, options?: any) {
    return TeamsApiFp(this.configuration)
      .getTeamById(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Team by ID
   * @param {string} id ID of the Team to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamsApi
   */
  public getTeamByIdSpaces(id: string, baseSpaceId: string, options?: any) {
    return TeamsApiFp(this.configuration)
      .getTeamByIdSpaces(id, baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists the name and ID of all of the teams in the supplied Octopus Deploy Space. The results will be sorted by name.
   * @summary Get a list of Teams
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamsApi
   */
  public listAllTeams(options?: any) {
    return TeamsApiFp(this.configuration)
      .listAllTeams(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists the name and ID of all of the teams in the supplied Octopus Deploy Space. The results will be sorted by name.
   * @summary Get a list of Teams
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamsApi
   */
  public listAllTeamsSpaces(baseSpaceId: string, options?: any) {
    return TeamsApiFp(this.configuration)
      .listAllTeamsSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the teams in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Gets a list of teams
   * @param {Array<string>} [ids] A list of Team IDs, to limit the matching of Teams to those with a particular ID. Example: [\&quot;Teams-1\&quot;, \&quot;Teams-2\&quot;]
   * @param {string} [partialName] A partial name, to limit the set of Teams to those with a name that includes the partial name
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamsApi
   */
  public listTeams(
    ids?: Array<string>,
    partialName?: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return TeamsApiFp(this.configuration)
      .listTeams(ids, partialName, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the teams in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Gets a list of teams
   * @param {string} baseSpaceId ID of the space
   * @param {Array<string>} [ids] A list of Team IDs, to limit the matching of Teams to those with a particular ID. Example: [\&quot;Teams-1\&quot;, \&quot;Teams-2\&quot;]
   * @param {string} [partialName] A partial name, to limit the set of Teams to those with a name that includes the partial name
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamsApi
   */
  public listTeamsSpaces(
    baseSpaceId: string,
    ids?: Array<string>,
    partialName?: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return TeamsApiFp(this.configuration)
      .listTeamsSpaces(baseSpaceId, ids, partialName, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The Everyone team is treated as a special case and its members and external groups may not be changed.
   * @summary Modifies an existing Team
   * @param {string} id
   * @param {TeamResource} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamsApi
   */
  public updateTeam(id: string, body?: TeamResource, options?: any) {
    return TeamsApiFp(this.configuration)
      .updateTeam(id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The Everyone team is treated as a special case and its members and external groups may not be changed.
   * @summary Modifies an existing Team
   * @param {string} id
   * @param {string} baseSpaceId ID of the space
   * @param {TeamResource} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamsApi
   */
  public updateTeamSpaces(
    id: string,
    baseSpaceId: string,
    body?: TeamResource,
    options?: any
  ) {
    return TeamsApiFp(this.configuration)
      .updateTeamSpaces(id, baseSpaceId, body, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
