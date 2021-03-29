// Octopus REST API v2020.6.4722

import { ProxyResource } from './proxy-resource';

/**
 * 
 * @export
 * @interface ProxyResourceCollection
 */
export interface ProxyResourceCollection {
    /**
     * 
     * @type {string}
     * @memberof ProxyResourceCollection
     */
    Id?: string;
    /**
     * 
     * @type {Array<ProxyResource>}
     * @memberof ProxyResourceCollection
     */
    Items?: Array<ProxyResource>;
    /**
     * 
     * @type {number}
     * @memberof ProxyResourceCollection
     */
    ItemsPerPage?: number;
    /**
     * 
     * @type {string}
     * @memberof ProxyResourceCollection
     */
    ItemType?: string;
    /**
     * 
     * @type {string}
     * @memberof ProxyResourceCollection
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof ProxyResourceCollection
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {number}
     * @memberof ProxyResourceCollection
     */
    LastPageNumber?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ProxyResourceCollection
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof ProxyResourceCollection
     */
    NumberOfPages?: number;
    /**
     * 
     * @type {number}
     * @memberof ProxyResourceCollection
     */
    TotalResults?: number;
}
