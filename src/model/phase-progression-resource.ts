// Octopus REST API v2021.2.1290

import { PhaseDeploymentResource } from "./phase-deployment-resource";
import { PhaseProgress } from "./phase-progress";

/**
 *
 * @export
 * @interface PhaseProgressionResource
 */
export interface PhaseProgressionResource {
  /**
   *
   * @type {Set<string>}
   * @memberof PhaseProgressionResource
   */
  AutomaticDeploymentTargets?: Set<string>;
  /**
   *
   * @type {boolean}
   * @memberof PhaseProgressionResource
   */
  Blocked?: boolean;
  /**
   *
   * @type {Array<PhaseDeploymentResource>}
   * @memberof PhaseProgressionResource
   */
  Deployments?: Array<PhaseDeploymentResource>;
  /**
   *
   * @type {string}
   * @memberof PhaseProgressionResource
   */
  Id?: string;
  /**
   *
   * @type {boolean}
   * @memberof PhaseProgressionResource
   */
  IsOptionalPhase?: boolean;
  /**
   *
   * @type {number}
   * @memberof PhaseProgressionResource
   */
  MinimumEnvironmentsBeforePromotion?: number;
  /**
   *
   * @type {string}
   * @memberof PhaseProgressionResource
   */
  Name?: string;
  /**
   *
   * @type {Set<string>}
   * @memberof PhaseProgressionResource
   */
  OptionalDeploymentTargets?: Set<string>;
  /**
   *
   * @type {PhaseProgress}
   * @memberof PhaseProgressionResource
   */
  Progress?: PhaseProgress;
}
