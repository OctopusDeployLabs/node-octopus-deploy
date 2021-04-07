// Octopus REST API v2021.2.1387

import { DeploymentActionPackageResource } from "./deployment-action-package-resource";

/**
 *
 * @export
 * @interface ReleaseCreationStrategyResource
 */
export interface ReleaseCreationStrategyResource {
  [key: string]: object | any;

  /**
   *
   * @type {string}
   * @memberof ReleaseCreationStrategyResource
   */
  ChannelId?: string;
  /**
   *
   * @type {DeploymentActionPackageResource}
   * @memberof ReleaseCreationStrategyResource
   */
  ReleaseCreationPackage?: DeploymentActionPackageResource;
}
