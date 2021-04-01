// Octopus REST API v2021.2.1290

import { SkipMachineBehavior } from "./skip-machine-behavior";

/**
 *
 * @export
 * @interface DeploymentConnectivityPolicy
 */
export interface DeploymentConnectivityPolicy {
  /**
   *
   * @type {boolean}
   * @memberof DeploymentConnectivityPolicy
   */
  AllowDeploymentsToNoTargets?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof DeploymentConnectivityPolicy
   */
  ExcludeUnhealthyTargets?: boolean;
  /**
   *
   * @type {SkipMachineBehavior}
   * @memberof DeploymentConnectivityPolicy
   */
  SkipMachineBehavior?: SkipMachineBehavior;
  /**
   *
   * @type {Set<string>}
   * @memberof DeploymentConnectivityPolicy
   */
  TargetRoles?: Set<string>;
}
