// Octopus REST API v2020.6.4722

import { ScopedUserRoleResource } from './scoped-user-role-resource';

/**
 * 
 * @export
 * @interface ScopedUserRoleResourceCollection
 */
export interface ScopedUserRoleResourceCollection {
    /**
     * 
     * @type {string}
     * @memberof ScopedUserRoleResourceCollection
     */
    Id?: string;
    /**
     * 
     * @type {Array<ScopedUserRoleResource>}
     * @memberof ScopedUserRoleResourceCollection
     */
    Items?: Array<ScopedUserRoleResource>;
    /**
     * 
     * @type {number}
     * @memberof ScopedUserRoleResourceCollection
     */
    ItemsPerPage?: number;
    /**
     * 
     * @type {string}
     * @memberof ScopedUserRoleResourceCollection
     */
    ItemType?: string;
    /**
     * 
     * @type {string}
     * @memberof ScopedUserRoleResourceCollection
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof ScopedUserRoleResourceCollection
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {number}
     * @memberof ScopedUserRoleResourceCollection
     */
    LastPageNumber?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ScopedUserRoleResourceCollection
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof ScopedUserRoleResourceCollection
     */
    NumberOfPages?: number;
    /**
     * 
     * @type {number}
     * @memberof ScopedUserRoleResourceCollection
     */
    TotalResults?: number;
}
