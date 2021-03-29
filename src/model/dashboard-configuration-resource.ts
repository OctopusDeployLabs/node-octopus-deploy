// Octopus REST API v2020.6.4722


/**
 * 
 * @export
 * @interface DashboardConfigurationResource
 */
export interface DashboardConfigurationResource {
    /**
     * 
     * @type {string}
     * @memberof DashboardConfigurationResource
     */
    Id?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof DashboardConfigurationResource
     */
    IncludedEnvironmentIds?: Set<string>;
    /**
     * 
     * @type {Set<string>}
     * @memberof DashboardConfigurationResource
     */
    IncludedProjectGroupIds?: Set<string>;
    /**
     * 
     * @type {Set<string>}
     * @memberof DashboardConfigurationResource
     */
    IncludedProjectIds?: Set<string>;
    /**
     * 
     * @type {Set<string>}
     * @memberof DashboardConfigurationResource
     */
    IncludedTenantIds?: Set<string>;
    /**
     * 
     * @type {Set<string>}
     * @memberof DashboardConfigurationResource
     */
    IncludedTenantTags?: Set<string>;
    /**
     * 
     * @type {string}
     * @memberof DashboardConfigurationResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof DashboardConfigurationResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof DashboardConfigurationResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof DashboardConfigurationResource
     */
    ProjectLimit?: number;
    /**
     * 
     * @type {string}
     * @memberof DashboardConfigurationResource
     */
    SpaceId?: string;
}
