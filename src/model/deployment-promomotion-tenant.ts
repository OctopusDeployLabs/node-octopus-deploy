// Octopus REST API v2021.2.1290

import { DeploymentPromotionTarget } from "./deployment-promotion-target";

/**
 *
 * @export
 * @interface DeploymentPromomotionTenant
 */
export interface DeploymentPromomotionTenant {
  /**
   *
   * @type {string}
   * @memberof DeploymentPromomotionTenant
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentPromomotionTenant
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentPromomotionTenant
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof DeploymentPromomotionTenant
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof DeploymentPromomotionTenant
   */
  Name?: string;
  /**
   *
   * @type {Array<DeploymentPromotionTarget>}
   * @memberof DeploymentPromomotionTenant
   */
  PromoteTo?: Array<DeploymentPromotionTarget>;
}
