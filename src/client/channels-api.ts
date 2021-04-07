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
import { ChannelResource } from "../model";
// @ts-ignore
import { ChannelResourceCollection } from "../model";
// @ts-ignore
import { ReleaseResourceCollection } from "../model";
/**
 * ChannelsApi - axios parameter creator
 * @export
 */
export const ChannelsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Creates a new channel
     * @summary Create a ChannelResource
     * @param {ChannelResource} [body] The ChannelResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createChannel: async (
      body?: ChannelResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/channels`;
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
     * Creates a new channel
     * @summary Create a ChannelResource
     * @param {string} baseSpaceId ID of the space
     * @param {ChannelResource} [body] The ChannelResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createChannelSpaces: async (
      baseSpaceId: string,
      body?: ChannelResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("createChannelSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/channels`.replace(
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
     * Perform channel version rule test against provided package version
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createVersionRuleTest: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/channels/rule-test`;
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
     * Perform channel version rule test against provided package version
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createVersionRuleTestSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "createVersionRuleTestSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/channels/rule-test`.replace(
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
     * Deletes an existing channel.
     * @summary Delete a ChannelResource by ID
     * @param {string} id ID of the ChannelResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteChannel: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteChannel", "id", id);
      const localVarPath = `/channels/{id}`.replace(
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
     * Deletes an existing channel.
     * @summary Delete a ChannelResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ChannelResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteChannelSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("deleteChannelSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteChannelSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/channels/{id}`
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
     * @summary Get a Channel by ID
     * @param {string} id ID of the Channel to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getChannelById: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getChannelById", "id", id);
      const localVarPath = `/channels/{id}`.replace(
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
     * @summary Get a Channel by ID
     * @param {string} id ID of the Channel to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getChannelByIdSpaces: async (
      id: string,
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getChannelByIdSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getChannelByIdSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/channels/{id}`
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
     * Perform channel version rule test against provided package version
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getVersionRuleTest: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/channels/rule-test`;
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
     * Perform channel version rule test against provided package version
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getVersionRuleTestSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getVersionRuleTestSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/channels/rule-test`.replace(
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
     * Lists all of the releases that belong to the given channel. Releases will be ordered from most recent to least recent.
     * @summary Get a list of ReleaseResources for the given ChannelResource
     * @param {string} id ID of the Channel
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexChannelReleases: async (
      id: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("indexChannelReleases", "id", id);
      const localVarPath = `/channels/{id}/releases`.replace(
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
     * Lists all of the releases that belong to the given channel. Releases will be ordered from most recent to least recent.
     * @summary Get a list of ReleaseResources for the given ChannelResource
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the Channel
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexChannelReleasesSpaces: async (
      baseSpaceId: string,
      id: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "indexChannelReleasesSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("indexChannelReleasesSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/channels/{id}/releases`
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
     * Lists all of the channels in the supplied Octopus Deploy Space, from all projects, sorted by name.
     * @summary Get a list of ChannelResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexChannels: async (
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/channels`;
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
     * Lists all of the channels in the supplied Octopus Deploy Space, from all projects, sorted by name.
     * @summary Get a list of ChannelResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexChannelsSpaces: async (
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("indexChannelsSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/channels`.replace(
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
     * Lists all the channels for the given project
     * @summary Get a list of ChannelResources for the given ProjectResource
     * @param {string} id ID of the Project
     * @param {string} [partialName] A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProjectChannels: async (
      id: string,
      partialName?: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("indexProjectChannels", "id", id);
      const localVarPath = `/projects/{id}/channels`.replace(
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
     * Lists all the channels for the given project
     * @summary Get a list of ChannelResources for the given ProjectResource
     * @param {string} id ID of the Project
     * @param {string} baseSpaceId ID of the space
     * @param {string} [partialName] A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProjectChannelsSpaces: async (
      id: string,
      baseSpaceId: string,
      partialName?: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("indexProjectChannelsSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "indexProjectChannelsSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/projects/{id}/channels`
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
     * Lists all of the channels in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of Channels
     * @param {Array<string>} [ids] A set of Channel IDs to retrieve Channels for. Example: Channel-101,Channel-201
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllChannels: async (
      ids?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/channels/all`;
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
     * Lists all of the channels in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of Channels
     * @param {string} baseSpaceId ID of the space
     * @param {Array<string>} [ids] A set of Channel IDs to retrieve Channels for. Example: Channel-101,Channel-201
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllChannelsSpaces: async (
      baseSpaceId: string,
      ids?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("listAllChannelsSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/channels/all`.replace(
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
     * Updates an existing channel
     * @summary Modify a ChannelResource by ID
     * @param {string} id ID of the ChannelResource to modify
     * @param {ChannelResource} [body] The ChannelResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateChannel: async (
      id: string,
      body?: ChannelResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateChannel", "id", id);
      const localVarPath = `/channels/{id}`.replace(
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
     * Updates an existing channel
     * @summary Modify a ChannelResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ChannelResource to modify
     * @param {ChannelResource} [body] The ChannelResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateChannelSpaces: async (
      baseSpaceId: string,
      id: string,
      body?: ChannelResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("updateChannelSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateChannelSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/channels/{id}`
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
 * ChannelsApi - functional programming interface
 * @export
 */
export const ChannelsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ChannelsApiAxiosParamCreator(configuration);
  return {
    /**
     * Creates a new channel
     * @summary Create a ChannelResource
     * @param {ChannelResource} [body] The ChannelResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createChannel(
      body?: ChannelResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ChannelResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createChannel(
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
     * Creates a new channel
     * @summary Create a ChannelResource
     * @param {string} baseSpaceId ID of the space
     * @param {ChannelResource} [body] The ChannelResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createChannelSpaces(
      baseSpaceId: string,
      body?: ChannelResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ChannelResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createChannelSpaces(
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
     * Perform channel version rule test against provided package version
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createVersionRuleTest(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createVersionRuleTest(
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
     * Perform channel version rule test against provided package version
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createVersionRuleTestSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createVersionRuleTestSpaces(
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
     * Deletes an existing channel.
     * @summary Delete a ChannelResource by ID
     * @param {string} id ID of the ChannelResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteChannel(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteChannel(
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
     * Deletes an existing channel.
     * @summary Delete a ChannelResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ChannelResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteChannelSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteChannelSpaces(
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
     * @summary Get a Channel by ID
     * @param {string} id ID of the Channel to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getChannelById(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ChannelResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getChannelById(
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
     * @summary Get a Channel by ID
     * @param {string} id ID of the Channel to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getChannelByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ChannelResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getChannelByIdSpaces(
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
     * Perform channel version rule test against provided package version
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getVersionRuleTest(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getVersionRuleTest(
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
     * Perform channel version rule test against provided package version
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getVersionRuleTestSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getVersionRuleTestSpaces(
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
     * Lists all of the releases that belong to the given channel. Releases will be ordered from most recent to least recent.
     * @summary Get a list of ReleaseResources for the given ChannelResource
     * @param {string} id ID of the Channel
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexChannelReleases(
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ReleaseResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexChannelReleases(
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
     * Lists all of the releases that belong to the given channel. Releases will be ordered from most recent to least recent.
     * @summary Get a list of ReleaseResources for the given ChannelResource
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the Channel
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexChannelReleasesSpaces(
      baseSpaceId: string,
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ReleaseResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexChannelReleasesSpaces(
        baseSpaceId,
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
     * Lists all of the channels in the supplied Octopus Deploy Space, from all projects, sorted by name.
     * @summary Get a list of ChannelResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexChannels(
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ChannelResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexChannels(
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
     * Lists all of the channels in the supplied Octopus Deploy Space, from all projects, sorted by name.
     * @summary Get a list of ChannelResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexChannelsSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ChannelResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexChannelsSpaces(
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
     * Lists all the channels for the given project
     * @summary Get a list of ChannelResources for the given ProjectResource
     * @param {string} id ID of the Project
     * @param {string} [partialName] A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexProjectChannels(
      id: string,
      partialName?: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ChannelResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexProjectChannels(
        id,
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
     * Lists all the channels for the given project
     * @summary Get a list of ChannelResources for the given ProjectResource
     * @param {string} id ID of the Project
     * @param {string} baseSpaceId ID of the space
     * @param {string} [partialName] A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexProjectChannelsSpaces(
      id: string,
      baseSpaceId: string,
      partialName?: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ChannelResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexProjectChannelsSpaces(
        id,
        baseSpaceId,
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
     * Lists all of the channels in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of Channels
     * @param {Array<string>} [ids] A set of Channel IDs to retrieve Channels for. Example: Channel-101,Channel-201
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllChannels(
      ids?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<ChannelResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listAllChannels(
        ids,
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
     * Lists all of the channels in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of Channels
     * @param {string} baseSpaceId ID of the space
     * @param {Array<string>} [ids] A set of Channel IDs to retrieve Channels for. Example: Channel-101,Channel-201
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllChannelsSpaces(
      baseSpaceId: string,
      ids?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<ChannelResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listAllChannelsSpaces(
        baseSpaceId,
        ids,
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
     * Updates an existing channel
     * @summary Modify a ChannelResource by ID
     * @param {string} id ID of the ChannelResource to modify
     * @param {ChannelResource} [body] The ChannelResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateChannel(
      id: string,
      body?: ChannelResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ChannelResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateChannel(
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
     * Updates an existing channel
     * @summary Modify a ChannelResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ChannelResource to modify
     * @param {ChannelResource} [body] The ChannelResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateChannelSpaces(
      baseSpaceId: string,
      id: string,
      body?: ChannelResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ChannelResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateChannelSpaces(
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
 * ChannelsApi - factory interface
 * @export
 */
export const ChannelsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = ChannelsApiFp(configuration);
  return {
    /**
     * Creates a new channel
     * @summary Create a ChannelResource
     * @param {ChannelResource} [body] The ChannelResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createChannel(
      body?: ChannelResource,
      options?: any
    ): AxiosPromise<ChannelResource> {
      return localVarFp
        .createChannel(body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Creates a new channel
     * @summary Create a ChannelResource
     * @param {string} baseSpaceId ID of the space
     * @param {ChannelResource} [body] The ChannelResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createChannelSpaces(
      baseSpaceId: string,
      body?: ChannelResource,
      options?: any
    ): AxiosPromise<ChannelResource> {
      return localVarFp
        .createChannelSpaces(baseSpaceId, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Perform channel version rule test against provided package version
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createVersionRuleTest(options?: any): AxiosPromise<void> {
      return localVarFp
        .createVersionRuleTest(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Perform channel version rule test against provided package version
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createVersionRuleTestSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .createVersionRuleTestSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing channel.
     * @summary Delete a ChannelResource by ID
     * @param {string} id ID of the ChannelResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteChannel(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .deleteChannel(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing channel.
     * @summary Delete a ChannelResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ChannelResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteChannelSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .deleteChannelSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Channel by ID
     * @param {string} id ID of the Channel to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getChannelById(id: string, options?: any): AxiosPromise<ChannelResource> {
      return localVarFp
        .getChannelById(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Channel by ID
     * @param {string} id ID of the Channel to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getChannelByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<ChannelResource> {
      return localVarFp
        .getChannelByIdSpaces(id, baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Perform channel version rule test against provided package version
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getVersionRuleTest(options?: any): AxiosPromise<void> {
      return localVarFp
        .getVersionRuleTest(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Perform channel version rule test against provided package version
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getVersionRuleTestSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .getVersionRuleTestSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the releases that belong to the given channel. Releases will be ordered from most recent to least recent.
     * @summary Get a list of ReleaseResources for the given ChannelResource
     * @param {string} id ID of the Channel
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexChannelReleases(
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<ReleaseResourceCollection> {
      return localVarFp
        .indexChannelReleases(id, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the releases that belong to the given channel. Releases will be ordered from most recent to least recent.
     * @summary Get a list of ReleaseResources for the given ChannelResource
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the Channel
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexChannelReleasesSpaces(
      baseSpaceId: string,
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<ReleaseResourceCollection> {
      return localVarFp
        .indexChannelReleasesSpaces(baseSpaceId, id, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the channels in the supplied Octopus Deploy Space, from all projects, sorted by name.
     * @summary Get a list of ChannelResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexChannels(
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<ChannelResourceCollection> {
      return localVarFp
        .indexChannels(skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the channels in the supplied Octopus Deploy Space, from all projects, sorted by name.
     * @summary Get a list of ChannelResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexChannelsSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<ChannelResourceCollection> {
      return localVarFp
        .indexChannelsSpaces(baseSpaceId, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all the channels for the given project
     * @summary Get a list of ChannelResources for the given ProjectResource
     * @param {string} id ID of the Project
     * @param {string} [partialName] A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProjectChannels(
      id: string,
      partialName?: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<ChannelResourceCollection> {
      return localVarFp
        .indexProjectChannels(id, partialName, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all the channels for the given project
     * @summary Get a list of ChannelResources for the given ProjectResource
     * @param {string} id ID of the Project
     * @param {string} baseSpaceId ID of the space
     * @param {string} [partialName] A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProjectChannelsSpaces(
      id: string,
      baseSpaceId: string,
      partialName?: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<ChannelResourceCollection> {
      return localVarFp
        .indexProjectChannelsSpaces(
          id,
          baseSpaceId,
          partialName,
          skip,
          take,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the channels in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of Channels
     * @param {Array<string>} [ids] A set of Channel IDs to retrieve Channels for. Example: Channel-101,Channel-201
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllChannels(
      ids?: Array<string>,
      options?: any
    ): AxiosPromise<Array<ChannelResource>> {
      return localVarFp
        .listAllChannels(ids, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the channels in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of Channels
     * @param {string} baseSpaceId ID of the space
     * @param {Array<string>} [ids] A set of Channel IDs to retrieve Channels for. Example: Channel-101,Channel-201
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllChannelsSpaces(
      baseSpaceId: string,
      ids?: Array<string>,
      options?: any
    ): AxiosPromise<Array<ChannelResource>> {
      return localVarFp
        .listAllChannelsSpaces(baseSpaceId, ids, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Updates an existing channel
     * @summary Modify a ChannelResource by ID
     * @param {string} id ID of the ChannelResource to modify
     * @param {ChannelResource} [body] The ChannelResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateChannel(
      id: string,
      body?: ChannelResource,
      options?: any
    ): AxiosPromise<ChannelResource> {
      return localVarFp
        .updateChannel(id, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Updates an existing channel
     * @summary Modify a ChannelResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ChannelResource to modify
     * @param {ChannelResource} [body] The ChannelResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateChannelSpaces(
      baseSpaceId: string,
      id: string,
      body?: ChannelResource,
      options?: any
    ): AxiosPromise<ChannelResource> {
      return localVarFp
        .updateChannelSpaces(baseSpaceId, id, body, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * ChannelsApi - interface
 * @export
 * @interface ChannelsApi
 */
export interface ChannelsApiInterface {
  /**
   * Creates a new channel
   * @summary Create a ChannelResource
   * @param {ChannelResource} [body] The ChannelResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApiInterface
   */
  createChannel(
    body?: ChannelResource,
    options?: any
  ): AxiosPromise<ChannelResource>;

  /**
   * Creates a new channel
   * @summary Create a ChannelResource
   * @param {string} baseSpaceId ID of the space
   * @param {ChannelResource} [body] The ChannelResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApiInterface
   */
  createChannelSpaces(
    baseSpaceId: string,
    body?: ChannelResource,
    options?: any
  ): AxiosPromise<ChannelResource>;

  /**
   * Perform channel version rule test against provided package version
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApiInterface
   */
  createVersionRuleTest(options?: any): AxiosPromise<void>;

  /**
   * Perform channel version rule test against provided package version
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApiInterface
   */
  createVersionRuleTestSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<void>;

  /**
   * Deletes an existing channel.
   * @summary Delete a ChannelResource by ID
   * @param {string} id ID of the ChannelResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApiInterface
   */
  deleteChannel(id: string, options?: any): AxiosPromise<void>;

  /**
   * Deletes an existing channel.
   * @summary Delete a ChannelResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the ChannelResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApiInterface
   */
  deleteChannelSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<void>;

  /**
   *
   * @summary Get a Channel by ID
   * @param {string} id ID of the Channel to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApiInterface
   */
  getChannelById(id: string, options?: any): AxiosPromise<ChannelResource>;

  /**
   *
   * @summary Get a Channel by ID
   * @param {string} id ID of the Channel to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApiInterface
   */
  getChannelByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<ChannelResource>;

  /**
   * Perform channel version rule test against provided package version
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApiInterface
   */
  getVersionRuleTest(options?: any): AxiosPromise<void>;

  /**
   * Perform channel version rule test against provided package version
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApiInterface
   */
  getVersionRuleTestSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<void>;

  /**
   * Lists all of the releases that belong to the given channel. Releases will be ordered from most recent to least recent.
   * @summary Get a list of ReleaseResources for the given ChannelResource
   * @param {string} id ID of the Channel
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApiInterface
   */
  indexChannelReleases(
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<ReleaseResourceCollection>;

  /**
   * Lists all of the releases that belong to the given channel. Releases will be ordered from most recent to least recent.
   * @summary Get a list of ReleaseResources for the given ChannelResource
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the Channel
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApiInterface
   */
  indexChannelReleasesSpaces(
    baseSpaceId: string,
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<ReleaseResourceCollection>;

  /**
   * Lists all of the channels in the supplied Octopus Deploy Space, from all projects, sorted by name.
   * @summary Get a list of ChannelResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApiInterface
   */
  indexChannels(
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<ChannelResourceCollection>;

  /**
   * Lists all of the channels in the supplied Octopus Deploy Space, from all projects, sorted by name.
   * @summary Get a list of ChannelResources
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApiInterface
   */
  indexChannelsSpaces(
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<ChannelResourceCollection>;

  /**
   * Lists all the channels for the given project
   * @summary Get a list of ChannelResources for the given ProjectResource
   * @param {string} id ID of the Project
   * @param {string} [partialName] A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApiInterface
   */
  indexProjectChannels(
    id: string,
    partialName?: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<ChannelResourceCollection>;

  /**
   * Lists all the channels for the given project
   * @summary Get a list of ChannelResources for the given ProjectResource
   * @param {string} id ID of the Project
   * @param {string} baseSpaceId ID of the space
   * @param {string} [partialName] A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApiInterface
   */
  indexProjectChannelsSpaces(
    id: string,
    baseSpaceId: string,
    partialName?: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<ChannelResourceCollection>;

  /**
   * Lists all of the channels in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of Channels
   * @param {Array<string>} [ids] A set of Channel IDs to retrieve Channels for. Example: Channel-101,Channel-201
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApiInterface
   */
  listAllChannels(
    ids?: Array<string>,
    options?: any
  ): AxiosPromise<Array<ChannelResource>>;

  /**
   * Lists all of the channels in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of Channels
   * @param {string} baseSpaceId ID of the space
   * @param {Array<string>} [ids] A set of Channel IDs to retrieve Channels for. Example: Channel-101,Channel-201
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApiInterface
   */
  listAllChannelsSpaces(
    baseSpaceId: string,
    ids?: Array<string>,
    options?: any
  ): AxiosPromise<Array<ChannelResource>>;

  /**
   * Updates an existing channel
   * @summary Modify a ChannelResource by ID
   * @param {string} id ID of the ChannelResource to modify
   * @param {ChannelResource} [body] The ChannelResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApiInterface
   */
  updateChannel(
    id: string,
    body?: ChannelResource,
    options?: any
  ): AxiosPromise<ChannelResource>;

  /**
   * Updates an existing channel
   * @summary Modify a ChannelResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the ChannelResource to modify
   * @param {ChannelResource} [body] The ChannelResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApiInterface
   */
  updateChannelSpaces(
    baseSpaceId: string,
    id: string,
    body?: ChannelResource,
    options?: any
  ): AxiosPromise<ChannelResource>;
}

/**
 * ChannelsApi - object-oriented interface
 * @export
 * @class ChannelsApi
 * @extends {BaseAPI}
 */
export class ChannelsApi extends BaseAPI implements ChannelsApiInterface {
  /**
   * Creates a new channel
   * @summary Create a ChannelResource
   * @param {ChannelResource} [body] The ChannelResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApi
   */
  public createChannel(body?: ChannelResource, options?: any) {
    return ChannelsApiFp(this.configuration)
      .createChannel(body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Creates a new channel
   * @summary Create a ChannelResource
   * @param {string} baseSpaceId ID of the space
   * @param {ChannelResource} [body] The ChannelResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApi
   */
  public createChannelSpaces(
    baseSpaceId: string,
    body?: ChannelResource,
    options?: any
  ) {
    return ChannelsApiFp(this.configuration)
      .createChannelSpaces(baseSpaceId, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Perform channel version rule test against provided package version
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApi
   */
  public createVersionRuleTest(options?: any) {
    return ChannelsApiFp(this.configuration)
      .createVersionRuleTest(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Perform channel version rule test against provided package version
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApi
   */
  public createVersionRuleTestSpaces(baseSpaceId: string, options?: any) {
    return ChannelsApiFp(this.configuration)
      .createVersionRuleTestSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing channel.
   * @summary Delete a ChannelResource by ID
   * @param {string} id ID of the ChannelResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApi
   */
  public deleteChannel(id: string, options?: any) {
    return ChannelsApiFp(this.configuration)
      .deleteChannel(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing channel.
   * @summary Delete a ChannelResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the ChannelResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApi
   */
  public deleteChannelSpaces(baseSpaceId: string, id: string, options?: any) {
    return ChannelsApiFp(this.configuration)
      .deleteChannelSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Channel by ID
   * @param {string} id ID of the Channel to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApi
   */
  public getChannelById(id: string, options?: any) {
    return ChannelsApiFp(this.configuration)
      .getChannelById(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Channel by ID
   * @param {string} id ID of the Channel to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApi
   */
  public getChannelByIdSpaces(id: string, baseSpaceId: string, options?: any) {
    return ChannelsApiFp(this.configuration)
      .getChannelByIdSpaces(id, baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Perform channel version rule test against provided package version
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApi
   */
  public getVersionRuleTest(options?: any) {
    return ChannelsApiFp(this.configuration)
      .getVersionRuleTest(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Perform channel version rule test against provided package version
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApi
   */
  public getVersionRuleTestSpaces(baseSpaceId: string, options?: any) {
    return ChannelsApiFp(this.configuration)
      .getVersionRuleTestSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the releases that belong to the given channel. Releases will be ordered from most recent to least recent.
   * @summary Get a list of ReleaseResources for the given ChannelResource
   * @param {string} id ID of the Channel
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApi
   */
  public indexChannelReleases(
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return ChannelsApiFp(this.configuration)
      .indexChannelReleases(id, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the releases that belong to the given channel. Releases will be ordered from most recent to least recent.
   * @summary Get a list of ReleaseResources for the given ChannelResource
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the Channel
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApi
   */
  public indexChannelReleasesSpaces(
    baseSpaceId: string,
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return ChannelsApiFp(this.configuration)
      .indexChannelReleasesSpaces(baseSpaceId, id, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the channels in the supplied Octopus Deploy Space, from all projects, sorted by name.
   * @summary Get a list of ChannelResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApi
   */
  public indexChannels(skip?: number, take?: number, options?: any) {
    return ChannelsApiFp(this.configuration)
      .indexChannels(skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the channels in the supplied Octopus Deploy Space, from all projects, sorted by name.
   * @summary Get a list of ChannelResources
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApi
   */
  public indexChannelsSpaces(
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return ChannelsApiFp(this.configuration)
      .indexChannelsSpaces(baseSpaceId, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all the channels for the given project
   * @summary Get a list of ChannelResources for the given ProjectResource
   * @param {string} id ID of the Project
   * @param {string} [partialName] A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApi
   */
  public indexProjectChannels(
    id: string,
    partialName?: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return ChannelsApiFp(this.configuration)
      .indexProjectChannels(id, partialName, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all the channels for the given project
   * @summary Get a list of ChannelResources for the given ProjectResource
   * @param {string} id ID of the Project
   * @param {string} baseSpaceId ID of the space
   * @param {string} [partialName] A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApi
   */
  public indexProjectChannelsSpaces(
    id: string,
    baseSpaceId: string,
    partialName?: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return ChannelsApiFp(this.configuration)
      .indexProjectChannelsSpaces(
        id,
        baseSpaceId,
        partialName,
        skip,
        take,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the channels in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of Channels
   * @param {Array<string>} [ids] A set of Channel IDs to retrieve Channels for. Example: Channel-101,Channel-201
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApi
   */
  public listAllChannels(ids?: Array<string>, options?: any) {
    return ChannelsApiFp(this.configuration)
      .listAllChannels(ids, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the channels in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of Channels
   * @param {string} baseSpaceId ID of the space
   * @param {Array<string>} [ids] A set of Channel IDs to retrieve Channels for. Example: Channel-101,Channel-201
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApi
   */
  public listAllChannelsSpaces(
    baseSpaceId: string,
    ids?: Array<string>,
    options?: any
  ) {
    return ChannelsApiFp(this.configuration)
      .listAllChannelsSpaces(baseSpaceId, ids, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Updates an existing channel
   * @summary Modify a ChannelResource by ID
   * @param {string} id ID of the ChannelResource to modify
   * @param {ChannelResource} [body] The ChannelResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApi
   */
  public updateChannel(id: string, body?: ChannelResource, options?: any) {
    return ChannelsApiFp(this.configuration)
      .updateChannel(id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Updates an existing channel
   * @summary Modify a ChannelResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the ChannelResource to modify
   * @param {ChannelResource} [body] The ChannelResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChannelsApi
   */
  public updateChannelSpaces(
    baseSpaceId: string,
    id: string,
    body?: ChannelResource,
    options?: any
  ) {
    return ChannelsApiFp(this.configuration)
      .updateChannelSpaces(baseSpaceId, id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
