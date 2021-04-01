// Octopus REST API v2021.2.1290

import { DeploymentResource } from "./deployment-resource";
import { TaskResource } from "./task-resource";

/**
 *
 * @export
 * @interface PhaseDeploymentResource
 */
export interface PhaseDeploymentResource {
  /**
   *
   * @type {DeploymentResource}
   * @memberof PhaseDeploymentResource
   */
  Deployment?: DeploymentResource;
  /**
   *
   * @type {TaskResource}
   * @memberof PhaseDeploymentResource
   */
  Task?: TaskResource;
}
