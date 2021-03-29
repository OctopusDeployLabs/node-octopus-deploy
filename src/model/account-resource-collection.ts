// Octopus REST API v2020.6.4722

import { AccountResource } from './account-resource';

/**
 * 
 * @export
 * @interface AccountResourceCollection
 */
export interface AccountResourceCollection {
    /**
     * 
     * @type {string}
     * @memberof AccountResourceCollection
     */
    Id?: string;
    /**
     * 
     * @type {Array<AccountResource>}
     * @memberof AccountResourceCollection
     */
    Items?: Array<AccountResource>;
    /**
     * 
     * @type {number}
     * @memberof AccountResourceCollection
     */
    ItemsPerPage?: number;
    /**
     * 
     * @type {string}
     * @memberof AccountResourceCollection
     */
    ItemType?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountResourceCollection
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountResourceCollection
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {number}
     * @memberof AccountResourceCollection
     */
    LastPageNumber?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof AccountResourceCollection
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof AccountResourceCollection
     */
    NumberOfPages?: number;
    /**
     * 
     * @type {number}
     * @memberof AccountResourceCollection
     */
    TotalResults?: number;
}
