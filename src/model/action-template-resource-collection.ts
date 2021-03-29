// Octopus REST API v2020.6.4722

import { ActionTemplateResource } from './action-template-resource';

/**
 * 
 * @export
 * @interface ActionTemplateResourceCollection
 */
export interface ActionTemplateResourceCollection {
    /**
     * 
     * @type {string}
     * @memberof ActionTemplateResourceCollection
     */
    Id?: string;
    /**
     * 
     * @type {Array<ActionTemplateResource>}
     * @memberof ActionTemplateResourceCollection
     */
    Items?: Array<ActionTemplateResource>;
    /**
     * 
     * @type {number}
     * @memberof ActionTemplateResourceCollection
     */
    ItemsPerPage?: number;
    /**
     * 
     * @type {string}
     * @memberof ActionTemplateResourceCollection
     */
    ItemType?: string;
    /**
     * 
     * @type {string}
     * @memberof ActionTemplateResourceCollection
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof ActionTemplateResourceCollection
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {number}
     * @memberof ActionTemplateResourceCollection
     */
    LastPageNumber?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ActionTemplateResourceCollection
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof ActionTemplateResourceCollection
     */
    NumberOfPages?: number;
    /**
     * 
     * @type {number}
     * @memberof ActionTemplateResourceCollection
     */
    TotalResults?: number;
}
