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
import { OnboardingResource } from '../model';
/**
 * UserOnboardingApi - axios parameter creator
 * @export
 */
export const UserOnboardingApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Gets information about how far the Octopus Server is towards having its first release deployed.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOnboarding: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/useronboarding`;
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
         * Gets information about how far the Octopus Server is towards having its first release deployed.
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOnboardingSpaces: async (baseSpaceId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getOnboardingSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/useronboarding`
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
    }
};

/**
 * UserOnboardingApi - functional programming interface
 * @export
 */
export const UserOnboardingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserOnboardingApiAxiosParamCreator(configuration)
    return {
        /**
         * Gets information about how far the Octopus Server is towards having its first release deployed.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOnboarding(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OnboardingResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOnboarding(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets information about how far the Octopus Server is towards having its first release deployed.
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOnboardingSpaces(baseSpaceId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OnboardingResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOnboardingSpaces(baseSpaceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UserOnboardingApi - factory interface
 * @export
 */
export const UserOnboardingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserOnboardingApiFp(configuration)
    return {
        /**
         * Gets information about how far the Octopus Server is towards having its first release deployed.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOnboarding(options?: any): AxiosPromise<OnboardingResource> {
            return localVarFp.getOnboarding(options).then((request) => request(axios, basePath));
        },
        /**
         * Gets information about how far the Octopus Server is towards having its first release deployed.
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOnboardingSpaces(baseSpaceId: string, options?: any): AxiosPromise<OnboardingResource> {
            return localVarFp.getOnboardingSpaces(baseSpaceId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserOnboardingApi - interface
 * @export
 * @interface UserOnboardingApi
 */
export interface UserOnboardingApiInterface {
    /**
     * Gets information about how far the Octopus Server is towards having its first release deployed.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserOnboardingApiInterface
     */
    getOnboarding(options?: any): AxiosPromise<OnboardingResource>;

    /**
     * Gets information about how far the Octopus Server is towards having its first release deployed.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserOnboardingApiInterface
     */
    getOnboardingSpaces(baseSpaceId: string, options?: any): AxiosPromise<OnboardingResource>;

}

/**
 * UserOnboardingApi - object-oriented interface
 * @export
 * @class UserOnboardingApi
 * @extends {BaseAPI}
 */
export class UserOnboardingApi extends BaseAPI implements UserOnboardingApiInterface {
    /**
     * Gets information about how far the Octopus Server is towards having its first release deployed.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserOnboardingApi
     */
    public getOnboarding(options?: any) {
        return UserOnboardingApiFp(this.configuration).getOnboarding(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets information about how far the Octopus Server is towards having its first release deployed.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserOnboardingApi
     */
    public getOnboardingSpaces(baseSpaceId: string, options?: any) {
        return UserOnboardingApiFp(this.configuration).getOnboardingSpaces(baseSpaceId, options).then((request) => request(this.axios, this.basePath));
    }
}
