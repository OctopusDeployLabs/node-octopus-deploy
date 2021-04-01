// Octopus REST API v2021.2.1290

import { DeploymentActionPackageResource } from "./deployment-action-package-resource";

/**
 *
 * @export
 * @interface VersioningStrategyResource
 */
export interface VersioningStrategyResource {
  [key: string]: object | any;

  /**
   *
   * @type {DeploymentActionPackageResource}
   * @memberof VersioningStrategyResource
   */
  DonorPackage?: DeploymentActionPackageResource;
  /**
   *
   * @type {string}
   * @memberof VersioningStrategyResource
   */
  Template?: string;
}
