// Octopus REST API v2021.2.1290

/**
 *
 * @export
 * @interface DeploymentPromotionTarget
 */
export interface DeploymentPromotionTarget {
  /**
   *
   * @type {string}
   * @memberof DeploymentPromotionTarget
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentPromotionTarget
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentPromotionTarget
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof DeploymentPromotionTarget
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof DeploymentPromotionTarget
   */
  Name?: string;
}
