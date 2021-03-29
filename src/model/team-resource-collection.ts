// Octopus REST API v2020.6.4722

import { TeamResource } from './team-resource';

/**
 * 
 * @export
 * @interface TeamResourceCollection
 */
export interface TeamResourceCollection {
    /**
     * 
     * @type {string}
     * @memberof TeamResourceCollection
     */
    Id?: string;
    /**
     * 
     * @type {Array<TeamResource>}
     * @memberof TeamResourceCollection
     */
    Items?: Array<TeamResource>;
    /**
     * 
     * @type {number}
     * @memberof TeamResourceCollection
     */
    ItemsPerPage?: number;
    /**
     * 
     * @type {string}
     * @memberof TeamResourceCollection
     */
    ItemType?: string;
    /**
     * 
     * @type {string}
     * @memberof TeamResourceCollection
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof TeamResourceCollection
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {number}
     * @memberof TeamResourceCollection
     */
    LastPageNumber?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof TeamResourceCollection
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof TeamResourceCollection
     */
    NumberOfPages?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamResourceCollection
     */
    TotalResults?: number;
}
