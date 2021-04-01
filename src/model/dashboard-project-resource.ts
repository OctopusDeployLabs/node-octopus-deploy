// Octopus REST API v2021.2.1290

import { TenantedDeploymentMode } from "./tenanted-deployment-mode";

/**
 *
 * @export
 * @interface DashboardProjectResource
 */
export interface DashboardProjectResource {
  /**
   *
   * @type {boolean}
   * @memberof DashboardProjectResource
   */
  CanPerformUntenantedDeployment?: boolean;
  /**
   *
   * @type {Set<string>}
   * @memberof DashboardProjectResource
   */
  EnvironmentIds?: Set<string>;
  /**
   *
   * @type {string}
   * @memberof DashboardProjectResource
   */
  Id?: string;
  /**
   *
   * @type {boolean}
   * @memberof DashboardProjectResource
   */
  IsDisabled?: boolean;
  /**
   *
   * @type {string}
   * @memberof DashboardProjectResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof DashboardProjectResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof DashboardProjectResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof DashboardProjectResource
   */
  Name?: string;
  /**
   *
   * @type {string}
   * @memberof DashboardProjectResource
   */
  ProjectGroupId?: string;
  /**
   *
   * @type {string}
   * @memberof DashboardProjectResource
   */
  Slug?: string;
  /**
   *
   * @type {TenantedDeploymentMode}
   * @memberof DashboardProjectResource
   */
  TenantedDeploymentMode?: TenantedDeploymentMode;
}
