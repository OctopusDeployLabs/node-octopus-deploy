/* tslint:disable */
/* eslint-disable */
// Octopus REST API v2021.2.1290

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
import { MultiTenancyStatusResource } from "../model";
// @ts-ignore
import { TagTestResult } from "../model";
// @ts-ignore
import { TenantResource } from "../model";
// @ts-ignore
import { TenantResourceCollection } from "../model";
// @ts-ignore
import { TenantVariableResource } from "../model";
// @ts-ignore
import { TenantsMissingVariablesResource } from "../model";
/**
 * TenantsApi - axios parameter creator
 * @export
 */
export const TenantsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Creates a new Tenant, optionally cloning an existing tenant if the clone query string parameter is provided.
     * @summary Creates a new Tenant
     * @param {string} [clone] The ID of the Tenant to clone. Example: Tenants-101
     * @param {TenantResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTenant: async (
      clone?: string,
      body?: TenantResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/tenants`;
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

      if (clone !== undefined) {
        localVarQueryParameter["clone"] = clone;
      }

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
     * @summary Sets the logo associated with the tenant.
     * @param {string} id ID of the Tenant to set the logo for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTenantLogo: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("createTenantLogo", "id", id);
      const localVarPath = `/tenants/{id}/logo`.replace(
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
     * @summary Sets the logo associated with the tenant.
     * @param {string} id ID of the Tenant to set the logo for
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTenantLogoSpaces: async (
      id: string,
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("createTenantLogoSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("createTenantLogoSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/tenants/{id}/logo`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)))
        .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)));
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
     * Creates a new Tenant, optionally cloning an existing tenant if the clone query string parameter is provided.
     * @summary Creates a new Tenant
     * @param {string} baseSpaceId ID of the space
     * @param {string} [clone] The ID of the Tenant to clone. Example: Tenants-101
     * @param {TenantResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTenantSpaces: async (
      baseSpaceId: string,
      clone?: string,
      body?: TenantResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("createTenantSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/tenants`.replace(
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

      if (clone !== undefined) {
        localVarQueryParameter["clone"] = clone;
      }

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
     * @summary Creates the variables associated with the tenant.
     * @param {string} id ID of the Tenant to modify
     * @param {TenantVariableResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTenantVariables: async (
      id: string,
      body?: TenantVariableResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("createTenantVariables", "id", id);
      const localVarPath = `/tenants/{id}/variables`.replace(
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
     * @summary Creates the variables associated with the tenant.
     * @param {string} id ID of the Tenant to modify
     * @param {string} baseSpaceId ID of the space
     * @param {TenantVariableResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTenantVariablesSpaces: async (
      id: string,
      baseSpaceId: string,
      body?: TenantVariableResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("createTenantVariablesSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "createTenantVariablesSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/tenants/{id}/variables`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)))
        .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)));
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
     * @summary Deletes an existing tenant.
     * @param {string} id ID of the Tenant to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteTenant: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteTenant", "id", id);
      const localVarPath = `/tenants/{id}`.replace(
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
     * @summary Deletes an existing tenant.
     * @param {string} id ID of the Tenant to delete
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteTenantSpaces: async (
      id: string,
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteTenantSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("deleteTenantSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/tenants/{id}`
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
     *
     * @summary Get a Tenant by ID
     * @param {string} id ID of the Tenant to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTenantById: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getTenantById", "id", id);
      const localVarPath = `/tenants/{id}`.replace(
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
     * @summary Get a Tenant by ID
     * @param {string} id ID of the Tenant to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTenantByIdSpaces: async (
      id: string,
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getTenantByIdSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getTenantByIdSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/tenants/{id}`
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
     *
     * @summary Gets the logo associated with the Tenant
     * @param {string} id ID of the Tenant to retrieve the logo for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTenantLogo: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getTenantLogo", "id", id);
      const localVarPath = `/tenants/{id}/logo`.replace(
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
     * @summary Gets the logo associated with the Tenant
     * @param {string} id ID of the Tenant to retrieve the logo for
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTenantLogoSpaces: async (
      id: string,
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getTenantLogoSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getTenantLogoSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/tenants/{id}/logo`
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
     *
     * @summary Returns a list of tenants who are missing required variables
     * @param {string} [tenantId] An ID for a Tenant. If supplied, will limit the result to variables missing for the Tenant identified by the ID. Example: Tenants-101
     * @param {string} [projectId] A Project ID, to limit the set of inspected Tenants to those connected to a particular Project. Example: Projects-202
     * @param {string} [environmentId] An Environment ID, to limit the set of inspected Tenants to those connected to a particular Environment. Example: Environments-202
     * @param {boolean} [includeDetails] A switch to indicate whether missing variable details should be returned along with names
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTenantVariablesMissing: async (
      tenantId?: string,
      projectId?: string,
      environmentId?: string,
      includeDetails?: boolean,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/tenants/variables-missing`;
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

      if (tenantId !== undefined) {
        localVarQueryParameter["tenantId"] = tenantId;
      }

      if (projectId !== undefined) {
        localVarQueryParameter["projectId"] = projectId;
      }

      if (environmentId !== undefined) {
        localVarQueryParameter["environmentId"] = environmentId;
      }

      if (includeDetails !== undefined) {
        localVarQueryParameter["includeDetails"] = includeDetails;
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
     * @summary Returns a list of tenants who are missing required variables
     * @param {string} baseSpaceId ID of the space
     * @param {string} [tenantId] An ID for a Tenant. If supplied, will limit the result to variables missing for the Tenant identified by the ID. Example: Tenants-101
     * @param {string} [projectId] A Project ID, to limit the set of inspected Tenants to those connected to a particular Project. Example: Projects-202
     * @param {string} [environmentId] An Environment ID, to limit the set of inspected Tenants to those connected to a particular Environment. Example: Environments-202
     * @param {boolean} [includeDetails] A switch to indicate whether missing variable details should be returned along with names
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTenantVariablesMissingSpaces: async (
      baseSpaceId: string,
      tenantId?: string,
      projectId?: string,
      environmentId?: string,
      includeDetails?: boolean,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getTenantVariablesMissingSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/tenants/variables-missing`.replace(
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

      if (tenantId !== undefined) {
        localVarQueryParameter["tenantId"] = tenantId;
      }

      if (projectId !== undefined) {
        localVarQueryParameter["projectId"] = projectId;
      }

      if (environmentId !== undefined) {
        localVarQueryParameter["environmentId"] = environmentId;
      }

      if (includeDetails !== undefined) {
        localVarQueryParameter["includeDetails"] = includeDetails;
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
     * If multi-tenancy is enabled, \"Enabled\" will be true, otherwise it will be false.
     * @summary Reports back the status of multi-tenancy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTenantsConfiguration: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/tenants/status`;
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
     * If multi-tenancy is enabled, \"Enabled\" will be true, otherwise it will be false.
     * @summary Reports back the status of multi-tenancy
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTenantsConfigurationSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getTenantsConfigurationSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/tenants/status`.replace(
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
     *
     * @summary Gets variables associated with the provided tenant ID.
     * @param {string} id Id of the Tenant to retrieve variables for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getVariablesByTenantId: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getVariablesByTenantId", "id", id);
      const localVarPath = `/tenants/{id}/variables`.replace(
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
     * @summary Gets variables associated with the provided tenant ID.
     * @param {string} id Id of the Tenant to retrieve variables for
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getVariablesByTenantIdSpaces: async (
      id: string,
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getVariablesByTenantIdSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getVariablesByTenantIdSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/tenants/{id}/variables`
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
     * Lists all of the tenants in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Lists all tenants
     * @param {Array<string>} [ids] A set of Tenant IDs to retrieve Tenants for. Example: Tenants-101,Tenants-201,Tenants-301
     * @param {string} [projectId] A Project ID, to limit the set of retrieved Tenants to those connected to a particular Project. Example: Projects-101
     * @param {Array<string>} [tags] A set of Tenant Tags, to limit the set of retrieved Tenants to those which are tagged with the specific tags. Example: Alpha,Beta,Stable
     * @param {string} [name] (Obsolete) A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment. Left for backwards compatibility.
     * @param {string} [partialName] A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllTenants: async (
      ids?: Array<string>,
      projectId?: string,
      tags?: Array<string>,
      name?: string,
      partialName?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/tenants/all`;
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

      if (projectId !== undefined) {
        localVarQueryParameter["projectId"] = projectId;
      }

      if (tags) {
        localVarQueryParameter["tags"] = tags.join(COLLECTION_FORMATS.csv);
      }

      if (name !== undefined) {
        localVarQueryParameter["name"] = name;
      }

      if (partialName !== undefined) {
        localVarQueryParameter["partialName"] = partialName;
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
     * Lists all of the tenants in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Lists all tenants
     * @param {string} baseSpaceId ID of the space
     * @param {Array<string>} [ids] A set of Tenant IDs to retrieve Tenants for. Example: Tenants-101,Tenants-201,Tenants-301
     * @param {string} [projectId] A Project ID, to limit the set of retrieved Tenants to those connected to a particular Project. Example: Projects-101
     * @param {Array<string>} [tags] A set of Tenant Tags, to limit the set of retrieved Tenants to those which are tagged with the specific tags. Example: Alpha,Beta,Stable
     * @param {string} [name] (Obsolete) A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment. Left for backwards compatibility.
     * @param {string} [partialName] A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllTenantsSpaces: async (
      baseSpaceId: string,
      ids?: Array<string>,
      projectId?: string,
      tags?: Array<string>,
      name?: string,
      partialName?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("listAllTenantsSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/tenants/all`.replace(
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

      if (projectId !== undefined) {
        localVarQueryParameter["projectId"] = projectId;
      }

      if (tags) {
        localVarQueryParameter["tags"] = tags.join(COLLECTION_FORMATS.csv);
      }

      if (name !== undefined) {
        localVarQueryParameter["name"] = name;
      }

      if (partialName !== undefined) {
        localVarQueryParameter["partialName"] = partialName;
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
     * Lists all of the tenants in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name, and returned 30 at a time.
     * @summary Gets a list of tenants
     * @param {string} [projectId] A Project ID, to limit the set of Tenants to those connected to a particular Project. Example: Projects-1
     * @param {Array<string>} [ids] A list of Tenant IDs, to limit the matching of Tenants to those with a particular ID. Example: [\&quot;Tenants-1\&quot;, \&quot;Tenants-2\&quot;]
     * @param {Array<string>} [tags] A set of Tenant Tags, to limit the set of retrieved Tenants to those which are tagged with the specific tags. Example: Alpha,Beta,Stable
     * @param {string} [name] (Obsolete) A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment. Left for backwards compatibility.
     * @param {string} [partialName] A partial name, to limit the set of Tenants to those with a name that includes the partial name
     * @param {string} [clonedFromTenantId] A Tenant ID, to limit the included Tenants to those cloned from that Tenant. Example: Tenants-1
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listTenants: async (
      projectId?: string,
      ids?: Array<string>,
      tags?: Array<string>,
      name?: string,
      partialName?: string,
      clonedFromTenantId?: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/tenants`;
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

      if (projectId !== undefined) {
        localVarQueryParameter["projectId"] = projectId;
      }

      if (ids) {
        localVarQueryParameter["ids"] = ids.join(COLLECTION_FORMATS.csv);
      }

      if (tags) {
        localVarQueryParameter["tags"] = tags.join(COLLECTION_FORMATS.csv);
      }

      if (name !== undefined) {
        localVarQueryParameter["name"] = name;
      }

      if (partialName !== undefined) {
        localVarQueryParameter["partialName"] = partialName;
      }

      if (clonedFromTenantId !== undefined) {
        localVarQueryParameter["clonedFromTenantId"] = clonedFromTenantId;
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
     * Lists all of the tenants in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name, and returned 30 at a time.
     * @summary Gets a list of tenants
     * @param {string} baseSpaceId ID of the space
     * @param {string} [projectId] A Project ID, to limit the set of Tenants to those connected to a particular Project. Example: Projects-1
     * @param {Array<string>} [ids] A list of Tenant IDs, to limit the matching of Tenants to those with a particular ID. Example: [\&quot;Tenants-1\&quot;, \&quot;Tenants-2\&quot;]
     * @param {Array<string>} [tags] A set of Tenant Tags, to limit the set of retrieved Tenants to those which are tagged with the specific tags. Example: Alpha,Beta,Stable
     * @param {string} [name] (Obsolete) A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment. Left for backwards compatibility.
     * @param {string} [partialName] A partial name, to limit the set of Tenants to those with a name that includes the partial name
     * @param {string} [clonedFromTenantId] A Tenant ID, to limit the included Tenants to those cloned from that Tenant. Example: Tenants-1
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listTenantsSpaces: async (
      baseSpaceId: string,
      projectId?: string,
      ids?: Array<string>,
      tags?: Array<string>,
      name?: string,
      partialName?: string,
      clonedFromTenantId?: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("listTenantsSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/tenants`.replace(
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

      if (projectId !== undefined) {
        localVarQueryParameter["projectId"] = projectId;
      }

      if (ids) {
        localVarQueryParameter["ids"] = ids.join(COLLECTION_FORMATS.csv);
      }

      if (tags) {
        localVarQueryParameter["tags"] = tags.join(COLLECTION_FORMATS.csv);
      }

      if (name !== undefined) {
        localVarQueryParameter["name"] = name;
      }

      if (partialName !== undefined) {
        localVarQueryParameter["partialName"] = partialName;
      }

      if (clonedFromTenantId !== undefined) {
        localVarQueryParameter["clonedFromTenantId"] = clonedFromTenantId;
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
     *
     * @summary Checks tenants for matching tags
     * @param {Array<string>} [tenantIds] A list of Tenant IDs to limit the matching to, delimited by commas. Example: Tenants-1,Tenants-2,Tenants-3
     * @param {Array<string>} [tags] A list of Tenant Tags to limit the matching to, delimited by commas. Example: Alpha,Beta,Stable
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    testTenantTag: async (
      tenantIds?: Array<string>,
      tags?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/tenants/tag-test`;
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

      if (tenantIds) {
        localVarQueryParameter["tenantIds"] = tenantIds.join(
          COLLECTION_FORMATS.csv
        );
      }

      if (tags) {
        localVarQueryParameter["tags"] = tags.join(COLLECTION_FORMATS.csv);
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
     * @summary Checks tenants for matching tags
     * @param {string} baseSpaceId ID of the space
     * @param {Array<string>} [tenantIds] A list of Tenant IDs to limit the matching to, delimited by commas. Example: Tenants-1,Tenants-2,Tenants-3
     * @param {Array<string>} [tags] A list of Tenant Tags to limit the matching to, delimited by commas. Example: Alpha,Beta,Stable
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    testTenantTagSpaces: async (
      baseSpaceId: string,
      tenantIds?: Array<string>,
      tags?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("testTenantTagSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/tenants/tag-test`.replace(
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

      if (tenantIds) {
        localVarQueryParameter["tenantIds"] = tenantIds.join(
          COLLECTION_FORMATS.csv
        );
      }

      if (tags) {
        localVarQueryParameter["tags"] = tags.join(COLLECTION_FORMATS.csv);
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
     * @summary Modifies an existing Tenant
     * @param {string} id
     * @param {TenantResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateTenant: async (
      id: string,
      body?: TenantResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateTenant", "id", id);
      const localVarPath = `/tenants/{id}`.replace(
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
     *
     * @summary Updates the logo associated with the tenant.
     * @param {string} id ID of the Tenant to update the logo for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateTenantLogo: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateTenantLogo", "id", id);
      const localVarPath = `/tenants/{id}/logo`.replace(
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
     * @summary Updates the logo associated with the tenant.
     * @param {string} id ID of the Tenant to update the logo for
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateTenantLogoSpaces: async (
      id: string,
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateTenantLogoSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("updateTenantLogoSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/tenants/{id}/logo`
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
     * @summary Modifies an existing Tenant
     * @param {string} id
     * @param {string} baseSpaceId ID of the space
     * @param {TenantResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateTenantSpaces: async (
      id: string,
      baseSpaceId: string,
      body?: TenantResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateTenantSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("updateTenantSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/tenants/{id}`
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
    /**
     *
     * @summary Updates the variables associated with the tenant.
     * @param {string} id ID of the Tenant modify
     * @param {TenantVariableResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateTenantVariables: async (
      id: string,
      body?: TenantVariableResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateTenantVariables", "id", id);
      const localVarPath = `/tenants/{id}/variables`.replace(
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
     *
     * @summary Updates the variables associated with the tenant.
     * @param {string} id ID of the Tenant modify
     * @param {string} baseSpaceId ID of the space
     * @param {TenantVariableResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateTenantVariablesSpaces: async (
      id: string,
      baseSpaceId: string,
      body?: TenantVariableResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateTenantVariablesSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "updateTenantVariablesSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/tenants/{id}/variables`
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
 * TenantsApi - functional programming interface
 * @export
 */
export const TenantsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = TenantsApiAxiosParamCreator(configuration);
  return {
    /**
     * Creates a new Tenant, optionally cloning an existing tenant if the clone query string parameter is provided.
     * @summary Creates a new Tenant
     * @param {string} [clone] The ID of the Tenant to clone. Example: Tenants-101
     * @param {TenantResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createTenant(
      clone?: string,
      body?: TenantResource,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createTenant(
        clone,
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
     * @summary Sets the logo associated with the tenant.
     * @param {string} id ID of the Tenant to set the logo for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createTenantLogo(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createTenantLogo(
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
     * @summary Sets the logo associated with the tenant.
     * @param {string} id ID of the Tenant to set the logo for
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createTenantLogoSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createTenantLogoSpaces(
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
     * Creates a new Tenant, optionally cloning an existing tenant if the clone query string parameter is provided.
     * @summary Creates a new Tenant
     * @param {string} baseSpaceId ID of the space
     * @param {string} [clone] The ID of the Tenant to clone. Example: Tenants-101
     * @param {TenantResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createTenantSpaces(
      baseSpaceId: string,
      clone?: string,
      body?: TenantResource,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createTenantSpaces(
        baseSpaceId,
        clone,
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
     * @summary Creates the variables associated with the tenant.
     * @param {string} id ID of the Tenant to modify
     * @param {TenantVariableResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createTenantVariables(
      id: string,
      body?: TenantVariableResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<TenantVariableResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createTenantVariables(
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
     *
     * @summary Creates the variables associated with the tenant.
     * @param {string} id ID of the Tenant to modify
     * @param {string} baseSpaceId ID of the space
     * @param {TenantVariableResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createTenantVariablesSpaces(
      id: string,
      baseSpaceId: string,
      body?: TenantVariableResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<TenantVariableResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createTenantVariablesSpaces(
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
    /**
     *
     * @summary Deletes an existing tenant.
     * @param {string} id ID of the Tenant to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteTenant(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTenant(
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
     * @summary Deletes an existing tenant.
     * @param {string} id ID of the Tenant to delete
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteTenantSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTenantSpaces(
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
     *
     * @summary Get a Tenant by ID
     * @param {string} id ID of the Tenant to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTenantById(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantById(
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
     * @summary Get a Tenant by ID
     * @param {string} id ID of the Tenant to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTenantByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantByIdSpaces(
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
     *
     * @summary Gets the logo associated with the Tenant
     * @param {string} id ID of the Tenant to retrieve the logo for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTenantLogo(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantLogo(
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
     * @summary Gets the logo associated with the Tenant
     * @param {string} id ID of the Tenant to retrieve the logo for
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTenantLogoSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantLogoSpaces(
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
     *
     * @summary Returns a list of tenants who are missing required variables
     * @param {string} [tenantId] An ID for a Tenant. If supplied, will limit the result to variables missing for the Tenant identified by the ID. Example: Tenants-101
     * @param {string} [projectId] A Project ID, to limit the set of inspected Tenants to those connected to a particular Project. Example: Projects-202
     * @param {string} [environmentId] An Environment ID, to limit the set of inspected Tenants to those connected to a particular Environment. Example: Environments-202
     * @param {boolean} [includeDetails] A switch to indicate whether missing variable details should be returned along with names
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTenantVariablesMissing(
      tenantId?: string,
      projectId?: string,
      environmentId?: string,
      includeDetails?: boolean,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<TenantsMissingVariablesResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantVariablesMissing(
        tenantId,
        projectId,
        environmentId,
        includeDetails,
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
     * @summary Returns a list of tenants who are missing required variables
     * @param {string} baseSpaceId ID of the space
     * @param {string} [tenantId] An ID for a Tenant. If supplied, will limit the result to variables missing for the Tenant identified by the ID. Example: Tenants-101
     * @param {string} [projectId] A Project ID, to limit the set of inspected Tenants to those connected to a particular Project. Example: Projects-202
     * @param {string} [environmentId] An Environment ID, to limit the set of inspected Tenants to those connected to a particular Environment. Example: Environments-202
     * @param {boolean} [includeDetails] A switch to indicate whether missing variable details should be returned along with names
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTenantVariablesMissingSpaces(
      baseSpaceId: string,
      tenantId?: string,
      projectId?: string,
      environmentId?: string,
      includeDetails?: boolean,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<TenantsMissingVariablesResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantVariablesMissingSpaces(
        baseSpaceId,
        tenantId,
        projectId,
        environmentId,
        includeDetails,
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
     * If multi-tenancy is enabled, \"Enabled\" will be true, otherwise it will be false.
     * @summary Reports back the status of multi-tenancy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTenantsConfiguration(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<MultiTenancyStatusResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantsConfiguration(
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
     * If multi-tenancy is enabled, \"Enabled\" will be true, otherwise it will be false.
     * @summary Reports back the status of multi-tenancy
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTenantsConfigurationSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<MultiTenancyStatusResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantsConfigurationSpaces(
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
     *
     * @summary Gets variables associated with the provided tenant ID.
     * @param {string} id Id of the Tenant to retrieve variables for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getVariablesByTenantId(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<TenantVariableResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getVariablesByTenantId(
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
     * @summary Gets variables associated with the provided tenant ID.
     * @param {string} id Id of the Tenant to retrieve variables for
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getVariablesByTenantIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<TenantVariableResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getVariablesByTenantIdSpaces(
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
     * Lists all of the tenants in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Lists all tenants
     * @param {Array<string>} [ids] A set of Tenant IDs to retrieve Tenants for. Example: Tenants-101,Tenants-201,Tenants-301
     * @param {string} [projectId] A Project ID, to limit the set of retrieved Tenants to those connected to a particular Project. Example: Projects-101
     * @param {Array<string>} [tags] A set of Tenant Tags, to limit the set of retrieved Tenants to those which are tagged with the specific tags. Example: Alpha,Beta,Stable
     * @param {string} [name] (Obsolete) A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment. Left for backwards compatibility.
     * @param {string} [partialName] A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllTenants(
      ids?: Array<string>,
      projectId?: string,
      tags?: Array<string>,
      name?: string,
      partialName?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<TenantResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listAllTenants(
        ids,
        projectId,
        tags,
        name,
        partialName,
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
     * Lists all of the tenants in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Lists all tenants
     * @param {string} baseSpaceId ID of the space
     * @param {Array<string>} [ids] A set of Tenant IDs to retrieve Tenants for. Example: Tenants-101,Tenants-201,Tenants-301
     * @param {string} [projectId] A Project ID, to limit the set of retrieved Tenants to those connected to a particular Project. Example: Projects-101
     * @param {Array<string>} [tags] A set of Tenant Tags, to limit the set of retrieved Tenants to those which are tagged with the specific tags. Example: Alpha,Beta,Stable
     * @param {string} [name] (Obsolete) A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment. Left for backwards compatibility.
     * @param {string} [partialName] A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllTenantsSpaces(
      baseSpaceId: string,
      ids?: Array<string>,
      projectId?: string,
      tags?: Array<string>,
      name?: string,
      partialName?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<TenantResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listAllTenantsSpaces(
        baseSpaceId,
        ids,
        projectId,
        tags,
        name,
        partialName,
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
     * Lists all of the tenants in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name, and returned 30 at a time.
     * @summary Gets a list of tenants
     * @param {string} [projectId] A Project ID, to limit the set of Tenants to those connected to a particular Project. Example: Projects-1
     * @param {Array<string>} [ids] A list of Tenant IDs, to limit the matching of Tenants to those with a particular ID. Example: [\&quot;Tenants-1\&quot;, \&quot;Tenants-2\&quot;]
     * @param {Array<string>} [tags] A set of Tenant Tags, to limit the set of retrieved Tenants to those which are tagged with the specific tags. Example: Alpha,Beta,Stable
     * @param {string} [name] (Obsolete) A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment. Left for backwards compatibility.
     * @param {string} [partialName] A partial name, to limit the set of Tenants to those with a name that includes the partial name
     * @param {string} [clonedFromTenantId] A Tenant ID, to limit the included Tenants to those cloned from that Tenant. Example: Tenants-1
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listTenants(
      projectId?: string,
      ids?: Array<string>,
      tags?: Array<string>,
      name?: string,
      partialName?: string,
      clonedFromTenantId?: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<TenantResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listTenants(
        projectId,
        ids,
        tags,
        name,
        partialName,
        clonedFromTenantId,
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
     * Lists all of the tenants in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name, and returned 30 at a time.
     * @summary Gets a list of tenants
     * @param {string} baseSpaceId ID of the space
     * @param {string} [projectId] A Project ID, to limit the set of Tenants to those connected to a particular Project. Example: Projects-1
     * @param {Array<string>} [ids] A list of Tenant IDs, to limit the matching of Tenants to those with a particular ID. Example: [\&quot;Tenants-1\&quot;, \&quot;Tenants-2\&quot;]
     * @param {Array<string>} [tags] A set of Tenant Tags, to limit the set of retrieved Tenants to those which are tagged with the specific tags. Example: Alpha,Beta,Stable
     * @param {string} [name] (Obsolete) A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment. Left for backwards compatibility.
     * @param {string} [partialName] A partial name, to limit the set of Tenants to those with a name that includes the partial name
     * @param {string} [clonedFromTenantId] A Tenant ID, to limit the included Tenants to those cloned from that Tenant. Example: Tenants-1
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listTenantsSpaces(
      baseSpaceId: string,
      projectId?: string,
      ids?: Array<string>,
      tags?: Array<string>,
      name?: string,
      partialName?: string,
      clonedFromTenantId?: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<TenantResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listTenantsSpaces(
        baseSpaceId,
        projectId,
        ids,
        tags,
        name,
        partialName,
        clonedFromTenantId,
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
     * @summary Checks tenants for matching tags
     * @param {Array<string>} [tenantIds] A list of Tenant IDs to limit the matching to, delimited by commas. Example: Tenants-1,Tenants-2,Tenants-3
     * @param {Array<string>} [tags] A list of Tenant Tags to limit the matching to, delimited by commas. Example: Alpha,Beta,Stable
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async testTenantTag(
      tenantIds?: Array<string>,
      tags?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<{ [key: string]: TagTestResult }>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.testTenantTag(
        tenantIds,
        tags,
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
     * @summary Checks tenants for matching tags
     * @param {string} baseSpaceId ID of the space
     * @param {Array<string>} [tenantIds] A list of Tenant IDs to limit the matching to, delimited by commas. Example: Tenants-1,Tenants-2,Tenants-3
     * @param {Array<string>} [tags] A list of Tenant Tags to limit the matching to, delimited by commas. Example: Alpha,Beta,Stable
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async testTenantTagSpaces(
      baseSpaceId: string,
      tenantIds?: Array<string>,
      tags?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<{ [key: string]: TagTestResult }>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.testTenantTagSpaces(
        baseSpaceId,
        tenantIds,
        tags,
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
     * @summary Modifies an existing Tenant
     * @param {string} id
     * @param {TenantResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateTenant(
      id: string,
      body?: TenantResource,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateTenant(
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
     *
     * @summary Updates the logo associated with the tenant.
     * @param {string} id ID of the Tenant to update the logo for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateTenantLogo(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateTenantLogo(
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
     * @summary Updates the logo associated with the tenant.
     * @param {string} id ID of the Tenant to update the logo for
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateTenantLogoSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateTenantLogoSpaces(
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
     *
     * @summary Modifies an existing Tenant
     * @param {string} id
     * @param {string} baseSpaceId ID of the space
     * @param {TenantResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateTenantSpaces(
      id: string,
      baseSpaceId: string,
      body?: TenantResource,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateTenantSpaces(
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
    /**
     *
     * @summary Updates the variables associated with the tenant.
     * @param {string} id ID of the Tenant modify
     * @param {TenantVariableResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateTenantVariables(
      id: string,
      body?: TenantVariableResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<TenantVariableResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateTenantVariables(
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
     *
     * @summary Updates the variables associated with the tenant.
     * @param {string} id ID of the Tenant modify
     * @param {string} baseSpaceId ID of the space
     * @param {TenantVariableResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateTenantVariablesSpaces(
      id: string,
      baseSpaceId: string,
      body?: TenantVariableResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<TenantVariableResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateTenantVariablesSpaces(
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
 * TenantsApi - factory interface
 * @export
 */
export const TenantsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = TenantsApiFp(configuration);
  return {
    /**
     * Creates a new Tenant, optionally cloning an existing tenant if the clone query string parameter is provided.
     * @summary Creates a new Tenant
     * @param {string} [clone] The ID of the Tenant to clone. Example: Tenants-101
     * @param {TenantResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTenant(
      clone?: string,
      body?: TenantResource,
      options?: any
    ): AxiosPromise<TenantResource> {
      return localVarFp
        .createTenant(clone, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Sets the logo associated with the tenant.
     * @param {string} id ID of the Tenant to set the logo for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTenantLogo(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .createTenantLogo(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Sets the logo associated with the tenant.
     * @param {string} id ID of the Tenant to set the logo for
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTenantLogoSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .createTenantLogoSpaces(id, baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Creates a new Tenant, optionally cloning an existing tenant if the clone query string parameter is provided.
     * @summary Creates a new Tenant
     * @param {string} baseSpaceId ID of the space
     * @param {string} [clone] The ID of the Tenant to clone. Example: Tenants-101
     * @param {TenantResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTenantSpaces(
      baseSpaceId: string,
      clone?: string,
      body?: TenantResource,
      options?: any
    ): AxiosPromise<TenantResource> {
      return localVarFp
        .createTenantSpaces(baseSpaceId, clone, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Creates the variables associated with the tenant.
     * @param {string} id ID of the Tenant to modify
     * @param {TenantVariableResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTenantVariables(
      id: string,
      body?: TenantVariableResource,
      options?: any
    ): AxiosPromise<TenantVariableResource> {
      return localVarFp
        .createTenantVariables(id, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Creates the variables associated with the tenant.
     * @param {string} id ID of the Tenant to modify
     * @param {string} baseSpaceId ID of the space
     * @param {TenantVariableResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTenantVariablesSpaces(
      id: string,
      baseSpaceId: string,
      body?: TenantVariableResource,
      options?: any
    ): AxiosPromise<TenantVariableResource> {
      return localVarFp
        .createTenantVariablesSpaces(id, baseSpaceId, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Deletes an existing tenant.
     * @param {string} id ID of the Tenant to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteTenant(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .deleteTenant(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Deletes an existing tenant.
     * @param {string} id ID of the Tenant to delete
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteTenantSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .deleteTenantSpaces(id, baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Tenant by ID
     * @param {string} id ID of the Tenant to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTenantById(id: string, options?: any): AxiosPromise<TenantResource> {
      return localVarFp
        .getTenantById(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Tenant by ID
     * @param {string} id ID of the Tenant to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTenantByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<TenantResource> {
      return localVarFp
        .getTenantByIdSpaces(id, baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Gets the logo associated with the Tenant
     * @param {string} id ID of the Tenant to retrieve the logo for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTenantLogo(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .getTenantLogo(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Gets the logo associated with the Tenant
     * @param {string} id ID of the Tenant to retrieve the logo for
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTenantLogoSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .getTenantLogoSpaces(id, baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Returns a list of tenants who are missing required variables
     * @param {string} [tenantId] An ID for a Tenant. If supplied, will limit the result to variables missing for the Tenant identified by the ID. Example: Tenants-101
     * @param {string} [projectId] A Project ID, to limit the set of inspected Tenants to those connected to a particular Project. Example: Projects-202
     * @param {string} [environmentId] An Environment ID, to limit the set of inspected Tenants to those connected to a particular Environment. Example: Environments-202
     * @param {boolean} [includeDetails] A switch to indicate whether missing variable details should be returned along with names
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTenantVariablesMissing(
      tenantId?: string,
      projectId?: string,
      environmentId?: string,
      includeDetails?: boolean,
      options?: any
    ): AxiosPromise<Array<TenantsMissingVariablesResource>> {
      return localVarFp
        .getTenantVariablesMissing(
          tenantId,
          projectId,
          environmentId,
          includeDetails,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Returns a list of tenants who are missing required variables
     * @param {string} baseSpaceId ID of the space
     * @param {string} [tenantId] An ID for a Tenant. If supplied, will limit the result to variables missing for the Tenant identified by the ID. Example: Tenants-101
     * @param {string} [projectId] A Project ID, to limit the set of inspected Tenants to those connected to a particular Project. Example: Projects-202
     * @param {string} [environmentId] An Environment ID, to limit the set of inspected Tenants to those connected to a particular Environment. Example: Environments-202
     * @param {boolean} [includeDetails] A switch to indicate whether missing variable details should be returned along with names
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTenantVariablesMissingSpaces(
      baseSpaceId: string,
      tenantId?: string,
      projectId?: string,
      environmentId?: string,
      includeDetails?: boolean,
      options?: any
    ): AxiosPromise<Array<TenantsMissingVariablesResource>> {
      return localVarFp
        .getTenantVariablesMissingSpaces(
          baseSpaceId,
          tenantId,
          projectId,
          environmentId,
          includeDetails,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * If multi-tenancy is enabled, \"Enabled\" will be true, otherwise it will be false.
     * @summary Reports back the status of multi-tenancy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTenantsConfiguration(
      options?: any
    ): AxiosPromise<MultiTenancyStatusResource> {
      return localVarFp
        .getTenantsConfiguration(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * If multi-tenancy is enabled, \"Enabled\" will be true, otherwise it will be false.
     * @summary Reports back the status of multi-tenancy
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTenantsConfigurationSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<MultiTenancyStatusResource> {
      return localVarFp
        .getTenantsConfigurationSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Gets variables associated with the provided tenant ID.
     * @param {string} id Id of the Tenant to retrieve variables for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getVariablesByTenantId(
      id: string,
      options?: any
    ): AxiosPromise<TenantVariableResource> {
      return localVarFp
        .getVariablesByTenantId(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Gets variables associated with the provided tenant ID.
     * @param {string} id Id of the Tenant to retrieve variables for
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getVariablesByTenantIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<TenantVariableResource> {
      return localVarFp
        .getVariablesByTenantIdSpaces(id, baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the tenants in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Lists all tenants
     * @param {Array<string>} [ids] A set of Tenant IDs to retrieve Tenants for. Example: Tenants-101,Tenants-201,Tenants-301
     * @param {string} [projectId] A Project ID, to limit the set of retrieved Tenants to those connected to a particular Project. Example: Projects-101
     * @param {Array<string>} [tags] A set of Tenant Tags, to limit the set of retrieved Tenants to those which are tagged with the specific tags. Example: Alpha,Beta,Stable
     * @param {string} [name] (Obsolete) A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment. Left for backwards compatibility.
     * @param {string} [partialName] A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllTenants(
      ids?: Array<string>,
      projectId?: string,
      tags?: Array<string>,
      name?: string,
      partialName?: string,
      options?: any
    ): AxiosPromise<Array<TenantResource>> {
      return localVarFp
        .listAllTenants(ids, projectId, tags, name, partialName, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the tenants in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Lists all tenants
     * @param {string} baseSpaceId ID of the space
     * @param {Array<string>} [ids] A set of Tenant IDs to retrieve Tenants for. Example: Tenants-101,Tenants-201,Tenants-301
     * @param {string} [projectId] A Project ID, to limit the set of retrieved Tenants to those connected to a particular Project. Example: Projects-101
     * @param {Array<string>} [tags] A set of Tenant Tags, to limit the set of retrieved Tenants to those which are tagged with the specific tags. Example: Alpha,Beta,Stable
     * @param {string} [name] (Obsolete) A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment. Left for backwards compatibility.
     * @param {string} [partialName] A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllTenantsSpaces(
      baseSpaceId: string,
      ids?: Array<string>,
      projectId?: string,
      tags?: Array<string>,
      name?: string,
      partialName?: string,
      options?: any
    ): AxiosPromise<Array<TenantResource>> {
      return localVarFp
        .listAllTenantsSpaces(
          baseSpaceId,
          ids,
          projectId,
          tags,
          name,
          partialName,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the tenants in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name, and returned 30 at a time.
     * @summary Gets a list of tenants
     * @param {string} [projectId] A Project ID, to limit the set of Tenants to those connected to a particular Project. Example: Projects-1
     * @param {Array<string>} [ids] A list of Tenant IDs, to limit the matching of Tenants to those with a particular ID. Example: [\&quot;Tenants-1\&quot;, \&quot;Tenants-2\&quot;]
     * @param {Array<string>} [tags] A set of Tenant Tags, to limit the set of retrieved Tenants to those which are tagged with the specific tags. Example: Alpha,Beta,Stable
     * @param {string} [name] (Obsolete) A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment. Left for backwards compatibility.
     * @param {string} [partialName] A partial name, to limit the set of Tenants to those with a name that includes the partial name
     * @param {string} [clonedFromTenantId] A Tenant ID, to limit the included Tenants to those cloned from that Tenant. Example: Tenants-1
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listTenants(
      projectId?: string,
      ids?: Array<string>,
      tags?: Array<string>,
      name?: string,
      partialName?: string,
      clonedFromTenantId?: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<TenantResourceCollection> {
      return localVarFp
        .listTenants(
          projectId,
          ids,
          tags,
          name,
          partialName,
          clonedFromTenantId,
          skip,
          take,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the tenants in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name, and returned 30 at a time.
     * @summary Gets a list of tenants
     * @param {string} baseSpaceId ID of the space
     * @param {string} [projectId] A Project ID, to limit the set of Tenants to those connected to a particular Project. Example: Projects-1
     * @param {Array<string>} [ids] A list of Tenant IDs, to limit the matching of Tenants to those with a particular ID. Example: [\&quot;Tenants-1\&quot;, \&quot;Tenants-2\&quot;]
     * @param {Array<string>} [tags] A set of Tenant Tags, to limit the set of retrieved Tenants to those which are tagged with the specific tags. Example: Alpha,Beta,Stable
     * @param {string} [name] (Obsolete) A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment. Left for backwards compatibility.
     * @param {string} [partialName] A partial name, to limit the set of Tenants to those with a name that includes the partial name
     * @param {string} [clonedFromTenantId] A Tenant ID, to limit the included Tenants to those cloned from that Tenant. Example: Tenants-1
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listTenantsSpaces(
      baseSpaceId: string,
      projectId?: string,
      ids?: Array<string>,
      tags?: Array<string>,
      name?: string,
      partialName?: string,
      clonedFromTenantId?: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<TenantResourceCollection> {
      return localVarFp
        .listTenantsSpaces(
          baseSpaceId,
          projectId,
          ids,
          tags,
          name,
          partialName,
          clonedFromTenantId,
          skip,
          take,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Checks tenants for matching tags
     * @param {Array<string>} [tenantIds] A list of Tenant IDs to limit the matching to, delimited by commas. Example: Tenants-1,Tenants-2,Tenants-3
     * @param {Array<string>} [tags] A list of Tenant Tags to limit the matching to, delimited by commas. Example: Alpha,Beta,Stable
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    testTenantTag(
      tenantIds?: Array<string>,
      tags?: Array<string>,
      options?: any
    ): AxiosPromise<{ [key: string]: TagTestResult }> {
      return localVarFp
        .testTenantTag(tenantIds, tags, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Checks tenants for matching tags
     * @param {string} baseSpaceId ID of the space
     * @param {Array<string>} [tenantIds] A list of Tenant IDs to limit the matching to, delimited by commas. Example: Tenants-1,Tenants-2,Tenants-3
     * @param {Array<string>} [tags] A list of Tenant Tags to limit the matching to, delimited by commas. Example: Alpha,Beta,Stable
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    testTenantTagSpaces(
      baseSpaceId: string,
      tenantIds?: Array<string>,
      tags?: Array<string>,
      options?: any
    ): AxiosPromise<{ [key: string]: TagTestResult }> {
      return localVarFp
        .testTenantTagSpaces(baseSpaceId, tenantIds, tags, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Modifies an existing Tenant
     * @param {string} id
     * @param {TenantResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateTenant(
      id: string,
      body?: TenantResource,
      options?: any
    ): AxiosPromise<TenantResource> {
      return localVarFp
        .updateTenant(id, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Updates the logo associated with the tenant.
     * @param {string} id ID of the Tenant to update the logo for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateTenantLogo(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .updateTenantLogo(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Updates the logo associated with the tenant.
     * @param {string} id ID of the Tenant to update the logo for
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateTenantLogoSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .updateTenantLogoSpaces(id, baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Modifies an existing Tenant
     * @param {string} id
     * @param {string} baseSpaceId ID of the space
     * @param {TenantResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateTenantSpaces(
      id: string,
      baseSpaceId: string,
      body?: TenantResource,
      options?: any
    ): AxiosPromise<TenantResource> {
      return localVarFp
        .updateTenantSpaces(id, baseSpaceId, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Updates the variables associated with the tenant.
     * @param {string} id ID of the Tenant modify
     * @param {TenantVariableResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateTenantVariables(
      id: string,
      body?: TenantVariableResource,
      options?: any
    ): AxiosPromise<TenantVariableResource> {
      return localVarFp
        .updateTenantVariables(id, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Updates the variables associated with the tenant.
     * @param {string} id ID of the Tenant modify
     * @param {string} baseSpaceId ID of the space
     * @param {TenantVariableResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateTenantVariablesSpaces(
      id: string,
      baseSpaceId: string,
      body?: TenantVariableResource,
      options?: any
    ): AxiosPromise<TenantVariableResource> {
      return localVarFp
        .updateTenantVariablesSpaces(id, baseSpaceId, body, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * TenantsApi - interface
 * @export
 * @interface TenantsApi
 */
export interface TenantsApiInterface {
  /**
   * Creates a new Tenant, optionally cloning an existing tenant if the clone query string parameter is provided.
   * @summary Creates a new Tenant
   * @param {string} [clone] The ID of the Tenant to clone. Example: Tenants-101
   * @param {TenantResource} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApiInterface
   */
  createTenant(
    clone?: string,
    body?: TenantResource,
    options?: any
  ): AxiosPromise<TenantResource>;

  /**
   *
   * @summary Sets the logo associated with the tenant.
   * @param {string} id ID of the Tenant to set the logo for
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApiInterface
   */
  createTenantLogo(id: string, options?: any): AxiosPromise<void>;

  /**
   *
   * @summary Sets the logo associated with the tenant.
   * @param {string} id ID of the Tenant to set the logo for
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApiInterface
   */
  createTenantLogoSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<void>;

  /**
   * Creates a new Tenant, optionally cloning an existing tenant if the clone query string parameter is provided.
   * @summary Creates a new Tenant
   * @param {string} baseSpaceId ID of the space
   * @param {string} [clone] The ID of the Tenant to clone. Example: Tenants-101
   * @param {TenantResource} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApiInterface
   */
  createTenantSpaces(
    baseSpaceId: string,
    clone?: string,
    body?: TenantResource,
    options?: any
  ): AxiosPromise<TenantResource>;

  /**
   *
   * @summary Creates the variables associated with the tenant.
   * @param {string} id ID of the Tenant to modify
   * @param {TenantVariableResource} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApiInterface
   */
  createTenantVariables(
    id: string,
    body?: TenantVariableResource,
    options?: any
  ): AxiosPromise<TenantVariableResource>;

  /**
   *
   * @summary Creates the variables associated with the tenant.
   * @param {string} id ID of the Tenant to modify
   * @param {string} baseSpaceId ID of the space
   * @param {TenantVariableResource} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApiInterface
   */
  createTenantVariablesSpaces(
    id: string,
    baseSpaceId: string,
    body?: TenantVariableResource,
    options?: any
  ): AxiosPromise<TenantVariableResource>;

  /**
   *
   * @summary Deletes an existing tenant.
   * @param {string} id ID of the Tenant to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApiInterface
   */
  deleteTenant(id: string, options?: any): AxiosPromise<void>;

  /**
   *
   * @summary Deletes an existing tenant.
   * @param {string} id ID of the Tenant to delete
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApiInterface
   */
  deleteTenantSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<void>;

  /**
   *
   * @summary Get a Tenant by ID
   * @param {string} id ID of the Tenant to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApiInterface
   */
  getTenantById(id: string, options?: any): AxiosPromise<TenantResource>;

  /**
   *
   * @summary Get a Tenant by ID
   * @param {string} id ID of the Tenant to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApiInterface
   */
  getTenantByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<TenantResource>;

  /**
   *
   * @summary Gets the logo associated with the Tenant
   * @param {string} id ID of the Tenant to retrieve the logo for
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApiInterface
   */
  getTenantLogo(id: string, options?: any): AxiosPromise<void>;

  /**
   *
   * @summary Gets the logo associated with the Tenant
   * @param {string} id ID of the Tenant to retrieve the logo for
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApiInterface
   */
  getTenantLogoSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<void>;

  /**
   *
   * @summary Returns a list of tenants who are missing required variables
   * @param {string} [tenantId] An ID for a Tenant. If supplied, will limit the result to variables missing for the Tenant identified by the ID. Example: Tenants-101
   * @param {string} [projectId] A Project ID, to limit the set of inspected Tenants to those connected to a particular Project. Example: Projects-202
   * @param {string} [environmentId] An Environment ID, to limit the set of inspected Tenants to those connected to a particular Environment. Example: Environments-202
   * @param {boolean} [includeDetails] A switch to indicate whether missing variable details should be returned along with names
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApiInterface
   */
  getTenantVariablesMissing(
    tenantId?: string,
    projectId?: string,
    environmentId?: string,
    includeDetails?: boolean,
    options?: any
  ): AxiosPromise<Array<TenantsMissingVariablesResource>>;

  /**
   *
   * @summary Returns a list of tenants who are missing required variables
   * @param {string} baseSpaceId ID of the space
   * @param {string} [tenantId] An ID for a Tenant. If supplied, will limit the result to variables missing for the Tenant identified by the ID. Example: Tenants-101
   * @param {string} [projectId] A Project ID, to limit the set of inspected Tenants to those connected to a particular Project. Example: Projects-202
   * @param {string} [environmentId] An Environment ID, to limit the set of inspected Tenants to those connected to a particular Environment. Example: Environments-202
   * @param {boolean} [includeDetails] A switch to indicate whether missing variable details should be returned along with names
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApiInterface
   */
  getTenantVariablesMissingSpaces(
    baseSpaceId: string,
    tenantId?: string,
    projectId?: string,
    environmentId?: string,
    includeDetails?: boolean,
    options?: any
  ): AxiosPromise<Array<TenantsMissingVariablesResource>>;

  /**
   * If multi-tenancy is enabled, \"Enabled\" will be true, otherwise it will be false.
   * @summary Reports back the status of multi-tenancy
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApiInterface
   */
  getTenantsConfiguration(
    options?: any
  ): AxiosPromise<MultiTenancyStatusResource>;

  /**
   * If multi-tenancy is enabled, \"Enabled\" will be true, otherwise it will be false.
   * @summary Reports back the status of multi-tenancy
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApiInterface
   */
  getTenantsConfigurationSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<MultiTenancyStatusResource>;

  /**
   *
   * @summary Gets variables associated with the provided tenant ID.
   * @param {string} id Id of the Tenant to retrieve variables for
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApiInterface
   */
  getVariablesByTenantId(
    id: string,
    options?: any
  ): AxiosPromise<TenantVariableResource>;

  /**
   *
   * @summary Gets variables associated with the provided tenant ID.
   * @param {string} id Id of the Tenant to retrieve variables for
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApiInterface
   */
  getVariablesByTenantIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<TenantVariableResource>;

  /**
   * Lists all of the tenants in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Lists all tenants
   * @param {Array<string>} [ids] A set of Tenant IDs to retrieve Tenants for. Example: Tenants-101,Tenants-201,Tenants-301
   * @param {string} [projectId] A Project ID, to limit the set of retrieved Tenants to those connected to a particular Project. Example: Projects-101
   * @param {Array<string>} [tags] A set of Tenant Tags, to limit the set of retrieved Tenants to those which are tagged with the specific tags. Example: Alpha,Beta,Stable
   * @param {string} [name] (Obsolete) A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment. Left for backwards compatibility.
   * @param {string} [partialName] A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApiInterface
   */
  listAllTenants(
    ids?: Array<string>,
    projectId?: string,
    tags?: Array<string>,
    name?: string,
    partialName?: string,
    options?: any
  ): AxiosPromise<Array<TenantResource>>;

  /**
   * Lists all of the tenants in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Lists all tenants
   * @param {string} baseSpaceId ID of the space
   * @param {Array<string>} [ids] A set of Tenant IDs to retrieve Tenants for. Example: Tenants-101,Tenants-201,Tenants-301
   * @param {string} [projectId] A Project ID, to limit the set of retrieved Tenants to those connected to a particular Project. Example: Projects-101
   * @param {Array<string>} [tags] A set of Tenant Tags, to limit the set of retrieved Tenants to those which are tagged with the specific tags. Example: Alpha,Beta,Stable
   * @param {string} [name] (Obsolete) A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment. Left for backwards compatibility.
   * @param {string} [partialName] A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApiInterface
   */
  listAllTenantsSpaces(
    baseSpaceId: string,
    ids?: Array<string>,
    projectId?: string,
    tags?: Array<string>,
    name?: string,
    partialName?: string,
    options?: any
  ): AxiosPromise<Array<TenantResource>>;

  /**
   * Lists all of the tenants in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name, and returned 30 at a time.
   * @summary Gets a list of tenants
   * @param {string} [projectId] A Project ID, to limit the set of Tenants to those connected to a particular Project. Example: Projects-1
   * @param {Array<string>} [ids] A list of Tenant IDs, to limit the matching of Tenants to those with a particular ID. Example: [\&quot;Tenants-1\&quot;, \&quot;Tenants-2\&quot;]
   * @param {Array<string>} [tags] A set of Tenant Tags, to limit the set of retrieved Tenants to those which are tagged with the specific tags. Example: Alpha,Beta,Stable
   * @param {string} [name] (Obsolete) A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment. Left for backwards compatibility.
   * @param {string} [partialName] A partial name, to limit the set of Tenants to those with a name that includes the partial name
   * @param {string} [clonedFromTenantId] A Tenant ID, to limit the included Tenants to those cloned from that Tenant. Example: Tenants-1
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApiInterface
   */
  listTenants(
    projectId?: string,
    ids?: Array<string>,
    tags?: Array<string>,
    name?: string,
    partialName?: string,
    clonedFromTenantId?: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<TenantResourceCollection>;

  /**
   * Lists all of the tenants in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name, and returned 30 at a time.
   * @summary Gets a list of tenants
   * @param {string} baseSpaceId ID of the space
   * @param {string} [projectId] A Project ID, to limit the set of Tenants to those connected to a particular Project. Example: Projects-1
   * @param {Array<string>} [ids] A list of Tenant IDs, to limit the matching of Tenants to those with a particular ID. Example: [\&quot;Tenants-1\&quot;, \&quot;Tenants-2\&quot;]
   * @param {Array<string>} [tags] A set of Tenant Tags, to limit the set of retrieved Tenants to those which are tagged with the specific tags. Example: Alpha,Beta,Stable
   * @param {string} [name] (Obsolete) A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment. Left for backwards compatibility.
   * @param {string} [partialName] A partial name, to limit the set of Tenants to those with a name that includes the partial name
   * @param {string} [clonedFromTenantId] A Tenant ID, to limit the included Tenants to those cloned from that Tenant. Example: Tenants-1
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApiInterface
   */
  listTenantsSpaces(
    baseSpaceId: string,
    projectId?: string,
    ids?: Array<string>,
    tags?: Array<string>,
    name?: string,
    partialName?: string,
    clonedFromTenantId?: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<TenantResourceCollection>;

  /**
   *
   * @summary Checks tenants for matching tags
   * @param {Array<string>} [tenantIds] A list of Tenant IDs to limit the matching to, delimited by commas. Example: Tenants-1,Tenants-2,Tenants-3
   * @param {Array<string>} [tags] A list of Tenant Tags to limit the matching to, delimited by commas. Example: Alpha,Beta,Stable
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApiInterface
   */
  testTenantTag(
    tenantIds?: Array<string>,
    tags?: Array<string>,
    options?: any
  ): AxiosPromise<{ [key: string]: TagTestResult }>;

  /**
   *
   * @summary Checks tenants for matching tags
   * @param {string} baseSpaceId ID of the space
   * @param {Array<string>} [tenantIds] A list of Tenant IDs to limit the matching to, delimited by commas. Example: Tenants-1,Tenants-2,Tenants-3
   * @param {Array<string>} [tags] A list of Tenant Tags to limit the matching to, delimited by commas. Example: Alpha,Beta,Stable
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApiInterface
   */
  testTenantTagSpaces(
    baseSpaceId: string,
    tenantIds?: Array<string>,
    tags?: Array<string>,
    options?: any
  ): AxiosPromise<{ [key: string]: TagTestResult }>;

  /**
   *
   * @summary Modifies an existing Tenant
   * @param {string} id
   * @param {TenantResource} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApiInterface
   */
  updateTenant(
    id: string,
    body?: TenantResource,
    options?: any
  ): AxiosPromise<TenantResource>;

  /**
   *
   * @summary Updates the logo associated with the tenant.
   * @param {string} id ID of the Tenant to update the logo for
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApiInterface
   */
  updateTenantLogo(id: string, options?: any): AxiosPromise<void>;

  /**
   *
   * @summary Updates the logo associated with the tenant.
   * @param {string} id ID of the Tenant to update the logo for
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApiInterface
   */
  updateTenantLogoSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<void>;

  /**
   *
   * @summary Modifies an existing Tenant
   * @param {string} id
   * @param {string} baseSpaceId ID of the space
   * @param {TenantResource} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApiInterface
   */
  updateTenantSpaces(
    id: string,
    baseSpaceId: string,
    body?: TenantResource,
    options?: any
  ): AxiosPromise<TenantResource>;

  /**
   *
   * @summary Updates the variables associated with the tenant.
   * @param {string} id ID of the Tenant modify
   * @param {TenantVariableResource} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApiInterface
   */
  updateTenantVariables(
    id: string,
    body?: TenantVariableResource,
    options?: any
  ): AxiosPromise<TenantVariableResource>;

  /**
   *
   * @summary Updates the variables associated with the tenant.
   * @param {string} id ID of the Tenant modify
   * @param {string} baseSpaceId ID of the space
   * @param {TenantVariableResource} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApiInterface
   */
  updateTenantVariablesSpaces(
    id: string,
    baseSpaceId: string,
    body?: TenantVariableResource,
    options?: any
  ): AxiosPromise<TenantVariableResource>;
}

/**
 * TenantsApi - object-oriented interface
 * @export
 * @class TenantsApi
 * @extends {BaseAPI}
 */
export class TenantsApi extends BaseAPI implements TenantsApiInterface {
  /**
   * Creates a new Tenant, optionally cloning an existing tenant if the clone query string parameter is provided.
   * @summary Creates a new Tenant
   * @param {string} [clone] The ID of the Tenant to clone. Example: Tenants-101
   * @param {TenantResource} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApi
   */
  public createTenant(clone?: string, body?: TenantResource, options?: any) {
    return TenantsApiFp(this.configuration)
      .createTenant(clone, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Sets the logo associated with the tenant.
   * @param {string} id ID of the Tenant to set the logo for
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApi
   */
  public createTenantLogo(id: string, options?: any) {
    return TenantsApiFp(this.configuration)
      .createTenantLogo(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Sets the logo associated with the tenant.
   * @param {string} id ID of the Tenant to set the logo for
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApi
   */
  public createTenantLogoSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ) {
    return TenantsApiFp(this.configuration)
      .createTenantLogoSpaces(id, baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Creates a new Tenant, optionally cloning an existing tenant if the clone query string parameter is provided.
   * @summary Creates a new Tenant
   * @param {string} baseSpaceId ID of the space
   * @param {string} [clone] The ID of the Tenant to clone. Example: Tenants-101
   * @param {TenantResource} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApi
   */
  public createTenantSpaces(
    baseSpaceId: string,
    clone?: string,
    body?: TenantResource,
    options?: any
  ) {
    return TenantsApiFp(this.configuration)
      .createTenantSpaces(baseSpaceId, clone, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Creates the variables associated with the tenant.
   * @param {string} id ID of the Tenant to modify
   * @param {TenantVariableResource} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApi
   */
  public createTenantVariables(
    id: string,
    body?: TenantVariableResource,
    options?: any
  ) {
    return TenantsApiFp(this.configuration)
      .createTenantVariables(id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Creates the variables associated with the tenant.
   * @param {string} id ID of the Tenant to modify
   * @param {string} baseSpaceId ID of the space
   * @param {TenantVariableResource} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApi
   */
  public createTenantVariablesSpaces(
    id: string,
    baseSpaceId: string,
    body?: TenantVariableResource,
    options?: any
  ) {
    return TenantsApiFp(this.configuration)
      .createTenantVariablesSpaces(id, baseSpaceId, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Deletes an existing tenant.
   * @param {string} id ID of the Tenant to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApi
   */
  public deleteTenant(id: string, options?: any) {
    return TenantsApiFp(this.configuration)
      .deleteTenant(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Deletes an existing tenant.
   * @param {string} id ID of the Tenant to delete
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApi
   */
  public deleteTenantSpaces(id: string, baseSpaceId: string, options?: any) {
    return TenantsApiFp(this.configuration)
      .deleteTenantSpaces(id, baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Tenant by ID
   * @param {string} id ID of the Tenant to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApi
   */
  public getTenantById(id: string, options?: any) {
    return TenantsApiFp(this.configuration)
      .getTenantById(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Tenant by ID
   * @param {string} id ID of the Tenant to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApi
   */
  public getTenantByIdSpaces(id: string, baseSpaceId: string, options?: any) {
    return TenantsApiFp(this.configuration)
      .getTenantByIdSpaces(id, baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Gets the logo associated with the Tenant
   * @param {string} id ID of the Tenant to retrieve the logo for
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApi
   */
  public getTenantLogo(id: string, options?: any) {
    return TenantsApiFp(this.configuration)
      .getTenantLogo(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Gets the logo associated with the Tenant
   * @param {string} id ID of the Tenant to retrieve the logo for
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApi
   */
  public getTenantLogoSpaces(id: string, baseSpaceId: string, options?: any) {
    return TenantsApiFp(this.configuration)
      .getTenantLogoSpaces(id, baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Returns a list of tenants who are missing required variables
   * @param {string} [tenantId] An ID for a Tenant. If supplied, will limit the result to variables missing for the Tenant identified by the ID. Example: Tenants-101
   * @param {string} [projectId] A Project ID, to limit the set of inspected Tenants to those connected to a particular Project. Example: Projects-202
   * @param {string} [environmentId] An Environment ID, to limit the set of inspected Tenants to those connected to a particular Environment. Example: Environments-202
   * @param {boolean} [includeDetails] A switch to indicate whether missing variable details should be returned along with names
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApi
   */
  public getTenantVariablesMissing(
    tenantId?: string,
    projectId?: string,
    environmentId?: string,
    includeDetails?: boolean,
    options?: any
  ) {
    return TenantsApiFp(this.configuration)
      .getTenantVariablesMissing(
        tenantId,
        projectId,
        environmentId,
        includeDetails,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Returns a list of tenants who are missing required variables
   * @param {string} baseSpaceId ID of the space
   * @param {string} [tenantId] An ID for a Tenant. If supplied, will limit the result to variables missing for the Tenant identified by the ID. Example: Tenants-101
   * @param {string} [projectId] A Project ID, to limit the set of inspected Tenants to those connected to a particular Project. Example: Projects-202
   * @param {string} [environmentId] An Environment ID, to limit the set of inspected Tenants to those connected to a particular Environment. Example: Environments-202
   * @param {boolean} [includeDetails] A switch to indicate whether missing variable details should be returned along with names
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApi
   */
  public getTenantVariablesMissingSpaces(
    baseSpaceId: string,
    tenantId?: string,
    projectId?: string,
    environmentId?: string,
    includeDetails?: boolean,
    options?: any
  ) {
    return TenantsApiFp(this.configuration)
      .getTenantVariablesMissingSpaces(
        baseSpaceId,
        tenantId,
        projectId,
        environmentId,
        includeDetails,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * If multi-tenancy is enabled, \"Enabled\" will be true, otherwise it will be false.
   * @summary Reports back the status of multi-tenancy
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApi
   */
  public getTenantsConfiguration(options?: any) {
    return TenantsApiFp(this.configuration)
      .getTenantsConfiguration(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * If multi-tenancy is enabled, \"Enabled\" will be true, otherwise it will be false.
   * @summary Reports back the status of multi-tenancy
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApi
   */
  public getTenantsConfigurationSpaces(baseSpaceId: string, options?: any) {
    return TenantsApiFp(this.configuration)
      .getTenantsConfigurationSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Gets variables associated with the provided tenant ID.
   * @param {string} id Id of the Tenant to retrieve variables for
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApi
   */
  public getVariablesByTenantId(id: string, options?: any) {
    return TenantsApiFp(this.configuration)
      .getVariablesByTenantId(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Gets variables associated with the provided tenant ID.
   * @param {string} id Id of the Tenant to retrieve variables for
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApi
   */
  public getVariablesByTenantIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ) {
    return TenantsApiFp(this.configuration)
      .getVariablesByTenantIdSpaces(id, baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the tenants in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Lists all tenants
   * @param {Array<string>} [ids] A set of Tenant IDs to retrieve Tenants for. Example: Tenants-101,Tenants-201,Tenants-301
   * @param {string} [projectId] A Project ID, to limit the set of retrieved Tenants to those connected to a particular Project. Example: Projects-101
   * @param {Array<string>} [tags] A set of Tenant Tags, to limit the set of retrieved Tenants to those which are tagged with the specific tags. Example: Alpha,Beta,Stable
   * @param {string} [name] (Obsolete) A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment. Left for backwards compatibility.
   * @param {string} [partialName] A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApi
   */
  public listAllTenants(
    ids?: Array<string>,
    projectId?: string,
    tags?: Array<string>,
    name?: string,
    partialName?: string,
    options?: any
  ) {
    return TenantsApiFp(this.configuration)
      .listAllTenants(ids, projectId, tags, name, partialName, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the tenants in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Lists all tenants
   * @param {string} baseSpaceId ID of the space
   * @param {Array<string>} [ids] A set of Tenant IDs to retrieve Tenants for. Example: Tenants-101,Tenants-201,Tenants-301
   * @param {string} [projectId] A Project ID, to limit the set of retrieved Tenants to those connected to a particular Project. Example: Projects-101
   * @param {Array<string>} [tags] A set of Tenant Tags, to limit the set of retrieved Tenants to those which are tagged with the specific tags. Example: Alpha,Beta,Stable
   * @param {string} [name] (Obsolete) A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment. Left for backwards compatibility.
   * @param {string} [partialName] A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApi
   */
  public listAllTenantsSpaces(
    baseSpaceId: string,
    ids?: Array<string>,
    projectId?: string,
    tags?: Array<string>,
    name?: string,
    partialName?: string,
    options?: any
  ) {
    return TenantsApiFp(this.configuration)
      .listAllTenantsSpaces(
        baseSpaceId,
        ids,
        projectId,
        tags,
        name,
        partialName,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the tenants in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name, and returned 30 at a time.
   * @summary Gets a list of tenants
   * @param {string} [projectId] A Project ID, to limit the set of Tenants to those connected to a particular Project. Example: Projects-1
   * @param {Array<string>} [ids] A list of Tenant IDs, to limit the matching of Tenants to those with a particular ID. Example: [\&quot;Tenants-1\&quot;, \&quot;Tenants-2\&quot;]
   * @param {Array<string>} [tags] A set of Tenant Tags, to limit the set of retrieved Tenants to those which are tagged with the specific tags. Example: Alpha,Beta,Stable
   * @param {string} [name] (Obsolete) A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment. Left for backwards compatibility.
   * @param {string} [partialName] A partial name, to limit the set of Tenants to those with a name that includes the partial name
   * @param {string} [clonedFromTenantId] A Tenant ID, to limit the included Tenants to those cloned from that Tenant. Example: Tenants-1
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApi
   */
  public listTenants(
    projectId?: string,
    ids?: Array<string>,
    tags?: Array<string>,
    name?: string,
    partialName?: string,
    clonedFromTenantId?: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return TenantsApiFp(this.configuration)
      .listTenants(
        projectId,
        ids,
        tags,
        name,
        partialName,
        clonedFromTenantId,
        skip,
        take,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the tenants in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name, and returned 30 at a time.
   * @summary Gets a list of tenants
   * @param {string} baseSpaceId ID of the space
   * @param {string} [projectId] A Project ID, to limit the set of Tenants to those connected to a particular Project. Example: Projects-1
   * @param {Array<string>} [ids] A list of Tenant IDs, to limit the matching of Tenants to those with a particular ID. Example: [\&quot;Tenants-1\&quot;, \&quot;Tenants-2\&quot;]
   * @param {Array<string>} [tags] A set of Tenant Tags, to limit the set of retrieved Tenants to those which are tagged with the specific tags. Example: Alpha,Beta,Stable
   * @param {string} [name] (Obsolete) A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment. Left for backwards compatibility.
   * @param {string} [partialName] A partial name, to limit the set of Tenants to those with a name that includes the partial name
   * @param {string} [clonedFromTenantId] A Tenant ID, to limit the included Tenants to those cloned from that Tenant. Example: Tenants-1
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApi
   */
  public listTenantsSpaces(
    baseSpaceId: string,
    projectId?: string,
    ids?: Array<string>,
    tags?: Array<string>,
    name?: string,
    partialName?: string,
    clonedFromTenantId?: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return TenantsApiFp(this.configuration)
      .listTenantsSpaces(
        baseSpaceId,
        projectId,
        ids,
        tags,
        name,
        partialName,
        clonedFromTenantId,
        skip,
        take,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Checks tenants for matching tags
   * @param {Array<string>} [tenantIds] A list of Tenant IDs to limit the matching to, delimited by commas. Example: Tenants-1,Tenants-2,Tenants-3
   * @param {Array<string>} [tags] A list of Tenant Tags to limit the matching to, delimited by commas. Example: Alpha,Beta,Stable
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApi
   */
  public testTenantTag(
    tenantIds?: Array<string>,
    tags?: Array<string>,
    options?: any
  ) {
    return TenantsApiFp(this.configuration)
      .testTenantTag(tenantIds, tags, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Checks tenants for matching tags
   * @param {string} baseSpaceId ID of the space
   * @param {Array<string>} [tenantIds] A list of Tenant IDs to limit the matching to, delimited by commas. Example: Tenants-1,Tenants-2,Tenants-3
   * @param {Array<string>} [tags] A list of Tenant Tags to limit the matching to, delimited by commas. Example: Alpha,Beta,Stable
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApi
   */
  public testTenantTagSpaces(
    baseSpaceId: string,
    tenantIds?: Array<string>,
    tags?: Array<string>,
    options?: any
  ) {
    return TenantsApiFp(this.configuration)
      .testTenantTagSpaces(baseSpaceId, tenantIds, tags, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Modifies an existing Tenant
   * @param {string} id
   * @param {TenantResource} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApi
   */
  public updateTenant(id: string, body?: TenantResource, options?: any) {
    return TenantsApiFp(this.configuration)
      .updateTenant(id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Updates the logo associated with the tenant.
   * @param {string} id ID of the Tenant to update the logo for
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApi
   */
  public updateTenantLogo(id: string, options?: any) {
    return TenantsApiFp(this.configuration)
      .updateTenantLogo(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Updates the logo associated with the tenant.
   * @param {string} id ID of the Tenant to update the logo for
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApi
   */
  public updateTenantLogoSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ) {
    return TenantsApiFp(this.configuration)
      .updateTenantLogoSpaces(id, baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Modifies an existing Tenant
   * @param {string} id
   * @param {string} baseSpaceId ID of the space
   * @param {TenantResource} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApi
   */
  public updateTenantSpaces(
    id: string,
    baseSpaceId: string,
    body?: TenantResource,
    options?: any
  ) {
    return TenantsApiFp(this.configuration)
      .updateTenantSpaces(id, baseSpaceId, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Updates the variables associated with the tenant.
   * @param {string} id ID of the Tenant modify
   * @param {TenantVariableResource} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApi
   */
  public updateTenantVariables(
    id: string,
    body?: TenantVariableResource,
    options?: any
  ) {
    return TenantsApiFp(this.configuration)
      .updateTenantVariables(id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Updates the variables associated with the tenant.
   * @param {string} id ID of the Tenant modify
   * @param {string} baseSpaceId ID of the space
   * @param {TenantVariableResource} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantsApi
   */
  public updateTenantVariablesSpaces(
    id: string,
    baseSpaceId: string,
    body?: TenantVariableResource,
    options?: any
  ) {
    return TenantsApiFp(this.configuration)
      .updateTenantVariablesSpaces(id, baseSpaceId, body, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
