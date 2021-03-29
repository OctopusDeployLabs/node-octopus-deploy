// Octopus REST API v2020.6.4722

import { ProjectResource } from './project-resource';

/**
 * 
 * @export
 * @interface ProjectResourceCollection
 */
export interface ProjectResourceCollection {
    /**
     * 
     * @type {string}
     * @memberof ProjectResourceCollection
     */
    Id?: string;
    /**
     * 
     * @type {Array<ProjectResource>}
     * @memberof ProjectResourceCollection
     */
    Items?: Array<ProjectResource>;
    /**
     * 
     * @type {number}
     * @memberof ProjectResourceCollection
     */
    ItemsPerPage?: number;
    /**
     * 
     * @type {string}
     * @memberof ProjectResourceCollection
     */
    ItemType?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectResourceCollection
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectResourceCollection
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {number}
     * @memberof ProjectResourceCollection
     */
    LastPageNumber?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ProjectResourceCollection
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof ProjectResourceCollection
     */
    NumberOfPages?: number;
    /**
     * 
     * @type {number}
     * @memberof ProjectResourceCollection
     */
    TotalResults?: number;
}
