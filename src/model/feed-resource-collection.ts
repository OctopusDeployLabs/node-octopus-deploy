// Octopus REST API v2020.6.4722

import { FeedResource } from './feed-resource';

/**
 * 
 * @export
 * @interface FeedResourceCollection
 */
export interface FeedResourceCollection {
    /**
     * 
     * @type {string}
     * @memberof FeedResourceCollection
     */
    Id?: string;
    /**
     * 
     * @type {Array<FeedResource>}
     * @memberof FeedResourceCollection
     */
    Items?: Array<FeedResource>;
    /**
     * 
     * @type {number}
     * @memberof FeedResourceCollection
     */
    ItemsPerPage?: number;
    /**
     * 
     * @type {string}
     * @memberof FeedResourceCollection
     */
    ItemType?: string;
    /**
     * 
     * @type {string}
     * @memberof FeedResourceCollection
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof FeedResourceCollection
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {number}
     * @memberof FeedResourceCollection
     */
    LastPageNumber?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof FeedResourceCollection
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof FeedResourceCollection
     */
    NumberOfPages?: number;
    /**
     * 
     * @type {number}
     * @memberof FeedResourceCollection
     */
    TotalResults?: number;
}
