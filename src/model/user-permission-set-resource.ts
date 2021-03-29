// Octopus REST API v2020.6.4722

import { Permission } from './permission';
import { ProjectedTeamReferenceDataItem } from './projected-team-reference-data-item';
import { UserPermissionSetResourceSpacePermissions } from './user-permission-set-resource-space-permissions';

/**
 * 
 * @export
 * @interface UserPermissionSetResource
 */
export interface UserPermissionSetResource {
    /**
     * 
     * @type {string}
     * @memberof UserPermissionSetResource
     */
    Id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserPermissionSetResource
     */
    IsPermissionsComplete?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserPermissionSetResource
     */
    IsTeamsComplete?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserPermissionSetResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof UserPermissionSetResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof UserPermissionSetResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {UserPermissionSetResourceSpacePermissions}
     * @memberof UserPermissionSetResource
     */
    SpacePermissions?: UserPermissionSetResourceSpacePermissions;
    /**
     * 
     * @type {Array<Permission>}
     * @memberof UserPermissionSetResource
     */
    SystemPermissions?: Array<Permission>;
    /**
     * 
     * @type {Array<ProjectedTeamReferenceDataItem>}
     * @memberof UserPermissionSetResource
     */
    Teams?: Array<ProjectedTeamReferenceDataItem>;
}
