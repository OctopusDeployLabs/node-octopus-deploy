// Octopus REST API v2020.6.4722

import { RunbooksDashboardItemResource } from './runbooks-dashboard-item-resource';

/**
 * 
 * @export
 * @interface RunbooksDashboardItemResourceCollection
 */
export interface RunbooksDashboardItemResourceCollection {
    /**
     * 
     * @type {string}
     * @memberof RunbooksDashboardItemResourceCollection
     */
    Id?: string;
    /**
     * 
     * @type {Array<RunbooksDashboardItemResource>}
     * @memberof RunbooksDashboardItemResourceCollection
     */
    Items?: Array<RunbooksDashboardItemResource>;
    /**
     * 
     * @type {number}
     * @memberof RunbooksDashboardItemResourceCollection
     */
    ItemsPerPage?: number;
    /**
     * 
     * @type {string}
     * @memberof RunbooksDashboardItemResourceCollection
     */
    ItemType?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbooksDashboardItemResourceCollection
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbooksDashboardItemResourceCollection
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {number}
     * @memberof RunbooksDashboardItemResourceCollection
     */
    LastPageNumber?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof RunbooksDashboardItemResourceCollection
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof RunbooksDashboardItemResourceCollection
     */
    NumberOfPages?: number;
    /**
     * 
     * @type {number}
     * @memberof RunbooksDashboardItemResourceCollection
     */
    TotalResults?: number;
}
