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
import { CertificateResource } from "../model";
// @ts-ignore
import { CertificateResourceCollection } from "../model";
// @ts-ignore
import { CertificateUsageResource } from "../model";
/**
 * CertificatesApi - axios parameter creator
 * @export
 */
export const CertificatesApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Adds a new certificate
     * @summary Create a CertificateResource
     * @param {CertificateResource} [body] The CertificateResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCertificate: async (
      body?: CertificateResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/certificates`;
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
     * Archives a certificate
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCertificateArchive: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("createCertificateArchive", "id", id);
      const localVarPath = `/certificates/{id}/archive`.replace(
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
     * Archives a certificate
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCertificateArchiveSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "createCertificateArchiveSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("createCertificateArchiveSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/certificates/{id}/archive`
        .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)))
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
     * Creates a self signed certificate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCertificateCreateSelfSigned: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/certificates/generate`;
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
     * Creates a self signed certificate
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCertificateCreateSelfSignedSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "createCertificateCreateSelfSignedSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/certificates/generate`.replace(
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
     * Replaces a certificate with another
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCertificateReplace: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("createCertificateReplace", "id", id);
      const localVarPath = `/certificates/{id}/replace`.replace(
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
     * Replaces a certificate with another
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCertificateReplaceSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "createCertificateReplaceSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("createCertificateReplaceSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/certificates/{id}/replace`
        .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)))
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
     * Adds a new certificate
     * @summary Create a CertificateResource
     * @param {string} baseSpaceId ID of the space
     * @param {CertificateResource} [body] The CertificateResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCertificateSpaces: async (
      baseSpaceId: string,
      body?: CertificateResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("createCertificateSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/certificates`.replace(
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
     * Un-archives a certificate
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCertificateUnArchive: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("createCertificateUnArchive", "id", id);
      const localVarPath = `/certificates/{id}/unarchive`.replace(
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
     * Un-archives a certificate
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCertificateUnArchiveSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "createCertificateUnArchiveSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("createCertificateUnArchiveSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/certificates/{id}/unarchive`
        .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)))
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
     * Permanently deletes a certificate
     * @summary Delete a CertificateResource by ID
     * @param {string} id ID of the CertificateResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCertificate: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteCertificate", "id", id);
      const localVarPath = `/certificates/{id}`.replace(
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
     * Permanently deletes a certificate
     * @summary Delete a CertificateResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the CertificateResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCertificateSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("deleteCertificateSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteCertificateSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/certificates/{id}`
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
     * Get a certificate by ID or thumbprint
     * @param {string} id ID or thumbprint of certificate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCertificateByIdOrThumbprint: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getCertificateByIdOrThumbprint", "id", id);
      const localVarPath = `/certificates/{id}`.replace(
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
     * Get a certificate by ID or thumbprint
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID or thumbprint of certificate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCertificateByIdOrThumbprintSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getCertificateByIdOrThumbprintSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getCertificateByIdOrThumbprintSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/certificates/{id}`
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
     * Exports the certificate
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCertificateExport: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getCertificateExport", "id", id);
      const localVarPath = `/certificates/{id}/export`.replace(
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
     * Exports the certificate
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCertificateExportSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getCertificateExportSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getCertificateExportSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/certificates/{id}/export`
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
     * Get the usages of a certificate
     * @param {string} id ID of the certificate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCertificateUsage: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getCertificateUsage", "id", id);
      const localVarPath = `/certificates/{id}/usages`.replace(
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
     * Get the usages of a certificate
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the certificate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCertificateUsageSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getCertificateUsageSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getCertificateUsageSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/certificates/{id}/usages`
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
     * Lists X.509 certificates managed by Octopus
     * @summary Get a list of CertificateResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexCertificates: async (
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/certificates`;
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
     * Lists X.509 certificates managed by Octopus
     * @summary Get a list of CertificateResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexCertificatesSpaces: async (
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("indexCertificatesSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/certificates`.replace(
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
     * Lists X.509 certificates managed by Octopus.
     * @summary Get a list of Certificates
     * @param {Array<string>} [ids] A set of Certificate IDs to retrieve Certificates for. Example: Certificate-101,Certificate-201
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllCertificates: async (
      ids?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/certificates/all`;
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
     * Lists X.509 certificates managed by Octopus.
     * @summary Get a list of Certificates
     * @param {string} baseSpaceId ID of the space
     * @param {Array<string>} [ids] A set of Certificate IDs to retrieve Certificates for. Example: Certificate-101,Certificate-201
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllCertificatesSpaces: async (
      baseSpaceId: string,
      ids?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "listAllCertificatesSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/certificates/all`.replace(
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
     * Modifies an existing certificate
     * @summary Modify a CertificateResource by ID
     * @param {string} id ID of the CertificateResource to modify
     * @param {CertificateResource} [body] The CertificateResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCertificate: async (
      id: string,
      body?: CertificateResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateCertificate", "id", id);
      const localVarPath = `/certificates/{id}`.replace(
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
     * Modifies an existing certificate
     * @summary Modify a CertificateResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the CertificateResource to modify
     * @param {CertificateResource} [body] The CertificateResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCertificateSpaces: async (
      baseSpaceId: string,
      id: string,
      body?: CertificateResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("updateCertificateSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateCertificateSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/certificates/{id}`
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
 * CertificatesApi - functional programming interface
 * @export
 */
export const CertificatesApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    CertificatesApiAxiosParamCreator(configuration);
  return {
    /**
     * Adds a new certificate
     * @summary Create a CertificateResource
     * @param {CertificateResource} [body] The CertificateResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createCertificate(
      body?: CertificateResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CertificateResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createCertificate(body, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Archives a certificate
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createCertificateArchive(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createCertificateArchive(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Archives a certificate
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createCertificateArchiveSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createCertificateArchiveSpaces(
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
     * Creates a self signed certificate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createCertificateCreateSelfSigned(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CertificateResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createCertificateCreateSelfSigned(
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
     * Creates a self signed certificate
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createCertificateCreateSelfSignedSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CertificateResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createCertificateCreateSelfSignedSpaces(
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
     * Replaces a certificate with another
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createCertificateReplace(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CertificateResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createCertificateReplace(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Replaces a certificate with another
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createCertificateReplaceSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CertificateResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createCertificateReplaceSpaces(
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
     * Adds a new certificate
     * @summary Create a CertificateResource
     * @param {string} baseSpaceId ID of the space
     * @param {CertificateResource} [body] The CertificateResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createCertificateSpaces(
      baseSpaceId: string,
      body?: CertificateResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CertificateResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createCertificateSpaces(
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
     * Un-archives a certificate
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createCertificateUnArchive(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createCertificateUnArchive(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Un-archives a certificate
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createCertificateUnArchiveSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createCertificateUnArchiveSpaces(
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
     * Permanently deletes a certificate
     * @summary Delete a CertificateResource by ID
     * @param {string} id ID of the CertificateResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteCertificate(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deleteCertificate(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Permanently deletes a certificate
     * @summary Delete a CertificateResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the CertificateResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteCertificateSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deleteCertificateSpaces(
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
     * Get a certificate by ID or thumbprint
     * @param {string} id ID or thumbprint of certificate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getCertificateByIdOrThumbprint(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CertificateResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getCertificateByIdOrThumbprint(
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
     * Get a certificate by ID or thumbprint
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID or thumbprint of certificate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getCertificateByIdOrThumbprintSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CertificateResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getCertificateByIdOrThumbprintSpaces(
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
     * Exports the certificate
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getCertificateExport(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getCertificateExport(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Exports the certificate
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getCertificateExportSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getCertificateExportSpaces(
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
     * Get the usages of a certificate
     * @param {string} id ID of the certificate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getCertificateUsage(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CertificateUsageResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getCertificateUsage(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Get the usages of a certificate
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the certificate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getCertificateUsageSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CertificateUsageResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getCertificateUsageSpaces(
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
     * Lists X.509 certificates managed by Octopus
     * @summary Get a list of CertificateResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexCertificates(
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CertificateResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.indexCertificates(skip, take, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Lists X.509 certificates managed by Octopus
     * @summary Get a list of CertificateResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexCertificatesSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CertificateResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.indexCertificatesSpaces(
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
     * Lists X.509 certificates managed by Octopus.
     * @summary Get a list of Certificates
     * @param {Array<string>} [ids] A set of Certificate IDs to retrieve Certificates for. Example: Certificate-101,Certificate-201
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllCertificates(
      ids?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<CertificateResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listAllCertificates(ids, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Lists X.509 certificates managed by Octopus.
     * @summary Get a list of Certificates
     * @param {string} baseSpaceId ID of the space
     * @param {Array<string>} [ids] A set of Certificate IDs to retrieve Certificates for. Example: Certificate-101,Certificate-201
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllCertificatesSpaces(
      baseSpaceId: string,
      ids?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<CertificateResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listAllCertificatesSpaces(
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
     * Modifies an existing certificate
     * @summary Modify a CertificateResource by ID
     * @param {string} id ID of the CertificateResource to modify
     * @param {CertificateResource} [body] The CertificateResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateCertificate(
      id: string,
      body?: CertificateResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CertificateResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateCertificate(id, body, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Modifies an existing certificate
     * @summary Modify a CertificateResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the CertificateResource to modify
     * @param {CertificateResource} [body] The CertificateResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateCertificateSpaces(
      baseSpaceId: string,
      id: string,
      body?: CertificateResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CertificateResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateCertificateSpaces(
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
 * CertificatesApi - factory interface
 * @export
 */
export const CertificatesApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = CertificatesApiFp(configuration);
  return {
    /**
     * Adds a new certificate
     * @summary Create a CertificateResource
     * @param {CertificateResource} [body] The CertificateResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCertificate(
      body?: CertificateResource,
      options?: any
    ): AxiosPromise<CertificateResource> {
      return localVarFp
        .createCertificate(body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Archives a certificate
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCertificateArchive(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .createCertificateArchive(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Archives a certificate
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCertificateArchiveSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .createCertificateArchiveSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Creates a self signed certificate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCertificateCreateSelfSigned(
      options?: any
    ): AxiosPromise<CertificateResource> {
      return localVarFp
        .createCertificateCreateSelfSigned(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Creates a self signed certificate
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCertificateCreateSelfSignedSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<CertificateResource> {
      return localVarFp
        .createCertificateCreateSelfSignedSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Replaces a certificate with another
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCertificateReplace(
      id: string,
      options?: any
    ): AxiosPromise<CertificateResource> {
      return localVarFp
        .createCertificateReplace(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Replaces a certificate with another
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCertificateReplaceSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<CertificateResource> {
      return localVarFp
        .createCertificateReplaceSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Adds a new certificate
     * @summary Create a CertificateResource
     * @param {string} baseSpaceId ID of the space
     * @param {CertificateResource} [body] The CertificateResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCertificateSpaces(
      baseSpaceId: string,
      body?: CertificateResource,
      options?: any
    ): AxiosPromise<CertificateResource> {
      return localVarFp
        .createCertificateSpaces(baseSpaceId, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Un-archives a certificate
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCertificateUnArchive(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .createCertificateUnArchive(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Un-archives a certificate
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCertificateUnArchiveSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .createCertificateUnArchiveSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Permanently deletes a certificate
     * @summary Delete a CertificateResource by ID
     * @param {string} id ID of the CertificateResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCertificate(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .deleteCertificate(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Permanently deletes a certificate
     * @summary Delete a CertificateResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the CertificateResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCertificateSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .deleteCertificateSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get a certificate by ID or thumbprint
     * @param {string} id ID or thumbprint of certificate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCertificateByIdOrThumbprint(
      id: string,
      options?: any
    ): AxiosPromise<CertificateResource> {
      return localVarFp
        .getCertificateByIdOrThumbprint(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get a certificate by ID or thumbprint
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID or thumbprint of certificate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCertificateByIdOrThumbprintSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<CertificateResource> {
      return localVarFp
        .getCertificateByIdOrThumbprintSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Exports the certificate
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCertificateExport(id: string, options?: any): AxiosPromise<any> {
      return localVarFp
        .getCertificateExport(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Exports the certificate
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCertificateExportSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<any> {
      return localVarFp
        .getCertificateExportSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get the usages of a certificate
     * @param {string} id ID of the certificate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCertificateUsage(
      id: string,
      options?: any
    ): AxiosPromise<CertificateUsageResource> {
      return localVarFp
        .getCertificateUsage(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get the usages of a certificate
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the certificate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCertificateUsageSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<CertificateUsageResource> {
      return localVarFp
        .getCertificateUsageSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists X.509 certificates managed by Octopus
     * @summary Get a list of CertificateResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexCertificates(
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<CertificateResourceCollection> {
      return localVarFp
        .indexCertificates(skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists X.509 certificates managed by Octopus
     * @summary Get a list of CertificateResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexCertificatesSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<CertificateResourceCollection> {
      return localVarFp
        .indexCertificatesSpaces(baseSpaceId, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists X.509 certificates managed by Octopus.
     * @summary Get a list of Certificates
     * @param {Array<string>} [ids] A set of Certificate IDs to retrieve Certificates for. Example: Certificate-101,Certificate-201
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllCertificates(
      ids?: Array<string>,
      options?: any
    ): AxiosPromise<Array<CertificateResource>> {
      return localVarFp
        .listAllCertificates(ids, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists X.509 certificates managed by Octopus.
     * @summary Get a list of Certificates
     * @param {string} baseSpaceId ID of the space
     * @param {Array<string>} [ids] A set of Certificate IDs to retrieve Certificates for. Example: Certificate-101,Certificate-201
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllCertificatesSpaces(
      baseSpaceId: string,
      ids?: Array<string>,
      options?: any
    ): AxiosPromise<Array<CertificateResource>> {
      return localVarFp
        .listAllCertificatesSpaces(baseSpaceId, ids, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies an existing certificate
     * @summary Modify a CertificateResource by ID
     * @param {string} id ID of the CertificateResource to modify
     * @param {CertificateResource} [body] The CertificateResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCertificate(
      id: string,
      body?: CertificateResource,
      options?: any
    ): AxiosPromise<CertificateResource> {
      return localVarFp
        .updateCertificate(id, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies an existing certificate
     * @summary Modify a CertificateResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the CertificateResource to modify
     * @param {CertificateResource} [body] The CertificateResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCertificateSpaces(
      baseSpaceId: string,
      id: string,
      body?: CertificateResource,
      options?: any
    ): AxiosPromise<CertificateResource> {
      return localVarFp
        .updateCertificateSpaces(baseSpaceId, id, body, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * CertificatesApi - object-oriented interface
 * @export
 * @class CertificatesApi
 * @extends {BaseAPI}
 */
export class CertificatesApi extends BaseAPI {
  /**
   * Adds a new certificate
   * @summary Create a CertificateResource
   * @param {CertificateResource} [body] The CertificateResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CertificatesApi
   */
  public createCertificate(body?: CertificateResource, options?: any) {
    return CertificatesApiFp(this.configuration)
      .createCertificate(body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Archives a certificate
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CertificatesApi
   */
  public createCertificateArchive(id: string, options?: any) {
    return CertificatesApiFp(this.configuration)
      .createCertificateArchive(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Archives a certificate
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CertificatesApi
   */
  public createCertificateArchiveSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return CertificatesApiFp(this.configuration)
      .createCertificateArchiveSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Creates a self signed certificate
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CertificatesApi
   */
  public createCertificateCreateSelfSigned(options?: any) {
    return CertificatesApiFp(this.configuration)
      .createCertificateCreateSelfSigned(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Creates a self signed certificate
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CertificatesApi
   */
  public createCertificateCreateSelfSignedSpaces(
    baseSpaceId: string,
    options?: any
  ) {
    return CertificatesApiFp(this.configuration)
      .createCertificateCreateSelfSignedSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Replaces a certificate with another
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CertificatesApi
   */
  public createCertificateReplace(id: string, options?: any) {
    return CertificatesApiFp(this.configuration)
      .createCertificateReplace(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Replaces a certificate with another
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CertificatesApi
   */
  public createCertificateReplaceSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return CertificatesApiFp(this.configuration)
      .createCertificateReplaceSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Adds a new certificate
   * @summary Create a CertificateResource
   * @param {string} baseSpaceId ID of the space
   * @param {CertificateResource} [body] The CertificateResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CertificatesApi
   */
  public createCertificateSpaces(
    baseSpaceId: string,
    body?: CertificateResource,
    options?: any
  ) {
    return CertificatesApiFp(this.configuration)
      .createCertificateSpaces(baseSpaceId, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Un-archives a certificate
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CertificatesApi
   */
  public createCertificateUnArchive(id: string, options?: any) {
    return CertificatesApiFp(this.configuration)
      .createCertificateUnArchive(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Un-archives a certificate
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CertificatesApi
   */
  public createCertificateUnArchiveSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return CertificatesApiFp(this.configuration)
      .createCertificateUnArchiveSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Permanently deletes a certificate
   * @summary Delete a CertificateResource by ID
   * @param {string} id ID of the CertificateResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CertificatesApi
   */
  public deleteCertificate(id: string, options?: any) {
    return CertificatesApiFp(this.configuration)
      .deleteCertificate(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Permanently deletes a certificate
   * @summary Delete a CertificateResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the CertificateResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CertificatesApi
   */
  public deleteCertificateSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return CertificatesApiFp(this.configuration)
      .deleteCertificateSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get a certificate by ID or thumbprint
   * @param {string} id ID or thumbprint of certificate
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CertificatesApi
   */
  public getCertificateByIdOrThumbprint(id: string, options?: any) {
    return CertificatesApiFp(this.configuration)
      .getCertificateByIdOrThumbprint(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get a certificate by ID or thumbprint
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID or thumbprint of certificate
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CertificatesApi
   */
  public getCertificateByIdOrThumbprintSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return CertificatesApiFp(this.configuration)
      .getCertificateByIdOrThumbprintSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Exports the certificate
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CertificatesApi
   */
  public getCertificateExport(id: string, options?: any) {
    return CertificatesApiFp(this.configuration)
      .getCertificateExport(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Exports the certificate
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CertificatesApi
   */
  public getCertificateExportSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return CertificatesApiFp(this.configuration)
      .getCertificateExportSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get the usages of a certificate
   * @param {string} id ID of the certificate
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CertificatesApi
   */
  public getCertificateUsage(id: string, options?: any) {
    return CertificatesApiFp(this.configuration)
      .getCertificateUsage(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get the usages of a certificate
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the certificate
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CertificatesApi
   */
  public getCertificateUsageSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return CertificatesApiFp(this.configuration)
      .getCertificateUsageSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists X.509 certificates managed by Octopus
   * @summary Get a list of CertificateResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CertificatesApi
   */
  public indexCertificates(skip?: number, take?: number, options?: any) {
    return CertificatesApiFp(this.configuration)
      .indexCertificates(skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists X.509 certificates managed by Octopus
   * @summary Get a list of CertificateResources
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CertificatesApi
   */
  public indexCertificatesSpaces(
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return CertificatesApiFp(this.configuration)
      .indexCertificatesSpaces(baseSpaceId, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists X.509 certificates managed by Octopus.
   * @summary Get a list of Certificates
   * @param {Array<string>} [ids] A set of Certificate IDs to retrieve Certificates for. Example: Certificate-101,Certificate-201
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CertificatesApi
   */
  public listAllCertificates(ids?: Array<string>, options?: any) {
    return CertificatesApiFp(this.configuration)
      .listAllCertificates(ids, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists X.509 certificates managed by Octopus.
   * @summary Get a list of Certificates
   * @param {string} baseSpaceId ID of the space
   * @param {Array<string>} [ids] A set of Certificate IDs to retrieve Certificates for. Example: Certificate-101,Certificate-201
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CertificatesApi
   */
  public listAllCertificatesSpaces(
    baseSpaceId: string,
    ids?: Array<string>,
    options?: any
  ) {
    return CertificatesApiFp(this.configuration)
      .listAllCertificatesSpaces(baseSpaceId, ids, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies an existing certificate
   * @summary Modify a CertificateResource by ID
   * @param {string} id ID of the CertificateResource to modify
   * @param {CertificateResource} [body] The CertificateResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CertificatesApi
   */
  public updateCertificate(
    id: string,
    body?: CertificateResource,
    options?: any
  ) {
    return CertificatesApiFp(this.configuration)
      .updateCertificate(id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies an existing certificate
   * @summary Modify a CertificateResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the CertificateResource to modify
   * @param {CertificateResource} [body] The CertificateResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CertificatesApi
   */
  public updateCertificateSpaces(
    baseSpaceId: string,
    id: string,
    body?: CertificateResource,
    options?: any
  ) {
    return CertificatesApiFp(this.configuration)
      .updateCertificateSpaces(baseSpaceId, id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
