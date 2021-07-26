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
import { AccountResource } from "../model";
// @ts-ignore
import { AccountResourceCollection } from "../model";
// @ts-ignore
import { AccountUsageResource } from "../model";
// @ts-ignore
import { AzureEnvironmentResource } from "../model";
// @ts-ignore
import { AzureResourceGroupResource } from "../model";
// @ts-ignore
import { AzureStorageAccountResource } from "../model";
// @ts-ignore
import { AzureWebSiteResource } from "../model";
// @ts-ignore
import { AzureWebSiteSlotResource } from "../model";
/**
 * AccountsApi - axios parameter creator
 * @export
 */
export const AccountsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Creates a new account.
     * @summary Create a AccountResource
     * @param {AccountResource} [body] The AccountResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAccount: async (
      body?: AccountResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/accounts`;
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
     * Creates a new account.
     * @summary Create a AccountResource
     * @param {string} baseSpaceId ID of the space
     * @param {AccountResource} [body] The AccountResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAccountSpaces: async (
      baseSpaceId: string,
      body?: AccountResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("createAccountSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/accounts`.replace(
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
     * Deletes an existing account.
     * @summary Delete a AccountResource by ID
     * @param {string} id ID of the AccountResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAccount: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteAccount", "id", id);
      const localVarPath = `/accounts/{id}`.replace(
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
     * Deletes an existing account.
     * @summary Delete a AccountResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the AccountResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAccountSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("deleteAccountSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteAccountSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/accounts/{id}`
        .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)))
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
     * @summary Get an Account by ID
     * @param {string} id ID of the Account to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAccountById: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getAccountById", "id", id);
      const localVarPath = `/accounts/{id}`.replace(
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
     * @summary Get an Account by ID
     * @param {string} id ID of the Account to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAccountByIdSpaces: async (
      id: string,
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getAccountByIdSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getAccountByIdSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/accounts/{id}`
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
     * Downloads the public key portion of the account\'s associated certificate, if present.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAccountPublicKeyDownload: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getAccountPublicKeyDownload", "id", id);
      const localVarPath = `/accounts/{id}/pk`.replace(
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
     * Downloads the public key portion of the account\'s associated certificate, if present.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAccountPublicKeyDownloadSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getAccountPublicKeyDownloadSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getAccountPublicKeyDownloadSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/accounts/{id}/pk`
        .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)))
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
     * Lists projects and deployments which are using an account.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAccountUsageList: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getAccountUsageList", "id", id);
      const localVarPath = `/accounts/{id}/usages`.replace(
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
     * Lists projects and deployments which are using an account.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAccountUsageListSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getAccountUsageListSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getAccountUsageListSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/accounts/{id}/usages`
        .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)))
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
     * Lists the Azure Environments provided by the SDK
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAzureEnvironmentsList: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/accounts/azureenvironments`;
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
     * Lists the Resource Groups associated with an Azure account.
     * @param {string} id The account id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAzureResourceGroupsList: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getAzureResourceGroupsList", "id", id);
      const localVarPath = `/accounts/{id}/resourceGroups`.replace(
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
     * Lists the Resource Groups associated with an Azure account.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id The account id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAzureResourceGroupsListSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getAzureResourceGroupsListSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getAzureResourceGroupsListSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/accounts/{id}/resourceGroups`
        .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)))
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
     * Lists the storage accounts associated with an Azure account.
     * @param {string} id The account id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAzureStorageAccountsList: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getAzureStorageAccountsList", "id", id);
      const localVarPath = `/accounts/{id}/storageAccounts`.replace(
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
     * Lists the storage accounts associated with an Azure account.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id The account id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAzureStorageAccountsListSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getAzureStorageAccountsListSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getAzureStorageAccountsListSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/accounts/{id}/storageAccounts`
        .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)))
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
     * Lists the websites associated with an Azure account.
     * @param {string} id The account id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAzureWebSitesList: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getAzureWebSitesList", "id", id);
      const localVarPath = `/accounts/{id}/websites`.replace(
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
     * Lists the websites associated with an Azure account.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id The account id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAzureWebSitesListSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getAzureWebSitesListSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getAzureWebSitesListSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/accounts/{id}/websites`
        .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)))
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
     * Lists the slots associated with an Azure Web Site.
     * @param {string} id The account id
     * @param {string} resourceGroupName Azure resource group name
     * @param {string} webSiteName Website name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAzureWebSitesSlotList: async (
      id: string,
      resourceGroupName: string,
      webSiteName: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getAzureWebSitesSlotList", "id", id);
      // verify required parameter 'resourceGroupName' is not null or undefined
      assertParamExists(
        "getAzureWebSitesSlotList",
        "resourceGroupName",
        resourceGroupName
      );
      // verify required parameter 'webSiteName' is not null or undefined
      assertParamExists("getAzureWebSitesSlotList", "webSiteName", webSiteName);
      const localVarPath =
        `/accounts/{id}/{resourceGroupName}/websites/{webSiteName}/slots`
          .replace(`{${"id"}}`, encodeURIComponent(String(id)))
          .replace(
            `{${"resourceGroupName"}}`,
            encodeURIComponent(String(resourceGroupName))
          )
          .replace(
            `{${"webSiteName"}}`,
            encodeURIComponent(String(webSiteName))
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
     * Lists the slots associated with an Azure Web Site.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id The account id
     * @param {string} resourceGroupName Azure resource group name
     * @param {string} webSiteName Website name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAzureWebSitesSlotListSpaces: async (
      baseSpaceId: string,
      id: string,
      resourceGroupName: string,
      webSiteName: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getAzureWebSitesSlotListSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getAzureWebSitesSlotListSpaces", "id", id);
      // verify required parameter 'resourceGroupName' is not null or undefined
      assertParamExists(
        "getAzureWebSitesSlotListSpaces",
        "resourceGroupName",
        resourceGroupName
      );
      // verify required parameter 'webSiteName' is not null or undefined
      assertParamExists(
        "getAzureWebSitesSlotListSpaces",
        "webSiteName",
        webSiteName
      );
      const localVarPath =
        `/{baseSpaceId}/accounts/{id}/{resourceGroupName}/websites/{webSiteName}/slots`
          .replace(
            `{${"baseSpaceId"}}`,
            encodeURIComponent(String(baseSpaceId))
          )
          .replace(`{${"id"}}`, encodeURIComponent(String(id)))
          .replace(
            `{${"resourceGroupName"}}`,
            encodeURIComponent(String(resourceGroupName))
          )
          .replace(
            `{${"webSiteName"}}`,
            encodeURIComponent(String(webSiteName))
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
     * Lists accounts in the supplied Octopus Deploy Space in pages. The results will be sorted alphabetically by name.
     * @summary Get a list of AccountResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexAccounts: async (
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/accounts`;
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
     * Lists accounts in the supplied Octopus Deploy Space in pages. The results will be sorted alphabetically by name.
     * @summary Get a list of AccountResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexAccountsSpaces: async (
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("indexAccountsSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/accounts`.replace(
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
     * Lists all of the accounts in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of Accounts
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllAccounts: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/accounts/all`;
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
     * Lists all of the accounts in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of Accounts
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllAccountsSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("listAllAccountsSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/accounts/all`.replace(
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
     * Modifies an existing account.
     * @summary Modify a AccountResource by ID
     * @param {string} id ID of the AccountResource to modify
     * @param {AccountResource} [body] The AccountResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateAccount: async (
      id: string,
      body?: AccountResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateAccount", "id", id);
      const localVarPath = `/accounts/{id}`.replace(
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
     * Modifies an existing account.
     * @summary Modify a AccountResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the AccountResource to modify
     * @param {AccountResource} [body] The AccountResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateAccountSpaces: async (
      baseSpaceId: string,
      id: string,
      body?: AccountResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("updateAccountSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateAccountSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/accounts/{id}`
        .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)))
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
 * AccountsApi - functional programming interface
 * @export
 */
export const AccountsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = AccountsApiAxiosParamCreator(configuration);
  return {
    /**
     * Creates a new account.
     * @summary Create a AccountResource
     * @param {AccountResource} [body] The AccountResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createAccount(
      body?: AccountResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<AccountResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createAccount(
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
     * Creates a new account.
     * @summary Create a AccountResource
     * @param {string} baseSpaceId ID of the space
     * @param {AccountResource} [body] The AccountResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createAccountSpaces(
      baseSpaceId: string,
      body?: AccountResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<AccountResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createAccountSpaces(
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
     * Deletes an existing account.
     * @summary Delete a AccountResource by ID
     * @param {string} id ID of the AccountResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteAccount(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteAccount(
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
     * Deletes an existing account.
     * @summary Delete a AccountResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the AccountResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteAccountSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deleteAccountSpaces(
          baseSpaceId,
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
     * @summary Get an Account by ID
     * @param {string} id ID of the Account to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAccountById(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<AccountResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getAccountById(
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
     * @summary Get an Account by ID
     * @param {string} id ID of the Account to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAccountByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<AccountResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getAccountByIdSpaces(
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
     * Downloads the public key portion of the account\'s associated certificate, if present.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAccountPublicKeyDownload(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getAccountPublicKeyDownload(
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
     * Downloads the public key portion of the account\'s associated certificate, if present.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAccountPublicKeyDownloadSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getAccountPublicKeyDownloadSpaces(
          baseSpaceId,
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
     * Lists projects and deployments which are using an account.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAccountUsageList(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<AccountUsageResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getAccountUsageList(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Lists projects and deployments which are using an account.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAccountUsageListSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<AccountUsageResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getAccountUsageListSpaces(
          baseSpaceId,
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
     * Lists the Azure Environments provided by the SDK
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAzureEnvironmentsList(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<AzureEnvironmentResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getAzureEnvironmentsList(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Lists the Resource Groups associated with an Azure account.
     * @param {string} id The account id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAzureResourceGroupsList(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<AzureResourceGroupResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getAzureResourceGroupsList(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Lists the Resource Groups associated with an Azure account.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id The account id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAzureResourceGroupsListSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<AzureResourceGroupResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getAzureResourceGroupsListSpaces(
          baseSpaceId,
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
     * Lists the storage accounts associated with an Azure account.
     * @param {string} id The account id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAzureStorageAccountsList(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<AzureStorageAccountResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getAzureStorageAccountsList(
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
     * Lists the storage accounts associated with an Azure account.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id The account id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAzureStorageAccountsListSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<AzureStorageAccountResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getAzureStorageAccountsListSpaces(
          baseSpaceId,
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
     * Lists the websites associated with an Azure account.
     * @param {string} id The account id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAzureWebSitesList(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<AzureWebSiteResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getAzureWebSitesList(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Lists the websites associated with an Azure account.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id The account id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAzureWebSitesListSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<AzureWebSiteResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getAzureWebSitesListSpaces(
          baseSpaceId,
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
     * Lists the slots associated with an Azure Web Site.
     * @param {string} id The account id
     * @param {string} resourceGroupName Azure resource group name
     * @param {string} webSiteName Website name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAzureWebSitesSlotList(
      id: string,
      resourceGroupName: string,
      webSiteName: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<AzureWebSiteSlotResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getAzureWebSitesSlotList(
          id,
          resourceGroupName,
          webSiteName,
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
     * Lists the slots associated with an Azure Web Site.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id The account id
     * @param {string} resourceGroupName Azure resource group name
     * @param {string} webSiteName Website name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAzureWebSitesSlotListSpaces(
      baseSpaceId: string,
      id: string,
      resourceGroupName: string,
      webSiteName: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<AzureWebSiteSlotResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getAzureWebSitesSlotListSpaces(
          baseSpaceId,
          id,
          resourceGroupName,
          webSiteName,
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
     * Lists accounts in the supplied Octopus Deploy Space in pages. The results will be sorted alphabetically by name.
     * @summary Get a list of AccountResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexAccounts(
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<AccountResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexAccounts(
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
     * Lists accounts in the supplied Octopus Deploy Space in pages. The results will be sorted alphabetically by name.
     * @summary Get a list of AccountResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexAccountsSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<AccountResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.indexAccountsSpaces(
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
     * Lists all of the accounts in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of Accounts
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllAccounts(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<AccountResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listAllAccounts(
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
     * Lists all of the accounts in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of Accounts
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllAccountsSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<AccountResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listAllAccountsSpaces(
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
     * Modifies an existing account.
     * @summary Modify a AccountResource by ID
     * @param {string} id ID of the AccountResource to modify
     * @param {AccountResource} [body] The AccountResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateAccount(
      id: string,
      body?: AccountResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<AccountResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateAccount(
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
     * Modifies an existing account.
     * @summary Modify a AccountResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the AccountResource to modify
     * @param {AccountResource} [body] The AccountResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateAccountSpaces(
      baseSpaceId: string,
      id: string,
      body?: AccountResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<AccountResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateAccountSpaces(
          baseSpaceId,
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
  };
};

/**
 * AccountsApi - factory interface
 * @export
 */
export const AccountsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = AccountsApiFp(configuration);
  return {
    /**
     * Creates a new account.
     * @summary Create a AccountResource
     * @param {AccountResource} [body] The AccountResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAccount(
      body?: AccountResource,
      options?: any
    ): AxiosPromise<AccountResource> {
      return localVarFp
        .createAccount(body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Creates a new account.
     * @summary Create a AccountResource
     * @param {string} baseSpaceId ID of the space
     * @param {AccountResource} [body] The AccountResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAccountSpaces(
      baseSpaceId: string,
      body?: AccountResource,
      options?: any
    ): AxiosPromise<AccountResource> {
      return localVarFp
        .createAccountSpaces(baseSpaceId, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing account.
     * @summary Delete a AccountResource by ID
     * @param {string} id ID of the AccountResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAccount(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .deleteAccount(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing account.
     * @summary Delete a AccountResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the AccountResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAccountSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .deleteAccountSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get an Account by ID
     * @param {string} id ID of the Account to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAccountById(id: string, options?: any): AxiosPromise<AccountResource> {
      return localVarFp
        .getAccountById(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get an Account by ID
     * @param {string} id ID of the Account to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAccountByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<AccountResource> {
      return localVarFp
        .getAccountByIdSpaces(id, baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Downloads the public key portion of the account\'s associated certificate, if present.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAccountPublicKeyDownload(id: string, options?: any): AxiosPromise<any> {
      return localVarFp
        .getAccountPublicKeyDownload(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Downloads the public key portion of the account\'s associated certificate, if present.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAccountPublicKeyDownloadSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<any> {
      return localVarFp
        .getAccountPublicKeyDownloadSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists projects and deployments which are using an account.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAccountUsageList(
      id: string,
      options?: any
    ): AxiosPromise<AccountUsageResource> {
      return localVarFp
        .getAccountUsageList(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists projects and deployments which are using an account.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAccountUsageListSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<AccountUsageResource> {
      return localVarFp
        .getAccountUsageListSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists the Azure Environments provided by the SDK
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAzureEnvironmentsList(
      options?: any
    ): AxiosPromise<Array<AzureEnvironmentResource>> {
      return localVarFp
        .getAzureEnvironmentsList(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists the Resource Groups associated with an Azure account.
     * @param {string} id The account id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAzureResourceGroupsList(
      id: string,
      options?: any
    ): AxiosPromise<Array<AzureResourceGroupResource>> {
      return localVarFp
        .getAzureResourceGroupsList(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists the Resource Groups associated with an Azure account.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id The account id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAzureResourceGroupsListSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<Array<AzureResourceGroupResource>> {
      return localVarFp
        .getAzureResourceGroupsListSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists the storage accounts associated with an Azure account.
     * @param {string} id The account id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAzureStorageAccountsList(
      id: string,
      options?: any
    ): AxiosPromise<Array<AzureStorageAccountResource>> {
      return localVarFp
        .getAzureStorageAccountsList(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists the storage accounts associated with an Azure account.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id The account id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAzureStorageAccountsListSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<Array<AzureStorageAccountResource>> {
      return localVarFp
        .getAzureStorageAccountsListSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists the websites associated with an Azure account.
     * @param {string} id The account id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAzureWebSitesList(
      id: string,
      options?: any
    ): AxiosPromise<Array<AzureWebSiteResource>> {
      return localVarFp
        .getAzureWebSitesList(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists the websites associated with an Azure account.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id The account id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAzureWebSitesListSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<Array<AzureWebSiteResource>> {
      return localVarFp
        .getAzureWebSitesListSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists the slots associated with an Azure Web Site.
     * @param {string} id The account id
     * @param {string} resourceGroupName Azure resource group name
     * @param {string} webSiteName Website name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAzureWebSitesSlotList(
      id: string,
      resourceGroupName: string,
      webSiteName: string,
      options?: any
    ): AxiosPromise<Array<AzureWebSiteSlotResource>> {
      return localVarFp
        .getAzureWebSitesSlotList(id, resourceGroupName, webSiteName, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists the slots associated with an Azure Web Site.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id The account id
     * @param {string} resourceGroupName Azure resource group name
     * @param {string} webSiteName Website name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAzureWebSitesSlotListSpaces(
      baseSpaceId: string,
      id: string,
      resourceGroupName: string,
      webSiteName: string,
      options?: any
    ): AxiosPromise<Array<AzureWebSiteSlotResource>> {
      return localVarFp
        .getAzureWebSitesSlotListSpaces(
          baseSpaceId,
          id,
          resourceGroupName,
          webSiteName,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists accounts in the supplied Octopus Deploy Space in pages. The results will be sorted alphabetically by name.
     * @summary Get a list of AccountResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexAccounts(
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<AccountResourceCollection> {
      return localVarFp
        .indexAccounts(skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists accounts in the supplied Octopus Deploy Space in pages. The results will be sorted alphabetically by name.
     * @summary Get a list of AccountResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexAccountsSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<AccountResourceCollection> {
      return localVarFp
        .indexAccountsSpaces(baseSpaceId, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the accounts in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of Accounts
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllAccounts(options?: any): AxiosPromise<Array<AccountResource>> {
      return localVarFp
        .listAllAccounts(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the accounts in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of Accounts
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllAccountsSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<Array<AccountResource>> {
      return localVarFp
        .listAllAccountsSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies an existing account.
     * @summary Modify a AccountResource by ID
     * @param {string} id ID of the AccountResource to modify
     * @param {AccountResource} [body] The AccountResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateAccount(
      id: string,
      body?: AccountResource,
      options?: any
    ): AxiosPromise<AccountResource> {
      return localVarFp
        .updateAccount(id, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies an existing account.
     * @summary Modify a AccountResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the AccountResource to modify
     * @param {AccountResource} [body] The AccountResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateAccountSpaces(
      baseSpaceId: string,
      id: string,
      body?: AccountResource,
      options?: any
    ): AxiosPromise<AccountResource> {
      return localVarFp
        .updateAccountSpaces(baseSpaceId, id, body, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * AccountsApi - object-oriented interface
 * @export
 * @class AccountsApi
 * @extends {BaseAPI}
 */
export class AccountsApi extends BaseAPI {
  /**
   * Creates a new account.
   * @summary Create a AccountResource
   * @param {AccountResource} [body] The AccountResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountsApi
   */
  public createAccount(body?: AccountResource, options?: any) {
    return AccountsApiFp(this.configuration)
      .createAccount(body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Creates a new account.
   * @summary Create a AccountResource
   * @param {string} baseSpaceId ID of the space
   * @param {AccountResource} [body] The AccountResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountsApi
   */
  public createAccountSpaces(
    baseSpaceId: string,
    body?: AccountResource,
    options?: any
  ) {
    return AccountsApiFp(this.configuration)
      .createAccountSpaces(baseSpaceId, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing account.
   * @summary Delete a AccountResource by ID
   * @param {string} id ID of the AccountResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountsApi
   */
  public deleteAccount(id: string, options?: any) {
    return AccountsApiFp(this.configuration)
      .deleteAccount(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing account.
   * @summary Delete a AccountResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the AccountResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountsApi
   */
  public deleteAccountSpaces(baseSpaceId: string, id: string, options?: any) {
    return AccountsApiFp(this.configuration)
      .deleteAccountSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get an Account by ID
   * @param {string} id ID of the Account to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountsApi
   */
  public getAccountById(id: string, options?: any) {
    return AccountsApiFp(this.configuration)
      .getAccountById(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get an Account by ID
   * @param {string} id ID of the Account to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountsApi
   */
  public getAccountByIdSpaces(id: string, baseSpaceId: string, options?: any) {
    return AccountsApiFp(this.configuration)
      .getAccountByIdSpaces(id, baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Downloads the public key portion of the account\'s associated certificate, if present.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountsApi
   */
  public getAccountPublicKeyDownload(id: string, options?: any) {
    return AccountsApiFp(this.configuration)
      .getAccountPublicKeyDownload(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Downloads the public key portion of the account\'s associated certificate, if present.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountsApi
   */
  public getAccountPublicKeyDownloadSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return AccountsApiFp(this.configuration)
      .getAccountPublicKeyDownloadSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists projects and deployments which are using an account.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountsApi
   */
  public getAccountUsageList(id: string, options?: any) {
    return AccountsApiFp(this.configuration)
      .getAccountUsageList(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists projects and deployments which are using an account.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountsApi
   */
  public getAccountUsageListSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return AccountsApiFp(this.configuration)
      .getAccountUsageListSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists the Azure Environments provided by the SDK
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountsApi
   */
  public getAzureEnvironmentsList(options?: any) {
    return AccountsApiFp(this.configuration)
      .getAzureEnvironmentsList(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists the Resource Groups associated with an Azure account.
   * @param {string} id The account id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountsApi
   */
  public getAzureResourceGroupsList(id: string, options?: any) {
    return AccountsApiFp(this.configuration)
      .getAzureResourceGroupsList(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists the Resource Groups associated with an Azure account.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id The account id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountsApi
   */
  public getAzureResourceGroupsListSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return AccountsApiFp(this.configuration)
      .getAzureResourceGroupsListSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists the storage accounts associated with an Azure account.
   * @param {string} id The account id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountsApi
   */
  public getAzureStorageAccountsList(id: string, options?: any) {
    return AccountsApiFp(this.configuration)
      .getAzureStorageAccountsList(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists the storage accounts associated with an Azure account.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id The account id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountsApi
   */
  public getAzureStorageAccountsListSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return AccountsApiFp(this.configuration)
      .getAzureStorageAccountsListSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists the websites associated with an Azure account.
   * @param {string} id The account id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountsApi
   */
  public getAzureWebSitesList(id: string, options?: any) {
    return AccountsApiFp(this.configuration)
      .getAzureWebSitesList(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists the websites associated with an Azure account.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id The account id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountsApi
   */
  public getAzureWebSitesListSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return AccountsApiFp(this.configuration)
      .getAzureWebSitesListSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists the slots associated with an Azure Web Site.
   * @param {string} id The account id
   * @param {string} resourceGroupName Azure resource group name
   * @param {string} webSiteName Website name
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountsApi
   */
  public getAzureWebSitesSlotList(
    id: string,
    resourceGroupName: string,
    webSiteName: string,
    options?: any
  ) {
    return AccountsApiFp(this.configuration)
      .getAzureWebSitesSlotList(id, resourceGroupName, webSiteName, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists the slots associated with an Azure Web Site.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id The account id
   * @param {string} resourceGroupName Azure resource group name
   * @param {string} webSiteName Website name
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountsApi
   */
  public getAzureWebSitesSlotListSpaces(
    baseSpaceId: string,
    id: string,
    resourceGroupName: string,
    webSiteName: string,
    options?: any
  ) {
    return AccountsApiFp(this.configuration)
      .getAzureWebSitesSlotListSpaces(
        baseSpaceId,
        id,
        resourceGroupName,
        webSiteName,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists accounts in the supplied Octopus Deploy Space in pages. The results will be sorted alphabetically by name.
   * @summary Get a list of AccountResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountsApi
   */
  public indexAccounts(skip?: number, take?: number, options?: any) {
    return AccountsApiFp(this.configuration)
      .indexAccounts(skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists accounts in the supplied Octopus Deploy Space in pages. The results will be sorted alphabetically by name.
   * @summary Get a list of AccountResources
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountsApi
   */
  public indexAccountsSpaces(
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return AccountsApiFp(this.configuration)
      .indexAccountsSpaces(baseSpaceId, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the accounts in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of Accounts
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountsApi
   */
  public listAllAccounts(options?: any) {
    return AccountsApiFp(this.configuration)
      .listAllAccounts(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the accounts in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of Accounts
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountsApi
   */
  public listAllAccountsSpaces(baseSpaceId: string, options?: any) {
    return AccountsApiFp(this.configuration)
      .listAllAccountsSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies an existing account.
   * @summary Modify a AccountResource by ID
   * @param {string} id ID of the AccountResource to modify
   * @param {AccountResource} [body] The AccountResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountsApi
   */
  public updateAccount(id: string, body?: AccountResource, options?: any) {
    return AccountsApiFp(this.configuration)
      .updateAccount(id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies an existing account.
   * @summary Modify a AccountResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the AccountResource to modify
   * @param {AccountResource} [body] The AccountResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountsApi
   */
  public updateAccountSpaces(
    baseSpaceId: string,
    id: string,
    body?: AccountResource,
    options?: any
  ) {
    return AccountsApiFp(this.configuration)
      .updateAccountSpaces(baseSpaceId, id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
