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
import { InlineResponse200 } from '../model';
/**
 * PermissionsApi - axios parameter creator
 * @export
 */
export const PermissionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Gets a dictionary of available permissions and their descriptions and restrictions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPermissionDefinitions: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/permissions/all`;
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
 * PermissionsApi - functional programming interface
 * @export
 */
export const PermissionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PermissionsApiAxiosParamCreator(configuration)
    return {
        /**
         * Gets a dictionary of available permissions and their descriptions and restrictions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPermissionDefinitions(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPermissionDefinitions(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PermissionsApi - factory interface
 * @export
 */
export const PermissionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PermissionsApiFp(configuration)
    return {
        /**
         * Gets a dictionary of available permissions and their descriptions and restrictions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPermissionDefinitions(options?: any): AxiosPromise<InlineResponse200> {
            return localVarFp.getPermissionDefinitions(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PermissionsApi - interface
 * @export
 * @interface PermissionsApi
 */
export interface PermissionsApiInterface {
    /**
     * Gets a dictionary of available permissions and their descriptions and restrictions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApiInterface
     */
    getPermissionDefinitions(options?: any): AxiosPromise<InlineResponse200>;

}

/**
 * PermissionsApi - object-oriented interface
 * @export
 * @class PermissionsApi
 * @extends {BaseAPI}
 */
export class PermissionsApi extends BaseAPI implements PermissionsApiInterface {
    /**
     * Gets a dictionary of available permissions and their descriptions and restrictions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApi
     */
    public getPermissionDefinitions(options?: any) {
        return PermissionsApiFp(this.configuration).getPermissionDefinitions(options).then((request) => request(this.axios, this.basePath));
    }
}
