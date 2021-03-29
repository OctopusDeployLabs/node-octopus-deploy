// Octopus REST API v2020.6.4722


/**
 * 
 * @export
 * @interface UserPermissionRestriction
 */
export interface UserPermissionRestriction {
    /**
     * 
     * @type {Set<string>}
     * @memberof UserPermissionRestriction
     */
    RestrictedToEnvironmentIds?: Set<string>;
    /**
     * 
     * @type {Set<string>}
     * @memberof UserPermissionRestriction
     */
    RestrictedToProjectGroupIds?: Set<string>;
    /**
     * 
     * @type {Set<string>}
     * @memberof UserPermissionRestriction
     */
    RestrictedToProjectIds?: Set<string>;
    /**
     * 
     * @type {Set<string>}
     * @memberof UserPermissionRestriction
     */
    RestrictedToTenantIds?: Set<string>;
    /**
     * 
     * @type {string}
     * @memberof UserPermissionRestriction
     */
    SpaceId?: string;
}
