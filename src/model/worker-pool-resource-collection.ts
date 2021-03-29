// Octopus REST API v2020.6.4722

import { WorkerPoolResource } from './worker-pool-resource';

/**
 * 
 * @export
 * @interface WorkerPoolResourceCollection
 */
export interface WorkerPoolResourceCollection {
    /**
     * 
     * @type {string}
     * @memberof WorkerPoolResourceCollection
     */
    Id?: string;
    /**
     * 
     * @type {Array<WorkerPoolResource>}
     * @memberof WorkerPoolResourceCollection
     */
    Items?: Array<WorkerPoolResource>;
    /**
     * 
     * @type {number}
     * @memberof WorkerPoolResourceCollection
     */
    ItemsPerPage?: number;
    /**
     * 
     * @type {string}
     * @memberof WorkerPoolResourceCollection
     */
    ItemType?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkerPoolResourceCollection
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkerPoolResourceCollection
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {number}
     * @memberof WorkerPoolResourceCollection
     */
    LastPageNumber?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof WorkerPoolResourceCollection
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof WorkerPoolResourceCollection
     */
    NumberOfPages?: number;
    /**
     * 
     * @type {number}
     * @memberof WorkerPoolResourceCollection
     */
    TotalResults?: number;
}
