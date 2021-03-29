// Octopus REST API v2020.6.4722

import { ProjectGroupResource } from './project-group-resource';

/**
 * 
 * @export
 * @interface ProjectGroupResourceCollection
 */
export interface ProjectGroupResourceCollection {
    /**
     * 
     * @type {string}
     * @memberof ProjectGroupResourceCollection
     */
    Id?: string;
    /**
     * 
     * @type {Array<ProjectGroupResource>}
     * @memberof ProjectGroupResourceCollection
     */
    Items?: Array<ProjectGroupResource>;
    /**
     * 
     * @type {number}
     * @memberof ProjectGroupResourceCollection
     */
    ItemsPerPage?: number;
    /**
     * 
     * @type {string}
     * @memberof ProjectGroupResourceCollection
     */
    ItemType?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectGroupResourceCollection
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectGroupResourceCollection
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {number}
     * @memberof ProjectGroupResourceCollection
     */
    LastPageNumber?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ProjectGroupResourceCollection
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof ProjectGroupResourceCollection
     */
    NumberOfPages?: number;
    /**
     * 
     * @type {number}
     * @memberof ProjectGroupResourceCollection
     */
    TotalResults?: number;
}
