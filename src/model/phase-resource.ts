// Octopus REST API v2021.2.1290

import { RetentionPeriod } from "./retention-period";

/**
 *
 * @export
 * @interface PhaseResource
 */
export interface PhaseResource {
  /**
   *
   * @type {Set<string>}
   * @memberof PhaseResource
   */
  AutomaticDeploymentTargets?: Set<string>;
  /**
   *
   * @type {string}
   * @memberof PhaseResource
   */
  Id?: string;
  /**
   *
   * @type {boolean}
   * @memberof PhaseResource
   */
  IsOptionalPhase?: boolean;
  /**
   *
   * @type {number}
   * @memberof PhaseResource
   */
  MinimumEnvironmentsBeforePromotion?: number;
  /**
   *
   * @type {string}
   * @memberof PhaseResource
   */
  Name?: string;
  /**
   *
   * @type {Set<string>}
   * @memberof PhaseResource
   */
  OptionalDeploymentTargets?: Set<string>;
  /**
   *
   * @type {RetentionPeriod}
   * @memberof PhaseResource
   */
  ReleaseRetentionPolicy?: RetentionPeriod;
  /**
   *
   * @type {RetentionPeriod}
   * @memberof PhaseResource
   */
  TentacleRetentionPolicy?: RetentionPeriod;
}
