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
import { CertificateConfigurationResource } from "../model";
// @ts-ignore
import { CertificateConfigurationResourceCollection } from "../model";
/**
 * CertificateConfigurationApi - axios parameter creator
 * @export
 */
export const CertificateConfigurationApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Get a Certificate Configuration by ID
     * @param {string} id ID of the CertificateConfiguration to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCertificateConfigurationById: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getCertificateConfigurationById", "id", id);
      const localVarPath = `/configuration/certificates/{id}`.replace(
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
     * Returns the server thumbprint used to identify this Octopus Server to any Tentacles when executing a deployment. Deprecated.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCertificateConfigurationByIdLegacy: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/certificates/certificate-global`;
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
     * Downloads the public portion of the certificate in .cer format
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCertificatePublicCerDownload: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getCertificatePublicCerDownload", "id", id);
      const localVarPath = `/configuration/certificates/{id}/public-cer`.replace(
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
     * Lists all of the X509 certificates in the current Octopus Deploy installation.
     * @summary Get a list of CertificateConfigurationResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexCertificateConfigurations: async (
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/configuration/certificates`;
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
  };
};

/**
 * CertificateConfigurationApi - functional programming interface
 * @export
 */
export const CertificateConfigurationApiFp = function (
  configuration?: Configuration
) {
  const localVarAxiosParamCreator = CertificateConfigurationApiAxiosParamCreator(
    configuration
  );
  return {
    /**
     *
     * @summary Get a Certificate Configuration by ID
     * @param {string} id ID of the CertificateConfiguration to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getCertificateConfigurationById(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CertificateConfigurationResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getCertificateConfigurationById(
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
     * Returns the server thumbprint used to identify this Octopus Server to any Tentacles when executing a deployment. Deprecated.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getCertificateConfigurationByIdLegacy(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CertificateConfigurationResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getCertificateConfigurationByIdLegacy(
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
     * Downloads the public portion of the certificate in .cer format
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getCertificatePublicCerDownload(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getCertificatePublicCerDownload(
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
     * Lists all of the X509 certificates in the current Octopus Deploy installation.
     * @summary Get a list of CertificateConfigurationResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexCertificateConfigurations(
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CertificateConfigurationResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexCertificateConfigurations(
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
  };
};

/**
 * CertificateConfigurationApi - factory interface
 * @export
 */
export const CertificateConfigurationApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = CertificateConfigurationApiFp(configuration);
  return {
    /**
     *
     * @summary Get a Certificate Configuration by ID
     * @param {string} id ID of the CertificateConfiguration to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCertificateConfigurationById(
      id: string,
      options?: any
    ): AxiosPromise<CertificateConfigurationResource> {
      return localVarFp
        .getCertificateConfigurationById(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Returns the server thumbprint used to identify this Octopus Server to any Tentacles when executing a deployment. Deprecated.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCertificateConfigurationByIdLegacy(
      options?: any
    ): AxiosPromise<CertificateConfigurationResource> {
      return localVarFp
        .getCertificateConfigurationByIdLegacy(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Downloads the public portion of the certificate in .cer format
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCertificatePublicCerDownload(
      id: string,
      options?: any
    ): AxiosPromise<any> {
      return localVarFp
        .getCertificatePublicCerDownload(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the X509 certificates in the current Octopus Deploy installation.
     * @summary Get a list of CertificateConfigurationResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexCertificateConfigurations(
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<CertificateConfigurationResourceCollection> {
      return localVarFp
        .indexCertificateConfigurations(skip, take, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * CertificateConfigurationApi - interface
 * @export
 * @interface CertificateConfigurationApi
 */
export interface CertificateConfigurationApiInterface {
  /**
   *
   * @summary Get a Certificate Configuration by ID
   * @param {string} id ID of the CertificateConfiguration to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CertificateConfigurationApiInterface
   */
  getCertificateConfigurationById(
    id: string,
    options?: any
  ): AxiosPromise<CertificateConfigurationResource>;

  /**
   * Returns the server thumbprint used to identify this Octopus Server to any Tentacles when executing a deployment. Deprecated.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CertificateConfigurationApiInterface
   */
  getCertificateConfigurationByIdLegacy(
    options?: any
  ): AxiosPromise<CertificateConfigurationResource>;

  /**
   * Downloads the public portion of the certificate in .cer format
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CertificateConfigurationApiInterface
   */
  getCertificatePublicCerDownload(id: string, options?: any): AxiosPromise<any>;

  /**
   * Lists all of the X509 certificates in the current Octopus Deploy installation.
   * @summary Get a list of CertificateConfigurationResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CertificateConfigurationApiInterface
   */
  indexCertificateConfigurations(
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<CertificateConfigurationResourceCollection>;
}

/**
 * CertificateConfigurationApi - object-oriented interface
 * @export
 * @class CertificateConfigurationApi
 * @extends {BaseAPI}
 */
export class CertificateConfigurationApi
  extends BaseAPI
  implements CertificateConfigurationApiInterface {
  /**
   *
   * @summary Get a Certificate Configuration by ID
   * @param {string} id ID of the CertificateConfiguration to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CertificateConfigurationApi
   */
  public getCertificateConfigurationById(id: string, options?: any) {
    return CertificateConfigurationApiFp(this.configuration)
      .getCertificateConfigurationById(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Returns the server thumbprint used to identify this Octopus Server to any Tentacles when executing a deployment. Deprecated.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CertificateConfigurationApi
   */
  public getCertificateConfigurationByIdLegacy(options?: any) {
    return CertificateConfigurationApiFp(this.configuration)
      .getCertificateConfigurationByIdLegacy(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Downloads the public portion of the certificate in .cer format
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CertificateConfigurationApi
   */
  public getCertificatePublicCerDownload(id: string, options?: any) {
    return CertificateConfigurationApiFp(this.configuration)
      .getCertificatePublicCerDownload(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the X509 certificates in the current Octopus Deploy installation.
   * @summary Get a list of CertificateConfigurationResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CertificateConfigurationApi
   */
  public indexCertificateConfigurations(
    skip?: number,
    take?: number,
    options?: any
  ) {
    return CertificateConfigurationApiFp(this.configuration)
      .indexCertificateConfigurations(skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
