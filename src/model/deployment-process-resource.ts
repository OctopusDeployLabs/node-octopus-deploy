// Octopus REST API v2021.2.1290

import { DeploymentStepResource } from "./deployment-step-resource";

/**
 *
 * @export
 * @interface DeploymentProcessResource
 */
export interface DeploymentProcessResource {
  /**
   *
   * @type {string}
   * @memberof DeploymentProcessResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentProcessResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentProcessResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentProcessResource
   */
  LastSnapshotId?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof DeploymentProcessResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof DeploymentProcessResource
   */
  ProjectId?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentProcessResource
   */
  SpaceId?: string;
  /**
   *
   * @type {Array<DeploymentStepResource>}
   * @memberof DeploymentProcessResource
   */
  Steps?: Array<DeploymentStepResource>;
  /**
   *
   * @type {number}
   * @memberof DeploymentProcessResource
   */
  Version: number;
}
