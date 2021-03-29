// Octopus REST API v2020.6.4722

import { AuthenticationProviderElement } from './authentication-provider-element';

/**
 * 
 * @export
 * @interface AuthenticationResource
 */
export interface AuthenticationResource {
    /**
     * 
     * @type {boolean}
     * @memberof AuthenticationResource
     */
    AnyAuthenticationProvidersSupportPasswordManagement?: boolean;
    /**
     * 
     * @type {Array<AuthenticationProviderElement>}
     * @memberof AuthenticationResource
     */
    AuthenticationProviders?: Array<AuthenticationProviderElement>;
    /**
     * 
     * @type {boolean}
     * @memberof AuthenticationResource
     */
    AutoLoginEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationResource
     */
    Id?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof AuthenticationResource
     */
    Links?: { [key: string]: string; };
}
