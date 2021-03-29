// Octopus REST API v2020.6.4722

import { SpaceResource } from './space-resource';

/**
 * 
 * @export
 * @interface SpaceResourceCollection
 */
export interface SpaceResourceCollection {
    /**
     * 
     * @type {string}
     * @memberof SpaceResourceCollection
     */
    Id?: string;
    /**
     * 
     * @type {Array<SpaceResource>}
     * @memberof SpaceResourceCollection
     */
    Items?: Array<SpaceResource>;
    /**
     * 
     * @type {number}
     * @memberof SpaceResourceCollection
     */
    ItemsPerPage?: number;
    /**
     * 
     * @type {string}
     * @memberof SpaceResourceCollection
     */
    ItemType?: string;
    /**
     * 
     * @type {string}
     * @memberof SpaceResourceCollection
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof SpaceResourceCollection
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {number}
     * @memberof SpaceResourceCollection
     */
    LastPageNumber?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof SpaceResourceCollection
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof SpaceResourceCollection
     */
    NumberOfPages?: number;
    /**
     * 
     * @type {number}
     * @memberof SpaceResourceCollection
     */
    TotalResults?: number;
}
