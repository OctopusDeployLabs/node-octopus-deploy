// Octopus REST API v2021.2.1290

/**
 *
 * @export
 * @interface DashboardTenantResource
 */
export interface DashboardTenantResource {
  /**
   *
   * @type {string}
   * @memberof DashboardTenantResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof DashboardTenantResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof DashboardTenantResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof DashboardTenantResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof DashboardTenantResource
   */
  Name?: string;
  /**
   *
   * @type {{ [key: string]: Set<string>; }}
   * @memberof DashboardTenantResource
   */
  ProjectEnvironments?: { [key: string]: Set<string> };
  /**
   *
   * @type {Set<string>}
   * @memberof DashboardTenantResource
   */
  TenantTags?: Set<string>;
}
