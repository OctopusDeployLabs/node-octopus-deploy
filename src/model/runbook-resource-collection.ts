// Octopus REST API v2020.6.4722

import { RunbookResource } from './runbook-resource';

/**
 * 
 * @export
 * @interface RunbookResourceCollection
 */
export interface RunbookResourceCollection {
    /**
     * 
     * @type {string}
     * @memberof RunbookResourceCollection
     */
    Id?: string;
    /**
     * 
     * @type {Array<RunbookResource>}
     * @memberof RunbookResourceCollection
     */
    Items?: Array<RunbookResource>;
    /**
     * 
     * @type {number}
     * @memberof RunbookResourceCollection
     */
    ItemsPerPage?: number;
    /**
     * 
     * @type {string}
     * @memberof RunbookResourceCollection
     */
    ItemType?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbookResourceCollection
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbookResourceCollection
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {number}
     * @memberof RunbookResourceCollection
     */
    LastPageNumber?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof RunbookResourceCollection
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof RunbookResourceCollection
     */
    NumberOfPages?: number;
    /**
     * 
     * @type {number}
     * @memberof RunbookResourceCollection
     */
    TotalResults?: number;
}
