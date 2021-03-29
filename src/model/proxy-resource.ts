// Octopus REST API v2020.6.4722

import { SensitiveValue } from './sensitive-value';

/**
 * 
 * @export
 * @interface ProxyResource
 */
export interface ProxyResource {
    /**
     * 
     * @type {string}
     * @memberof ProxyResource
     */
    Host?: string;
    /**
     * 
     * @type {string}
     * @memberof ProxyResource
     */
    Id?: string;
    /**
     * 
     * @type {string}
     * @memberof ProxyResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof ProxyResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ProxyResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof ProxyResource
     */
    Name?: string;
    /**
     * 
     * @type {SensitiveValue}
     * @memberof ProxyResource
     */
    Password?: SensitiveValue;
    /**
     * 
     * @type {number}
     * @memberof ProxyResource
     */
    Port?: number;
    /**
     * 
     * @type {string}
     * @memberof ProxyResource
     */
    ProxyType?: string;
    /**
     * 
     * @type {string}
     * @memberof ProxyResource
     */
    SpaceId?: string;
    /**
     * 
     * @type {string}
     * @memberof ProxyResource
     */
    Username?: string;
}
