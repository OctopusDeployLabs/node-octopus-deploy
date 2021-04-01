// Octopus REST API v2021.2.1290

import { DashboardEnvironmentResource } from "./dashboard-environment-resource";
import { DashboardItemResource } from "./dashboard-item-resource";
import { DashboardProjectGroupResource } from "./dashboard-project-group-resource";
import { DashboardProjectResource } from "./dashboard-project-resource";
import { DashboardTenantResource } from "./dashboard-tenant-resource";

/**
 *
 * @export
 * @interface DashboardResource
 */
export interface DashboardResource {
  /**
   *
   * @type {Array<DashboardEnvironmentResource>}
   * @memberof DashboardResource
   */
  Environments?: Array<DashboardEnvironmentResource>;
  /**
   *
   * @type {string}
   * @memberof DashboardResource
   */
  Id?: string;
  /**
   *
   * @type {boolean}
   * @memberof DashboardResource
   */
  IsFiltered?: boolean;
  /**
   *
   * @type {Array<DashboardItemResource>}
   * @memberof DashboardResource
   */
  Items?: Array<DashboardItemResource>;
  /**
   *
   * @type {string}
   * @memberof DashboardResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof DashboardResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof DashboardResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {Array<DashboardItemResource>}
   * @memberof DashboardResource
   */
  PreviousItems?: Array<DashboardItemResource>;
  /**
   *
   * @type {Array<DashboardProjectGroupResource>}
   * @memberof DashboardResource
   */
  ProjectGroups?: Array<DashboardProjectGroupResource>;
  /**
   *
   * @type {number}
   * @memberof DashboardResource
   */
  ProjectLimit?: number;
  /**
   *
   * @type {Array<DashboardProjectResource>}
   * @memberof DashboardResource
   */
  Projects?: Array<DashboardProjectResource>;
  /**
   *
   * @type {Array<DashboardTenantResource>}
   * @memberof DashboardResource
   */
  Tenants?: Array<DashboardTenantResource>;
}
